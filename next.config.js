/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  basePath: "",
  assetPrefix: "https://do1fendi.github.io/studio/",
  images: {
    loader: "imgix",
    path: "https://do1fendi.github.io/studio/",
},
env: {
    BASEURL: 'https://do1fendi.github.io/studio',
},
};

module.exports = nextConfig;
