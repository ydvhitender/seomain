/*
=========================================================
* eseo-aid
=========================================================

* eseo-aid
* Copyright 2023 eseo-aid

eseo-aid

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import SEO from "layouts/pages/landing-pages/seo";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Feel the
                    <br />
                    eSEO-Aid
                  </>
                }
                description="Reach out to our expert digital marketing consultants to discuss how eSEO Aid can help you achieve your goals."
              />
              <RotatingCardBack
                image={bgBack}
                title="Search Engine Optimization Services that Grow Traffic and Increase Revenue"
                description="Boost organic rankings and traffic
                with proven SEO strategies"
                action={{
                  type: "internal",
                  route: "/seo",
                  label: "Get Started Now",
                  component: <SEO />,
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Search Engine Optimization"
                  description="Our company provides comprehensive Search Engine Optimization services to improve your website's ranking on search engines and drive organic traffic."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Social Media Marketing"
                  description="
                  Our Social Media Marketing feature helps your brand connect with your audience, increase engagement, and drive website traffic through targeted content."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Content Marketing Services"
                  description="Our content marketing services offer engaging content creation, optimized for SEO and designed to drive traffic."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Mobile App Marketinge"
                  description="
                  Our mobile app marketing services include app store optimization, and in-app advertising."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
