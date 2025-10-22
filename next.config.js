/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',                 // generate static HTML
  basePath: '/Portfolio',           // repo name (case-sensitive)
  assetPrefix: isProd ? '/Portfolio/' : '',
  images: { unoptimized: true },    // needed for static export
  trailingSlash: true
};
