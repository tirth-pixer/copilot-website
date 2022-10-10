import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import Navbar from "../components/navbar/navbar";
import Productivity from '../components/productivity/productivity'
import {
  Container,
  LinearBg,
  PageNotFoundHeading,
  PageNotFoundMain,
  PageNotFoundPara,
  PrimaryButton,
} from "../styles/commonStyles";

export default function Custom404() {
  return (
    <>
      <Layout>
        <Navbar />
        <Container>
          <PageNotFoundMain>
            <LinearBg className="pagenotfound" />
            <Image
              src="/images/404.svg"
              width={540}
              height={421}
              alt="404-image"
            ></Image>
            <PageNotFoundHeading>Whoops!</PageNotFoundHeading>
            <PageNotFoundPara>
              We can’t seem to find the page thatyou’re looking for
            </PageNotFoundPara>
            <PrimaryButton>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </PrimaryButton>
          </PageNotFoundMain>
        </Container>
        <Productivity />
      </Layout>
    </>
  );
}
