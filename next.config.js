// eslint-disable-next-line @typescript-eslint/no-require-imports
const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'export'
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
