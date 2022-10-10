import Layout from "/components/layout";
import Navbar from "../../components/navbar/navbar";
import Productivity from "/components/productivity/productivity";
import SolutionHero from "/components/solution-hero/solution-hero";
import SolutionCTA from "/components/solution-cta/solution-cta";
import SolutionIntegration from "/components/solution-integration/solution-integration";
import { NextSeo } from "next-seo";
import {
  LinearBg,
  ScHeroSection,
  ScMainBlock,
  FcfeatureWrap,
  Container,
  SolutionTopSection,
} from "../../styles/commonStyles";
import {
  CrmFeatureCard,
  CrmFeatureIcon,
  CrmFeatureMain,
  CrmfeatureSubHeading,
  CrmPara,
  SolutionSubHeading,
  SolutionWrap,
} from "../../styles/solutionPageStyles";
import Image from "next/image";
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
        title="Enhance your remote Sales drive with the best Sales CRM"
        description="Now never miss a sales follow-up of a remote sales business. Keep your sales team aligned with copilot CRM software to manage remote sales effectively"
      />
      <Layout>
        <Navbar />
        <ScHeroSection className="solution">
          <LinearBg />
          <SolutionHero
            HeroHeading="Enhance your remote Sales drive with the best Sales CRM"
            HeroPara="The one-stop shop for all your Sales needs. Now never miss a sales follow-up. Keep your sales team aligned with copilot CRM."
          />
        </ScHeroSection>
        <SolutionTopSection>
          <SolutionSubHeading>
            Boost your sales drive with the remote Sales CRM.
          </SolutionSubHeading>
          <SolutionWrap className="real-state">
            <ScFeatureBlock>
              <Container>
                <ScFeatureInner>
                  <ScFeatureLeft>
                    <FeatureSubPara>
                      To make your sales work effortless, copilot CRM is here!
                    </FeatureSubPara>
                    <FeatureSubPara>
                      copilot CRM is the foremost choice for a sales manager and
                      provides many benefits straight to your pocket.
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
                      Enhance your sales globally
                    </FeatureSubHeading>
                    <FeatureSubPara>
                      Manage your diverse sales team efficiently, just like you
                      are working from the office. Enjoy the benefit of your
                      local phone number and your zoom, integration and reap the
                      desired outcome.
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
                      Now communicate smoothly across any time zone
                    </FeatureSubHeading>
                    <FeatureSubPara>
                      Use emails, phone calls, etc., for effortless
                      communication. Manage and share your deals effectively
                      with your remote team and save your precious time.
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
        </SolutionTopSection>
        <ScMainBlock>
          <Container>
            <SolutionSubHeading>
              copilot CRM acts as a one-stop solution to run your business
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
                  Serve your customers 24/7
                </CrmfeatureSubHeading>
                <CrmPara>
                  Access your sales CRM anytime, anywhere, at the comfort of
                  your home with copilot CRM.
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
                  Absolute customization
                </CrmfeatureSubHeading>
                <CrmPara>
                  Access your sales CRM anytime, anywhere, at the comfort of
                  your home with copilot CRM.
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
                  Grab qualified leads
                </CrmfeatureSubHeading>
                <CrmPara>
                  Provide ranking to your leads as hot, warm, or cold and assign
                  scores for each lead depending on the engagement.
                </CrmPara>
              </CrmFeatureCard>
            </CrmFeatureMain>
          </Container>
        </ScMainBlock>
        <ScMainBlock>
          <SolutionIntegration />
          <SolutionCTA />
        </ScMainBlock>
        <Productivity />
      </Layout>
    </>
  );
}
