import { useState, useCallback } from "react";
import { Container } from "../../styles/commonStyles";
import Link from "next/link";
import {
  PricingTable,
  PricingRowMain,
  PricingTableTitle,
  PricingHeading,
  PricingHeadCell,
  PricingToggleWrap,
  PricingHeadingCell,
  PricingTop,
  Price,
  UserMonth,
  GetStarted,
  PricingInfoRow,
  PricingInfoHeader,
  PricingInfo,
  PricingInfoInner,
  PriCingInfoWrapper,
  PricingContentName,
  PricingCell,
  PricingInnertext,
  ToggleBlock,
  ToggleLink,
  LpcSwicther,
  SwicthCover,
  SwicthButton,
  PricingInfoMainRow,
} from "./styles";
import Image from "next/image";

export default function DesktopPricing({ isLifeTimeDealPage }) {
  const [isActivePlan, setIsActivePlan] = useState(true);

  const togglePlan = useCallback(() => {
    setIsActivePlan(!isActivePlan);
  }, [isActivePlan]);

  return (
    <>
      <Container>
        <PricingTable>
          <PricingTableTitle>
            <PricingHeading>
              <h2>Simple pricing</h2>
            </PricingHeading>
            <PricingHeadCell>
              <span>starter</span>
            </PricingHeadCell>
            <PricingHeadCell>
              <span>plus</span>
            </PricingHeadCell>
            <PricingHeadCell>
              <span>pro</span>
            </PricingHeadCell>
            <PricingHeadCell>
              <span>enterprise</span>
            </PricingHeadCell>
          </PricingTableTitle>
          <PricingRowMain>
            <PricingToggleWrap>
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
            </PricingToggleWrap>
            <PricingHeadingCell>
              <PricingTop white={true}>
                <Price>
                  ${isLifeTimeDealPage ? 89 : isActivePlan ? 12 : 9}
                </Price>
                <UserMonth>
                  {isLifeTimeDealPage ? "one time payment" : "user / month"}
                </UserMonth>
                <UserMonth isLifeTimeDealPage={isLifeTimeDealPage}>
                  billed {isActivePlan ? "monthly" : "annually"}
                </UserMonth>
                <GetStarted>
                  <Link href="">
                    <a target="_blank">Get started</a>
                  </Link>
                </GetStarted>
              </PricingTop>
            </PricingHeadingCell>
            <PricingHeadingCell>
              <PricingTop water={true}>
                <Price>
                  ${isLifeTimeDealPage ? 249 : isActivePlan ? 29 : 24}
                </Price>
                <UserMonth>
                  {isLifeTimeDealPage ? "one time payment" : "user / month"}
                </UserMonth>
                <UserMonth isLifeTimeDealPage={isLifeTimeDealPage}>
                  billed {isActivePlan ? "monthly" : "annually"}
                </UserMonth>
                <GetStarted>
                  <Link href="/">
                    <a target="_blank">Get started</a>
                  </Link>
                </GetStarted>
              </PricingTop>
            </PricingHeadingCell>
            <PricingHeadingCell>
              <PricingTop green={true}>
                <Price>
                  ${isLifeTimeDealPage ? 449 : isActivePlan ? 49 : 39}
                </Price>
                <UserMonth>
                  {isLifeTimeDealPage ? "one time payment" : "user / month"}
                </UserMonth>
                <UserMonth isLifeTimeDealPage={isLifeTimeDealPage}>
                  billed {isActivePlan ? "monthly" : "annually"}
                </UserMonth>
                <GetStarted>
                  <Link href="">
                    <a target="_blank">Get started</a>
                  </Link>
                </GetStarted>
              </PricingTop>
            </PricingHeadingCell>
            <PricingHeadingCell>
              <PricingTop dark={true}>
                <Price darkMode={true}>
                  ${isLifeTimeDealPage ? 999 : isActivePlan ? 99 : 79}
                </Price>
                <UserMonth>
                  {isLifeTimeDealPage ? "one time payment" : "user / month"}
                </UserMonth>
                <UserMonth isLifeTimeDealPage={isLifeTimeDealPage}>
                  billed {isActivePlan ? "monthly" : "annually"}
                </UserMonth>
                <GetStarted darkMode={true}>
                  <Link href="/">
                    <a target="_blank">Get started</a>
                  </Link>
                </GetStarted>
              </PricingTop>
            </PricingHeadingCell>
          </PricingRowMain>

          {/* Essetial Parts */}
          <PriCingInfoWrapper>
            <PricingInfoMainRow>
              <PricingInfoHeader>
                <p>Essential</p>
              </PricingInfoHeader>
              <PricingInfo>
                <PricingInfoInner white={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner water={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner green={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner dark={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
            </PricingInfoMainRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Users</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <p>{isLifeTimeDealPage ? "3 users" : "Upto 5"}</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <p>{isLifeTimeDealPage ? "5 users" : "Unlimited"}</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <p>{isLifeTimeDealPage ? "10 users" : "Unlimited"}</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <p>{isLifeTimeDealPage ? "20 users" : "Unlimited"}</p>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Store leads and contacts</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <p>5000</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <p>Unlimited</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <p>Unlimited</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <p>Unlimited</p>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Custom Fields</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-white-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Custom collection</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <p className="dnone">Users</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <p>5</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <p>Unlimited</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <p>Unlimited</p>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Goals</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <p className="dnone">Users</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <p>Upto 5</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <p>Unlimited</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <p>Unlimited</p>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Activity, task & pipeline management</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Activity reminder notifications</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Calendar view and activity management</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Meeting scheduler</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
          </PriCingInfoWrapper>

          {/* Email Parts */}
          <PriCingInfoWrapper>
            <PricingInfoMainRow>
              <PricingInfoHeader>
                <p>Email</p>
              </PricingInfoHeader>
              <PricingInfo>
                <PricingInfoInner white={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner water={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner green={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner dark={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
            </PricingInfoMainRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Email inbox</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Two-way email sync</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Customizable email templates</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <p>Upto 3</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <p>Upto 10</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Email open and click tracking</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Scheduling & reminders</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Group emailing</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <p className="dnone">Upto 5</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <p>Upto 5</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <p>Upto 50</p>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <p>Upto 200</p>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Customizable signatures</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Email Automation</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
          </PriCingInfoWrapper>

          {/* call Parts */}
          <PriCingInfoWrapper>
            <PricingInfoMainRow>
              <PricingInfoHeader>
                <p>call</p>
              </PricingInfoHeader>
              <PricingInfo>
                <PricingInfoInner white={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner water={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner green={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner dark={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
            </PricingInfoMainRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Global calling</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Send/Receive SMS</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Phone Number</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Call Forwarding</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>External Phone Numbers</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Voicemail Drop</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Call Transferring</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Group Numbers</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Call Recording</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
          </PriCingInfoWrapper>

          {/* Reporting Parts */}
          <PriCingInfoWrapper>
            <PricingInfoMainRow>
              <PricingInfoHeader>
                <p>Reporting</p>
              </PricingInfoHeader>
              <PricingInfo>
                <PricingInfoInner white={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner water={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner green={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner dark={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
            </PricingInfoMainRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Opportunities</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Real-time sales activity reporting</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Goals Reports</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Sales leaderboard</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Event Log</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Call Summary</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
          </PriCingInfoWrapper>

          {/* admin Parts */}
          <PriCingInfoWrapper>
            <PricingInfoMainRow>
              <PricingInfoHeader>
                <p>admin</p>
              </PricingInfoHeader>
              <PricingInfo>
                <PricingInfoInner white={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner water={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner green={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner dark={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
            </PricingInfoMainRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>SAML-based single sign-on (SSO)</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Roles & permissions</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>API access</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Zapier integration</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Data import/export</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Two-factor authentication</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
          </PriCingInfoWrapper>

          {/* support Parts */}
          <PriCingInfoWrapper>
            <PricingInfoMainRow>
              <PricingInfoHeader>
                <p>support</p>
              </PricingInfoHeader>
              <PricingInfo>
                <PricingInfoInner white={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner water={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner green={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner dark={true}>
                  <p></p>
                </PricingInfoInner>
              </PricingInfo>
            </PricingInfoMainRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Email support</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Self-serve knowledge base</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Priority support response</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>The dedicated customer success manager</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
            <PricingInfoRow>
              <PricingContentName>
                <p>Individualized onboarding and training</p>
              </PricingContentName>
              <PricingCell>
                <PricingInnertext white={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext water={true}>
                  <div className="crossImage">
                    <Image
                      src="/images/access-icon.svg"
                      width={16}
                      height={13}
                      alt="Cross Image"
                    ></Image>
                  </div>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext green={true}>
                  <Image
                    src="/images/access-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
              <PricingCell>
                <PricingInnertext dark={true}>
                  <Image
                    src="/images/access-white-icon.svg"
                    width={16}
                    height={13}
                    alt="Cross Image"
                  ></Image>
                </PricingInnertext>
              </PricingCell>
            </PricingInfoRow>
          </PriCingInfoWrapper>

          <PriCingInfoWrapper>
            <PricingInfoMainRow>
              <PricingInfoHeader>
                <p className="dnone">Essential</p>
              </PricingInfoHeader>
              <PricingInfo>
                <PricingInfoInner className="lastblock" white={true}>
                  <p>
                    <GetStarted>
                      <Link href="/">
                        <a target="_blank">Get started</a>
                      </Link>
                    </GetStarted>
                  </p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner className="lastblock" water={true}>
                  <p>
                    <GetStarted>
                      <Link href="/">
                        <a target="_blank">Get started</a>
                      </Link>
                    </GetStarted>
                  </p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner className="lastblock" green={true}>
                  <p>
                    <GetStarted>
                      <Link href="/">
                        <a target="_blank">Get started</a>
                      </Link>
                    </GetStarted>
                  </p>
                </PricingInfoInner>
              </PricingInfo>
              <PricingInfo>
                <PricingInfoInner className="lastblock" dark={true}>
                  <p>
                    <GetStarted darkMode={true}>
                      <Link href="/">
                        <a target="_blank">Get started</a>
                      </Link>
                    </GetStarted>
                  </p>
                </PricingInfoInner>
              </PricingInfo>
            </PricingInfoMainRow>
          </PriCingInfoWrapper>
        </PricingTable>
      </Container>
    </>
  );
}
