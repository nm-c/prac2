/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true, // Add the trailingSlash option here
};
  

module.exports = nextConfig;
