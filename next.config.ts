import type { NextConfig } from 'next'
import type { Configuration as WebpackConfig } from 'webpack'

const nextConfig: NextConfig = {
  webpack: (config: WebpackConfig) => {
    config.ignoreWarnings = [{ module: /node_modules\/punycode/ }]
    return config
  },
}

export default nextConfig
