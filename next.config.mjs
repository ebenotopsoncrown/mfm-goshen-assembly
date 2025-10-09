/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Example hosts — keep only what you actually use:
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "i.imgur.com" },
      // { protocol: "https", hostname: "your-cdn.example.com" },
    ],
  },
};

export default nextConfig;

