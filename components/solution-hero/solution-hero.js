import Image from "next/image";
import Link from "next/link";
import {
  Container,
  PrimaryButton,
  SecondryButton,
} from "../../styles/commonStyles";
import {
  SolutionHeroWrap,
  SolutionHeroLeft,
  SolutionHeroRight,
  SolutionHeading,
  SolutionHeroPara,
  HeroBtnBlock,
  AnnounceList,
  AnnounceListItem,
  SolutionHeroImage,
  SolutionLogos,
  LogoHeadText,
  SolutionLogoList,
  SolutionListItem,
} from "./styles";

const SolutionHero = (props) => {
  const { HeroHeading, HeroPara } = props;
  return (
    <>
      <Container>
        <SolutionHeroWrap>
          <SolutionHeroLeft>
            <SolutionHeading>{HeroHeading}</SolutionHeading>
            <SolutionHeroPara>{HeroPara}</SolutionHeroPara>
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
            <AnnounceList>
              <AnnounceListItem>
                <Image
                  src="/images/home-right.svg"
                  loading="lazy"
                  width="14"
                  height="11"
                  alt="right-icon"
                />
                <span>Free 30-days trial</span>
              </AnnounceListItem>
              <AnnounceListItem>
                <Image
                  src="/images/home-right.svg"
                  loading="lazy"
                  width="14"
                  height="11"
                  alt="right-icon"
                />
                <span>Easy setup</span>
              </AnnounceListItem>
              <AnnounceListItem>
                <Image
                  src="/images/home-right.svg"
                  loading="lazy"
                  width="14"
                  height="11"
                  alt="right-icon"
                />
                <span>Cancel anytime</span>
              </AnnounceListItem>
            </AnnounceList>
          </SolutionHeroLeft>
          <SolutionHeroRight>
            <SolutionHeroImage>
              <Image
                src="/images/solution-hero.webp"
                loading="lazy"
                height="440"
                width="725"
                alt="Hero Image"
                layout="responsive"
              />
            </SolutionHeroImage>
          </SolutionHeroRight>
        </SolutionHeroWrap>
        <SolutionLogos>
          <LogoHeadText>TRUSTED BY 5000+ LEADING COMPANIES</LogoHeadText>
          <SolutionLogoList>
            <SolutionListItem>
              <Image
                src="/images/Pushowl-Logo.svg"
                loading="lazy"
                alt="Brand Logo"
                height="32"
                width="122"
              />
            </SolutionListItem>
            <SolutionListItem>
              <Image
                src="/images/Keeper-Tax-Logo.svg"
                loading="lazy"
                alt="Brand Logo"
                height="32px"
                width="165px"
              />
            </SolutionListItem>
            <SolutionListItem>
              <Image
                src="/images/Expertlead-Logo.svg"
                loading="lazy"
                alt="Brand Logo"
                height="32"
                width="158"
              />
            </SolutionListItem>
            <SolutionListItem>
              <Image
                src="/images/Xoxoday-Logo.svg"
                loading="lazy"
                alt="Brand Logo"
                height="30"
                width="120"
              />
            </SolutionListItem>
            <SolutionListItem>
              <Image
                src="/images/Bearbook-Logo.svg"
                loading="lazy"
                alt="Brand Logo"
                height="32"
                width="140"
              />
            </SolutionListItem>
            <SolutionListItem>
              <Image
                src="/images/Eventgenius-Logo.svg"
                loading="lazy"
                alt="Brand Logo"
                height="32"
                width="145"
              />
            </SolutionListItem>
            <SolutionListItem>
              <Image
                src="/images/Neutroon-Logo.svg"
                loading="lazy"
                alt="Brand Logo"
                height="32"
                width="160"
              />
            </SolutionListItem>
            <SolutionListItem>
              <Image
                src="/images/Heliostar-Logo.svg"
                loading="lazy"
                alt="Brand Logo"
                height="32"
                width="175"
              />
            </SolutionListItem>
          </SolutionLogoList>
        </SolutionLogos>
      </Container>
    </>
  );
};

export default SolutionHero;
