import Layout from "../components/layout";
import Navbar from "../components/navbar/navbar";
import { NextSeo } from "next-seo";
import {
  Container,
  LinearBg,
  RichTextBlock,
  ScHeading,
  ScHeroSection,
} from "../styles/commonStyles";

export default function NewIndex() {
  return (
    <>
      <NextSeo title="Salescamp-Privacy Policy" />
      <Layout>
        <Navbar />
        <ScHeroSection>
          <LinearBg className="feature" />
          <ScHeading>Privacy Policy</ScHeading>
          <br />
          <Container>
            <RichTextBlock>
              <h4>Use of Personal Information:</h4>
              <p>
                copilot keeps up strict arrangements to ensure the individual
                protection of every one of its clients. copilot accumulations
                personal data. Keep in mind the end goal to allow access to
                specialised support and different advantages accessible to
                enrolled clients. Personal data is additionally used to scatter
                data about organisation notification and exceptional offers.
              </p>
              <h4>
                <strong>Protecting Your Personal Information:</strong>
              </h4>
              <p>
                The individual data that you give is ordered. Your record is
                ensured by a secret key and a one-of-a-kind client ID that
                controls access to your history. Personal data dwells on a
                protected server that exclusive chose copilot staff may get to.
                Individual data is encoded to forestall unapproved seeing. With
                a specific end goal to guarantee the viability of these safety
                efforts, we suggest that you don’t uncover your watchword to
                anybody.
                <br />
                When you submit individual data to copilot through the site, you
                concur that this data might be exchanged crosswise over national
                fringes and might be put away and handled in any of the nations
                or areas in which copilot, its partners, and auxiliaries look
                after workplaces.
                <br />
                copilot may gather data about the utilisation of the site, for
                example, the sorts of administrations got to and what number of
                clients visit the site. This data is gathered in the entire
                frame, without distinguishing any client exclusively. copilot
                may utilize this total, non-distinguishing, factual information
                for the investigation, advertising, or particular comparative
                purposes.
              </p>
              <h4>Disclaimer:</h4>
              <p>
                copilot accepts no accountability for the substance or security
                practices of whatever other sites, organization, or association,
                including areas that may be accessed through hyperlinks from
                this site. Suppose you don’t mind audit the protection strategy
                of such destinations before giving any individual data. copilot
                maintains whatever authority is needed to adjust, redesign or
                reestablish your User Center record data in light of data we
                get.
              </p>
            </RichTextBlock>
          </Container>
        </ScHeroSection>
      </Layout>
    </>
  );
}
