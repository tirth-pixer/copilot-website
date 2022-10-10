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
  AutherImage,
  CrmFeatureCard,
  CrmFeatureIcon,
  CrmFeatureMain,
  CrmfeatureSubHeading,
  CrmPara,
  ScAutherBlock,
  SolutionMainBlock,
  SolutionSubHeading,
  SolutionWrap,
  TabBottomContent,
  TabPara,
  TabTitleBlock,
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
  return (
    <>
      <NextSeo
        title="CRM Software for SaaS Business with Marketing Automation - copilot"
        description="Get the high-end CRM for SaaS business to boost your productivity drastically. Try our reliable CRM software to improve customer experiences and increase productivity. Try copilot today for excellent benefits."
      />
      <Layout>
        <Navbar />
        <ScHeroSection className="solution">
          <LinearBg />
          <SolutionHero
            HeroHeading="SaaS for Startup"
            HeroPara="Now get the live updates of your Growth Essential Metrics anywhere anytime with copilot"
          />
        </ScHeroSection>
        <SolutionTopSection>
          <Container>
            <TabTitleBlock>
              <SolutionSubHeading className="MB16">
                Grow & Maintain your leads with CRM for SAAS
              </SolutionSubHeading>
              <TabPara>
                In this fast-paced world, where technology upgrades every day,
                mark your presence with CRM for SAAS and lead the market.
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
        <SolutionMainBlock>
          <Container>
            <SolutionSubHeading>
              copilot holds the potential to enhance your growth and fast-track
              your productivity at each stage of the SaaS customer journey
            </SolutionSubHeading>
          </Container>
          <SolutionWrap>
            <ScFeatureBlock>
              <Container>
                <ScFeatureInner>
                  <ScFeatureLeft>
                    <FeatureSubHeading>
                      Seize all sign-ups and clients in one place
                    </FeatureSubHeading>
                    <FeatureSubPara>
                      Get automated free trials, demo requests, outbound leads,
                      and customers into one place and start interacting with
                      personalized outreach.
                    </FeatureSubPara>
                    <FeatureList>
                      <FeatureListItem>Bulk Emails & Sequences</FeatureListItem>
                      <FeatureListItem>Calling & Power Dialer</FeatureListItem>
                      <FeatureListItem>Email Tracking</FeatureListItem>
                      <FeatureListItem>Email & Text Templates</FeatureListItem>
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
                      Record customer actions & performances
                    </FeatureSubHeading>
                    <FeatureSubPara>
                      Track all client activities and actions such as emails,
                      calls, texts, and tasks – effortless; derive 360° insights
                      and subsequent best tricks to win their business.
                    </FeatureSubPara>
                    <FeatureList>
                      <FeatureListItem>Email Campaigns</FeatureListItem>
                      <FeatureListItem>Email & Text Templates</FeatureListItem>
                      <FeatureListItem>Voicemail Drop</FeatureListItem>
                    </FeatureList>
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
                      Boost your leads from outbound traffic.
                    </FeatureSubHeading>
                    <FeatureSubPara>
                      Develop a high-end outbound sales team and reach more
                      potential customers; use an integrated multichannel sales
                      platform offering customization and excelling
                      productivity.
                    </FeatureSubPara>
                    <ScAutherBlock>
                      <AutherImage>
                        <Image
                          src="/images/Saas02.svg"
                          loading="lazy"
                          height={38}
                          width={38}
                          alt="User Image"
                        />
                      </AutherImage>
                      <p>
                        “I have worked with more than 50 CRMs, and copilot is
                        the best I came across!
                      </p>
                    </ScAutherBlock>
                  </ScFeatureLeft>
                  <ScFeatureRight>
                    <Image
                      src="/images/web_forms.svg"
                      height={300}
                      width={450}
                      loading="lazy"
                      alt="web_forms"
                    />
                  </ScFeatureRight>
                </ScFeatureInner>
              </Container>
            </ScFeatureBlock>
          </SolutionWrap>
        </SolutionMainBlock>
        <SolutionIntegration />
        <FcfeatureWrap>
          <Container>
            <CrmFeatureMain>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Saas-List.svg"
                    loading="lazy"
                    alt="instant Setup "
                    height={30}
                    width={30}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Instant Setup</CrmfeatureSubHeading>
                <CrmPara>
                  It’s easy-breezy to start with copilot <br />
                  and revamp in your way.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Saas-List.svg"
                    loading="lazy"
                    alt="instant Setup "
                    height={30}
                    width={30}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Easy Integration</CrmfeatureSubHeading>
                <CrmPara>
                  Use our reliable APIs and SDK to integrate with your favorite
                  SaaS product.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Saas-List.svg"
                    loading="lazy"
                    alt="instant Setup "
                    height={30}
                    width={30}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Secure & compliant</CrmfeatureSubHeading>
                <CrmPara>
                  Enterprise-grade enhanced security, ISO certified, and GDPR
                  ready.
                </CrmPara>
              </CrmFeatureCard>
            </CrmFeatureMain>
          </Container>
        </FcfeatureWrap>
        <ScMainBlock>
          <Container>
            <SolutionSubHeading>
              copilot is the only software your SaaS team requires to upgrade
              your sales
            </SolutionSubHeading>
            <CrmFeatureMain>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Saas1.svg"
                    loading="lazy"
                    alt="Power Dialer"
                    height={37}
                    width={37}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Power Dialer</CrmfeatureSubHeading>
                <CrmPara>
                  Automate your calls and accelerate your productivity by 3x.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Saas2.svg"
                    loading="lazy"
                    alt="Automated Workflows"
                    width={38}
                    height={28}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Automated Workflows</CrmfeatureSubHeading>
                <CrmPara>
                  Automate your regular sales activities, emails, assign new
                  deals, and more.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Saas3.svg"
                    loading="lazy"
                    alt="Team Inbox"
                    width={38}
                    height={28}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Team Inbox</CrmfeatureSubHeading>
                <CrmPara>
                  Connect and resolve customer queries instantly.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Saas6.svg"
                    loading="lazy"
                    alt="Voicemail Drop"
                    width={47}
                    height={20}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Voicemail Drop</CrmfeatureSubHeading>
                <CrmPara>
                  Auto-drop your pre-recorded messages over voicemail.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Saas5.svg"
                    loading="lazy"
                    alt="sales Reports"
                    width={26}
                    height={34}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Sales Reports</CrmfeatureSubHeading>
                <CrmPara>
                  Expand your business with sales data and not presumptions.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Saas4.svg"
                    loading="lazy"
                    alt="Contact Management"
                    width={34}
                    height={37}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Contact Management</CrmfeatureSubHeading>
                <CrmPara>
                  Get an overall view of all your contacts and companies.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Saas8.svg"
                    loading="lazy"
                    alt="Text And Email Texmplates"
                    width={41}
                    height={31}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>
                  Text and Email templates
                </CrmfeatureSubHeading>
                <CrmPara>
                  Skip writing your emails and texts from scratch & enjoy
                  flourished templates.
                </CrmPara>
              </CrmFeatureCard>
              <CrmFeatureCard>
                <CrmFeatureIcon>
                  <Image
                    src="/images/Saas7.svg"
                    loading="lazy"
                    alt="Call Recording"
                    width={35}
                    height={36}
                  />
                </CrmFeatureIcon>
                <CrmfeatureSubHeading>Call Recording</CrmfeatureSubHeading>
                <CrmPara>Record essential calls for future benefits.</CrmPara>
              </CrmFeatureCard>
            </CrmFeatureMain>
          </Container>
        </ScMainBlock>
        <ScMainBlock>
          <SolutionCTA />
        </ScMainBlock>
        <Productivity />
      </Layout>
    </>
  );
}
