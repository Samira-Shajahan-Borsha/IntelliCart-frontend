import packageJson from "../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Store Admin",
  version: packageJson.version,
  copyright: `© ${currentYear}, Store Admin.`,
  meta: {
    title: "Store Admin",
    description: "Admin dashboard for the storefront.",
  },
};
