/**
 * To solve nextjs webpack build settings when use monorepo.
 * Details https://stackoverflow.com/questions/72432298/next-js-lerna-monrepo-module-parse-failed-unexpected-token
 */

const withTM = require('next-transpile-modules')(['@abrcdf1023/utils']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTM(nextConfig)
