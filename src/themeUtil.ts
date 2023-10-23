// // themeUtil.ts
// import themeConfig from "./json/themeConfig.json";

// interface ColorValue {
//   value: string;
// }

// interface ThemeColors {
//   primary: ColorValue;
//   secondary: ColorValue;
// }

// interface ThemeConfig {
//   color: {
//     [key: string]: ThemeColors;
//   };
// }

// const themedColors: ThemeConfig = themeConfig as ThemeConfig;

// interface StyleObject {
//   [key: string]: string;
// }

// export function generateThemeStyles(
//   themeName: keyof ThemeConfig["color"]
// ): StyleObject {
//   const colors = themedColors.color[themeName];
//   let styles: StyleObject = {};

//   for (const [key, value] of Object.entries(colors)) {
//     styles[`--${key}`] = value.value;
//   }

//   return styles;
// }

// themeUtil.ts
import themeConfig from "./json/themeConfig.json";

interface ColorValue {
  value: string;
}

interface ThemeColors {
  primary: ColorValue;
  secondary: ColorValue;
}

interface ThemeConfig {
  color: {
    [key: string]: ThemeColors;
  };
}

const themedColors: ThemeConfig = themeConfig as ThemeConfig;

interface StyleObject {
  [key: string]: string;
}

function generateThemeStyles(
  themeName: keyof ThemeConfig["color"]
): StyleObject {
  const colors = themedColors.color[themeName];
  let styles: StyleObject = {};

  for (const [key, value] of Object.entries(colors)) {
    styles[`--${key}`] = value.value;
  }

  return styles;
}

export function applyTheme(themeName: keyof ThemeConfig["color"]): void {
  const styles = generateThemeStyles(themeName);
  const rootStyle = document.documentElement.style;

  for (const [property, value] of Object.entries(styles)) {
    rootStyle.setProperty(property, value);
  }
}
