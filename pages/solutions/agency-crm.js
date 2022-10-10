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
  SolutionSubHeading,
  SolutionWrap,
  TabBottomContent,
  TabPara,
  TabTitleBlock,
} from "../../styles/solutionPageStyles";
import {
  FeatureSubHeading,
  FeatureSubPara,
  ScFeatureBlock,
  ScFeatureInner,
  ScFeatureLeft,
  ScFeatureRight,
} from "../../styles/featureStyles";

export default function NewIndex() {
  return (
    <>
      <NextSeo
        title="CRM Solution for Travel, Insurance and Advertising Media Agency - copilot"
        description="copilot CRM helps you to make creativity and customer service go hand-in-hand. CRM software for travels, marketing, advertising, media and insurance agencies to manage clients and projects with ease"
      />
      <Layout>
        <Navbar />
        <ScHeroSection className="solution">
          <LinearBg />
          <SolutionHero
            HeroHeading="CRM for Agency"
            HeroPara="Make creativity and customer service go hand-in-hand with the best CRM for advertising and media agencies"
          />
        </ScHeroSection>
        <SolutionTopSection>
          <Container>
            <TabTitleBlock>
              <SolutionSubHeading className="MB16">
                Take control of your campaigns
              </SolutionSubHeading>
              <TabPara>
                Campaigns are a great way to reach the masses, but they can be
                difficult to accurately measure and quantify. copilot CRM
                integrates with any email provider you choose, allowing you to
                set up automated email campaigns for everything
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
          </Container>
        </SolutionTopSection>
        <SolutionWrap className="agency-crm">
          <ScFeatureBlock>
            <Container>
              <ScFeatureInner>
                <ScFeatureLeft>
                  <FeatureSubHeading>
                    Keep the conversation going
                  </FeatureSubHeading>
                  <FeatureSubPara>
                    You put your heart and soul into the first few months to win
                    that customer and sign up the project.
                  </FeatureSubPara>
                  <FeatureSubPara>
                    So, how do you engage with them from time to time to build
                    trust and comfort? Like Aaron Levy, the Director of Paid
                    Search at Elite SEM puts it, one of the key strategies to
                    keeping clients engaged is to “be their best friends! Learn
                    their birthdays, their kids' names and best of all
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
                  <FeatureSubHeading>Automate your tasks</FeatureSubHeading>
                  <FeatureSubPara>
                    One of the key challenges agencies face is, they often don’t
                    have a separate sales or business development team and a
                    customer servicing team. Often, the same team that services
                    the customer has to manage sales as well.
                  </FeatureSubPara>
                  <FeatureSubPara>
                    An advertising and media agency CRM software can reduce the
                    time you invest in such tasks with workflow automations.
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
          <ScFeatureBlock>
            <Container>
              <ScFeatureInner>
                <ScFeatureLeft>
                  <FeatureSubHeading>
                    Discover and evaluate your prospects
                  </FeatureSubHeading>
                  <FeatureSubPara>
                    While a winning pitch could make or break a deal with your
                    prospect, what’s also important is to understand their
                    business, and gain insights into what exactly they are
                    looking for from your agency.
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
        <FcfeatureWrap>
          <Container>
            <SolutionSubHeading>
              How can copilot CRM add value to your real estate business?
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
                <CrmfeatureSubHeading>
                  Service customers on the go
                </CrmfeatureSubHeading>
                <CrmPara>
                  Don’t let your laptop or desktop hold you back. Access all
                  functionalities of an agency CRM from anywhere, any time with
                  the Freshsales mobile app.
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
                <CrmfeatureSubHeading>
                  Customize your CRM with integrations
                </CrmfeatureSubHeading>
                <CrmPara>
                  Choose from a host of apps like Zapier, MailChimp, Segment,
                  and Google Apps for work to integrate with your CRM.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Certificate.svg"
                    loading="lazy"
                    alt="Cetificate Image"
                    width={31}
                    height={40}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>
                  Qualify leads with lead scoring
                </CrmfeatureSubHeading>
                <CrmPara>
                  Rank your leads as hot, warm, or cold and assign scores for
                  each lead depending on how they engage with your business.
                </CrmPara>
              </CrmFeatureCard>
            </CrmFeatureMain>
          </Container>
        </FcfeatureWrap>
        <ScMainBlock>
          <SolutionIntegration />
          <SolutionCTA />
        </ScMainBlock>
        <Productivity />
      </Layout>
    </>
  );
}
