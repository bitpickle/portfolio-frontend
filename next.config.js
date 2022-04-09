/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
  },
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "pt-BR",
  },
}

module.exports = nextConfig
