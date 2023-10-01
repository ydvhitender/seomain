/* eslint-disable react/jsx-no-duplicate-props */
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
import { useState } from 'react';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { useForm } from '@formspree/react';

// Images
import macbook from "assets/images/macbook.png";

function Form() {
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useForm("mjvdleev");

  if (state.succeeded) {
    return <div>Thank you for subscribing!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
      <Grid item xs={8}>
      <MKInput
        type="email"
        label="Email Here..."
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
       </Grid>
       <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
      <MKButton
        type="submit"
        variant="gradient"
        color="info"
        sx={{ height: "100%" }}
        disabled={state.submitting}
      >
        {state.submitting ? "Submitting..." : "Subscribe"}
      </MKButton>
      </Grid>
    </Grid>
    </form>
  );
}

function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 2 }, mb: { xs: 12, md: 12 } }}>
            <MKTypography variant="h4">
              Be the first to see the updates
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Your company may not be in the software business, but eventually, a
              software company will be in your business.
              <div><br /></div>
              <div><br /></div>
            </MKTypography>
            <Form />
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={macbook} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// export default Hero;
export default Newsletter;
