const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  plugins: [
    purgecss({
      content: ["./**/*.html"],
    }),
  ],
  async rewrites() {
    return {
      // After checking all Next.js pages (including dynamic routes)
      // and static files we proxy any other requests
      fallback: [
        {
          source: "/:path*",
          destination: `https://salescamp.webflow.io/:path*`,
        },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "/blogs/:slug*",
        permanent: true,
      },
      {
        source: "/help-category/:slug*",
        destination: "/help/:slug*",
        permanent: true,
      },
      {
        source: "/sales-business-template/:slug*",
        destination: "/sales-business-templates/:slug*",
        permanent: true,
      },
      {
        source: "/integration-list",
        destination: "/integrations",
        permanent: true,
      },
      {
        source: "/integration-list/:slug*",
        destination: "/integrations:slug*",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["images.ctfassets.net", "assets.website-files.com"],
  },
};
