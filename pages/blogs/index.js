// TODO: add pagination @kanji
// TODO: add date format on each item
// TODO: bring category on list item

import Layout from "/components/layout";
import Link from "next/link";
import moment from "moment";
import { NextSeo } from "next-seo";
import { useState, useCallback, useMemo } from "react";
import { getAllBlogs } from "../../lib/contentful-blogs";
import Navbar from "../../components/navbar/navbar";
import Productivity from "../../components/productivity/productivity";
import Image from "next/image";
import {
  BlogCategoryHeading,
  BlogHeader,
  BlogHeroBlock,
  BlogHeroHeading,
  BlogLeft,
  BlogPara,
  BlogRight,
  BlogSlideMain,
  BlogSubHeading,
  BlogSubPara,
  BlogTop,
  BlogWrap,
  BlogWrapperBlock,
  CateBlock,
  CateCard,
  CategoryDetail,
  CategoryWrap,
  CateHeading,
  NextBtn,
  PreviousBtn,
  SliderBtnBlock,
  SliderindexSpan,
  ViewAllLink,
} from "../../styles/blogStyles";
import {
  BlogSpan,
  CategoryCard,
  CategoryCardHeading,
  CategoryContentBlock,
  CategoryImg,
  Circle,
  Container,
  FcfeatureWrap,
  LinearBg,
  PanelBlock,
  PrimaryButton,
  PublishDate,
  ScHeroSection,
} from "../../styles/commonStyles";
import useMobileDevice from "../../hooks/useMobileDevice";
import Testimonial from "../../components/testimonial/testimonial";

