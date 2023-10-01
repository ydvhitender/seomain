/* eslint-disable no-param-reassign */
/**
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
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";
// import FreeWebsiteAudit from "layouts/sections/input-areas/free-website-audit";
import { Link } from 'react-router-dom';

function NavbarDark() {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
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
        transparent
        relative
        light
        center
      />
    </MKBox>
  );
}

export default NavbarDark;
