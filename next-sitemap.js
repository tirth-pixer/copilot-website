const siteURL = "https://www.salescamp.app"

module.exports = {
    siteUrl: siteURL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [
           'https://www.salescamp.app/sitemap.xml',
           'https://www.salescamp.app/server-sitemap.xml' 
        ],
      },
  }