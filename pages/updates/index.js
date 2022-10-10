import Layout from "/components/layout";
import { useMemo } from "react";
import moment from "moment";
import Navbar from "../../components/navbar/navbar";
import { getAllUpdates } from "../../lib/contentful-updates";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  LinearBg,
  RichTextBlock,
  ScFeatureHeading,
  ScFeaturePara,
  ScHeroSection,
} from "../../styles/commonStyles";
import {
  LinkBlock,
  UpdateContainer,
  UpdateWrapper,
  UpdateHeader,
  TagList,
  TagItem,
  PublishSpan,
  UpdateContent,
  UpdateHeading,
  UpdatePara,
  UpdateImage,
} from "../../styles/updateStyles";
import { NextSeo } from "next-seo";

export default function Updates({ allPosts }) {
  const updatesListView = useMemo(() => {
    return allPosts.map((item, index) => {
      return (
        <>
          <UpdateWrapper>
            <UpdateHeader>
              <TagList>
                {item?.tags?.map((item, index) => {
                  return <TagItem>{item}</TagItem>;
                })}
              </TagList>
              <PublishSpan>
                {item?.date && moment(item?.date).format("MMMM YYYY")}
              </PublishSpan>
            </UpdateHeader>
            <UpdateContent>
              <UpdateHeading>{item?.title}</UpdateHeading>
              <UpdatePara>{item?.description}</UpdatePara>
              <RichTextBlock>
                {documentToReactComponents(item?.body?.json)}
              </RichTextBlock>
              <UpdateImage>
                <Image
                  src={item?.image?.url}
                  loading="lazy"
                  alt={item?.title}
                  width={682}
                  height={426}
                  layout="responsive"
                  objectFit="cover"
                />
              </UpdateImage>
            </UpdateContent>
          </UpdateWrapper>
        </>
      );
    });
  }, [allPosts]);

  return (
    <>
      <NextSeo
        title="Keep yourself updated with new features of copilot!"
        description="We believe in keeping up with the trends, and so we consistently keep updating copilot features, product enhancements, design updates, and bug fixes here."
      />
      <Layout>
        <Navbar />
        <ScHeroSection>
          <LinearBg className="feature" />
          <Container>
            <ScFeatureHeading>What's new</ScFeatureHeading>
            <ScFeaturePara>
              A rundown of the latest copilot features, product enhancements,
              design updates, and bug fixes.
            </ScFeaturePara>
            <LinkBlock>
              <Link href="">
                {" "}
                <a target="_blank">Subscribe to updates</a>
              </Link>
              <Link href="">
                {" "}
                <a target="_blank">Follow us on Twitter</a>
              </Link>
            </LinkBlock>
          </Container>
        </ScHeroSection>
        <UpdateContainer>{updatesListView}</UpdateContainer>
      </Layout>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllUpdates(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
