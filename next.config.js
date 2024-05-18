const nextTranslate = require('next-translate-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    env: {
        NEXT_PUBLIC_URL_BUTSA_BACKEND: process.env.NEXT_PUBLIC_URL_BUTSA_BACKEND,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true
    },
    ...nextTranslate()
}

module.exports = nextConfig
