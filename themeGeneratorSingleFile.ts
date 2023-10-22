import fs from "fs";
import path from "path";
import { promisify } from "util";
import process from "process";

interface ThemeConfig {
  color: {
    [key: string]: {
      primary: { value: string };
      secondary: { value: string };
    };
  };
}

const themeConfig: ThemeConfig = require("./src/json/themeConfig.json");

const writeFile = promisify(fs.writeFile);

function generateThemeCSS(themeName: string): string {
  const colors = themeConfig.color[themeName];
  let cssString = "";

  for (const [key, value] of Object.entries(colors)) {
    cssString += `.${key} {\n  background-color: ${value.value};\n}\n`;
  }

  return cssString;
}

async function createCSSFile(themeName: string): Promise<void> {
  const cssContent = generateThemeCSS(themeName);

  try {
    await writeFile(path.join("./src", `${themeName}-theme.css`), cssContent);
    console.log(`Successfully wrote ${themeName}-theme.css`);
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

async function generateTheme(themeName: "light" | "dark"): Promise<void> {
  await createCSSFile(themeName);
}

const themeArgument = process.argv[2];

if (!themeArgument || (themeArgument !== "light" && themeArgument !== "dark")) {
  console.error('Error: Specify "light" or "dark" as an argument.');
  process.exit(1);
}

generateTheme(themeArgument as "light" | "dark").catch((error) => {
  console.error("An error occurred:", error);
});
