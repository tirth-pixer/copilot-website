import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import Productivity from "../../components/productivity/productivity";
import Testimonial from "../../components/testimonial/testimonial";
import FeatureNavigation from "../../components/feature-navigation/feature-navigation";
import { NextSeo } from "next-seo";
import CTA from "../../components/cta/cta";
import {
  Container,
  LinearBg,
  PrimaryButton,
  SecondryButton,
} from "../../styles/commonStyles";
import Link from "next/link";
import {
  FeatureBtn,
  FeatureHeading,
  FeatureList,
  FeatureListItem,
  FeatureMainTop,
  FeaturePara,
  FeatureRichText,
  FeatureSubHeading,
  FeatureSubPara,
  FeatureTop,
  FutureHeroSection,
  ScFeatureBlock,
  ScFeatureInner,
  ScFeatureLeft,
  ScFeatureRight,
} from "../../styles/featureStyles";
import Image from "next/image";

export default function NewIndex() {
  return (
    <>
      <NextSeo
        title="Sales CRM Software with Goals & Sales Activity tracking - copilot"
        description="Reach your essential targets by setting up your activities in sales activity tracking software. Activity planning helping to reach the purpose in appropriate timeline. Functionalities like customizable activity types, assigning activity to the team, specifying dateline, etc"
      />
      <Layout>
        <Navbar />
        <FutureHeroSection>
          <LinearBg className="featuredetail" />
          <FeatureNavigation />
        </FutureHeroSection>
        <FeatureTop>
          <Container>
            <FeatureMainTop>
              <FeatureHeading>
                CRM Sales Goals &amp; <br />
                Activity Tracker
                <br />
              </FeatureHeading>
              <FeaturePara>
                Enhance productivity by setting your activities and reach your
                objective
              </FeaturePara>
              <FeatureBtn>
                <PrimaryButton>
                  <Link href="">
                    {" "}
                    <a>Get Started for Free</a>
                  </Link>
                </PrimaryButton>
                <SecondryButton>
                  <Link href="/request-demo">
                    <a>Request a Demo</a>
                  </Link>
                </SecondryButton>
              </FeatureBtn>
            </FeatureMainTop>
          </Container>
        </FeatureTop>
        <ScFeatureBlock>
          <Container>
            <ScFeatureInner>
              <ScFeatureLeft>
                <FeatureSubHeading>
                  Record activity for customer
                </FeatureSubHeading>
                <FeatureSubPara>
                  Reach your essential targets by setting up endless activities
                  in CRM
                </FeatureSubPara>
                <FeatureList>
                  <FeatureListItem>Unlimited Activities</FeatureListItem>
                  <FeatureListItem>Centralized Communication</FeatureListItem>
                  <FeatureListItem>Time Tracking</FeatureListItem>
                </FeatureList>
              </ScFeatureLeft>
              <ScFeatureRight>
                <Image
                  src="/images/recoed_activity.svg"
                  loading="lazy"
                  alt="feature-image"
                  width={324}
                  height={323}
                />
              </ScFeatureRight>
            </ScFeatureInner>
          </Container>
        </ScFeatureBlock>
        <ScFeatureBlock>
          <Container>
            <ScFeatureInner>
              <ScFeatureLeft>
                <FeatureSubHeading>Customize activity type</FeatureSubHeading>
                <FeatureSubPara>
                  Focus on your essential tasks by scheduling your activities
                  for future purposes
                </FeatureSubPara>
                <FeatureList>
                  <FeatureListItem>Customize Activities</FeatureListItem>
                  <FeatureListItem>Schedule your activities</FeatureListItem>
                  <FeatureListItem>Keep an eye on your tasks</FeatureListItem>
                </FeatureList>
              </ScFeatureLeft>
              <ScFeatureRight>
                <Image
                  src="/images/custom_fields.svg"
                  loading="lazy"
                  width={394}
                  height={313}
                  alt="feature-image"
                />
              </ScFeatureRight>
            </ScFeatureInner>
          </Container>
        </ScFeatureBlock>
        <ScFeatureBlock>
          <Container>
            <ScFeatureInner>
              <ScFeatureLeft>
                <FeatureSubHeading>Assign activity in team</FeatureSubHeading>
                <FeatureSubPara>
                  Reach your essential aim by setting up endless activities in
                  CRM
                </FeatureSubPara>
                <FeatureList>
                  <FeatureListItem>Qualify your status</FeatureListItem>
                  <FeatureListItem>Get details of your status</FeatureListItem>
                  <FeatureListItem>
                    Assign activities to your team
                  </FeatureListItem>
                </FeatureList>
              </ScFeatureLeft>
              <ScFeatureRight>
                <Image
                  src="/images/customer_status.svg"
                  loading="lazy"
                  alt="feature-image"
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
                <FeatureSubHeading>Assist you for what next</FeatureSubHeading>
                <FeatureSubPara>
                  Focus on your essential tasks by scheduling your activities
                  for future purposes
                </FeatureSubPara>
                <FeatureList>
                  <FeatureListItem>Manage your schedule</FeatureListItem>
                  <FeatureListItem>Track your tasks</FeatureListItem>
                  <FeatureListItem>Assign deadlines</FeatureListItem>
                </FeatureList>
              </ScFeatureLeft>
              <ScFeatureRight>
                <Image
                  src="/images/custom_activity.svg"
                  loading="lazy"
                  alt="feature-image"
                  width={371}
                  height={331}
                />
              </ScFeatureRight>
            </ScFeatureInner>
          </Container>
        </ScFeatureBlock>
        <ScFeatureBlock>
          <Container>
            <ScFeatureInner>
              <ScFeatureLeft>
                <FeatureSubHeading>Specify dateline</FeatureSubHeading>
                <FeatureSubPara>
                  Reach your essential targets by setting up endless <br />
                  activities in CRM
                </FeatureSubPara>
                <FeatureList>
                  <FeatureListItem>Unlimited Activities</FeatureListItem>
                  <FeatureListItem>Centralized Communication</FeatureListItem>
                  <FeatureListItem>Time Tracking</FeatureListItem>
                </FeatureList>
              </ScFeatureLeft>
              <ScFeatureRight>
                <Image
                  src="/images/flowchart.svg"
                  loading="lazy"
                  alt="feature-image"
                  width={367}
                  height={341}
                />
              </ScFeatureRight>
            </ScFeatureInner>
          </Container>
        </ScFeatureBlock>
        <Container>
          <FeatureRichText className="PT60">
            <h2>Set activities and frame high-end goals</h2>
            <p>
              Sales Team Activity Tracking software enables you to keep a list
              of activities and set goals to be accomplished. In addition, it
              makes the synchronized communication possible, which is the need
              of the hour.
            </p>
            <p>
              You can even assign endless activities like making a note,
              scheduling a meet, logging a call, adding a file, etc. One can
              even give tags based on the relevant topic.
            </p>
          </FeatureRichText>
        </Container>
        <CTA />
        <Productivity />
        <Testimonial />
      </Layout>
    </>
  );
}
