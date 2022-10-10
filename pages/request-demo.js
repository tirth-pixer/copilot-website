import Image from "next/image";
import { useState, useCallback } from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar/navbar";
import Productivity from "../components/productivity/productivity";
import Testimonial from "../components/testimonial/testimonial";
import ReactFlagsSelect from "react-flags-select";
import {
  Container,
  LogoListWrap,
  LogosItem,
  LogosList,
  LogosManilock,
  LogosText,
  PrimaryButton,
  ProductivityMain,
  ScFeatureHeading,
  ScFeaturePara,
} from "../styles/commonStyles";
import { HeroSection } from "../styles/homepageStyles";
import {
  Form,
  FormBlock,
  Input,
  InputBlock,
  Lable,
  PhoneInput,
  SuccessContent,
  SuccessForm,
} from "../styles/requestDemoStyles";
import { CountryCodes } from "../data/raw";
import { addRequestDemo } from "../services/webHooksService";

export default function RequestDemoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState();
  const [contryCode, setCountryCode] = useState("US");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        const phoneWithCountryCode =
          CountryCodes[contryCode]?.secondary + " " + phone;
        const payload = {
          name,
          email,
          company,
          phone: phoneWithCountryCode,
        };
        const result = await addRequestDemo(payload);
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
    [name, email, company, phone, contryCode]
  );

  return (
    <>
      <Layout>
        <Navbar />
        <HeroSection>
          <Container>
            <ScFeatureHeading>Request a Demo</ScFeatureHeading>
            <ScFeaturePara>
              Just answer a few simple questions so we can personalize the right
              experience for you.
            </ScFeaturePara>
          </Container>
          <FormBlock>
            <Container>
              {!isSuccess && !isFail ? (
                <Form onSubmit={onSubmit}>
                  <InputBlock>
                    <Lable>
                      Full Name<span>*</span>
                    </Lable>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      required={true}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></Input>
                  </InputBlock>
                  <InputBlock>
                    <Lable>
                      Work Email<span>*</span>
                    </Lable>
                    <Input
                      type="email"
                      placeholder="Enter your Email Adress"
                      required={true}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></Input>
                  </InputBlock>
                  <InputBlock>
                    <Lable>
                      Company Name<span>*</span>
                    </Lable>
                    <Input
                      type="text"
                      placeholder="Enter your company name"
                      required={true}
                      value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                    ></Input>
                  </InputBlock>
                  <InputBlock>
                    <Lable>
                      Phone<span>*</span>
                    </Lable>
                    <PhoneInput>
                      <ReactFlagsSelect
                        style={{ width: "10%" }}
                        selected={contryCode}
                        customLabels={CountryCodes}
                        showOptionLabel={true}
                        searchable={true}
                        showSelectedLabel={false}
                        showSecondarySelectedLabel={false}
                        showSecondaryOptionLabel={true}
                        onSelect={(code) => setCountryCode(code)}
                      />
                      <Input
                        type="phone"
                        className="phone-input"
                        placeholder="Enter your Phone Number"
                        required={true}
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      ></Input>
                    </PhoneInput>
                  </InputBlock>
                  <PrimaryButton
                    type={loading ? "button" : "submit"}
                    disabled={loading}
                  >
                    <a>{loading ? "Please Wait..." : "Request Demo"}</a>
                  </PrimaryButton>
                </Form>
              ) : !isFail ? (
                <>
                  <SuccessForm>
                    <Image
                      src="/images/request-success.svg"
                      alt="request-success-icon"
                      width={198}
                      height={198}
                    ></Image>
                    <SuccessContent>
                      <h2> Thank you! </h2>
                      <p>
                        For requesting a product demonstration one of our team
                        members will contact you shortly.
                      </p>
                    </SuccessContent>
                  </SuccessForm>
                </>
              ) : (
                <SuccessForm>
                  <Image
                    src="/images/exclamation.svg"
                    alt="exclamation-icon"
                    width={198}
                    height={198}
                  ></Image>
                  <SuccessContent>
                    <p>Oops! Something went wrong while submitting the form.</p>
                  </SuccessContent>
                </SuccessForm>
              )}
            </Container>
          </FormBlock>
          <LogosManilock>
            <Container>
              <LogosText>Trusted By Innovative Companies Worldwide</LogosText>
              <LogoListWrap>
                <LogosList>
                  <LogosItem>
                    <Image
                      src="/images/heliostar-logo_1.svg"
                      width={175}
                      height={32}
                      alt="heliostar"
                    ></Image>
                  </LogosItem>
                  <LogosItem>
                    <Image
                      src="/images/bearbook-logos.svg"
                      width={162}
                      height={37}
                      alt="bearbook"
                    ></Image>
                  </LogosItem>
                  <LogosItem>
                    <Image
                      src="/images/MailCanvas-logos.svg"
                      width={172}
                      height={48}
                      alt="mailcanvas"
                    ></Image>
                  </LogosItem>
                  <LogosItem>
                    <Image
                      src="/images/Be-Designer-logos.svg"
                      width={138}
                      height={40}
                      alt="be-designer"
                    ></Image>
                  </LogosItem>
                  <LogosItem>
                    <Image
                      src="/images/eventgenius-logos.svg"
                      width={145}
                      height={32}
                      alt="eventgenius"
                    ></Image>
                  </LogosItem>
                </LogosList>
              </LogoListWrap>
            </Container>
          </LogosManilock>
        </HeroSection>
        <ProductivityMain>
          <Productivity />
        </ProductivityMain>
      </Layout>
    </>
  );
}
