import rss from "@astrojs/rss";

const postImportResult = import.meta.glob("./blog/**/*.mdx", { eager: true });
const posts = Object.values(postImportResult);
const filteredPosts = posts.filter((post) => !post.frontmatter.draft);

export const get = () =>
  rss({
    stylesheet: "/rss/styles.xsl",
    title: "Rohid’s Blog",
    description: "I'm just another coder 😉",
    site: import.meta.env.SITE,
    items: filteredPosts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: post.frontmatter.pubDate,
    })),
    customData: "<language>en-us</language>",
  });
