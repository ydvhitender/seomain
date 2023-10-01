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

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Elements",
    description: "80+ carefully crafted small elements that come with multiple colors and shapes",
    items: [
      {
        image: `${imagesPrefix}/buttons.jpg`,
        name: "Buttons",
        count: 6,
        route: "/sections/elements/buttons",
      },
      {
        image: `${imagesPrefix}/avatars.jpg`,
        name: "Avatars",
        count: 2,
        route: "/sections/elements/avatars",
      },
      {
        image: `${imagesPrefix}/dropdowns.jpg`,
        name: "Dropdowns",
        count: 2,
        route: "/sections/elements/dropdowns",
      },
      {
        image: `${imagesPrefix}/switch.jpg`,
        name: "Toggles",
        count: 2,
        route: "/sections/elements/toggles",
      },
      {
        image: `${imagesPrefix}/social-buttons.jpg`,
        name: "Social Buttons",
        count: 2,
        pro: true,
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        name: "Typography",
        count: 2,
        route: "/sections/elements/typography",
      },
    ],
  },
];
