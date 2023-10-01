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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/team100.jpg";
import team2 from "assets/images/team104.jpg";
import team3 from "assets/images/team104.jpg";
import team4 from "assets/images/team100.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Common SEO Questions
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              {/* There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill. */}
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Does your SEO work for all major search engines?"
                position={{ color: "info", label: "" }}
                description="Yes! Our SEO team focuses on optimizing your website for all major search engines. Google remains the dominate search engine in most countries, but there are several other search engines that account for a good portion of organic traffic across the internet. Some of the most popular search engines."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Can you optimize my Google Business Profile?"
                position={{ color: "info", label: "" }}
                description="Definitely—our SEO team is well-versed in the nuances of Google Business profile (GBP), formerly known as Google My Business. We can set up and optimize your Business Profile with all accurate and relevant information to help gain exposure for your business in the local search results and Google Maps."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="How do I know which type of SEO I need?"
                position={{ color: "info", label: "" }}
                description="There are a variety of factors that influence the creation of an optimization plan. The simplest way to figure out the right approach for your online presence is to talk with a qualified SEO expert. A professional SEO company will be able to determine the best long-term SEO strategy for your business."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Can you perform an SEO audit on my website?"
                position={{ color: "info", label: "" }}
                description="Of course we can! We offer multiple levels of audits. Our basic SEO audit offers insights into your optimization and website performance. It gives us the opportunity to take a look under the hood and better understand what may be holding your site back."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
