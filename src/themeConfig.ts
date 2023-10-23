// themeConfig.ts
import data from "./json/themeConfig.json";

interface Theme {
  primary: { value: string };
  secondary: { value: string };
}

interface ThemeConfig {
  color: {
    [key: string]: Theme;
  };
}

export const themeConfig: ThemeConfig = data;
