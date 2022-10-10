import { Container, FcfeatureWrap } from "../../styles/commonStyles";
import {
  LBtn,
  RBtn,
  SliderLeftChangeIcon,
  SliderRightChangeIcon,
  TestimonialWrap,
  Slider,
  SliderContent,
  SlideImage,
  ContentUpper,
  TestimonialName,
  SlideInnerImg,
} from "./styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function Testimonial() {
  return (
    <>
      <FcfeatureWrap>
        <Container>
          <TestimonialWrap>
            <Carousel
              swipeable={false}
              animationHandler="fade"
              transitionTime={600}
              showArrows={true}
              autoFocus={false}
              infiniteLoop={true}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              centerMode={true}
              centerSlidePercentage={100}
              renderArrowPrev={(onClickHandler, hasPrev) => (
                <LBtn>
                  <SliderLeftChangeIcon onClick={onClickHandler}>
                    <Image
                      width="24px"
                      height="24px"
                      src="/images/left_slide.svg"
                      alt="arrow left"
                    ></Image>
                  </SliderLeftChangeIcon>
                </LBtn>
              )}
              renderArrowNext={(onClickHandler, hasNext) => (
                <RBtn>
                  <SliderRightChangeIcon onClick={onClickHandler}>
                    <Image
                      width="24px"
                      height="24px"
                      src="/images/right_icon.svg"
                      alt="arrow right"
                    ></Image>
                  </SliderRightChangeIcon>
                </RBtn>
              )}
            >
              <Slider className="one">
                <SliderContent>
                  <ContentUpper>
                    <p>
                      Simplicity is key. This is what copilot does very good,
                      while offering all features needed for effective sales
                      tool.I would like to see more integrations with our
                      marketing tooling
                    </p>
                    <p>
                      The best part about copilot is that it not only provides
                      all the functionalities required for the sales team abut
                      also it is very user friendly and easy to adapt.
                    </p>
                  </ContentUpper>
                  <TestimonialName>
                    <h5>Jack</h5>
                    <span>CEO, Acme Corporation</span>
                  </TestimonialName>
                </SliderContent>
                <SlideImage>
                  <SlideInnerImg>
                    <Image
                      width="260px"
                      height="82px"
                      src="/images/foxhub.svg"
                      alt="foxhub"
                    />
                  </SlideInnerImg>
                </SlideImage>
              </Slider>
              <Slider className="two">
                <SliderContent>
                  <ContentUpper>
                    <p>
                      This has a lot of features that you would want in a CRM.
                      There is so much value in the fact that you don't have to
                      be married to a telephony service. When you click to call
                      it will give the option to call with the existing soft
                      phone on your computer.
                    </p>
                    <p>
                      Simple, minimal, clean. I was up and running in minutes
                      with 7 team members in less than 10 minutes. Transparent
                      product RoadMap, it's good to be a part of the journey.
                      They have a long way to go.
                    </p>
                  </ContentUpper>
                  <TestimonialName>
                    <h5>Sayanta b</h5>
                    <span>Manager, Treva Agency</span>
                  </TestimonialName>
                </SliderContent>
                <SlideImage>
                  <SlideInnerImg>
                    <Image
                      width="260px"
                      height="82px"
                      src="/images/treva.svg"
                      alt="treva"
                    />
                  </SlideInnerImg>
                </SlideImage>
              </Slider>
              <Slider className="three">
                <SliderContent>
                  <ContentUpper>
                    <p>
                      “I was a bit skeptical at first, but I'm pleasantly
                      surprised by how easy and also powerful copilot is. It's
                      great for creating your customer lists, creating, tracking
                      and managing deals, following the pipeline, and messaging
                      leads. It has all features of a premium crm.
                    </p>
                    <p>
                      The best thing is that it works intuitively, I like to be
                      in my sales dashboard, it is not overwhelming like some
                      others. There are some minor bugs here and there, but get
                      fixed rapidly too.”
                    </p>
                  </ContentUpper>
                  <TestimonialName>
                    <h5>Emon</h5>
                    <span>CEO, Aven Technologies</span>
                  </TestimonialName>
                </SliderContent>
                <SlideImage>
                  <SlideInnerImg>
                    <Image
                      width="260px"
                      height="82px"
                      src="/images/aven.svg"
                      alt="aven"
                    />
                  </SlideInnerImg>
                </SlideImage>
              </Slider>
            </Carousel>
          </TestimonialWrap>
        </Container>
      </FcfeatureWrap>
    </>
  );
}
