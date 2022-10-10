// TODO: add pagination @kanji
// TODO: add date format on each item
// TODO: bring category on list item

import Layout from "/components/layout";
import { NextSeo } from "next-seo";
import { getAllBlogs } from "../../lib/contentful-blogs";
import Navbar from "../../components/navbar/navbar";
import {
  BlogHeroHeading,
  BlogPara,
  BlogSlideMain,
  BlogTop,
} from "../../styles/blogStyles";
import { Container, LinearBg, ScHeroSection } from "../../styles/commonStyles";

export default function Jobs({ allPosts }) {
  return (
    <>
      <NextSeo
        title="copilot blogs to keep you up with the  Sales Tactics!"
        description="Sale is a prominent part of any business & nothing can be better than getting tried tactics for it. So get all that you want to know about sales from our Blogs."
      />
      <Layout>
        <Navbar />
        <ScHeroSection>
          <LinearBg />
          <Container>
            <BlogTop>
              <BlogHeroHeading>The copilot Blog</BlogHeroHeading>
              <BlogPara>
                Tips and ideas to help you delight your customers
              </BlogPara>
            </BlogTop>
            <BlogSlideMain>{blogSlideView}</BlogSlideMain>
          </Container>
        </ScHeroSection>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const Posts = (await getAllBlogs(preview)) ?? [];

  return {
    props: { preview, allPosts, currentPage, allCategory, Posts },
  };
}
