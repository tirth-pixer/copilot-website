import Layout from "../../../components/layout";
import Navbar from "../../../components/navbar/navbar";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { useEffect, useState, useCallback, useMemo } from "react";
import { NextSeo } from "next-seo";
import Productivity from "../../../components/productivity/productivity";
import { getHelpWithSlug } from "../../../lib/contentful-help";
import { getHelpCategoryTitleWithSlug } from "../../../lib/contentful-helpCategory";
import Link from "next/link";
import {
  Container,
  LinearBg,
  RichTextBlock,
  ScFeatureHeading,
  ScHeroSection,
  ScMainBlock,
} from "../../../styles/commonStyles";
import { trackAnalyticActivity } from "../../../services/analyticsService";
import Image from "next/image";
import { useRouter } from "next/router";
import PageNotFound from "../../404";
import {
  EmojiBlock,
  FeedbackReactionBlock,
  FeedbackTitle,
  HelpArticleContainer,
  HelpCategoryItem,
  HelpCategoryShow,
  HelpFeedback,
  Slash,
} from "../../../styles/helpStyles";

export default function NewIndex({ HelpPost: post }) {
  const router = useRouter();
  if (!router.isFallback && !post) {
    return <PageNotFound />;
  }

  const [reaction, setReaction] = useState("");

  useEffect(() => {
    trackAnalyticActivity("LP: help center view", {
      name: post?.title,
      category: post?.category?.title,
    });
  }, []);

  useEffect(() => {
    if (reaction) {
      trackAnalyticActivity("LP: help article reaction", {
        reaction: reaction,
        name: post?.title,
        category: post?.category?.title,
      });
    }
  }, [reaction]);

  const onClickReaction = useCallback(
    (reaction) => {
      setReaction(reaction);
    },
    [setReaction]
  );
  const richOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const image = post?.body?.links?.assets?.block?.find(
          (item) => item?.sys?.id === node?.data?.target?.sys?.id
        );
        return (
          <figure
            style={{ maxWidth: "1280px" }}
            className="w-richtext-align-fullwidth w-richtext-figure-type-image"
          >
            <div>
              <Image
                src={image?.url}
                loading="lazy"
                alt={image?.title}
                width={682}
                height={426}
              />
            </div>
          </figure>
        );
      },
    },
  };

  const reactionView = useMemo(() => {
    return (
      <>
        {/* <FeedbackReactionBlock>
          <EmojiBlock
            id="not-helpful"
            data-event="help center: reaction"
            data-prop-type="not happy"
            className={
              reaction && reaction !== "not-helpful"
                ? "feedback-reaction deactive"
                : "feedback-reaction active "
            }
            onClick={() => onClickReaction("not-helpful")}
          >
            😞
          </EmojiBlock>
          <EmojiBlock
            id="helpful"
            data-event="help center: reaction"
            data-prop-type="okay"
            className={
              reaction && reaction !== "helpful"
                ? "feedback-reaction deactive"
                : "feedback-reaction active "
            }
            onClick={() => onClickReaction("helpful")}
          >
            😐
          </EmojiBlock>
          <EmojiBlock
            id="very-helpful"
            data-event="help center: reaction"
            data-prop-type="happy"
            className={
              reaction && reaction !== "very-helpful"
                ? "feedback-reaction deactive"
                : "feedback-reaction active "
            }
            onClick={() => onClickReaction("very-helpful")}
          >
            😃
          </EmojiBlock>
        </FeedbackReactionBlock> */}
        <FeedbackReactionBlock>
          <div
            id="not-helpful"
            data-event="help center: reaction"
            data-prop-type="not happy"
            className={
              reaction && reaction !== "not-helpful"
                ? "feedback-reaction deactive"
                : "feedback-reaction active "
            }
            onClick={() => onClickReaction("not-helpful")}
          >
            😞
          </div>
          <div
            id="helpful"
            data-event="help center: reaction"
            data-prop-type="okay"
            className={
              reaction && reaction !== "helpful"
                ? "feedback-reaction deactive"
                : "feedback-reaction active "
            }
            onClick={() => onClickReaction("helpful")}
          >
            😐
          </div>
          <div
            id="very-helpful"
            data-event="help center: reaction"
            data-prop-type="happy"
            className={
              reaction && reaction !== "very-helpful"
                ? "feedback-reaction deactive"
                : "feedback-reaction active "
            }
            onClick={() => onClickReaction("very-helpful")}
          >
            😃
          </div>
        </FeedbackReactionBlock>
      </>
    );
  }, [onClickReaction, reaction]);

  return (
    <>
      <NextSeo title={`${post?.title} - copilot Help`} />
      {!post?.title ? (
        <PageNotFound></PageNotFound>
      ) : (
        <Layout>
          <Navbar />
          <ScHeroSection>
            <LinearBg className="help" />
            <Container>
              <ScFeatureHeading>{post?.title}</ScFeatureHeading>
              <HelpCategoryShow>
                <HelpCategoryItem>
                  <Link href="/help">
                    <a>Help Center</a>
                  </Link>
                  <Slash>/</Slash>
                  <Link href={`/help/${post?.category?.slug}`}>
                    <a>{post?.category?.title}</a>
                  </Link>
                  <Slash>/</Slash>
                  <span>{post?.title}</span>
                </HelpCategoryItem>
              </HelpCategoryShow>
            </Container>
          </ScHeroSection>
          <ScMainBlock>
            <Container>
              <HelpArticleContainer>
                <RichTextBlock>
                  {documentToReactComponents(post?.body?.json, richOptions)}
                </RichTextBlock>
                <HelpFeedback>
                  <FeedbackTitle>Did this answer your question?</FeedbackTitle>
                  <div>{reactionView}</div>
                </HelpFeedback>
              </HelpArticleContainer>
            </Container>
          </ScMainBlock>
          <Productivity />
        </Layout>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const HelpPost = (await getHelpWithSlug(params?.slug, preview)) || {};
  return {
    props: {
      preview: preview ?? null,
      HelpPost: HelpPost ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getHelpCategoryTitleWithSlug();
  var paths = [];
  allPosts?.forEach((item) => {
    item.linkedFrom.helpArticlesCollection.items?.forEach((article) => {
      paths.push(`/help/${item.slug}/${article.slug} `);
    });
  });
  return {
    paths: paths,
    fallback: true,
  };
}
