// See: https://nextjs.org/learn/seo/crawling-and-indexing/xml-sitemaps
import * as fs from 'fs';

//const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';
const websiteURL = 'https://www.mywebsite.com';

interface Post {
  page: string
  lastMod: string
}

function generateSiteMap(posts: Post[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${posts
      .map(({ page, lastMod }) => {
        return `
        <url>
            <loc>${`${websiteURL}${page === "" ? "" : "/"}${page}`}</loc>
            <lastmod>${lastMod}</lastmod>
        </url>
      `;
      })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  // We make an API call to gather the URLs for our site
  //   const request = await fetch(EXTERNAL_DATA_URL);
  //   const posts = await request.json();

  // use node's path class to get a list of all files at ./
  const posts = fs.readdirSync("./pages")
    // Exclude folders and certain files
    .filter(fileName => {
      const stats = fs.statSync(`./pages/${fileName}`)
      return stats.isFile() && !fileName.startsWith('_') && fileName !== 'sitemap.xml.tsx'
    })
    // Get the name and last modified date of each file
    .map(fileName => {
      const stats = fs.statSync(`./pages/${fileName}`)
      const post: Post = {
        page: fileName === "index.tsx" ? "" : fileName,
        lastMod: new Date(stats.mtime).toISOString().split("T")[0]
      }
      return post
    })
    // Remove the .tsx extension from the page name
    .map(post => ({
      ...post,
      page: post.page.replace('.tsx', '')
    }))

  // Put index (which should be an empty string) at top and sort the rest alphabetically
  posts.sort((a, b) => (a.page < b.page) ? -1 : 1)

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
