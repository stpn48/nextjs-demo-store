/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.ctfassets.net", // existing domains
      "cdn.dummyjson.com", // add this line
    ],
  },
};

export default nextConfig;
