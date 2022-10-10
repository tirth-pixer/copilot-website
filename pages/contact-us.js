import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar/navbar";
import Testimonial from "../components/testimonial/testimonial";
import { addNewContact } from "../services/webHooksService";
import {
  Container,
  LinearBg,
  PrimaryButton,
  ScFeatureHeading,
  ScFeaturePara,
  ScHeroSection,
} from "../styles/commonStyles";
import {
  ContactBlock,
  ContactDetails,
  ContactHeading,
  ContactLeft,
  ContactLinkBlock,
  ContactPara,
  ContactRight,
  ContactUsWrapper,
  Form,
  Input,
  InputBlock,
  Lable,
  Linkdiv,
  LinkHeading,
  SocialLinkList,
  SocialLinkListItem,
  TextArea,
  SuccessWrap,
} from "../styles/contactUsStyles";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [help, setHelp] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        const payload = {
          name,
          email,
          message,
          help,
        };
        const result = await addNewContact(payload);
        if (result) {
          setIsSuccess(true);
        } else {
          setIsFail(true);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    },
    [name, email, message, help]
  );

  return (
    <>
      <NextSeo
        title="Are you having queries regarding copilot CRM?"
        description="Contact us for scheduling a copilot demo, share your comments, or clear a query by filling the form below. Book your free demo today and avail the best CRM!"
      />
      <Layout>
        <Navbar />
        <ScHeroSection>
          <LinearBg className="feature" />
          <Container>
            <ScFeatureHeading>Get In Touch With Us</ScFeatureHeading>
            <ScFeaturePara>
              Just answer a few simple questions and we will personalize the
              right experience for you.
            </ScFeaturePara>
          </Container>
        </ScHeroSection>
        <ContactUsWrapper>
          <Container>
            <ContactBlock>
              <ContactLeft>
                <ContactHeading>
                  Have Project to discuss? Let's Connect.
                </ContactHeading>
                <ContactPara>
                  Any Questions or Comments? Interested in a demo? Send us a
                  message, and we'll get back to you within 24 hours.
                </ContactPara>
                <ContactLinkBlock>
                  <ContactDetails>
                    <LinkHeading>Phone :</LinkHeading>
                    <Linkdiv>
                      <Link href="tel:+918866692348">
                        <a>+918866692348</a>
                      </Link>
                    </Linkdiv>
                    <Linkdiv>
                      <Link href="tel:+918866692348">
                        <a>+918866692348</a>
                      </Link>
                    </Linkdiv>
                  </ContactDetails>
                </ContactLinkBlock>
                <ContactLinkBlock>
                  <ContactDetails>
                    <LinkHeading>Email :</LinkHeading>
                    <Linkdiv>
                      <Link href="mailto:hello@salescamp.app">
                        <a>hello@salescamp.app</a>
                      </Link>
                    </Linkdiv>
                  </ContactDetails>
                </ContactLinkBlock>
                <SocialLinkList>
                  <SocialLinkListItem>
                    <Link href="https://www.linkedin.com/company/copilot">
                      <a>
                        <Image
                          src="/images/cu-linkedin.svg"
                          width={32}
                          height={32}
                          alt="linkedin-icon"
                        />
                      </a>
                    </Link>
                  </SocialLinkListItem>
                  <SocialLinkListItem>
                    <Link href="https://www.youtube.com/channel/UCdgma87EVzs6EqHaSGXfirg">
                      <a>
                        <Image
                          src="/images/cu-youtube.svg"
                          width={32}
                          height={32}
                          alt="linkedin-icon"
                        />
                      </a>
                    </Link>
                  </SocialLinkListItem>
                  <SocialLinkListItem>
                    <Link href="https://www.instagram.com/accounts/login/?next=/copilot.app/">
                      <a>
                        <Image
                          src="/images/cu-Insta.svg"
                          width={32}
                          height={32}
                          alt="linkedin-icon"
                        />
                      </a>
                    </Link>
                  </SocialLinkListItem>
                  <SocialLinkListItem>
                    <Link href="https://twitter.com/home">
                      <a>
                        <Image
                          src="/images/cu-skype.svg"
                          width={32}
                          height={32}
                          alt="linkedin-icon"
                        />
                      </a>
                    </Link>
                  </SocialLinkListItem>
                </SocialLinkList>
              </ContactLeft>
              <ContactRight>
                <Form onSubmit={onSubmit}>
                  {!isSuccess && !isFail ? (
                    <>
                      <InputBlock>
                        <Lable>Name</Lable>
                        <Input
                          type="text"
                          placeholder="Enter your name"
                          maxlength="256"
                          name="Name"
                          data-name="Name"
                          id="Name"
                          required={true}
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </InputBlock>
                      <InputBlock>
                        <Lable>Email Address</Lable>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          maxlength="256"
                          name="email"
                          data-name="Email"
                          id="email"
                          required={true}
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </InputBlock>
                      <InputBlock>
                        <Lable>What do you want us to craft?</Lable>
                        <TextArea
                          placeholder="Enter your message..."
                          value={message}
                          maxlength="5000"
                          id="Message"
                          name="Message"
                          data-name="Message"
                          required={true}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                        />
                      </InputBlock>
                      <InputBlock>
                        <Lable>How can we help you?</Lable>
                        <TextArea
                          className="height96"
                          placeholder="How can we help you?"
                          value={help}
                          maxlength="5000"
                          id="help"
                          name="help"
                          data-name="help"
                          required={true}
                          onChange={(e) => {
                            setHelp(e.target.value);
                          }}
                        />
                      </InputBlock>
                      <PrimaryButton type="submit" disabled={loading}>
                        <a>{loading ? "Please Wait..." : "Send Message"}</a>
                      </PrimaryButton>
                    </>
                  ) : !isFail ? (
                    <SuccessWrap>
                      <Image
                        src="/images/form-success.svg"
                        alt="form-success-icon"
                        width={98}
                        height={98}
                      ></Image>
                      <h3>Thank you for getting in touch!</h3>
                      <p>
                        We appreciate you contacting us Getpeople. One of our
                        colleagues will get back in touch with you soon!Have a
                        great day!
                      </p>
                    </SuccessWrap>
                  ) : (
                    <SuccessWrap>
                      <Image
                        src="/images/failed.svg"
                        alt="failed-icon"
                        width={98}
                        height={98}
                      ></Image>
                      <h3>Failed to send your message.</h3>
                      <p>
                        Please try later or contact administrator by other way
                        notice with orange borders.
                      </p>
                    </SuccessWrap>
                  )}
                </Form>
              </ContactRight>
            </ContactBlock>
          </Container>
        </ContactUsWrapper>
        <Testimonial />
      </Layout>
    </>
  );
}
