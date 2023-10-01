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
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { useState } from 'react';
import { useForm } from '@formspree/react';

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



function Information() {
  return (

    <MKBox component="section" py={12}>

      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Site Audit"
                    description="Our team evaluat a website's technical, on-page, and off-page elements to identify issues and opportunities for optimization to improve search engine visibility and user experience."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Competitive Analysis"
                    description="Our team identifying and evaluating the strengths and weaknesses of competing websites or businesses to inform marketing and business strategies."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Keyword Research"
                    description="Our team identifying and analyzing search terms and phrases that users enter into search engines to inform content creation and optimization strategies."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Mapping Optimization"
                    description="Our team creat and optimiz the website structure and hierarchy to improve user experience, search engine visibility, and website performance."
                  />
                </MKBox>
              </Grid>

            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            {/* <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="What is SEO?"
              description="Search engine optimization (SEO) is the process of helping customers connect with your business online through a variety of optimization tactics designed to increase your organic search traffic."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "Talk to our Expert",
              }}
            /> */}
            <MKBox px={3} py={{ xs: 2, sm: 6 }}>
              <MKTypography variant="h2" mb={1} color="info">
                Free Website Audit
              </MKTypography>
              <MKTypography variant="body1" color="text" mb={2}>
                Let’s get to work.
              </MKTypography>
            </MKBox>

            {/* <MKTypography variant="body1" color="info" opacity={0.7} mt={0} mb={3}>
           <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Get A Free SEO Audit</b></div>
            </MKTypography>
            <MKTypography variant="body1" color="black" opacity={0.8} mt={1} mb={3}>
              
            <div><br /></div>
            </MKTypography> */}
            <Form />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
