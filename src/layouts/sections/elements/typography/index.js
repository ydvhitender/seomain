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

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Typography page components
import TypographyRoboto from "layouts/sections/elements/typography/components/TypographyRoboto";

// Typography page components code
import typographyRobotoCode from "layouts/sections/elements/typography/components/TypographyRoboto/code";

function Typography() {
  return (
    <BaseLayout
      title="Typography"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/Typography" },
        { label: "Typography" },
      ]}
    >
      <View title="Typography - Font Family Roboto" code={typographyRobotoCode}>
        <TypographyRoboto />
      </View>
    </BaseLayout>
  );
}

export default Typography;
