import {
  Container,
  FcfeatureWrap,
  PrimaryButton,
  SecondryButton,
} from "../../styles/commonStyles";
import { SectionHeading, CtaInner, CtaLeft, CtaRight, CtaPara } from "./styles";
import Link from "next/link";

export default function CTA() {
  return (
    <>
      <FcfeatureWrap>
        <Container>
          <CtaInner>
            <CtaLeft>
              <SectionHeading>
                Are sales hectic? <br /> Make it easier with copilot
              </SectionHeading>
              <CtaPara>
                copilot helps you improve your customer service, make more sales
                and increase customer loyalty
              </CtaPara>
            </CtaLeft>
            <CtaRight>
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
            </CtaRight>
          </CtaInner>
        </Container>
      </FcfeatureWrap>
    </>
  );
}
