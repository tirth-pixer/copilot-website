// TODO: add pagination @kanji
// TODO: add date format on each item
// TODO: bring category on list item

import Layout from "/components/layout";
import Link from "next/link";
import moment from "moment";
import { NextSeo } from "next-seo";
import PageNotFound from "../../404";
import {
  getAllBlogs,
  getAllPostsWithSlug,
} from "../../../lib/contentful-blogs";

import Navbar from "../../../components/navbar/navbar";

export default function Blogs({ allPosts, currentPage, totalPageCount }) {
  return (
    <>
      {allPosts?.length === 0 ? (
        <PageNotFound></PageNotFound>
      ) : (
        <>
          <NextSeo title="blog" description="A short description goes here." />
          <Layout>
            <Navbar />
            <div class="hero-section">
              <div class="linear-bg feature"></div>
              <div class="blog-section wf-section">
                <div class="container w-container">
                  <h1 class="blog-heading">Popular</h1>
                  <div class="blog-main-block">
                    <div class="collection-list-wrapprer w-dyn-list">
                      <div role="list" class="w-dyn-items">
                        {allPosts?.map((item, index) => {
                          return (
                            <div
                              class="blog-test-lc"
                              key={`bloglist_index_${index}`}
                            >
                              <div role="listitem" class="w-dyn-item">
                                <div class="company-blog mb30">
                                  <div class="blog-img-block">
                                    <img
                                      src={item?.banner?.url}
                                      loading="lazy"
                                      alt="Blog Image"
                                      sizes="(max-width: 767px) 92vw, (max-width: 991px) 680px, 300px"
                                      // srcset="https://assets.website-files.com/5d6e0e6372061dc771830f3c/622ae0e3f847ca6285795a22_yura-fresh-n31x0hhnzOs-unsplash-p-800.jpeg 800w, https://assets.website-files.com/5d6e0e6372061dc771830f3c/622ae0e3f847ca6285795a22_yura-fresh-n31x0hhnzOs-unsplash-p-1600.jpeg 1600w, https://assets.website-files.com/5d6e0e6372061dc771830f3c/622ae0e3f847ca6285795a22_yura-fresh-n31x0hhnzOs-unsplash-p-2000.jpeg 2000w, https://assets.website-files.com/5d6e0e6372061dc771830f3c/622ae0e3f847ca6285795a22_yura-fresh-n31x0hhnzOs-unsplash-p-2600.jpeg 2600w, https://assets.website-files.com/5d6e0e6372061dc771830f3c/622ae0e3f847ca6285795a22_yura-fresh-n31x0hhnzOs-unsplash-p-3200.jpeg 3200w, https://assets.website-files.com/5d6e0e6372061dc771830f3c/622ae0e3f847ca6285795a22_yura-fresh-n31x0hhnzOs-unsplash.jpg 5760w"
                                      class="blog-img"
                                    />
                                  </div>
                                  <div class="blog-content-block">
                                    <div class="d-flex">
                                      <a
                                        href="/blog-category/resource"
                                        class="category-link"
                                      >
                                        {
                                          item?.categoryCollection?.items?.[0]
                                            ?.name
                                        }
                                      </a>
                                      <div class="time-text">
                                        {item?.date &&
                                          moment(item?.date).format(
                                            "MMMM D, YYYY"
                                          )}
                                      </div>
                                    </div>
                                    <h2 class="blog-inner-heading">
                                      {item?.title}
                                    </h2>
                                    <p class="blog-text">{item?.description}</p>
                                    <div class="d-flex">
                                      <div class="d-flex">
                                        <div class="content-img-block">
                                          <img
                                            alt="TestiMonial Image"
                                            loading="lazy"
                                            src="https://assets.website-files.com"
                                            class="w-dyn-bind-empty"
                                          />
                                        </div>
                                        <a
                                          href="#"
                                          class="author-link w-dyn-bind-empty"
                                        ></a>
                                      </div>
                                      <Link href={`/blogs/${item?.slug}`}>
                                        <a class="readmore-link-block w-inline-block">
                                          <div class="text-block-2">
                                            Read more
                                          </div>
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div
                        role="navigation"
                        aria-label="List"
                        class="w-pagination-wrapper pagination"
                      >
                        <a
                          href="#"
                          aria-label="Previous Page"
                          class="w-pagination-previous previous"
                        >
                          <img
                            src="/images/post-arrow-left.svg"
                            loading="lazy"
                            alt="Previous arrow"
                            class="pagination-previous-img"
                          />
                          <Link
                            href={
                              currentPage === 2
                                ? `/blogs`
                                : `/blogs/page/${currentPage - 1}`
                            }
                          >
                            <a class="previous-text w-inline-block">Previous</a>
                          </Link>
                        </a>
                        {currentPage === totalPageCount ? null : (
                          <a
                            href="#"
                            aria-label="Next Page"
                            class="w-pagination-next next"
                          >
                            <Link href={`/blogs/page/${currentPage + 1}`}>
                              <a class="next-text w-inline-block">Next</a>
                            </Link>
                            <img
                              src="/images/post-arrow-right.svg"
                              loading="lazy"
                              width="16"
                              height="16"
                              alt="next arrow"
                              class="pagination-icon"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                    <div class="subscribe-block">
                      <h2 class="blog-inner-heading mb8">Stay in the know</h2>
                      <p class="blog-text">
                        Get Business tips straight to your inbox.
                      </p>
                      <div class="mb0">
                        <form
                          id="email-form"
                          name="email-form"
                          data-name="Email Form"
                          method="get"
                          class="blog-form"
                        >
                          <input
                            type="email"
                            class="text-field w-input"
                            maxlength="256"
                            name="email"
                            data-name="Email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,9}"
                            placeholder="Enter your email address"
                            id="email"
                            required=""
                          />
                          <input
                            type="submit"
                            value="Subscribe to Blog"
                            data-wait="Please wait..."
                            class="primary-button w-button"
                          />
                        </form>
                        <div class="blog-success-msg w-form-done">
                          <div class="success-text pb0">
                            Thank you! Your submission has been received!
                          </div>
                        </div>
                        <div class="blog-error-msg w-form-fail">
                          <div class="error-text">
                            Oops! Something went wrong while submitting the
                            form.
                          </div>
                        </div>
                      </div>
                      <div class="blog-social-block">
                        <div class="blog-text">Follow in</div>
                        <div class="social-block mt0">
                          <a
                            href="/"
                            target="_blank"
                            class="sc-social-icon w-inline-block"
                          >
                            <img
                              src="/images/sc-youtube.svg"
                              loading="lazy"
                              width="38"
                              height="38"
                              alt=""
                            />
                          </a>
                          <a
                            href="/"
                            target="_blank"
                            class="sc-social-icon w-inline-block"
                          >
                            <img
                              src="/images/sc-skype.svg"
                              loading="lazy"
                              width="38"
                              height="38"
                              alt=""
                            />
                          </a>
                          <a
                            href="/"
                            target="_blank"
                            class="sc-social-icon w-inline-block"
                          >
                            <img
                              src="/images/sc-linkedin.svg"
                              loading="lazy"
                              width="38"
                              height="38"
                              alt=""
                            />
                          </a>
                          <a
                            href="/"
                            target="_blank"
                            class="sc-social-icon w-inline-block"
                          >
                            <img
                              src="/images/sc-insta.svg"
                              loading="lazy"
                              width="38"
                              height="38"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const Posts = (await getAllBlogs(preview)) ?? [];
  const currentPage = parseInt(params?.page, 10);
  const perPage = 9;
  var totalPageCount = Posts?.length / perPage;

  var nextPage = (currentPage + 1).toString();
  const allPosts = Posts?.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  return {
    props: { preview, allPosts, currentPage, totalPageCount },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug();
  var totalCount = posts?.length;
  const perPage = 9;
  var totalPageCount = totalCount / perPage;
  var paths = [];

  for (let page = 2; page <= totalPageCount; page++) {
    paths.push({ params: { page: page.toString() } });
  }
  return {
    paths: paths ?? [],
    fallback: true,
  };
}
