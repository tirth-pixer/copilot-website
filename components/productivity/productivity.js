import { Container } from "../../styles/commonStyles";
import {
  ProductivityMain,
  ProductivityWrap,
  ProductivtyInner,
  ProductivityImage,
  ProductivityList,
  ProductivityItem,
  ProductivityNumber,
  ProductivityTextBlock,
  ProductivityHead,
  ProductivitySpan,
  Circle,
  ProductivityPara,
  LinearBg,
  SectionHeading,
} from "./styles";
import Image from "next/image";

export default function Productivity() {
  return (
    <>
      <ProductivityMain>
        <ProductivityWrap>
          <Container>
            <ProductivtyInner>
              <SectionHeading className="center">
                Unlock your sales productivity
              </SectionHeading>
              <ProductivityImage>
                <Image
                  width="2336px"
                  height="1200px"
                  src="/images/Productivity.webp"
                  alt="productivity"
                  class="product-img"
                />
              </ProductivityImage>
              <ProductivityList>
                <ProductivityItem>
                  <ProductivityNumber>38%</ProductivityNumber>
                  <ProductivityTextBlock>
                    <ProductivityHead>Drive More Pipeline</ProductivityHead>
                    <ProductivitySpan>
                      Close more opportunities
                    </ProductivitySpan>
                  </ProductivityTextBlock>
                </ProductivityItem>
                <Circle></Circle>
                <ProductivityItem>
                  <ProductivityNumber>25%</ProductivityNumber>
                  <ProductivityTextBlock>
                    <ProductivityHead>Achieve Revenue Goals</ProductivityHead>
                    <ProductivitySpan>Generate More revenue</ProductivitySpan>
                  </ProductivityTextBlock>
                </ProductivityItem>
              </ProductivityList>
              <ProductivityPara>
                The average sales rep spends 60% of their time on non-selling
                activities. copilot helps sales people sell more without
                spending more time on non-selling activities
              </ProductivityPara>
            </ProductivtyInner>
          </Container>
          <LinearBg></LinearBg>
        </ProductivityWrap>
      </ProductivityMain>
    </>
  );
}
