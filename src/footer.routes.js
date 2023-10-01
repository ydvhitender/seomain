// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark1711.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "eSEO-Aid",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "",
    },
    {
      icon: <GitHubIcon />,
      link: "",
    },
    {
      icon: <YouTubeIcon />,
      link: "",
    },
  ],
  menus: [
    {
      name: "Quick Links",
      items: [
        { name: "About Us", route: "/home", },
        { name: "Free Website Audit", route: "/free-website-audit", },
        { name: "Pricing", route: "/pricing", },
        { name: "Contact Us", route: "/" },
      ],
    },
    {
      name: "Services",
      items: [
        { name: "SEO", route: "/seo", },
        { name: "Search Engine Marketing", route: "/search-engine-marketing", },
        { name: "Social Media Marketing", route: "/social-media-marketing", },
        { name: "Mobile App Marketing", route: "/mobile-app-marketing", },
      ],
    },
    {
      name: "Need more Info",
      items: [
        { name: "Blog", href: "" },
        { name: "Team", href: "" },
        { name: "Case Study", href: "" },
        { name: "Career", href: "" },
      ],
    },
    {
      name: "Get in Touch",
      items: [
        { name: "Office: Alpha-I Commercial Belt, Sector 1, Greater Noida, UttarPradesh 201308", href: "" },
        { name: "Phone: +91 900000000", href: "" },
        { name: "Email: info@eseoaid.com", href: "" },
      ],
    },

  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}  by{" "}
      <MKTypography
        component="a"
        href="/home"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        eSEO-Aid
      </MKTypography>
      .
    </MKTypography>
  ),
};
