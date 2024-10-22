/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.ctfassets.net", // existing domains
      "cdn.dummyjson.com", // add this line
      "lh3.googleusercontent.com",
    ],
  },
};

export default nextConfig;
