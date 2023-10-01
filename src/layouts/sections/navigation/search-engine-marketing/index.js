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

// Material Kit 2 React components
// import MKBox from "components/MKBox";

// Sections components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";



// Images
import bgImage from "assets/images/blog31.jpg";
import BaseLayout from "layouts/sections/components/BaseLayout";
import { useForm } from '@formspree/react';
// import './form2.css'; 
// import View from "layouts/sections/components/View";

// // Stats page components
// import TabsSimple from "layouts/sections/navigation/nav-tabs/components/TabsSimple";

// // Stats page components code
// import tabsSimpleCode from "layouts/sections/navigation/nav-tabs/components/TabsSimple/code";

import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { useState } from 'react';
function Form() {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [state, handleSubmit] = useForm("mjvdleev");

  if (state.succeeded) {
    return <div>Thank you for Submitting!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MKInput
            type="text"
            label="Your Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
        </Grid>
        <Grid item xs={12}>
          <MKInput
            type="text"
            label="Site URL"
            fullWidth
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            name="siteUrl"
          />
        </Grid>

        <Grid item xs={12}>
          <MKInput
            type="text"
            label="Company Name"
            fullWidth
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            name="companyName"
          />
        </Grid>
        <Grid item xs={12}>
          <MKInput
            type="tel"
            label="Phone Number"
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            name="phoneNumber"
          />
        </Grid>
        <Grid item xs={12}>
          <MKInput
            type="email"
            label="Email Here..."
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <MKButton
            type="submit"
            variant="gradient"
            color="info"
            disabled={state.submitting}
          >
            {state.submitting ? "Submitting..." : "REQUEST FREE QUOTE"}
          </MKButton>
        </Grid>
      </Grid>
    </form>
  );
}




function Pagination() {
  // const [state, handleSubmit] = useForm("meqwnkyy");

  // if (state.succeeded) {
  //   return <div>Thank you for signing up!</div>;
  // }
  return (
    <BaseLayout
      // title="Navbars"
      breadcrumb={[
        // { label: "Page Sections", route: "/sections/navigation/navbars" },
        { label: "Search Engine Marketing" },
      ]}
    >
      {/* <View title="Navbar dark" code={navbarDarkCode}> */}
      {/* <MKBox py={6}>
          <NavbarDark />
        </MKBox> */}
      {/* </View> */}




      <MKBox component="section" py={{ xs: 0, lg: 6 }}>
        <Container>
          <Grid container item>
            <MKBox
              width="100%"
              bgColor="white"
              borderRadius="xl"
              shadow="xl"
              mb={6}
              sx={{ overflow: "hidden" }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  position="relative"
                  px={0}
                  sx={{
                    backgroundImage: ({
                      palette: { gradients },
                      functions: { rgba, linearGradient },
                    }) =>
                      `${linearGradient(
                        rgba(gradients.dark.main, 0.6),
                        rgba(gradients.dark.state, 0.6)
                      )}, url(${bgImage})`,
                    backgroundSize: "cover",
                  }}
                >
                  <MKBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="100%"
                  >
                    <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                      <MKTypography variant="h3" color="white" mb={1}>
                        PPC Management services
                        Triple Revenue With Strategic PPC Campaign
                      </MKTypography>
                      <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                        Get your business to the no.1 position in Google Search Results Pages- we enable companies to chalk up exponential growth and profit with our pay-per-click advertising campaign.
                      </MKTypography>
                      <MKBox display="flex" p={1}>
                        <MKTypography variant="button" color="white">
                          <i className="fa fa-check" />
                        </MKTypography>
                        <MKTypography
                          component="span"
                          variant="button"
                          color="white"
                          opacity={0.8}
                          ml={2}
                          fontWeight="regular"
                        >
                          Project discussion: Meeting with a client discussing business goals
                        </MKTypography>
                      </MKBox>
                      <MKBox display="flex" color="white" p={1}>
                        <MKTypography variant="button" color="white">
                          <i className="fa fa-check" />
                        </MKTypography>
                        <MKTypography
                          component="span"
                          variant="button"
                          color="white"
                          opacity={0.8}
                          ml={2}
                          fontWeight="regular"
                        >
                          Keyword analysis: Putting down target keyword strategy
                        </MKTypography>
                      </MKBox>
                      <MKBox display="flex" color="white" p={1}>
                        <MKTypography variant="button" color="white">
                          <i className="fa fa-check" />
                        </MKTypography>
                        <MKTypography
                          component="span"
                          variant="button"
                          color="white"
                          opacity={0.8}
                          ml={2}
                          fontWeight="regular"
                        >
                          Strategic Competitor research: Define a strategy to outbid SEO competitors
                        </MKTypography>
                      </MKBox>
                      <MKBox mt={3}>
                        {/* <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-dribbble" style={{ fontSize: "1.25rem" }} />
                      </MKButton>
                      <MKButton variant="text" color="white" size="large" iconOnly>
                        <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                      </MKButton> */}
                      </MKBox>
                    </MKBox>
                  </MKBox>
                </Grid>

                <Grid item xs={12} lg={7}>
                  <MKBox component="form" p={2} method="post">
                    <MKBox px={3} py={{ xs: 0, sm: 0 }}>
                      <MKTypography variant="h2" mb={1}>
                        Have a project in mind?
                      </MKTypography>
                      <MKTypography variant="body1" color="text" mb={2}>
                        Let’s get to work.
                      </MKTypography>

                      {/* </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}> */}
                      {/* <MKInput
                          variant="standard"
                          label="My name is"
                          placeholder="Full Name"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="I'm looking for"
                          placeholder="What you love"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                        /> */}
                      {/* </Grid> */}
                      {/* <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Your message"
                          placeholder="I want to say that..."
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={6}
                        />
                      </Grid> */}
                      {/* </Grid> */}
                      {/* <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton variant="gradient" color="info">
                        Send Message
                      </MKButton>
                    </Grid> */}
                    </MKBox>
                  </MKBox>
                  {/* <form onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name:</label>
      <input id="name" type="text" name="name" required />

      <label htmlFor="company">Company Name:</label>
      <input id="company" type="text" name="company" required />

      <label htmlFor="mobile">Mobile Number:</label>
      <input id="mobile" type="tel" name="mobile" required />

      <label htmlFor="site">Site URL:</label>
      <input id="site" type="url" name="site" required />

      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" required />

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Submitting...' : 'REQUEST FREE QUOTE'}
      </button>
    </form> */}
                  <Form />
                </Grid>
              </Grid>

            </MKBox>
          </Grid>
        </Container>
      </MKBox>

    </BaseLayout>
  );
  // return (
  //   <BaseLayout
  //     title="Nav Tabs"
  //     breadcrumb={[
  //       { label: "Page Sections", route: "/sections/navigation/nav-tabs" },
  //       { label: "Nav Tabs" },
  //     ]}
  //   >
  //     <View title="Tabs simple" code={tabsSimpleCode}>
  //       <MKBox bgColor="white" py={6}>
  //         <TabsSimple />
  //       </MKBox>
  //     </View>
  //   </BaseLayout>
  // );
}

export default Pagination;
