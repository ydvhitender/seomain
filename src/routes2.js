import { Icon } from "@mui/material";
import SEO from "layouts/pages/landing-pages/seo";
import Pricing from "layouts/pages/landing-pages/pricing";
import Home from "layouts/pages/home";
// import Blogging from "layouts/sections/navigation/blogging";
// import Copywriting from "layouts/sections/navigation/copywriting";
// import SearchEngineMarketing from "layouts/sections/navigation/search-engine-marketing";
import FreeWebsiteAudit from "layouts/sections/input-areas/free-website-audit";
// import MobileAppMarketing from "layouts/sections/input-areas/mobile-app-marketing";
// import SocialMediaMarketing from "layouts/sections/attention-catchers/social-media-marketing";

const routes = [
    {
        name: "Home",
        icon: <Icon>home</Icon>,
        route: "/",
        component: <Home />,
    },
    {
        name: "SEO",
        icon: <Icon>dashboard</Icon>,
        route: "/seo",
        component: <SEO />,
    },
    {
        name: "Free Website Audit",
        icon: <Icon>dashboard</Icon>,
        route: "/free-website-audit",
        component: <FreeWebsiteAudit />,
    },
    // {
    //     name: "Marketing",
    //     icon: <Icon>view_day</Icon>,
    //     children: [
    //         {
    //             name: "Search Engine Marketing",
    //             route: "/search-engine-marketing",
    //             component: <SearchEngineMarketing />,
    //         },
    //         {
    //             name: "Social Media Marketing",
    //             route: "/social-media-marketing",
    //             component: <SocialMediaMarketing />,
    //         },
    //         {
    //             name: "Mobile App Marketing",
    //             route: "/mobile-app-marketing",
    //             component: <MobileAppMarketing />,
    //         },
    // {
    //     name: "Free Website Audit",
    //     route: "/free-website-audit",
    //     component: <FreeWebsiteAudit />,
    // },
    //     ],
    // },
    // {
    //     name: "Content",
    //     icon: <Icon>article</Icon>,
    //     children: [
    //         {
    //             name: "Copywriting",
    //             route: "/copywriting",
    //             component: <Copywriting />,
    //         },
    //         {
    //             name: "Blogging",
    //             route: "/blogging",
    //             component: <Blogging />,
    //         },
    //     ],
    // },
    {
        name: "Pricing",
        icon: <Icon>dashboard</Icon>,
        route: "/pricing",
        component: <Pricing />,
    },
];

export default routes;
