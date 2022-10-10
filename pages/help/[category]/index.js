import { useMemo } from "react";
import Layout from "../../../components/layout";
import Navbar from "../../../components/navbar/navbar";
import { useEffect } from "react";
import { NextSeo } from "next-seo";
import Productivity from "../../../components/productivity/productivity";
import { getHelpCategoryTitleWithSlug } from "../../../lib/contentful-helpCategory";
import { getAllHelps } from "../../../lib/contentful-help";
import Link from "next/link";
import {
  Container,
  LinearBg,
  ScFeatureHeading,
  ScFeaturePara,
  ScHeroSection,
  ScMainBlock,
} from "../../../styles/commonStyles";
import {
  HelpCategoryItem,
  HelpCategoryShow,
  HelpContainer,
  HelpContent,
  HelpIcon,
  HelpList,
  HelpListItem,
  Slash,
} from "../../../styles/helpStyles";
import { trackAnalyticActivity } from "../../../services/analyticsService";
import Image from "next/image";

export default function NewIndex({ allPostsOfSlug: allPosts }) {
  const helpCategoryDetail = allPosts?.[0]?.category;

  useEffect(() => {
    trackAnalyticActivity("LP: help category view ", {
      name: helpCategoryDetail?.title,
    });
  }, []);

  const helpListView = useMemo(() => {
    return allPosts?.map((item, index) => {
      return (
        <>
          <HelpListItem key={`helplist_index_${index}`}>
            <Link href={`/help/${item?.category?.slug}/${item?.slug}`}>
              <a>
                <HelpIcon>
                  <Image
                    src={helpCategoryDetail?.icon?.url}
                    alt="help-icon"
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
  }, [allPosts]);

  return (
    <>
      <NextSeo title={`${helpCategoryDetail?.title} - copilot Help`} />
      <Layout>
        <Navbar />
        <ScHeroSection>
          <LinearBg className="help" />
          <Container>
            <ScFeatureHeading>{helpCategoryDetail?.title}</ScFeatureHeading>
            <ScFeaturePara>
              Handy guides to manage your people and accounts
            </ScFeaturePara>
            <HelpCategoryShow>
              <HelpCategoryItem>
                <Link href="/help">
                  <a>Help Center</a>
                </Link>
                <Slash>/</Slash>
                <span>{helpCategoryDetail?.title}</span>
              </HelpCategoryItem>
            </HelpCategoryShow>
          </Container>
        </ScHeroSection>
        <ScMainBlock>
          <HelpContainer>
            <HelpList>{helpListView}</HelpList>
          </HelpContainer>
        </ScMainBlock>
        <Productivity />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const allPosts = (await getAllHelps(params?.slug, preview)) ?? {};
  const allPostsOfSlug = allPosts?.filter(
    (item) => item?.category?.slug === params?.category
  );
  return {
    props: { preview, allPostsOfSlug },
  };
}

export async function getStaticPaths() {
  const allPosts = await getHelpCategoryTitleWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/help/${slug}`) ?? [],
    fallback: true,
  };
}
