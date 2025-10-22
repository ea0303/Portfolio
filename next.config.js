/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',                 // create static HTML in ./out
  basePath: '/Portfolio',           // repo name (case-sensitive)
  assetPrefix: isProd ? '/Portfolio/' : '',
  images: { unoptimized: true },    // needed for static export
  trailingSlash: true
};