export default function Blogs({
  allPosts,
  currentPage,
  allCategory,
  Posts: allPost,
}) {
  const mobile = useMobileDevice();
  const [activeIndex, setActiveIndex] = useState(0);
  const onNextClick = useCallback(() => {
    if (activeIndex < 5) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  }, [setActiveIndex, activeIndex]);

  const onPrevClick = useCallback(() => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(5);
    }
  }, [setActiveIndex, activeIndex]);

  const blogSlideView = useMemo(() => {
    return allPost?.slice(0, 6)?.map((item, index) => {
      let computedClass = index === activeIndex ? "slides active" : "slides";
      return (
        <BlogHeroBlock className={computedClass}>
          <BlogLeft>
            <Image
              src={item?.banner?.url}
              width={480}
              height={340}
              alt="blog-image"
              layout={mobile && "responsive"}
              className="blog-image"
            />
          </BlogLeft>
          <BlogRight>
            <PanelBlock>
              {item?.categoryCollection?.items?.[0]?.name && (
                <>
                  <BlogSpan>
                    <Link
                      href={`/blogs/category/${item?.categoryCollection?.items?.[0]?.slug}`}
                    >
                      <a>{item?.categoryCollection?.items?.[0]?.name}</a>
                    </Link>
                  </BlogSpan>
                  <Circle></Circle>
                </>
              )}
              <BlogSpan>{moment(item?.date).format("MMMM D, YYYY")}</BlogSpan>
              {item?.reader && (
                <>
                  <Circle></Circle>
                  <BlogSpan>{item?.reader} min read</BlogSpan>
                </>
              )}
            </PanelBlock>
            <BlogSubHeading>{item?.title}</BlogSubHeading>
            <BlogSubPara>{item?.description}</BlogSubPara>
            <PrimaryButton>
              <Link href={`/blogs/${item?.slug}`}>
                <a>Read More</a>
              </Link>
            </PrimaryButton>
            <SliderBtnBlock>
              <PreviousBtn onClick={onPrevClick}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.21445 8.99993L10.7227 4.49243L11.7832 5.55293L8.3332 9.00293L11.7832 12.4477L10.7227 13.5082L6.21445 8.99993Z"
                    fill="#3C7CE8"
                  />
                </svg>
              </PreviousBtn>
              <SliderindexSpan>
                <span>{activeIndex + 1}</span> of 6
              </SliderindexSpan>
              <NextBtn onClick={onNextClick}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7855 8.99993L7.2773 4.49243L6.2168 5.55293L9.6668 9.00293L6.2168 12.4477L7.2773 13.5082L11.7855 8.99993Z"
                    fill="white"
                  />
                </svg>
              </NextBtn>
            </SliderBtnBlock>
          </BlogRight>
        </BlogHeroBlock>
      );
    });
  }, [allPost, onPrevClick, onNextClick]);

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
        <BlogWrapperBlock>
          <Container>
            {allCategory?.map((category, categoryIndex) => {
              return (
                <BlogWrap key={`${category?.name}_index_${categoryIndex}`}>
                  <BlogHeader>
                    <BlogCategoryHeading>{category?.name}</BlogCategoryHeading>
                    <ViewAllLink>
                      <Link href={`/blogs/category/${category?.slug}`}>
                        <a>
                          <span>View All</span>
                          <Image
                            src="/images/blue-arrow.svg"
                            width={10}
                            height={10}
                            alt="arrow-icon"
                          ></Image>
                        </a>
                      </Link>
                    </ViewAllLink>
                  </BlogHeader>
                  <CategoryWrap>
                    {allPost
                      ?.filter((item) =>
                        item?.categoryCollection?.items.some(
                          (categoryItem) => categoryItem?.name == category?.name
                        )
                      )
                      .slice(0, 3)
                      .map((item, index) => {
                        const categoryItem = item?.categoryCollection?.items[0];
                        return (
                          <CategoryCard
                            key={`${categoryItem?.name}_index_${index}`}
                          >
                            <Link href={`/blogs/${item?.slug}`}>
                              <a>
                                <CategoryImg>
                                  <Image
                                    src={item?.banner?.url ?? ""}
                                    width={324}
                                    height={200}
                                    alt="category-image"
                                    layout="responsive"
                                  ></Image>
                                </CategoryImg>
                                <CategoryContentBlock>
                                  <PanelBlock>
                                    <BlogSpan>
                                      <Link
                                        href={`/blogs/category/${category?.slug}`}
                                      >
                                        <a>{category?.name}</a>
                                      </Link>
                                    </BlogSpan>
                                    {item?.reader && (
                                      <>
                                        <Circle></Circle>
                                        <BlogSpan>
                                          {item?.reader} min read
                                        </BlogSpan>
                                      </>
                                    )}
                                  </PanelBlock>
                                  <CategoryCardHeading>
                                    {item?.title}
                                  </CategoryCardHeading>
                                  <PublishDate>
                                    {moment(item?.date).format("MMMM D, YYYY")}
                                  </PublishDate>
                                </CategoryContentBlock>
                              </a>
                            </Link>
                          </CategoryCard>
                        );
                      })}
                  </CategoryWrap>
                </BlogWrap>
              );
            })}
          </Container>
          <FcfeatureWrap className="dnone">
            <Container>
              <CategoryDetail>
                <CateHeading>What is copilot?</CateHeading>
                <CateBlock>
                  <CateCard lightblue={true}>
                    <Image
                      src="/images/real-state.svg"
                      width={50}
                      height={50}
                      alt="realstate-icon"
                    />
                    <h3>Real Estate</h3>
                    <p>
                      Real estate is property consisting of land or buildings.
                    </p>
                  </CateCard>
                  <CateCard pink={true}>
                    <Image
                      src="/images/ecommerce.svg"
                      width={50}
                      height={50}
                      alt="realstate-icon"
                    />
                    <h3>Ecommerce</h3>
                    <p>
                      Commercial transactions conducted electronically on the
                      internet.
                    </p>
                  </CateCard>
                  <CateCard lightGreen={true}>
                    <Image
                      src="/images/saas.svg"
                      width={50}
                      height={50}
                      alt="realstate-icon"
                    />
                    <h3>SaaS</h3>
                    <p>
                      Their cloud-based SaaS platform helps IT professionals
                    </p>
                  </CateCard>
                  <CateCard orange={true}>
                    <Image
                      src="/images/law-firm.svg"
                      width={50}
                      height={50}
                      alt="realstate-icon"
                    />
                    <h3>Law Firm</h3>
                    <p>A business that is engaged in the practice of law.</p>
                  </CateCard>
                  <CateCard darkgreen={true}>
                    <Image
                      src="/images/small-business.svg"
                      width={50}
                      height={50}
                      alt="realstate-icon"
                    />
                    <h3>Small Business</h3>
                    <p>
                      Small business is defined as a privately owned corporation
                    </p>
                  </CateCard>
                </CateBlock>
              </CategoryDetail>
            </Container>
          </FcfeatureWrap>
        </BlogWrapperBlock>
        <Productivity />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const Posts = (await getAllBlogs(preview)) ?? [];
  const currentPage = 1;
  const perPage = 9;
  var nextPage = (currentPage + 1).toString();
  const allPosts = Posts.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  const getAllCategory = function (allPosts) {
    var tags = [];
    allPosts?.map((item, index) => {
      item?.categoryCollection?.items?.map((tag) => {
        if (tag?.name) tags.push({ name: tag?.name, slug: tag?.slug });
      });
    });
    return [...new Map(tags?.map((item) => [item["name"], item])).values()];
  };
  const allCategory = getAllCategory(Posts);

  return {
    props: { preview, allPosts, currentPage, allCategory, Posts },
  };
}
