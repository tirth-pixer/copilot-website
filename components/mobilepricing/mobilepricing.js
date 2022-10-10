import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import { Container } from "../../styles/commonStyles";
import { Accordion, Panel } from "baseui/accordion";
import {
  MobilePricingCard,
  MobilePricingMain,
  MobilePricingHeader,
  ToggleBlock,
  ToggleLink,
  LpcSwicther,
  SwicthCover,
  SwicthButton,
  MobilePricingHeading,
  MobilePricingCardWrap,
  PricingType,
  PricingBlock,
  Price,
  PricingDetail,
  UserMonth,
  GetStarted,
  PricingMainFeature,
  PricingTanMenu,
  FeatureListWrap,
  FeatureList,
  FeatureListItem,
  HeaderListItem,
} from "./styles";

export default function MobilePricing({ isLifeTimeDealPage }) {
  const [isActivePlan, setIsActivePlan] = useState(true);

  const togglePlan = useCallback(() => {
    setIsActivePlan(!isActivePlan);
  }, [isActivePlan]);

  const styles = {
    PanelContainer: {
      style: ({ $theme }) => ({
        margin: "0",
        borderBottomWidth: "0",
      }),
    },
    Content: {
      style: ({ $theme }) => ({
        paddingRight: "0",
        paddingLeft: "0",
        paddingTop: "0",
        paddingBottom: "0",
        backgroundColor: "transparent",
      }),
    },
    Header: {
      style: ({ $theme }) => ({
        paddingRight: "0",
        paddingLeft: "0",
        paddingTop: "0",
        paddingBottom: "0",
        backgroundColor: "transparent",
      }),
    },
    ToggleIcon: {
      style: ({ $theme }) => ({
        display: "none",
      }),
    },
  };

  return (
    <>
      <Container>
        <MobilePricingMain>
          <MobilePricingHeader>
            <MobilePricingHeading>Simple Pricing</MobilePricingHeading>
            <ToggleBlock isLifeTimeDealPage={isLifeTimeDealPage}>
              <ToggleLink>
                <span className={!isActivePlan && "activePlan"}>
                  Pay annually
                </span>
              </ToggleLink>
              <LpcSwicther>
                <SwicthCover onClick={togglePlan}>
                  <SwicthButton
                    className={isActivePlan && "toggle-button"}
                  ></SwicthButton>
                </SwicthCover>
              </LpcSwicther>
              <ToggleLink>
                <span className={isActivePlan && "activePlan"}>
                  Pay monthly
                </span>
              </ToggleLink>
            </ToggleBlock>
          </MobilePricingHeader>
          <MobilePricingCardWrap>
            {/* First card  */}
            <MobilePricingCard white={true}>
              <PricingType>free</PricingType>
              <PricingBlock>
                <Price>
                  ${isLifeTimeDealPage ? 89 : isActivePlan ? 12 : 9}
                </Price>
                <PricingDetail>
                  <UserMonth>
                    {isLifeTimeDealPage ? "one time payment" : "user / month"}
                  </UserMonth>
                  <UserMonth isLifeTimeDealPage={isLifeTimeDealPage}>
                    billed {isActivePlan ? "monthly" : "annually"}
                  </UserMonth>
                </PricingDetail>
              </PricingBlock>
              <GetStarted>
                <Link href="">
                  {" "}
                  <a target="_blank">Get started</a>
                </Link>
              </GetStarted>
              <PricingMainFeature>
                {isLifeTimeDealPage ? "3 users" : "Upto 5 Users"}
              </PricingMainFeature>
              <PricingMainFeature>
                5000 store leads and contacts
              </PricingMainFeature>
              <Accordion overrides={styles}>
                <Panel
                  title={
                    <PricingTanMenu>
                      <span>all features</span>
                      <Image
                        src="/images/md-accordian.svg"
                        width={12}
                        height={12}
                        alt="icon"
                      ></Image>
                    </PricingTanMenu>
                  }
                >
                  <FeatureListWrap>
                    <FeatureList>
                      <HeaderListItem>Essential</HeaderListItem>
                      <FeatureListItem>
                        Activity, task & pipeline management
                      </FeatureListItem>
                      <FeatureListItem>
                        Activity reminder notifications
                      </FeatureListItem>
                      <FeatureListItem>
                        Calendar view and activity management
                      </FeatureListItem>
                      <FeatureListItem>Meeting scheduler</FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Email</HeaderListItem>
                      <FeatureListItem>Email inbox</FeatureListItem>
                      <FeatureListItem>
                        Upto 3 customizable email templates
                      </FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Call</HeaderListItem>
                      <FeatureListItem>Global calling</FeatureListItem>
                      <FeatureListItem>Send/Receive SMS</FeatureListItem>
                      <FeatureListItem>External Phone Numbers</FeatureListItem>
                      <FeatureListItem>Meeting scheduler</FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Reporting</HeaderListItem>
                      <FeatureListItem>Opportunities</FeatureListItem>
                      <FeatureListItem>Call Summary</FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Admin</HeaderListItem>
                      <FeatureListItem>Roles & permissions</FeatureListItem>
                      <FeatureListItem>Zapier integration</FeatureListItem>
                      <FeatureListItem>Data import/export</FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Support</HeaderListItem>
                      <FeatureListItem>Email support</FeatureListItem>
                      <FeatureListItem>
                        Self-serve knowledge base
                      </FeatureListItem>
                    </FeatureList>
                  </FeatureListWrap>
                </Panel>
              </Accordion>
            </MobilePricingCard>

            {/* plus Card */}
            <MobilePricingCard water={true}>
              <PricingType>Plus</PricingType>
              <PricingBlock>
                <Price>
                  ${isLifeTimeDealPage ? 249 : isActivePlan ? 29 : 24}
                </Price>
                <PricingDetail>
                  <UserMonth>
                    {isLifeTimeDealPage ? "one time payment" : "user / month"}
                  </UserMonth>
                  <UserMonth isLifeTimeDealPage={isLifeTimeDealPage}>
                    billed {isActivePlan ? "monthly" : "annually"}
                  </UserMonth>
                </PricingDetail>
              </PricingBlock>
              <GetStarted>
                <Link href="">
                  {" "}
                  <a target="_blank">Get started</a>
                </Link>
              </GetStarted>
              <PricingMainFeature>
                {isLifeTimeDealPage ? "5 Users" : "Unlimited Users"}
              </PricingMainFeature>
              <PricingMainFeature>
                Unlimited store leads and contacts
              </PricingMainFeature>
              <PricingMainFeature>5 custom collection</PricingMainFeature>
              <PricingMainFeature>Upto 5 goals</PricingMainFeature>
              <Accordion overrides={styles}>
                <Panel
                  title={
                    <PricingTanMenu>
                      <span>all features</span>
                      <Image
                        src="/images/md-accordian.svg"
                        width={12}
                        height={12}
                        alt="icon"
                      ></Image>
                    </PricingTanMenu>
                  }
                >
                  <FeatureListWrap>
                    <FeatureList>
                      <HeaderListItem>Essential</HeaderListItem>
                      <FeatureListItem>Custom Fields</FeatureListItem>
                      <FeatureListItem>
                        Activity, task & pipeline management
                      </FeatureListItem>
                      <FeatureListItem>
                        Activity reminder notifications
                      </FeatureListItem>
                      <FeatureListItem>
                        Calendar view and activity management
                      </FeatureListItem>
                      <FeatureListItem>Meeting scheduler</FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Email</HeaderListItem>
                      <FeatureListItem>Email inbox</FeatureListItem>
                      <FeatureListItem>
                        Upto 10 customizable email templates
                      </FeatureListItem>
                      <FeatureListItem>Two-way email sync</FeatureListItem>
                      <FeatureListItem>
                        Email open and click tracking
                      </FeatureListItem>
                      <FeatureListItem>Upto 5 group emailing</FeatureListItem>
                      <FeatureListItem>Customizable signatures</FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Call</HeaderListItem>
                      <FeatureListItem>Global calling</FeatureListItem>
                      <FeatureListItem>Send/Receive SMS</FeatureListItem>
                      <FeatureListItem>External Phone Numbers</FeatureListItem>
                      <FeatureListItem>Phone Numbers</FeatureListItem>
                      <FeatureListItem>Call Recording</FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Reporting</HeaderListItem>
                      <FeatureListItem>Opportunities</FeatureListItem>
                      <FeatureListItem>
                        Real-time sales activity reporting
                      </FeatureListItem>
                      <FeatureListItem>Event Log</FeatureListItem>
                      <FeatureListItem>Call Summary</FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Admin</HeaderListItem>
                      <FeatureListItem>Roles & permissions</FeatureListItem>
                      <FeatureListItem>API access</FeatureListItem>
                      <FeatureListItem>Zapier integration</FeatureListItem>
                      <FeatureListItem>Data import/export</FeatureListItem>
                      <FeatureListItem>
                        Two-factor authentication
                      </FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Support</HeaderListItem>
                      <FeatureListItem>Email support</FeatureListItem>
                      <FeatureListItem>
                        Self-serve knowledge base
                      </FeatureListItem>
                      <FeatureListItem>
                        Priority support response
                      </FeatureListItem>
                    </FeatureList>
                  </FeatureListWrap>
                </Panel>
              </Accordion>
            </MobilePricingCard>

            {/* pro Card */}
            <MobilePricingCard green={true}>
              <PricingType>Pro</PricingType>
              <PricingBlock>
                <Price>
                  ${isLifeTimeDealPage ? 449 : isActivePlan ? 49 : 39}
                </Price>
                <PricingDetail>
                  <UserMonth>
                    {isLifeTimeDealPage ? "one time payment" : "user / month"}
                  </UserMonth>
                  <UserMonth isLifeTimeDealPage={isLifeTimeDealPage}>
                    billed {isActivePlan ? "monthly" : "annually"}
                  </UserMonth>
                </PricingDetail>
              </PricingBlock>
              <GetStarted>
                <Link href="">
                  {" "}
                  <a target="_blank">Get started</a>
                </Link>
              </GetStarted>
              <PricingMainFeature>
                {isLifeTimeDealPage ? "10 users" : "Unlimited Users"}
              </PricingMainFeature>
              <PricingMainFeature>
                Unlimited store leads and contacts
              </PricingMainFeature>
              <PricingMainFeature>Unlimited collection</PricingMainFeature>
              <PricingMainFeature>Unlimited goals</PricingMainFeature>
              <Accordion overrides={styles}>
                <Panel
                  title={
                    <PricingTanMenu>
                      <span>all features</span>
                      <Image
                        src="/images/md-accordian.svg"
                        width={12}
                        height={12}
                        alt="icon"
                      ></Image>
                    </PricingTanMenu>
                  }
                >
                  <FeatureListWrap>
                    <FeatureList>
                      <HeaderListItem>Essential</HeaderListItem>
                      <FeatureListItem>Custom Fields</FeatureListItem>
                      <FeatureListItem>
                        Activity, task & pipeline management
                      </FeatureListItem>
                      <FeatureListItem>
                        Activity reminder notifications
                      </FeatureListItem>
                      <FeatureListItem>
                        Calendar view and activity management
                      </FeatureListItem>
                      <FeatureListItem>Meeting scheduler</FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Email</HeaderListItem>
                      <FeatureListItem>Email inbox</FeatureListItem>
                      <FeatureListItem>
                        Customizable email templates
                      </FeatureListItem>
                      <FeatureListItem>Two-way email sync</FeatureListItem>
                      <FeatureListItem>
                        Email open and click tracking
                      </FeatureListItem>
                      <FeatureListItem>Scheduling & reminders</FeatureListItem>
                      <FeatureListItem>Upto 50 group emailing</FeatureListItem>
                      <FeatureListItem>Customizable signatures</FeatureListItem>
                      <FeatureListItem>Email Automation</FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Call</HeaderListItem>
                      <FeatureListItem>Global calling</FeatureListItem>
                      <FeatureListItem>Send/Receive SMS</FeatureListItem>
                      <FeatureListItem>External Phone Numbers</FeatureListItem>
                      <FeatureListItem>Phone Numbers</FeatureListItem>
                      <FeatureListItem>Call Forwarding</FeatureListItem>
                      <FeatureListItem>Group Numbers</FeatureListItem>
                      <FeatureListItem>Call Recording</FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Reporting</HeaderListItem>
                      <FeatureListItem>Opportunities</FeatureListItem>
                      <FeatureListItem>
                        Real-time sales activity reporting
                      </FeatureListItem>
                      <FeatureListItem>Goals Reports</FeatureListItem>
                      <FeatureListItem>Sales leaderboard</FeatureListItem>
                      <FeatureListItem>Event Log</FeatureListItem>
                      <FeatureListItem>Call Summary</FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Admin</HeaderListItem>
                      <FeatureListItem>
                        SAML-based single sign-on (SSO)
                      </FeatureListItem>
                      <FeatureListItem>Roles & permissions</FeatureListItem>
                      <FeatureListItem>API access</FeatureListItem>
                      <FeatureListItem>Zapier integration</FeatureListItem>
                      <FeatureListItem>Data import/export</FeatureListItem>
                      <FeatureListItem>
                        Two-factor authentication
                      </FeatureListItem>
                    </FeatureList>
                    <FeatureList>
                      <HeaderListItem>Support</HeaderListItem>
                      <FeatureListItem>Email support</FeatureListItem>
                      <FeatureListItem>
                        Self-serve knowledge base
                      </FeatureListItem>
                      <FeatureListItem>
                        Priority support response
                      </FeatureListItem>
                      <FeatureListItem>
                        Dedicated customer success manager
                      </FeatureListItem>
                      <FeatureListItem>
                        Individualized onboarding and training
                      </FeatureListItem>
                    </FeatureList>
                  </FeatureListWrap>
                </Panel>
              </Accordion>
            </MobilePricingCard>

            {/* enterprice Card */}
            <MobilePricingCard dark={true}>
              <PricingType darkMode={true}>Enterprice</PricingType>
              <PricingBlock>
                <Price darkMode={true}>
                  {" "}
                  ${isLifeTimeDealPage ? 999 : isActivePlan ? 99 : 79}
                </Price>
                <PricingDetail>
                  <UserMonth>
                    {isLifeTimeDealPage ? "one time payment" : "user / month"}
                  </UserMonth>
                  <UserMonth isLifeTimeDealPage={isLifeTimeDealPage}>
                    billed {isActivePlan ? "monthly" : "annually"}
                  </UserMonth>
                </PricingDetail>
              </PricingBlock>
              <GetStarted darkMode={true}>
                <Link href="">
                  {" "}
                  <a target="_blank">Get started</a>
                </Link>
              </GetStarted>
              <PricingMainFeature darkMode={true}>
                {isLifeTimeDealPage ? "20 users" : "Unlimited Users"}
              </PricingMainFeature>
              <PricingMainFeature darkMode={true}>
                Unlimited store leads and contacts
              </PricingMainFeature>
              <PricingMainFeature darkMode={true}>
                Unlimited collection
              </PricingMainFeature>
              <PricingMainFeature darkMode={true}>
                Unlimited goals
              </PricingMainFeature>
              <Accordion overrides={styles}>
                <Panel
                  title={
                    <PricingTanMenu>
                      <span>all features</span>
                      <Image
                        src="/images/md-accordian.svg"
                        width={12}
                        height={12}
                        alt="icon"
                      ></Image>
                    </PricingTanMenu>
                  }
                >
                  <FeatureListWrap>
                    <FeatureList darkMode={true}>
                      <HeaderListItem>Essential</HeaderListItem>
                      <FeatureListItem>Custom Fields</FeatureListItem>
                      <FeatureListItem>
                        Activity, task & pipeline management
                      </FeatureListItem>
                      <FeatureListItem>
                        Activity reminder notifications
                      </FeatureListItem>
                      <FeatureListItem>
                        Calendar view and activity management
                      </FeatureListItem>
                      <FeatureListItem>Meeting scheduler</FeatureListItem>
                    </FeatureList>
                    <FeatureList darkMode={true}>
                      <HeaderListItem>Email</HeaderListItem>
                      <FeatureListItem>Email inbox</FeatureListItem>
                      <FeatureListItem>
                        Customizable email templates
                      </FeatureListItem>
                      <FeatureListItem>Two-way email sync</FeatureListItem>
                      <FeatureListItem>
                        Email open and click tracking
                      </FeatureListItem>
                      <FeatureListItem>Scheduling & reminders</FeatureListItem>
                      <FeatureListItem>Upto 200 group emailing</FeatureListItem>
                      <FeatureListItem>Customizable signatures</FeatureListItem>
                      <FeatureListItem>Email Automation</FeatureListItem>
                    </FeatureList>
                    <FeatureList darkMode={true}>
                      <HeaderListItem>Call</HeaderListItem>
                      <FeatureListItem>Global calling</FeatureListItem>
                      <FeatureListItem>Send/Receive SMS</FeatureListItem>
                      <FeatureListItem>External Phone Numbers</FeatureListItem>
                      <FeatureListItem>Phone Numbers</FeatureListItem>
                      <FeatureListItem>Call Forwarding</FeatureListItem>
                      <FeatureListItem>Call Transferring</FeatureListItem>
                      <FeatureListItem>Voicemail Drop</FeatureListItem>
                      <FeatureListItem>Group Numbers</FeatureListItem>
                      <FeatureListItem>Call Recording</FeatureListItem>
                    </FeatureList>
                    <FeatureList darkMode={true}>
                      <HeaderListItem>Reporting</HeaderListItem>
                      <FeatureListItem>Opportunities</FeatureListItem>
                      <FeatureListItem>
                        Real-time sales activity reporting
                      </FeatureListItem>
                      <FeatureListItem>Goals Reports</FeatureListItem>
                      <FeatureListItem>Sales leaderboard</FeatureListItem>
                      <FeatureListItem>Event Log</FeatureListItem>
                      <FeatureListItem>Call Summary</FeatureListItem>
                    </FeatureList>
                    <FeatureList darkMode={true}>
                      <HeaderListItem>Admin</HeaderListItem>
                      <FeatureListItem>
                        SAML-based single sign-on (SSO)
                      </FeatureListItem>
                      <FeatureListItem>Roles & permissions</FeatureListItem>
                      <FeatureListItem>API access</FeatureListItem>
                      <FeatureListItem>Zapier integration</FeatureListItem>
                      <FeatureListItem>Data import/export</FeatureListItem>
                      <FeatureListItem>
                        Two-factor authentication
                      </FeatureListItem>
                    </FeatureList>
                    <FeatureList darkMode={true}>
                      <HeaderListItem>Support</HeaderListItem>
                      <FeatureListItem>Email support</FeatureListItem>
                      <FeatureListItem>
                        Self-serve knowledge base
                      </FeatureListItem>
                      <FeatureListItem>
                        Priority support response
                      </FeatureListItem>
                      <FeatureListItem>
                        Dedicated customer success manager
                      </FeatureListItem>
                      <FeatureListItem>
                        Individualized onboarding and training
                      </FeatureListItem>
                    </FeatureList>
                  </FeatureListWrap>
                </Panel>
              </Accordion>
            </MobilePricingCard>
          </MobilePricingCardWrap>
        </MobilePricingMain>
      </Container>
    </>
  );
}
