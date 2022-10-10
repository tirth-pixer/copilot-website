import Layout from "../../components/layout";
import { useEffect, useMemo, useState, useCallback } from "react";
import Productivity from "../../components/productivity/productivity";
import { getAllHelpCategory } from "../../lib/contentful-helpCategory";
import Navbar from "../../components/navbar/navbar";
import Link from "next/link";
import {
  Container,
  LinearBg,
  ScFeatureHeading,
  ScFeaturePara,
  ScMainBlock,
  SearchForm,
  SearchIcon,
  SearchInput,
} from "../../styles/commonStyles";
import { trackAnalyticActivity } from "../../services/analyticsService";
import Image from "next/image";
import { getAllHelps } from "../../lib/contentful-help";
import { ScHeroSection } from "../../styles/commonStyles";
import {
  HelpContainer,
  HelpContent,
  HelpIcon,
  HelpList,
  HelpListItem,
} from "../../styles/helpStyles";
import { NextSeo } from "next-seo";

export default function Help({ allPosts, allHelpPosts }) {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  let timeout;

  useEffect(() => {
    trackAnalyticActivity("LP: help center view");
  }, []);

  const searchQuery = useCallback(
    (value) => {
      const result = allHelpPosts?.filter((item) =>
        item?.title?.toLowerCase().includes(value?.toLowerCase())
      );
      trackAnalyticActivity("LP: help search", {
        query: value,
        count: result?.length,
      });
      if (result) setSearchResult(result);
    },
    [allHelpPosts]
  );

  const onSeachQueryChange = useCallback(
    (e) => {
      const value = e.target.value;
      setQuery(value);

      if (value) {
        if (!isSearch) setIsSearch(true);
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          searchQuery(value);
        }, 300);
      } else {
        if (isSearch) setIsSearch(false);
        setSearchResult([]);
      }
    },
    [query, setSearchResult]
  );

  const onSubmitSeachQuery = useCallback((e) => {
    e.preventDefault();
  }, []);

  const displayListView = useMemo(() => {
    let postList;
    if (isSearch) {
      postList = searchResult;
    } else {
      postList = allPosts;
    }
    return postList?.map((item, index) => {
      return (
        <>
          <HelpListItem key={`helpcategorylist_index${index}`}>
            <Link
              href={
                isSearch
                  ? `/help/${item?.category?.slug}/${item?.slug}`
                  : `/help/${item?.slug}`
              }
            >
              <a>
                <HelpIcon>
                  <Image
                    src={item?.icon?.url}
                    alt="help-cms"
                    width={60}
                    height={60}
                  ></Image>
                </HelpIcon>
                <HelpContent>
                  <h2> {item?.title}</h2>
                  <p>{item?.description}</p>
                </HelpContent>
              </a>
            </Link>
          </HelpListItem>
        </>
      );
    });
  }, [allPosts, searchResult, isSearch]);

  return (
    <>
      <NextSeo
        title="Need quick assistance for copilot Sales CRM?"
        description="We understand that it's challenging to cope up with anything new, and so we have designed a few handy options to make your copilot CRM sexperience lively!"
      />
      <Layout>
        <Navbar />
        <ScHeroSection>
          <LinearBg className="help" />
          <Container>
            <ScFeatureHeading>Awesome Features</ScFeatureHeading>
            <ScFeaturePara>
              copilot promises to boost your sales journey with super extensive
              yet straightforward solutions.
            </ScFeaturePara>
            <SearchForm>
              <SearchInput placeholder="Search about your question!"></SearchInput>
              <SearchIcon type="submit" value="Search"></SearchIcon>
            </SearchForm>
          </Container>
        </ScHeroSection>
        <ScMainBlock>
          <HelpContainer>
            <HelpList>{displayListView}</HelpList>
          </HelpContainer>
        </ScMainBlock>
        <Productivity />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllHelpCategory(preview)) ?? [];
  const allHelpPosts = (await getAllHelps(preview)) ?? [];
  return {
    props: { preview, allPosts, allHelpPosts },
  };
}
