import { useRouter } from "next/router";
import Link from "next/link";
import { StatefulPopover } from "baseui/popover";

export default function FeatureNavigation() {
  const route = useRouter();

  const data = () => {
    return (
      <>
        <div class="more-dropdown-list w--open">
          <Link href="/features/deal-pipeline">
            <a className="dropdown-link-block w-inline-block">
              <img
                src="/../images/Deal-Icon.svg"
                loading="lazy"
                width="24"
                height="24"
                alt="Deal Pipeline"
                class="dropdown-image"
              />
              <div class="dropdown-text">Deal Pipeline</div>
            </a>
          </Link>
          <Link href="/features/activities-goals">
            <a class="dropdown-link-block w-inline-block">
              <img
                src="/../images/Goal-Icon.svg"
                loading="lazy"
                width="25"
                height="24"
                alt="Deal Pipeline"
                class="dropdown-image"
              />
              <div class="dropdown-text">Activities &amp; Goals</div>
            </a>
          </Link>
          <Link href="/features/integration">
            <a class="dropdown-link-block w-inline-block">
              <img
                src="/../images/Integratio-Icon.svg"
                loading="lazy"
                width="25"
                height="24"
                alt="Deal Pipeline"
                class="dropdown-image"
              />
              <div class="dropdown-text">Integration</div>
            </a>
          </Link>
        </div>
      </>
    );
  };

  return (
    <div class="container">
      <div class="hero-link-block">
        <Link href="/features">
          <a class="hero-link w-inline-block">
            <div class="hero-image-block">
              <img
                src="/../images/QR-code.svg"
                loading="lazy"
                width="24"
                height="24"
                alt="Hero Link Image"
              />
            </div>
            <div class="hero-link-text">All</div>
          </a>
        </Link>
        <Link href="/features/lead-management">
          <a
            aria-current="page"
            className={`hero-link w-inline-block  ${
              route.pathname === "/features/lead-management" && "w--current"
            } `}
          >
            <div class="hero-image-block">
              <img
                src="/../images/Lead-Icon.svg"
                loading="lazy"
                width="30"
                height="24"
                alt="Hero Link Image"
              />
            </div>
            <div class="hero-link-text">Management</div>
          </a>
        </Link>
        <Link href="/features/sales-reporting">
          <a
            className={`hero-link w-inline-block  ${
              route.pathname === "/features/sales-reporting" && "w--current"
            } `}
          >
            <div class="hero-image-block">
              <img
                src="/../images/Sales-Icon.svg"
                loading="lazy"
                width="24"
                height="29"
                alt="Hero Link Image"
              />
            </div>
            <div class="hero-link-text">Sales Reporting</div>
          </a>
        </Link>
        <Link href="/features/call-sms">
          <a
            className={`hero-link w-inline-block  ${
              route.pathname === "/features/call-sms" && "w--current"
            } `}
          >
            <div class="hero-image-block">
              <img
                src="/../images/Call--Sms-Icon.svg"
                loading="lazy"
                width="24"
                height="24"
                alt="Hero Link Image"
              />
            </div>
            <div class="hero-link-text">Call &amp; SMS</div>
          </a>
        </Link>
        <Link href="/features/email-sync">
          <a
            className={`hero-link w-inline-block  ${
              route.pathname === "/features/email-sync" && "w--current"
            } `}
          >
            <div class="hero-image-block">
              <img
                src="/../images/Email-Icon.svg"
                loading="lazy"
                width="29"
                height="24"
                alt="Hero Link Image"
              />
            </div>
            <div class="hero-link-text">Email Sync</div>
          </a>
        </Link>
        <Link href="/features/customization">
          <a
            className={`hero-link w-inline-block  ${
              route.pathname === "/features/customization" && "w--current"
            } `}
          >
            <div class="hero-image-block">
              <img
                src="/../images/Easy-Icon.svg"
                loading="lazy"
                width="24"
                height="24"
                alt="Hero Link Image"
              />
            </div>
            <div class="hero-link-text">Customization</div>
          </a>
        </Link>
        <div data-hover="false" data-delay="0" class="more-dropdown w-dropdown">
          <StatefulPopover placement="bottom" content={data}>
            <div class="hero-link w-dropdown-toggle">
              <img
                src="/../images/Sort-descending.svg"
                loading="lazy"
                width="28"
                height="28"
                alt="More Icon"
              />
              <div class="hero-link-text">More</div>
            </div>
          </StatefulPopover>
        </div>
        <Link href="/features/deal-pipeline">
          <a
            className={`hero-link d-none d-block w-inline-block ${
              route.pathname === "/features/deal-pipeline" && "w--current"
            }`}
          >
            <div class="hero-image-block">
              <img
                src="/../images/Deal-Icon.svg"
                loading="lazy"
                width="24"
                alt="Hero Link Image"
              />
            </div>
            <div class="hero-link-text">Deal Pipeline</div>
          </a>
        </Link>
        <Link href="/features/activities-goals">
          <a
            className={`hero-link d-none d-block w-inline-block ${
              route.pathname === "/features/activities-goals" && "w--current"
            }`}
          >
            <div class="hero-image-block">
              <img
                src="/../images/Goal-Icon.svg"
                loading="lazy"
                width="24"
                alt="Hero Link Image"
              />
            </div>
            <div class="hero-link-text">Activities &amp; Goals</div>
          </a>
        </Link>
        <Link href="/features/integration">
          <a
            className={`hero-link d-none d-block w-inline-block ${
              route.pathname === "/features/integration" && "w--current"
            }`}
          >
            <div class="hero-image-block">
              <img
                src="/../images/Integratio-Icon.svg"
                loading="lazy"
                width="24"
                alt="Hero Link Image"
              />
            </div>
            <div class="hero-link-text">Integration</div>
          </a>
        </Link>
      </div>
    </div>
  );
}
