import Image from "next/image";
import Link from "next/link";
import { Container } from "../../styles/commonStyles";
import {
  IntegrationMain,
  IntegrationInner,
  IntegrationLeft,
  IntegrationRight,
  LearnMoreLink,
  IntegrationLogoList,
  IntegrationLogoItem,
} from "./styles";

export default function SolutionIntegration() {
  return (
    <>
      <IntegrationMain>
        <Container>
          <IntegrationInner>
            <IntegrationLeft>
              <h3>Integrations</h3>
              <p>
                If your CRM is a wheel, the apps you integrate into it are the
                spokes that support it.
              </p>
              <LearnMoreLink>
                <Link href="/integrations">
                  <a>
                    <span>Learn more</span>
                    <Image
                      src="/images/right-icon_1.svg"
                      loading="lazy"
                      width={10}
                      height={10}
                      alt="right-icon"
                    ></Image>
                  </a>
                </Link>
              </LearnMoreLink>
            </IntegrationLeft>
            <IntegrationRight>
              <IntegrationLogoList>
                <IntegrationLogoItem>
                  <Image
                    src="/images/Airtable.svg"
                    loading="lazy"
                    alt="Airtable Logo"
                    width={127}
                    height={27}
                  />
                </IntegrationLogoItem>
                <IntegrationLogoItem>
                  <Image
                    src="/images/asana-logo.svg"
                    loading="lazy"
                    alt="asana Logo"
                    width={120}
                    height={29}
                  />
                </IntegrationLogoItem>
                <IntegrationLogoItem>
                  <Image
                    src="/images/customer-io-logo.svg"
                    loading="lazy"
                    alt="Customer.io Logo"
                    width={120}
                    height={22}
                  />
                </IntegrationLogoItem>
                <IntegrationLogoItem>
                  <Image
                    src="/images/Group-427321781.svg"
                    loading="lazy"
                    alt="HELLOOSIGN Logo"
                    width={120}
                    height={18}
                  />
                </IntegrationLogoItem>
                <IntegrationLogoItem>
                  <Image
                    src="/images/intercom-logo.svg"
                    loading="lazy"
                    alt="Intercom Logo"
                    width={120}
                    height={31}
                  />
                </IntegrationLogoItem>
                <IntegrationLogoItem>
                  <Image
                    src="/images/Pandadoc-logo.svg"
                    loading="lazy"
                    alt="PandaDoc Logo"
                    width={120}
                    height={30}
                  />
                </IntegrationLogoItem>
                <IntegrationLogoItem>
                  <Image
                    src="/images/Group.svg"
                    loading="lazy"
                    alt="Process.st Logo"
                    width={120}
                    height={21}
                  />
                </IntegrationLogoItem>
                <IntegrationLogoItem>
                  <Image
                    src="/images/Slack-logo.svg"
                    loading="lazy"
                    alt="Slack Logo"
                    width={120}
                    height={31}
                  />
                </IntegrationLogoItem>
              </IntegrationLogoList>
            </IntegrationRight>
          </IntegrationInner>
        </Container>
      </IntegrationMain>
    </>
  );
}
