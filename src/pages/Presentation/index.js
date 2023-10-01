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
import Card from "@mui/material/Card";

import { Link } from 'react-router-dom';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter.js";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
// import FreeWebsiteAudit from "layouts/sections/input-areas/free-website-audit";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
// import React, { useState } from 'react';
// import { useForm } from '@formspree/react';

// Images
// import bgImage from "assets/images/bg-presentation.jpg";
import team4 from "assets/images/blog53.jpg";
// import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";
// import { useState } from 'react';

// function Form() {
//   const [email, setEmail] = useState("");
//   const [state, handleSubmit] = useForm("mjvdleev");

//   if (state.succeeded) {
//     return <div></div>;
//   }

//   return (
//     <form onSubmit={handleSubmit} >
//       <Grid container spacing={1} alignItems="center" sx={{ marginLeft: "70px" }}  >
//         <Grid item xs={7}>
//           <MKInput
//             type="email"
//             label="Email Here..."
//             fullWidth
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//             sx={{ py: 0, fontSize: "0.8rem" }}
//           />
//         </Grid>
//         <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
//           <MKButton
//             type="submit"
//             variant="gradient"
//             color="info"
//             sx={{ height: "60%" }}
//             disabled={state.submitting}
//           >
//             {state.submitting ? "Submitting..." : "Subscribe"}
//           </MKButton>
//         </Grid>
//       </Grid>
//     </form>
//   );
// }
function Presentation() {
  // const [state, handleSubmit] = useForm("meqwnkyy");
  // if (state.succeeded) {
  //   return <div>Thank you for signing up!</div>;
  // }
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          // route: "https://www.google.com/product/material-kit-react",
          label: "Free Website Audit",
          color: "info",
          route: "/free-website-audit",
          component: Link,
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${team4})`,
          // backgroundImage: ({ functions: { rgba }, palette: { gradients } }) =>
          //   `${linearGradient(
          //     rgba(gradients.dark.main, 0.6),
          //     rgba(gradients.dark.state, 0.6)
          //   )}, url(${team4})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              eSEO-Aid{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Search Engine Optimization Services that Grow Traffic and Increase Revenue
            </MKTypography>
            <MKTypography>
              <div><br /></div>
              <div><br /></div>
              <div><br /></div>
            </MKTypography>



          </Grid>
          {/* <Form /> */}


        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <DesignBlocks />
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />

        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Dedicated Growth Manager"
                description="A dedicated and experienced digital marketing manager helps increase the traffic and conversions of your website to increase your sales."
              // action={{
              //   type: "external",
              //   route: "https://www.google.com/learning-lab/react/overview/material-kit/",
              //   // label: "Let's start",
              // }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Top-Of-the-Line Customer Support"
                description="If we are proud of something, it is our seriousness and constant communication that sets us apart with effectiveness."
              // action={{
              //   type: "external",
              //   route: "https://www.google.com/learning-lab/react/overview/datepicker/",
              //   // label: "Read more",
              // }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Data-Backed Marketing Solutions"
                description="We provide weekly and monthly reports to our clients with the main statistical variables so you can track effectively."
              // action={{
              //   type: "external",
              //   route: "https://www.google.com/learning-lab/react/alerts/material-kit/",
              //   // label: "Read more",
              // }}
              />
            </Grid>

          </Grid>

        </Container>

        <Testimonials />
        <Download />

        <MKBox >

          <Newsletter />
          {/* <Container>
            <Grid container spacing={3}>
            
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
              <Form />
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.eseo-aid.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.google.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.google.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container> */}
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
