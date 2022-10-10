// TODO: fix body render issue ref: nextjs contentful example project

import { useRouter } from "next/router";
import Layout from "/components/layout";
import PageNotFound from "../404";
import moment from "moment";
import { NextSeo } from "next-seo";
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Link from "next/link";
import Navbar from "../../components/navbar/navbar";
import Productivity from "../../components/productivity/productivity";
import Testimonial from "../../components/testimonial/testimonial";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
} from "../../lib/contentful-blogs";
import {
  BlogDetailHeading,
  BlogDetailLeft,
  BlogDetailRight,
  BlogHeroSection,
  BlogMainBlock,
  BlogOverLayBlock,
  BlogProgressCard,
  BlogSocialItem,
  BlogSocialList,
  BlogWrapper,
  ImageBlock,
  TableContent,
  TableContentItem,
  TableContentList,
} from "../../styles/blogStyles";
import Image from "next/image";
import {
  BlogBreadCum,
  BreadCumLink,
  Container,
  FcfeatureBlock,
  LinearBg,
  RichTextBlock,
  ScMainBlock,
  SlashBlock,
} from "../../styles/commonStyles";
import slugify from "slugify";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";
import copy from "copy-to-clipboard";
import Scrollspy from "react-scrollspy";

const customMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
});
const CURRENT_PAGE_URL = global.window?.location?.href;

