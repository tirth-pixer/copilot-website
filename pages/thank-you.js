import Layout from "../components/layout";
import Navbar from "../components/navbar/navbar";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

export default function NewIndex() {
  return (
    <>
      <NextSeo title="Thank You !" />
      <div class="thank-you-section">
        <div class="thank-you-block">
          <Link href="/">
            <a>
              <div class="salecamp-thank-logo">
                <Image
                  src="/images/salescamp_logo.svg"
                  loading="lazy"
                  alt="copilot-logo"
                  width={160}
                  height={38}
                />
              </div>
            </a>
          </Link>
          <div class="thank-wrapper">
            <div class="right-icon">
              <Image
                src="/images/thankyou_icon.svg"
                loading="lazy"
                alt="right-icon"
                width={134}
                height={134}
              />
            </div>
            <h1 class="thank-you-head">Thank You !</h1>
            <div class="thank-para">We received your submission.</div>
          </div>
        </div>
      </div>
    </>
  );
}
