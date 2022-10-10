import { useState, useEffect } from "react";

import { Container } from "../../styles/commonStyles";
import {
  SliderMain,
  SliderWrap,
  SliderTop,
  SliderHeading,
  SpanBlock,
  SliderTopMain,
  SliderMenuWrap,
  SliderTabMenu,
  SliderContentTab,
  SliderTab,
  SliderContentTop,
  SliderContentBottom,
  SliderTopLeft,
  SliderTopRight,
  SliderTag,
  SliderContentHeading,
  SliderContentSpan,
  SliderContentList,
  SliderContentListItem,
  TabWrapper,
  SpanImage,
  SliderTopSvg,
} from "./styles";

import Image from "next/image";

export default function Slider() {
  const [fade, setFade] = useState(String);
  const triggerFade = (item) => {
    setFade((prevState) => {
      switch (item) {
        case 0:
          return "first";
        case 1:
          return "second";
        case 2:
          return "third";
        case 3:
          return "fourth";
        default:
          return "first";
      }
    });
  };
  useEffect(() => {
    triggerFade(0);
  }, []);
  return (
    <>
      <SliderMain>
        <Container>
          <SliderWrap>
            <SliderTopMain>
              <SliderTop>
                <SliderHeading>With copilot</SliderHeading>
                <SpanBlock>
                  <SliderTopSvg>
                    <Image
                      width={30}
                      height={30}
                      alt="arrow-image"
                      src="/images/slider_arrow.svg"
                    />
                  </SliderTopSvg>
                  <SpanImage>
                    <Image
                      src="/images/slider-top.svg"
                      alt="span-svg"
                      height={25}
                      width={318}
                    ></Image>
                  </SpanImage>
                </SpanBlock>
              </SliderTop>
            </SliderTopMain>
            <TabWrapper>
              <SliderMenuWrap className={fade}>
                <SliderTabMenu onClick={() => triggerFade(0)}>
                  <h3 className={fade === "first" ? fade : ""}>
                    Find Customers
                  </h3>
                </SliderTabMenu>
                <SliderTabMenu onClick={() => triggerFade(1)}>
                  <h3 className={fade === "second" ? fade : ""}>
                    Better Communication
                  </h3>
                </SliderTabMenu>
                <SliderTabMenu onClick={() => triggerFade(2)}>
                  <h3 className={fade === "third" ? fade : ""}>
                    Close more deals
                  </h3>
                </SliderTabMenu>
                <SliderTabMenu onClick={() => triggerFade(3)}>
                  <h3 className={fade === "fourth" ? fade : ""}>
                    Automate and grow
                  </h3>
                </SliderTabMenu>
              </SliderMenuWrap>
              <SliderContentTab>
                <SliderTab first={fade === "first"} className="first">
                  <SliderContentTop>
                    <SliderTopLeft>
                      <SliderTag>
                        <span>Discover</span>
                      </SliderTag>
                      <SliderContentHeading>
                        Find Customers
                      </SliderContentHeading>
                      <SliderContentSpan>
                        Discover and organize prospect customers effectively.
                      </SliderContentSpan>
                    </SliderTopLeft>
                    <SliderTopRight>
                      <SliderContentList>
                        <SliderContentListItem>
                          Easy & Faster lead collection
                        </SliderContentListItem>
                        <SliderContentListItem>
                          Collect right leads from the right source
                        </SliderContentListItem>
                        <SliderContentListItem>
                          Collect leads from 1000+ applications
                        </SliderContentListItem>
                        <SliderContentListItem>
                          Classify your customers with segment
                        </SliderContentListItem>
                      </SliderContentList>
                    </SliderTopRight>
                  </SliderContentTop>
                  <SliderContentBottom>
                    <Image
                      src="/images/features_img1.webp"
                      alt="discover-feature"
                      height={711}
                      width={1138}
                    ></Image>
                  </SliderContentBottom>
                </SliderTab>
                <SliderTab second={fade === "second"} className="second">
                  <SliderContentTop>
                    <SliderTopLeft>
                      <SliderTag>
                        <span>Engage</span>
                      </SliderTag>
                      <SliderContentHeading>
                        Better Communication
                      </SliderContentHeading>
                      <SliderContentSpan>
                        Smartly communicate with customers by email, call, SMS,
                        and more.
                      </SliderContentSpan>
                    </SliderTopLeft>
                    <SliderTopRight>
                      <SliderContentList>
                        <SliderContentListItem>
                          Two-way mail syncing
                        </SliderContentListItem>
                        <SliderContentListItem>
                          Built-in Call & SMS.
                        </SliderContentListItem>
                        <SliderContentListItem>
                          Auto record activity
                        </SliderContentListItem>
                        <SliderContentListItem>
                          Plan meeting and activity
                        </SliderContentListItem>
                      </SliderContentList>
                    </SliderTopRight>
                  </SliderContentTop>
                  <SliderContentBottom>
                    <Image
                      src="/images/features_img2.webp"
                      alt="engage-feature"
                      height={711}
                      width={1138}
                    ></Image>
                  </SliderContentBottom>
                </SliderTab>
                <SliderTab third={fade === "third"} className="third">
                  <SliderContentTop>
                    <SliderTopLeft>
                      <SliderTag>
                        <span>Win</span>
                      </SliderTag>
                      <SliderContentHeading>
                        Close more deals
                      </SliderContentHeading>
                      <SliderContentSpan>
                        Make sales visual with customizable pipelines and sales
                        forecasting.
                      </SliderContentSpan>
                    </SliderTopLeft>
                    <SliderTopRight>
                      <SliderContentList>
                        <SliderContentListItem>
                          Visual pipelines
                        </SliderContentListItem>
                        <SliderContentListItem>
                          Sales flow at a glance
                        </SliderContentListItem>
                        <SliderContentListItem>
                          Customize sales process
                        </SliderContentListItem>
                        <SliderContentListItem>
                          Sales forecasting
                        </SliderContentListItem>
                      </SliderContentList>
                    </SliderTopRight>
                  </SliderContentTop>
                  <SliderContentBottom>
                    <Image
                      src="/images/features_img3.webp"
                      alt="win-feature"
                      height={711}
                      width={1138}
                    ></Image>
                  </SliderContentBottom>
                </SliderTab>
                <SliderTab fourth={fade === "fourth"} className="fourth">
                  <SliderContentTop>
                    <SliderTopLeft>
                      <SliderTag>
                        <span>Grow</span>
                      </SliderTag>
                      <SliderContentHeading>
                        Automate and grow
                      </SliderContentHeading>
                      <SliderContentSpan>
                        Define business growth by making valuable and quick
                        decisions.
                      </SliderContentSpan>
                    </SliderTopLeft>
                    <SliderTopRight>
                      <SliderContentList>
                        <SliderContentListItem>
                          Visual data representation
                        </SliderContentListItem>
                        <SliderContentListItem>
                          Understand the performance of sales
                        </SliderContentListItem>
                        <SliderContentListItem>
                          Personalized dashboard
                        </SliderContentListItem>
                        <SliderContentListItem>
                          Advanced activity reports
                        </SliderContentListItem>
                      </SliderContentList>
                    </SliderTopRight>
                  </SliderContentTop>
                  <SliderContentBottom>
                    <Image
                      src="/images/features_img4.webp"
                      alt="grow-feature"
                      height={711}
                      width={1138}
                    ></Image>
                  </SliderContentBottom>
                </SliderTab>
              </SliderContentTab>
            </TabWrapper>
          </SliderWrap>
        </Container>
      </SliderMain>
    </>
  );
}
