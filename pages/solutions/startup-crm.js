import { useState, useEffect } from "react";
import Layout from "/components/layout";
import Navbar from "../../components/navbar/navbar";
import Productivity from "/components/productivity/productivity";
import SolutionHero from "/components/solution-hero/solution-hero";
import SolutionCTA from "/components/solution-cta/solution-cta";
import SolutionIntegration from "/components/solution-integration/solution-integration";
import { NextSeo } from "next-seo";
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
  CrmSubHeading,
  ProblemBlock,
  SolutionBlock,
  SolutionList,
  SolutionListItem,
  SolutionMainBlock,
  SolutionSubHeading,
  SolutionWrap,
  StartupWrapper,
  TabBottomContent,
  TabContent,
  TabIcon,
  TabInnerContent,
  TabMenu,
  TabPara,
  TabTitleBlock,
  TopTabMenu,
} from "../../styles/solutionPageStyles";
import {
  FeatureList,
  FeatureListItem,
  FeatureSubHeading,
  FeatureSubPara,
  ScFeatureBlock,
  ScFeatureInner,
  ScFeatureLeft,
  ScFeatureRight,
} from "../../styles/featureStyles";

export default function NewIndex() {
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
        title="CRM Software for Startup and New Businesses - copilot"
        description="copilot CRM software is helping startup businesses to manage the potential leads. For any organization, CRM software helps to enhance your business leads, manage investors and generate more revenue. Try copilot Now!"
      />
      <Layout>
        <Navbar />
        <ScHeroSection className="solution">
          <LinearBg />
          <SolutionHero
            HeroHeading="CRM for Startups"
            HeroPara="Are you looking for the perfect CRM for your startup? Try copilot CRM!"
          />
        </ScHeroSection>
        <SolutionTopSection>
          <Container>
            <SolutionSubHeading>
              Why do you need a sales CRM for your startup?
            </SolutionSubHeading>
            <StartupWrapper>
              <ProblemBlock>
                <CrmSubHeading>Problem</CrmSubHeading>
                <CrmPara className="MB10">
                  It is cumbersome to manage the sales process manually, and it
                  even consumes a lot of time. Moreover, it makes the startups
                  suffer from inconsistency and fragmented data, so a CRM is a
                  right choice to overcome that.
                </CrmPara>
                <CrmPara className="MB10">
                  During the sales process, reps have to make many changes in
                  clients' details and communication management.
                </CrmPara>
                <CrmPara>
                  These constant needs become easy to manage with CRM that can
                  be scaled, modified, and organized.
                </CrmPara>
              </ProblemBlock>
              <SolutionBlock>
                <CrmSubHeading>Solution</CrmSubHeading>
                <CrmPara className="MB16">
                  The right Sales CRM is an essential asset for any
                  organization. Below mentioned are few ways in which modern
                  sales software helps to enhance a startup:
                </CrmPara>
                <SolutionList>
                  <SolutionListItem>
                    Enhance your leads and build a sales pipeline
                  </SolutionListItem>
                  <SolutionListItem>
                    Get Clarity and Save the modifications.
                  </SolutionListItem>
                  <SolutionListItem>
                    Keep your customers engaged.
                  </SolutionListItem>
                  <SolutionListItem>
                    Compelling Sales Opportunities to overcome loopholes.
                  </SolutionListItem>
                  <SolutionListItem>
                    Now get all your deals, updates & never lose a potential
                    customer.
                  </SolutionListItem>
                  <SolutionListItem>
                    Automate and save your valuable time.
                  </SolutionListItem>
                </SolutionList>
              </SolutionBlock>
            </StartupWrapper>
          </Container>
        </SolutionTopSection>
        <SolutionMainBlock>
          <Container>
            <TopTabMenu>
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
                <span>Investor</span>
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
                <span>Prospects</span>
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
                <span>Deals</span>
              </TabMenu>
            </TopTabMenu>
            <TabContent>
              <TabInnerContent
                className={isActiveTab === "first" ? "active" : ""}
              >
                <TabTitleBlock>
                  <SolutionSubHeading className="MB16">
                    Better communication with investors
                  </SolutionSubHeading>
                  <TabPara>
                    Manage your firm's relationships with the investors &
                    venture capital efficiently and pitch clearly for your next
                    fundraising.
                  </TabPara>
                </TabTitleBlock>
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
                <TabTitleBlock>
                  <SolutionSubHeading className="MB16">
                    Organize your Prospects
                  </SolutionSubHeading>
                  <TabPara>
                    copilot aids you in the effortless management of records by
                    organizing your prospects and customer in one place.
                  </TabPara>
                </TabTitleBlock>
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
                <TabTitleBlock>
                  <SolutionSubHeading className="MB16">
                    Smart Deal-flow
                  </SolutionSubHeading>
                  <TabPara>
                    Make fast, practical decisions on your deal flow and
                    relationships. Now access and enrich your fund's entire
                    pipeline from anywhere.
                  </TabPara>
                </TabTitleBlock>
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
        </SolutionMainBlock>
        <FcfeatureWrap>
          <Container>
            <SolutionSubHeading>
              How to choose the right CRM for Startup?
            </SolutionSubHeading>
            <CrmFeatureMain>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Help01.svg"
                    loading="lazy"
                    alt="Customized Pipelines"
                    width={24}
                    height={40}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Ease of Use</CrmfeatureSubHeading>
                <CrmPara>
                  Easy, breezy effective CRM to add value to your startup.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Help02.svg"
                    loading="lazy"
                    alt="Value Money Image"
                    width={50}
                    height={34}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Value for Money</CrmfeatureSubHeading>
                <CrmPara>
                  With your needs, we take care of your pocket too.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Help03.svg"
                    loading="lazy"
                    alt="Insightful Analytics"
                    width={41}
                    height={46}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Useful Integrations</CrmfeatureSubHeading>
                <CrmPara>
                  Integrate your favorite app and enjoy unlimited benefits.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Help04.svg"
                    loading="lazy"
                    alt="Smart Automations"
                    width={24}
                    height={40}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Smart Automations</CrmfeatureSubHeading>
                <CrmPara>
                  Automation to make you super-fast & Never lose a client.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Help05.svg"
                    loading="lazy"
                    alt="scalable and secure"
                    width={35}
                    height={35}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Scalable & Secure</CrmfeatureSubHeading>
                <CrmPara>
                  Now never compromise on security & scalability while choosing
                  CRM.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Help06.svg"
                    loading="lazy"
                    alt="Personalized Support"
                    width={42}
                    height={41}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>
                  Personalized Support
                </CrmfeatureSubHeading>
                <CrmPara>
                  Top-notch responsive support to assist you appropriately!
                </CrmPara>
              </CrmFeatureCard>
            </CrmFeatureMain>
          </Container>
        </FcfeatureWrap>
        <SolutionMainBlock>
          <Container>
            <SolutionSubHeading>
              Using Salesmate for your startup CRM
            </SolutionSubHeading>
          </Container>
          <SolutionWrap>
            <ScFeatureBlock>
              <Container>
                <ScFeatureInner>
                  <ScFeatureLeft>
                    <FeatureSubHeading>
                      Organize your sales pipeline
                    </FeatureSubHeading>
                    <FeatureSubPara>
                      Now never miss a deal! Identify the new,high-value deals
                      and nurture them by focusing at the right time and never
                      let the deals fall through the cracks
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
                      Grow your customer base
                    </FeatureSubHeading>
                    <FeatureSubPara>
                      Now convert your prospects into happy customers within
                      minutes. A personalized email with timely follow-up can
                      make you stand out from the crowd.
                    </FeatureSubPara>
                    <FeatureList>
                      <FeatureListItem>Bulk Emails & Sequences</FeatureListItem>
                      <FeatureListItem>Calling & Power Dialer</FeatureListItem>
                      <FeatureListItem>Email Tracking</FeatureListItem>
                    </FeatureList>
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
            <ScFeatureBlock>
              <Container>
                <ScFeatureInner>
                  <ScFeatureLeft>
                    <FeatureSubHeading>
                      Cadences for automated outreach
                    </FeatureSubHeading>
                    <FeatureSubPara>
                      Now automate your repetitive work & save time. <br />
                      Analyze what drives more attention.
                    </FeatureSubPara>
                  </ScFeatureLeft>
                  <ScFeatureRight>
                    <Image
                      src="/images/Startup01.svg"
                      loading="lazy"
                      width="306"
                      height="285"
                      alt="Lead Manegment Block"
                    />
                  </ScFeatureRight>
                </ScFeatureInner>
              </Container>
            </ScFeatureBlock>
          </SolutionWrap>
        </SolutionMainBlock>
        <ScMainBlock>
          <SolutionIntegration />
          <SolutionCTA />
        </ScMainBlock>
        <Productivity />
      </Layout>
    </>
  );
}
