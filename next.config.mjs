/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "", // Leave empty if you're using the default port
        pathname: "/**", // This allows all paths under the domain
      },
      {
        protocol: "https",
        hostname: "placeimg.com",
        port: "", // Leave empty if you're using the default port
        pathname: "/**", // This allows all paths under the domain
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "", // Leave empty if you're using the default port
        pathname: "/**", // This allows all paths under the domain
      },
      {
        protocol: "http", // Use http for example.com
        hostname: "example.com", // Add the hostname here
        port: "", // Leave empty if you're using the default port
        pathname: "/**", // This allows all paths under the domain
      },
      {
        protocol: "https", // Use https for wallpaperflare.com
        hostname: "c4.wallpaperflare.com", // Add the new hostname here
        port: "", // Leave empty if you're using the default port
        pathname: "/**", // This allows all paths under the domain
      },
      {
        protocol: "https", // Use https for akamaized.net
        hostname: "img-prod-cms-rt-microsoft-com.akamaized.net", // Add the new hostname here
        port: "", // Leave empty if you're using the default port
        pathname: "/**", // This allows all paths under the domain
      },
      {
        protocol: "https", // Use https for escuelajs.co
        hostname: "api.escuelajs.co", // Add the new hostname here
        port: "", // Leave empty if you're using the default port
        pathname: "/**", // This allows all paths under the domain
      },
    ],
  },
};

export default nextConfig;