export default function BlogDetails({ blogPost: post }) {
  const [templateClass, setTemplateClass] = useState([]);

  const onClickTableItem = useCallback(
    (ItemId) => {
      let newtamplateClassList =
        JSON.parse(JSON.stringify(templateClass)) ?? [];
      // upgrade other progress item to done
      newtamplateClassList?.forEach((item, index) => {
        newtamplateClassList[index] = {
          ...item,
          class: "done",
        };
      });

      const index = newtamplateClassList?.findIndex(
        (item) => item?.id === ItemId
      );

      if (index === -1) {
        const newItem = {
          id: ItemId,
          class: "progress",
        };
        newtamplateClassList?.push(newItem);
      }
      setTemplateClass(newtamplateClassList);
    },
    [templateClass, setTemplateClass]
  );

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        var newNode = children[0];
        while (newNode?.type) {
          newNode = newNode?.props?.children;
        }
        return <h2 id={slugify(newNode?.toLowerCase())}>{children}</h2>;
      },

      [BLOCKS.HEADING_3]: (node, children) => {
        var newNode = children[0];
        while (newNode?.type) {
          newNode = newNode?.props?.children;
        }
        return <h3 id={slugify(newNode?.toLowerCase())}>{children}</h3>;
      },
    },
  };

  const router = useRouter();
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  const tableContents = useMemo(() => {
    const newList = [];
    post?.body?.json?.content?.map((item) => {
      if (item?.nodeType === "heading-2" && item?.content?.[0]?.value) {
        newList?.push(item?.content?.[0]?.value);
      }
    });
    if (newList.length === 0) {
      post?.body?.json?.content?.map((item) => {
        if (item?.nodeType === "heading-3" && item?.content?.[0]?.value) {
          newList?.push(item?.content?.[0]?.value);
        }
      });
    }
    return newList;
  }, [post?.body?.json?.content]);

  const onCopyToClipboard = () => {
    copy(CURRENT_PAGE_URL);
  };

  const tableContentListView = useMemo(() => {
    return tableContents?.map((item, index) => {
      const indexOfTemplateClass = templateClass?.findIndex(
        (item) => item?.id === `tableItem_${index}`
      );
      return (
        <TableContentItem
          key={`tableContent_index_${index}`}
          className={templateClass?.[indexOfTemplateClass]?.class ?? ""}
        >
          <Link href={`#${slugify(item?.toLowerCase())}`}>
            <a
              onClick={() => {
                onClickTableItem(`tableItem_${index}`);
              }}
            >
              {item}
            </a>
          </Link>
        </TableContentItem>
      );
    });
  }, [tableContents, templateClass, onClickTableItem]);

  const scrollyspyView = useMemo(() => {
    const items = tableContents?.map((item) => slugify(item?.toLowerCase()));
    return (
      <Scrollspy
        items={items}
        offset={100}
        className={"tableUL"}
        onUpdate={(item) =>
          onClickTableItem(
            `tableItem_${items?.findIndex((i) => i === item?.id)}`
          )
        }
      >
        {tableContentListView}
      </Scrollspy>
    );
  }, [tableContents, onClickTableItem, tableContentListView]);

  return (
    <>
      {!post?.title ? (
        <PageNotFound></PageNotFound>
      ) : (
        <>
          {router.isFallback ? (
            <div>Loading…</div>
          ) : (
            <>
              <NextSeo
                title={`${post?.title} | copilot`}
                description={post?.description}
              />
            </>
          )}
          <Layout>
            <BlogMainBlock>
              <LinearBg className="blogdetail" />
              <Navbar BlogDetails={true} />
              <BlogHeroSection>
                <ImageBlock>
                  <Image
                    src={post?.banner?.url ?? ""}
                    layout="fill"
                    objectFit="cover"
                    alt={post?.banner?.title ?? ""}
                  ></Image>
                </ImageBlock>
                <BlogOverLayBlock></BlogOverLayBlock>
              </BlogHeroSection>
              <Container>
                <BlogBreadCum>
                  <BreadCumLink>
                    <Link href="/blogs">
                      <a>blog</a>
                    </Link>
                  </BreadCumLink>
                  {post?.categoryCollection?.items?.[0]?.name && (
                    <>
                      <SlashBlock>/</SlashBlock>
                      <BreadCumLink>
                        <span>
                          {post?.categoryCollection?.items?.[0]?.name}
                        </span>
                      </BreadCumLink>
                    </>
                  )}
                </BlogBreadCum>
                <BlogDetailHeading>{post?.title}</BlogDetailHeading>
                <BlogSocialList>
                  <BlogSocialItem>
                    <LinkedinShareButton url={CURRENT_PAGE_URL ?? ""}>
                      <a>
                        <Image
                          src="/images/blog_linkedin.svg"
                          width="100%"
                          height="100%"
                          alt="linkedin_Icon"
                        />
                      </a>
                    </LinkedinShareButton>
                  </BlogSocialItem>
                  <BlogSocialItem>
                    <FacebookShareButton url={CURRENT_PAGE_URL ?? ""}>
                      <a>
                        <Image
                          src="/images/blog_facebook.svg"
                          width="100%"
                          height="100%"
                          alt="facebook_Icon"
                        />
                      </a>
                    </FacebookShareButton>
                  </BlogSocialItem>
                  <BlogSocialItem>
                    <TwitterShareButton url={CURRENT_PAGE_URL ?? ""}>
                      <a>
                        <Image
                          src="/images/blog_twitter.svg"
                          width="100%"
                          height="100%"
                          alt="twitter_Icon"
                        />
                      </a>
                    </TwitterShareButton>
                  </BlogSocialItem>
                  <BlogSocialItem onClick={onCopyToClipboard}>
                    <a>
                      <Image
                        src="/images/blog_link.svg"
                        width="100%"
                        height="100%"
                        alt="link_Icon"
                      />
                    </a>
                  </BlogSocialItem>
                </BlogSocialList>
                <ScMainBlock>
                  <BlogWrapper>
                    <BlogDetailLeft>
                      <RichTextBlock>
                        {documentToReactComponents(post?.body?.json, options)}
                      </RichTextBlock>
                    </BlogDetailLeft>
                    <BlogDetailRight>
                      <BlogProgressCard>
                        <TableContent>table of content</TableContent>
                        {scrollyspyView}
                      </BlogProgressCard>
                    </BlogDetailRight>
                  </BlogWrapper>
                </ScMainBlock>
              </Container>
              <Productivity />
              <Testimonial />
            </BlogMainBlock>
          </Layout>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const blogPost = (await getPostAndMorePosts(params?.slug, preview)) || {};
  return {
    props: {
      preview,
      blogPost,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/blogs/${slug}`) ?? [],
    fallback: true,
  };
}
