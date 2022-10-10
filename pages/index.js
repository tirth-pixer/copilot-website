import { useState } from "react";
import Layout from "/components/layout";
import Productivity from "../components/productivity/productivity";
import Testimonial from "../components/testimonial/testimonial";
import { NextSeo } from "next-seo";
import Navbar from "../components/navbar/navbar";
import Link from "next/link";
import Slider from "../components/slider/slider";
import CTA from "../components/cta/cta";
import {
  Container,
  FcfeatureWrap,
  LogoListWrap,
  LogosItem,
  LogosList,
  LogosManilock,
  LogosText,
  PrimaryButton,
  SecondryButton,
} from "../styles/commonStyles";
import {
  FeatureBlock,
  FeatureTag,
  Scfeaturetitle,
  SectionHeading,
  FeatureItem,
  FeatureLinkBlock,
  FeatureCardTitle,
  FeatureImg,
  LearnMoreLink,
  FeatureWrapBlock,
  HeroSection,
  HeroMainBlock,
  HeroLeft,
  HeroHeading,
  Para,
  HeroBtnBlock,
  HeroRight,
  MainModal,
  PlayerWrapper,
  EmailModal,
  SmsModal,
  CallModal,
  PlayIcon,
  LightBox,
  LightBoxContainer,
  VideoContainer,
  CloseButton,
  Iframe,
} from "../styles/homepageStyles";
import Image from "next/image";

export default function NewIndex() {
  const [isLightBox, setIsLightBox] = useState(false);

  return (
    <>
      <NextSeo
        title="Cloud Base Sales CRM | Free CRM Software Solution - copilot"
        description="copilot offers cloud base sales CRM software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business."
      />
      <Layout>
        <Navbar />
        <HeroSection>
          <Container>
            <HeroMainBlock>
              <HeroLeft>
                <HeroHeading>Supercharge Your Sales Team</HeroHeading>
                <Para>
                  copilot gives you a stunning customisable sales suite to drive
                  growth at every stage of the sales cycle.
                </Para>
                <HeroBtnBlock>
                  <PrimaryButton>
                    <Link href="/">
                      <a>Get Started for Free</a>
                    </Link>
                  </PrimaryButton>
                  <SecondryButton>
                    <Link href="/request-demo">
                      <a>Request a Demo</a>
                    </Link>
                  </SecondryButton>
                </HeroBtnBlock>
              </HeroLeft>
              <HeroRight>
                <MainModal>
                  <a
                    onClick={() => {
                      setIsLightBox(true);
                    }}
                  >
                    <Image
                      src="/images/main-hero.webp"
                      alt="hero-feature"
                      height={392}
                      width={599}
                    ></Image>
                    <PlayerWrapper>
                      <PlayIcon>
                        <Image
                          src="/images/Path_1.svg"
                          height={28}
                          width={26}
                          alt="play-icon"
                        ></Image>
                      </PlayIcon>
                    </PlayerWrapper>
                  </a>
                </MainModal>
                <EmailModal>
                  <Image
                    src="/images/email-modal.webp"
                    alt="email-feature"
                    width={284}
                    height={263}
                  ></Image>
                </EmailModal>
                <SmsModal>
                  <Image
                    src="/images/sms-modal.webp"
                    width={316}
                    height={193}
                    alt="sms-feature"
                  ></Image>
                </SmsModal>
                <CallModal>
                  <Image
                    src="/images/call-modal.webp"
                    width={233}
                    height={98}
                    alt="call-feature"
                  ></Image>
                </CallModal>
              </HeroRight>
            </HeroMainBlock>
            <LogosManilock>
              <LogosText>Trusted By Innovative Companies Worldwide</LogosText>
              <LogoListWrap>
                <LogosList>
                  <LogosItem>
                    <Image
                      src="/images/heliostar-logo_1.svg"
                      width={175}
                      height={32}
                      alt="heliostar"
                    ></Image>
                  </LogosItem>
                  <LogosItem>
                    <Image
                      src="/images/bearbook-logos.svg"
                      width={162}
                      height={37}
                      alt="bearbook"
                    ></Image>
                  </LogosItem>
                  <LogosItem>
                    <Image
                      src="/images/MailCanvas-logos.svg"
                      width={172}
                      height={48}
                      alt="mailcanvas"
                    ></Image>
                  </LogosItem>
                  <LogosItem>
                    <Image
                      src="/images/Be-Designer-logos.svg"
                      width={138}
                      height={40}
                      alt="be-designer"
                    ></Image>
                  </LogosItem>
                  <LogosItem>
                    <Image
                      src="/images/eventgenius-logos.svg"
                      width={145}
                      height={32}
                      alt="eventgenius"
                    ></Image>
                  </LogosItem>
                </LogosList>
              </LogoListWrap>
            </LogosManilock>
          </Container>
        </HeroSection>
        <FcfeatureWrap>
          <Container>
            <Scfeaturetitle>
              <FeatureTag>
                <span>Awesome Features</span>
              </FeatureTag>
              <SectionHeading>
                Simplify your Sales & Customer Success with copilot's excellent
                features.
              </SectionHeading>
            </Scfeaturetitle>
            <FeatureWrapBlock>
              <FeatureBlock>
                <FeatureItem>
                  <Link href="/features/lead-management">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/61c1c3f11b91c11596caf67b_lead-1.png"
                            width={152}
                            alt="Lead Managment"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Lead Managment</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
                <FeatureItem>
                  <Link href="/features/sales-reporting">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/61c1c3f09f69f83e43c86519_analitics-1.png"
                            width={152}
                            alt="Sales Reporting"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Sales Reporting</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
                <FeatureItem>
                  <Link href="/features/call-sms">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/61c1c3f24a8636086d2a5e03_validation-1.png"
                            width={152}
                            alt="Call & SMS"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Call & SMS</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
                <FeatureItem>
                  <Link href="/features/email-sync">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/61c1c3ef3600cbbc334ade6d_email-sync-1.png"
                            width={152}
                            alt="Email Sync"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Email Sync</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
                <FeatureItem>
                  <Link href="/features/customization">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/61c1c3ef9a97c1718f992481_customize-1.png"
                            width={152}
                            alt="Easy Customization"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Easy Customization</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
                <FeatureItem>
                  <Link href="/features/deal-pipeline">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/deal-pipeline.png"
                            width={152}
                            alt="Deal Pipeline"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Deal Pipeline</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
                <FeatureItem>
                  <Link href="/features/activities-goals">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/goals.png"
                            width={152}
                            alt="Activities & Goals"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Activities & Goals</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
                <FeatureItem>
                  <Link href="/features/integration">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/61c1c3f07dafc021fbe25253_integration-1.png"
                            width={152}
                            alt="Integration"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Integration</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
              </FeatureBlock>
            </FeatureWrapBlock>
          </Container>
        </FcfeatureWrap>
        <Slider />
        <CTA />
        <Productivity />
        <Testimonial />
      </Layout>
      <LightBox
        isLightBox={isLightBox}
        onClick={() => {
          setIsLightBox(false);
        }}
      >
        <LightBoxContainer>
          <CloseButton
            onClick={() => {
              setIsLightBox(false);
            }}
          >
            ✕
          </CloseButton>
          <VideoContainer>
            <Iframe
              width="960"
              height="540"
              src={
                isLightBox &&
                "https://www.youtube.com/embed/R5_1CeyF9L4?autoplay=1"
              }
              frameborder="0"
              allowfullscreen
            ></Iframe>
          </VideoContainer>
        </LightBoxContainer>
      </LightBox>
    </>
  );
}
