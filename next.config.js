/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: '/Portfolio',
  assetPrefix: isProd ? '/Portfolio/' : '',
  images: { unoptimized: true },
  trailingSlash: true,
};
