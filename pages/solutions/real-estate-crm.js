import { useState, useEffect } from "react";
import Layout from "/components/layout";
import Navbar from "../../components/navbar/navbar";
import Productivity from "/components/productivity/productivity";
import SolutionHero from "/components/solution-hero/solution-hero";
import SolutionCTA from "/components/solution-cta/solution-cta";
import SolutionIntegration from "/components/solution-integration/solution-integration";
import { NextSeo } from "next-seo";
import { Accordion, Panel } from "baseui/accordion";
import {
  Container,
  FcfeatureWrap,
  LinearBg,
  ScHeroSection,
  ScMainBlock,
  SolutionTopSection,
} from "../../styles/commonStyles";
import Image from "next/image";
import {
  CrmFeatureCard,
  CrmFeatureIcon,
  CrmFeatureMain,
  CrmfeatureSubHeading,
  CrmPara,
  SolutionMainBlock,
  SolutionSubHeading,
  SolutionWrap,
  TopTabMenu,
  TabMenu,
  TabPara,
  TabIcon,
  TabContent,
  TabInnerContent,
  TabTitleBlock,
  TabBottomContent,
  FaqContainer,
} from "../../styles/solutionPageStyles";
import {
  FeatureSubHeading,
  FeatureSubPara,
  ScFeatureBlock,
  ScFeatureInner,
  ScFeatureLeft,
  ScFeatureRight,
} from "../../styles/featureStyles";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function NewIndex() {
  const mobile = useMobileDevice();
  const [isActiveTab, setIsTabActiveTab] = useState(String);
  const handleTab = (Tab) => {
    switch (Tab) {
      case "first":
        return setIsTabActiveTab("first");
      case "second":
        return setIsTabActiveTab("second");
      case "third":
        return setIsTabActiveTab("third");
    }
  };
  useEffect(() => {
    handleTab("first");
  }, []);
  return (
    <>
      <NextSeo
        title="Commercial Real Estate CRM to Manage Realtor Business - copilot"
        description="Commercial real estate CRM for every small to large realtor business and estate property agent. Now have a glance at your analytics, grow your leads, manage property, manage customers and boost your presence drastically."
      />
      <Layout>
        <Navbar />
        <ScHeroSection className="solution">
          <LinearBg />
          <SolutionHero
            HeroHeading="CRM for Realtors"
            HeroPara="A one-stop solution for all small and large real estate businesses. Now manage your essential data at your fingertips with a commercial real estate CRM"
          />
        </ScHeroSection>
        <SolutionTopSection>
          <Container>
            <SolutionSubHeading>
              How can copilot CRM add value to your real estate business?
            </SolutionSubHeading>
            <CrmFeatureMain>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Chat.svg"
                    loading="lazy"
                    alt="Multi Communication "
                    width="40"
                    height="32"
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>
                  Multichannel communication
                </CrmfeatureSubHeading>
                <CrmPara>
                  Communicate effectively from multiple channels & enhance your
                  business growth.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Mail.svg"
                    loading="lazy"
                    alt="Multi-in-campaigns"
                    width="40"
                    height="30"
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Built-in campaigns</CrmfeatureSubHeading>
                <CrmPara>
                  In-built campaigns to supercharge your business.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Help03.svg"
                    loading="lazy"
                    alt="Insig  htful Analytics"
                    width="41"
                    height="46"
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Project management</CrmfeatureSubHeading>
                <CrmPara>
                  Get practical Project management tools straight to your
                  pocket.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Help04.svg"
                    loading="lazy"
                    alt="Smart Automations"
                    width="24"
                    height="40"
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>
                  Third-party integrations
                </CrmfeatureSubHeading>
                <CrmPara>
                  Integrate effortlessly like never before and get potential
                  clients.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Options.svg"
                    loading="lazy"
                    alt="Absolute customization"
                    width="40"
                    height="26"
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>
                  Absolute customization
                </CrmfeatureSubHeading>
                <CrmPara>
                  Customize appropriately based on your needs and scale up.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Help06.svg"
                    loading="lazy"
                    alt="Personalized Support"
                    width="42"
                    height="41"
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>
                  Self-service portals
                </CrmfeatureSubHeading>
                <CrmPara>
                  Connect instantly with sellers and buyers with reliable
                  support.
                </CrmPara>
              </CrmFeatureCard>
            </CrmFeatureMain>
          </Container>
        </SolutionTopSection>
        <SolutionMainBlock>
          <Container>
            <SolutionSubHeading>
              Stay updated with all inquiries
            </SolutionSubHeading>
          </Container>
          <SolutionWrap>
            <ScFeatureBlock>
              <Container>
                <ScFeatureInner>
                  <ScFeatureLeft>
                    <FeatureSubHeading>Get your lead today</FeatureSubHeading>
                    <FeatureSubPara>
                      Obtain property inquiries from different marketing
                      campaigns, including online ads, social media, traditional
                      ads, website, real estate marketplaces, etc. Figure out
                      the best and worst-performing drives and allocate budget
                      accordingly. Then, create stunning project landing pages
                      smoothly.
                    </FeatureSubPara>
                  </ScFeatureLeft>
                  <ScFeatureRight>
                    <Image
                      src="/images/2way_email_sync.svg"
                      loading="lazy"
                      alt="2-way-email-sync"
                      height={300}
                      width={450}
                    />
                  </ScFeatureRight>
                </ScFeatureInner>
              </Container>
            </ScFeatureBlock>
            <ScFeatureBlock>
              <Container>
                <ScFeatureInner>
                  <ScFeatureLeft>
                    <FeatureSubHeading>
                      Create stunning project landing pages smoothly
                    </FeatureSubHeading>
                    <FeatureSubPara>
                      It is highly time-consuming to create a high-end landing
                      page for every project. Therefore, use copilot to simplify
                      your task and create responsive landing pages within
                      minutes with significant drag and drop features.
                    </FeatureSubPara>
                  </ScFeatureLeft>
                  <ScFeatureRight>
                    <Image
                      src="/images/customer_status.svg"
                      loading="lazy"
                      alt="customer-status"
                      width={336}
                      height={322}
                    />
                  </ScFeatureRight>
                </ScFeatureInner>
              </Container>
            </ScFeatureBlock>
          </SolutionWrap>
        </SolutionMainBlock>
        <FcfeatureWrap>
          <Container>
            <TabTitleBlock>
              <SolutionSubHeading className="MB16">
                Profound insights into your lead sources, properties, agents,
                etc
              </SolutionSubHeading>
              <TabPara>
                Receive your desired information in the customized dashboard.
              </TabPara>
            </TabTitleBlock>
            <TopTabMenu className="real-state">
              <TabMenu
                onClick={() => {
                  handleTab("first");
                }}
                className={isActiveTab === "first" ? "active" : ""}
              >
                <TabIcon>
                  <Image
                    src="/images/nav_color_companies-Tab-Icon.svg"
                    loading="lazy"
                    width="22"
                    height="19"
                    alt="Investor Icon"
                  />
                </TabIcon>
                <span>Lead Source Performance</span>
              </TabMenu>
              <TabMenu
                onClick={() => {
                  handleTab("second");
                }}
                className={isActiveTab === "second" ? "active" : ""}
              >
                <TabIcon>
                  <Image
                    src="/images/contacts-Tab-Icon.svg"
                    loading="lazy"
                    alt="Prospects Icon"
                    width="20"
                    height="18"
                  />
                </TabIcon>
                <span>Project Performance</span>
              </TabMenu>
              <TabMenu
                onClick={() => {
                  handleTab("third");
                }}
                className={isActiveTab === "third" ? "active" : ""}
              >
                <TabIcon>
                  <Image
                    src="/images/deals-Tab-Icon.svg"
                    loading="lazy"
                    alt="Deals Icon"
                    width="19"
                    height="19"
                  />
                </TabIcon>
                <span>Agent Performance</span>
              </TabMenu>
            </TopTabMenu>
            <TabContent>
              <TabInnerContent
                className={isActiveTab === "first" ? "active" : ""}
              >
                <TabBottomContent>
                  <Image
                    src="/images/Tab-01.webp"
                    loading="lazy"
                    height="708"
                    width="1168"
                    alt="Tab Main Image"
                  />
                </TabBottomContent>
              </TabInnerContent>
              <TabInnerContent
                className={isActiveTab === "second" ? "active" : ""}
              >
                <TabBottomContent>
                  <Image
                    src="/images/Tab-01.webp"
                    loading="lazy"
                    height="708"
                    width="1168"
                    alt="Tab Main Image"
                  />
                </TabBottomContent>
              </TabInnerContent>
              <TabInnerContent
                className={isActiveTab === "third" ? "active" : ""}
              >
                <TabBottomContent>
                  <Image
                    src="/images/Tab-01.webp"
                    loading="lazy"
                    height="708"
                    width="1168"
                    alt="Tab Main Image"
                  />
                </TabBottomContent>
              </TabInnerContent>
            </TabContent>
          </Container>
        </FcfeatureWrap>
        <SolutionIntegration />
        <FcfeatureWrap>
          <Container>
            <FaqContainer>
              <SolutionSubHeading>FAQ</SolutionSubHeading>
              <Accordion
                overrides={{
                  Header: {
                    style: ({ $theme }) => ({
                      backgroundColor: "#fff",
                      color: "#333333",
                      fontFamily: "Gtwalsheimpro",
                      fontWeight: 500,
                      paddingTop: mobile ? "16px" : "20px",
                      paddingBottom: mobile ? "16px" : "20px",
                      paddingLeft: mobile ? "16px" : "20px",
                      paddingRight: mobile ? "16px" : "20px",
                      fontSize: mobile ? "16px" : "20px",
                      lineHeight: "24px",
                      ":hover": {
                        color: "#333333",
                      },
                    }),
                  },
                  Content: {
                    style: ({ $theme }) => ({
                      backgroundColor: "transparent",
                      fontFamily: "Publicsans",
                      fontSize: mobile ? "14px" : "16px",
                      lineHeight: "24px",
                      fontWeight: 500,
                      color: "#7d8696",
                      paddingTop: "0",
                      paddingBottom: mobile ? "16px" : "20px",
                      paddingLeft: mobile ? "16px" : "20px",
                      paddingRight: mobile ? "16px" : "20px",
                      borderTopWidth: "0px",
                      borderTopColor: "#e4e4e5",
                    }),
                  },
                  PanelContainer: {
                    style: ({ $theme }) => ({
                      border: "1px solid #e4e4e5",
                      borderRadius: "5px",
                      overflow: "hidden",
                      marginBottom: mobile ? "12px" : "20px",
                    }),
                  },
                  ToggleIcon: {
                    style: ({ $theme }) => ({
                      width: "24px",
                      height: "24px",
                    }),
                  },
                }}
              >
                <Panel title="How much does it cost to use copilot real estate CRM?">
                  It is free to use. So you can start with it today to expand
                  your growth.
                </Panel>
                <Panel title="Who can use copilot property management CRM?">
                  Anyone willing to boost their online business with CRM can opt
                  for copilot CRM.
                </Panel>
                <Panel title="Are there any prior requirements to use this CRM?">
                  The only requirement here is to have an online business.
                </Panel>
                <Panel title="How does copilot CRM aid real estate agents?">
                  It is easy, user-friendly, and reliable with efficient
                  customization and automation facilities, making it a suitable
                  choice for real estate agents.
                </Panel>
                <Panel title="Do you have any other tools like copilot to use for free?">
                  Yes, head to our <a href="/">free sales tool option</a> and
                  get more reliable tools.
                </Panel>
              </Accordion>
            </FaqContainer>
          </Container>
        </FcfeatureWrap>
        <ScMainBlock>
          <SolutionCTA />
        </ScMainBlock>
        <Productivity />
      </Layout>
    </>
  );
}
