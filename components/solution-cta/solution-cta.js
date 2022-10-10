import Link from "next/link";
import { NewsLatterSection, NewLatterInner, NewsButtonBlock } from "./styles";
import {
  Container,
  PrimaryButton,
  SecondryButton,
} from "../../styles/commonStyles";

export default function SolutionCTA() {
  return (
    <>
      <NewsLatterSection>
        <Container>
          <NewLatterInner>
            <h3>Level Up your startup with copilot CRM</h3>
            <p>Start your 21-day free trial. No credit card is mandatory.</p>
          </NewLatterInner>
          <NewsButtonBlock>
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
          </NewsButtonBlock>
        </Container>
      </NewsLatterSection>
    </>
  );
}
