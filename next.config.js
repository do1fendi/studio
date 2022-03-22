/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  basePath: "",
  assetPrefix: "https://do1fendi.github.io/studio/",
  assetPrefix: "/",
  images: {
      loader: "imgix",
      path: "https://do1fendi.github.io/studio/",
      // path: "",
    domains: ["do1fendi.github.io"],
  },
  env: {
    BASEURL: "https://do1fendi.github.io/studio",
    // BASEURL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
