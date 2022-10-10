import Image from "next/image";
import Link from "next/link";
import { Container } from "../../styles/commonStyles";
import {
  FeatureNavBlock,
  FeatureNavLink,
  FeatureSpan,
  MoreMenu,
  DropDownList,
  DropDwonLink,
  FcDropdownSpan,
} from "./styles";
import { StatefulPopover } from "baseui/popover";
import { useRouter } from "next/router";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function FeatureNavigation() {
  const route = useRouter();
  const mobile = useMobileDevice();

  const data = () => {
    return (
      <>
        <DropDownList>
          <DropDwonLink>
            <Link href="/features/deal-pipeline">
              <a
                className={
                  route.pathname === "/features/deal-pipeline" && "active"
                }
              >
                <Image
                  src="/images/Deal-Icon.svg"
                  loading="lazy"
                  width="18"
                  height="18"
                  alt="Deal Pipeline"
                />
                <FcDropdownSpan>Deal Pipeline</FcDropdownSpan>
              </a>
            </Link>
          </DropDwonLink>
          <DropDwonLink>
            <Link href="/features/activities-goals">
              <a
                className={
                  route.pathname === "/features/activities-goals" && "active"
                }
              >
                <Image
                  src="/images/Goal-Icon.svg"
                  loading="lazy"
                  width="18"
                  height="18"
                  alt="Goal-Icon"
                />
                <FcDropdownSpan>Activities & Goals</FcDropdownSpan>
              </a>
            </Link>
          </DropDwonLink>
          <DropDwonLink>
            <Link href="/features/integration">
              <a
                className={
                  route.pathname === "/features/integration" && "active"
                }
              >
                <Image
                  src="/images/Integratio-Icon.svg"
                  loading="lazy"
                  width="18"
                  height="18"
                  alt="integration"
                />
                <FcDropdownSpan>Integration</FcDropdownSpan>
              </a>
            </Link>
          </DropDwonLink>
        </DropDownList>
      </>
    );
  };

  return (
    <>
      <Container>
        <FeatureNavBlock>
          <FeatureNavLink>
            <Link href="/features">
              <a>
                <Image
                  src="/images/QR-code.svg"
                  loading="lazy"
                  width="24"
                  height="24"
                  alt="QR-code"
                />
                <FeatureSpan>All</FeatureSpan>
              </a>
            </Link>
          </FeatureNavLink>
          <FeatureNavLink>
            <Link href="/features/lead-management">
              <a
                className={
                  route.pathname === "/features/lead-management" && "active"
                }
              >
                <Image
                  src="/images/Lead-Icon.svg"
                  loading="lazy"
                  width="30"
                  height="24"
                  alt="Lead-Icon"
                />
                <FeatureSpan>Management</FeatureSpan>
              </a>
            </Link>
          </FeatureNavLink>
          <FeatureNavLink>
            <Link href="/features/sales-reporting">
              <a
                className={
                  route.pathname === "/features/sales-reporting" && "active"
                }
              >
                <Image
                  src="/images/Sales-Icon.svg"
                  loading="lazy"
                  width="24"
                  height="29"
                  alt="Sales-Icon"
                />
                <FeatureSpan>Sales Reporting</FeatureSpan>
              </a>
            </Link>
          </FeatureNavLink>
          <FeatureNavLink>
            <Link href="/features/call-sms">
              <a
                className={route.pathname === "/features/call-sms" && "active"}
              >
                <Image
                  src="/images/Call--Sms-Icon.svg"
                  loading="lazy"
                  width="24"
                  height="24"
                  alt="Call-Sms-Icon"
                />
                <FeatureSpan>Call & SMS</FeatureSpan>
              </a>
            </Link>
          </FeatureNavLink>
          <FeatureNavLink>
            <Link href="/features/email-sync">
              <a
                className={
                  route.pathname === "/features/email-sync" && "active"
                }
              >
                <Image
                  src="/images/Email-Icon.svg"
                  loading="lazy"
                  width="29"
                  height="24"
                  alt="Email-Icon"
                />
                <FeatureSpan>Email Sync</FeatureSpan>
              </a>
            </Link>
          </FeatureNavLink>
          <FeatureNavLink>
            <Link href="/features/customization">
              <a
                className={
                  route.pathname === "/features/customization" && "active"
                }
              >
                <Image
                  src="/images/Easy-Icon.svg"
                  loading="lazy"
                  width="24"
                  height="24"
                  alt="Hero Link Image"
                />
                <FeatureSpan>Customization</FeatureSpan>
              </a>
            </Link>
          </FeatureNavLink>
          {mobile ? (
            <>
              <FeatureNavLink>
              <Link href="/features/deal-pipeline">
                  <a
                   className={
                    route.pathname === "/features/deal-pipeline" && "active"
                  }
                  >
                    <Image
                      src="/images/Deal-Icon.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt="deal-pipeline"
                    />
                    <FeatureSpan>Deal Pipeline</FeatureSpan>
                  </a>
                </Link>
              </FeatureNavLink>
              <FeatureNavLink>
              <Link href="/features/activities-goals">
                  <a
                    className={
                        route.pathname === "/features/activities-goals" && "active"
                      }
                  >
                    <Image
                       src="/images/Goal-Icon.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt="goal-icon"
                    />
                    <FeatureSpan>Activities & Goals</FeatureSpan>
                  </a>
                </Link>
              </FeatureNavLink>
              <FeatureNavLink>
              <Link href="/features/integration">
                  <a
                     className={
                        route.pathname === "/features/integration" && "active"
                      }
                  >
                    <Image
                      src="/images/Integratio-Icon.svg"
                      loading="lazy"
                      width="24"
                      height="24"
                      alt="goal-icon"
                    />
                    <FeatureSpan>Integration</FeatureSpan>
                  </a>
                </Link>
              </FeatureNavLink>
            </>
          ) : (
            <StatefulPopover
              overrides={{
                Body: {
                  style: ({ $theme }) => ({
                    backgroundColor: "transparent",
                  }),
                },
                Inner: {
                  style: ({ $theme }) => ({
                    backgroundColor: "transparent",
                  }),
                },
              }}
              placement="bottomLeft"
              content={data}
            >
              <MoreMenu>
                <Image
                  src="/images/Sort-descending.svg"
                  loading="lazy"
                  width="28"
                  height="28"
                  alt="Sort-descending"
                />
                <FeatureSpan>More</FeatureSpan>
              </MoreMenu>
            </StatefulPopover>
          )}
        </FeatureNavBlock>
      </Container>
    </>
  );
}
