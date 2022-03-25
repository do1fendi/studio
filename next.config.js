/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  basePath: "",
  // assetPrefix: "/studio",
  images: {
    loader: "imgix",
    path: "",
  },
  env: {
    // BASEURL: "https://do1fendi.github.io/studio",
    BASEURL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
