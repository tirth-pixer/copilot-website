import Link from "next/link";
import { FooterMain } from "../styles/commonStyles";

export default function Footer3() {
  return (
    <footer>
      <div class="footer-main-section">
        <div class="footer-section">
          <div class="container w-container">
            <div class="footer-main-block">
              <div class="footer-title-block">
                <div class="footer-top-left">
                  <h2 class="footer-main-heading">Try copilot for free.</h2>
                  <div class="footer-main-text">
                    Be the hero of your sales team. Never miss an opportunity.
                  </div>
                </div>
                <div class="footer-btn-block">
                  <Link href="/">
                    <a class="primary-button mb12 w-inline-block">
                      <div class="button-text">Get Started for Free</div>
                    </a>
                  </Link>
                  <Link href="/request-demo">
                    <a class="white-button w-inline-block">
                      <div class="white-button-text">Request a Demo</div>
                    </a>
                  </Link>
                </div>
              </div>
              <div class="mobile-footer-block">
                <div
                  data-hover="false"
                  data-delay="0"
                  data-w-id="6247e61b-cfa3-4da2-3b7c-828daa2188d8"
                  class="mobile-footer-dropdown w-dropdown"
                >
                  <div class="mobile-footer-droptoggle w-dropdown-toggle">
                    <div class="mobile-dropdowm-text">SOLUTIONS</div>
                    <img
                      src="/images/DropArrow2.svg"
                      loading="lazy"
                      width="13"
                      alt="Arrow"
                      class="mobile-footer-img"
                    />
                  </div>
                  <nav class="mobile-footer-droplist w-dropdown-list">
                    <Link href="/solution/startup-crm">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Startups
                      </a>
                    </Link>
                    <Link href="/solution/saas-crm">
                      <a class="footer-dropdown-link w-dropdown-link">Saas</a>
                    </Link>
                    <Link href="/solution/real-estate-crm">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Real Estate
                      </a>
                    </Link>
                    <Link href="/solution/agency-crm">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Agencies
                      </a>
                    </Link>
                    <Link href="/solution/remote-sales-crm">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Remote Sales
                      </a>
                    </Link>
                  </nav>
                </div>
                <div
                  data-hover="false"
                  data-delay="0"
                  data-w-id="f14df108-c086-3f38-310a-b6d410135330"
                  class="mobile-footer-dropdown w-dropdown"
                >
                  <div class="mobile-footer-droptoggle w-dropdown-toggle">
                    <div class="mobile-dropdowm-text">PRODUCT</div>
                    <img
                      src="/images/DropArrow2.svg"
                      loading="lazy"
                      alt="Arrow"
                      class="mobile-footer-img"
                    />
                  </div>
                  <nav class="mobile-footer-droplist w-dropdown-list">
                    <Link href="/features/lead-management">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Lead Managment
                      </a>
                    </Link>
                    <Link href="/features/sales-reporting">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Sales Reporting
                      </a>
                    </Link>
                    <Link href="/features/deal-pipeline">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Deal Pipeline
                      </a>
                    </Link>
                    <Link href="/features/activities-goals">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Activities &amp; Goals
                      </a>
                    </Link>
                    <Link href="/features">
                      <a class="footer-dropdown-link w-dropdown-link">
                        More Features
                      </a>
                    </Link>
                  </nav>
                </div>
                <div
                  data-hover="false"
                  data-delay="0"
                  data-w-id="4eb1d22d-6b74-46d0-5e9d-4edbde8fb1be"
                  class="mobile-footer-dropdown w-dropdown"
                >
                  <div class="mobile-footer-droptoggle w-dropdown-toggle">
                    <div class="mobile-dropdowm-text">RESOURCES</div>
                    <img
                      src="/images/DropArrow2.svg"
                      loading="lazy"
                      alt="Arrow"
                      class="mobile-footer-img"
                    />
                  </div>
                  <nav class="mobile-footer-droplist w-dropdown-list">
                    <Link href="/blog">
                      <a class="footer-dropdown-link w-dropdown-link">Blogs</a>
                    </Link>
                    <Link href="/updates">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Updates
                      </a>
                    </Link>
                    <Link href="/help">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Help Center
                      </a>
                    </Link>
                    <Link href="#">
                      <a
                        href="#"
                        data-nolt="button"
                        class="footer-dropdown-link w-dropdown-link"
                      >
                        Roadmap
                      </a>
                    </Link>
                    <Link href="/free-sales-tools">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Free tools
                      </a>
                    </Link>
                  </nav>
                </div>
                <div
                  data-hover="false"
                  data-delay="0"
                  data-w-id="10cf6eb4-0f07-f1d3-f5d3-ba2cbac4c4a9"
                  class="mobile-footer-dropdown mb0 w-dropdown"
                >
                  <div class="mobile-footer-droptoggle w-dropdown-toggle">
                    <div class="mobile-dropdowm-text">COMPANY</div>
                    <img
                      src="/images/DropArrow2.svg"
                      loading="lazy"
                      alt="Arrow"
                      class="mobile-footer-img"
                    />
                  </div>
                  <nav class="mobile-footer-droplist w-dropdown-list">
                    <Link href="/pricing">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Pricing
                      </a>
                    </Link>
                    <Link href="/contact-us">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Contact Us
                      </a>
                    </Link>
                    <Link href="/affiliate">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Affiliate
                      </a>
                    </Link>
                    <Link href="/terms-of-use">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Terms of Use
                      </a>
                    </Link>
                    <Link href="/privacy-policy">
                      <a class="footer-dropdown-link w-dropdown-link">
                        Privacy Policy
                      </a>
                    </Link>
                  </nav>
                </div>
              </div>
              <div class="footer-link-block">
                <ul role="list" class="footer-link-list">
                  <li class="footer-link-heading">
                    <h3 class="footer-heading-text">SOLUTIONS</h3>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/solution/startup-crm">
                      <a class="footer-page-link">Startups</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/solution/saas-crm">
                      <a class="footer-page-link">Saas</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/solution/real-estate-crm">
                      <a class="footer-page-link">Real Estate</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/solution/agency-crm">
                      <a class="footer-page-link">Agencies</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list mb0">
                    <Link href="/solution/remote-sales-crm">
                      <a class="footer-page-link">Remote Sales</a>
                    </Link>
                  </li>
                </ul>
                <ul role="list" class="footer-link-list">
                  <li class="footer-link-heading">
                    <h3 class="footer-heading-text">PRODUCT</h3>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/features/lead-management">
                      <a class="footer-page-link">Lead Management</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/features/sales-reporting">
                      <a class="footer-page-link">Sales Reporting</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/features/deal-pipeline">
                      <a class="footer-page-link">Deal Pipeline</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/features/activities-goals">
                      <a class="footer-page-link">Activities &amp; Goals</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list mb0">
                    <Link href="/features">
                      <a class="footer-page-link">More Features</a>
                    </Link>
                  </li>
                </ul>
                <ul role="list" class="footer-link-list">
                  <li class="footer-link-heading">
                    <h3 class="footer-heading-text">RESOURCES</h3>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/blog">
                      <a class="footer-page-link">Blogs</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/updates">
                      <a class="footer-page-link">Updates</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/help">
                      <a class="footer-page-link">Help Center</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/">
                      <a data-nolt="button" href="/" class="footer-page-link">
                        Roadmap
                      </a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/free-sales-tools">
                      <a class="footer-page-link">Free tools</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/">
                      <a class="footer-page-link">API Doc</a>
                    </Link>
                  </li>
                </ul>
                <ul role="list" class="footer-link-list">
                  <li class="footer-link-heading">
                    <h3 class="footer-heading-text">COMPANY</h3>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/pricing">
                      <a class="footer-page-link">Pricing</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/contact-us">
                      <a class="footer-page-link">Contact Us</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/affiliate">
                      <a class="footer-page-link">Affiliate</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list">
                    <Link href="/terms-of-use">
                      <a class="footer-page-link">Terms of Use</a>
                    </Link>
                  </li>
                  <li class="footerlink-inner-list mb0">
                    <Link href="/privacy-policy">
                      <a class="footer-page-link">Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="footer-last-block">
                <a
                  href="/index"
                  aria-current="page"
                  class="brand-logo w-nav-brand w--current"
                >
                  <img
                    src="/images/Footer-Logo.svg"
                    loading="lazy"
                    width="160"
                    height="38"
                    alt="copilot Logo"
                  />
                </a>
                <div class="footer-copyright-info">
                  <div class="footer-copyright-text">
                    Copyright © 2021 copilot
                  </div>
                </div>
                <ul role="list" class="footer-social-list">
                  <li class="social-link-item">
                    <a
                      href="/"
                      target="_blank"
                      class="social-link w-inline-block"
                    >
                      <img src="/images/linkedin.svg" loading="lazy" alt="" />
                    </a>
                  </li>
                  <li class="social-link-item">
                    <a
                      href="/"
                      target="_blank"
                      class="social-link w-inline-block"
                    >
                      <img src="/images/youtube.svg" loading="lazy" alt="" />
                    </a>
                  </li>
                  <li class="social-link-item">
                    <a
                      href="/"
                      target="_blank"
                      class="social-link w-inline-block"
                    >
                      <img src="/images/instagram.svg" loading="lazy" alt="" />
                    </a>
                  </li>
                  <li class="social-link-item mr0">
                    <a
                      href="/"
                      target="_blank"
                      class="social-link w-inline-block"
                    >
                      <img
                        src="/images/twitter_1.svg"
                        loading="lazy"
                        alt=""
                        class="social-icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5d6e0e6372061d52de830f1c" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
         <script src="../js/salescamp.js" type="text/javascript"></script> */}
      <script async="" src="https://cdn.nolt.io/widgets.js"></script>
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5d6e0e6372061d52de830f1c"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"
      ></script>
      <script src="/js/salescamp.js" type="text/javascript"></script>
      <script src="/js/footer-common.js" type="text/javascript"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    </footer>
  );
}
