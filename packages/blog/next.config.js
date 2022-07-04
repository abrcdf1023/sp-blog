/**
 * To solve nextjs webpack build settings when use monorepo.
 * Details https://stackoverflow.com/questions/72432298/next-js-lerna-monrepo-module-parse-failed-unexpected-token
 */
const { dependencies } = require('./package.json')
const modules = Object.keys(dependencies).filter(module => module.startsWith('@abrcdf1023/'))
const withTM = require('next-transpile-modules')(modules);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTM(nextConfig)
