const POST_GRAPHQL_LIST_FIELDS = `
title
slug
order
isFaq
description
body{
    json
}
icon{
	url
}
category{
    title
    slug
    description
    order
    icon{
        url
    }
}
`;

const POST_GRAPHQL_ITEM_FIELDS = `
title
slug
order
isFaq
description
body{
    json
    links{
      assets{
        block{
          url
          sys{
            id
          }
        }
      }
    }
}
icon{
	url
}
category{
    title
    slug
    description
    order
    icon{
        url
    }
}
`;

const INTEGRATION_TAG = `
title
slug
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.helpArticlesCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.helpArticlesCollection?.items;
}

export async function getAllHelps(preview) {
  const entries = await fetchGraphQL(
    `query {
        helpArticlesCollection(order:order_ASC, preview: ${
          preview ? "true" : "false"
        }) {
        items {
          ${POST_GRAPHQL_LIST_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getHelpWithSlug(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
        helpArticlesCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
          items {
            ${POST_GRAPHQL_ITEM_FIELDS}
          }
        }
      }`,
    preview
  );
  return extractPost(entries);
}
