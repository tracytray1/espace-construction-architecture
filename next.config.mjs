/** @type {import('next').NextConfig} */
const nextConfig = {
  // Support SCSS
  sassOptions: {
    includePaths: ['./styles'],
  },

  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    qualities: [75, 85],
  },

  // 🔹 TURBOPACK vide → Next ne se plaint plus
  turbopack: {},

  // Webpack config pour les SVG React
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/, // important pour importer comme React Component
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
