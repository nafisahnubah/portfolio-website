const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // The site is now a single page; send old page URLs to their sections.
  async redirects() {
    return [
      { source: "/experience", destination: "/#s-dev", permanent: false },
      { source: "/projects", destination: "/#s-proj", permanent: false },
      { source: "/certifications", destination: "/#s-cert", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
    ]
  },
}

export default nextConfig
