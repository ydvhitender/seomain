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


/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
// import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
// import AboutUs from "layouts/pages/landing-pages/about-us";
import SEO from "layouts/pages/landing-pages/seo";
// import ContactUs from "layouts/pages/landing-pages/contact-us";
import Pricing from "layouts/pages/landing-pages/pricing";
// import SignIn from "layouts/pages/authentication/sign-in";
import Home from "layouts/pages/home";

// Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
import Blogging from "layouts/sections/navigation/blogging";
import Copywriting from "layouts/sections/navigation/copywriting";
import SearchEngineMarketing from "layouts/sections/navigation/search-engine-marketing";
import FreeWebsiteAudit from "layouts/sections/input-areas/free-website-audit";
import MobileAppMarketing from "layouts/sections/input-areas/mobile-app-marketing";
// import Alerts from "layouts/sections/attention-catchers/alerts";
import SocialMediaMarketing from "layouts/sections/attention-catchers/social-media-marketing";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
// import Badges from "layouts/sections/elements/badges";
// import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "SEO",
    icon: <Icon>dashboard</Icon>,
    route: "/seo",
    component: <SEO />,
  },
  // {
  //   name: "SEO",
  //   icon: <Icon>dashboard</Icon>,
  //   columns: 1,
  //   rowsPerColumn: 2,
  //   collapse: [
  //     {
  //       name: "landing pages",
  //       collapse: [
  //         {
  //           name: "about us",
  //           route: "/pages/landing-pages/about-us",
  //           component: <AboutUs />,
  //         },
  //         {
  //           name: "contact us",
  //           route: "/pages/landing-pages/contact-us",
  //           component: <ContactUs />,
  //         },
  //         {
  //           name: "author",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    name: "Marketing",
    icon: <Icon>view_day</Icon>,
    collapse: [
      // {
      //   name: "page sections",
      //   description: "See all sections",
      //   dropdown: true,
      //   collapse: [
      //     {
      //       name: "features",
      //       route: "/sections/page-sections/features",
      //       component: <Features />,
      //     },
      //   ],
      // },
      {
        name: "SEM",
        description: "Search Engine Marketing",
        route: "/search-engine-marketing",
        component: <SearchEngineMarketing />,
      },
      {
        name: "SMM",
        description: "Social Media Marketing",

        route: "/social-media-marketing",
        component: <SocialMediaMarketing />,
      },
      {
        name: "MAM",
        description: "Mobile App Marketing",

        route: "/mobile-app-marketing",
        component: <MobileAppMarketing />,
      },
      {
        name: "Free Website Audit",
        description: "Get a free website audit",
        route: "/free-website-audit",
        component: <FreeWebsiteAudit />,
      },
      // {
      //   name: "navigation",
      //   description: "See all navigations",
      //   dropdown: true,
      //   collapse: [
      //     {
      //       name: "navbars",
      //       route: "/sections/navigation/navbars",
      //       component: <Navbars />,
      //     },
      //     {
      //       name: "nav tabs",
      //       route: "/sections/navigation/nav-tabs",
      //       component: <NavTabs />,
      //     },
      //     {
      //       name: "pagination",
      //       route: "/sections/navigation/pagination",
      //       component: <Pagination />,
      //     },
      //   ],
      // },
      // {
      //   name: "input areas",
      //   description: "See all input areas",
      //   dropdown: true,
      //   collapse: [
      //     {
      //       name: "inputs",
      //       route: "/sections/input-areas/inputs",
      //       component: <Inputs />,
      //     },
      //     {
      //       name: "forms",
      //       route: "/sections/input-areas/forms",
      //       component: <Forms />,
      //     },
      //   ],
      // },

      // dropdown: true,
      // collapse: [
      //   {
      //     name: "alerts",
      //     route: "/sections/attention-catchers/alerts",
      //     component: <Alerts />,
      //   },
      //   {
      //     name: "modals",
      //     route: "/sections/attention-catchers/modals",
      //     component: <Modals />,
      //   },
      //   {
      //     name: "tooltips & popovers",
      //     route: "/sections/attention-catchers/tooltips-popovers",
      //     component: <TooltipsPopovers />,
      //   },
      // ],

      // {
      //   name: "elements",
      //   description: "See all 32 examples",
      //   dropdown: true,
      //   collapse: [
      // {
      //   name: "avatars",
      //   route: "/sections/elements/avatars",
      //   component: <Avatars />,
      // },
      // {
      //   name: "badges",
      //   route: "/sections/elements/badges",
      //   component: <Badges />,
      // },
      // {
      //   name: "breadcrumbs",
      //   route: "/sections/elements/breadcrumbs",
      //   component: <BreadcrumbsEl />,
      // },
      // {
      //   name: "buttons",
      //   route: "/sections/elements/buttons",
      //   component: <Buttons />,
      // },
      // {
      //   name: "dropdowns",
      //   route: "/sections/elements/dropdowns",
      //   component: <Dropdowns />,
      // },
      // {
      //   name: "progress bars",
      //   route: "/sections/elements/progress-bars",
      //   component: <ProgressBars />,
      // },
      // {
      //   name: "toggles",
      //   route: "/sections/elements/toggles",
      //   component: <Toggles />,
      // },
      //     {
      //       name: "typography",
      //       route: "/sections/elements/typography",
      //       component: <Typography />,
      //     },
      //   ],
      // },
    ],
  },
  {
    name: "Content",
    icon: <Icon>article</Icon>,
    collapse: [
      // {
      //   name: "Overview",
      //   description: "All about overview, quick start, license and contents",
      //   route: "/sections/navigation/pagination",
      //   component: <Pagination />,
      // },
      // {
      //   name: "Search Engine Marketing",
      //   // description: "See all examples",
      //   route: "/sections/attention-catchers/alerts",
      //       component: <Alerts />,
      // },
      {
        name: "Copywriting",
        description: "Explore copywriting section",
        route: "/copywriting",
        component: <Copywriting />,
      },
      {
        name: "Blogging",
        description: "Explore blogging section",
        route: "/blogging",
        component: <Blogging />,
      },
    ],
  },
  {
    name: "Pricing",
    icon: <Icon>dashboard</Icon>,
    route: "/pricing",
    component: <Pricing />,
  },
  {
    name: "About us",
    icon: <Icon>dashboard</Icon>,
    route: "/home",
    component: <Home />,
  },

];

export default routes;
