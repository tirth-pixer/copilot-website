const POST_GRAPHQL_LIST_FIELDS = `
title
slug
description
order
icon{
    url
}
`;

const CATEGORY_TAG = `
title
slug
linkedFrom
{
  helpArticlesCollection
  {
    items
    {
      title
      slug
    }
  }
}
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
  return fetchResponse?.data?.helpCategoriesCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.helpCategoriesCollection?.items;
}

export async function getAllHelpCategory(preview) {
  const entries = await fetchGraphQL(
    `query {
        helpCategoriesCollection(order:order_ASC, preview: ${
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

export async function getAllHelpWithSlug(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
        helpCategoriesCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
          items {
            ${POST_GRAPHQL_LIST_FIELDS}
          }
        }
      }`,
    preview
  );
  return extractPost(entries);
}

export async function getHelpCategoryTitleWithSlug() {
  const entries = await fetchGraphQL(
    `query {
        helpCategoriesCollection(where: { slug_exists: true }) {
          items {
            ${CATEGORY_TAG}
          }
        }
      }`
  );
  return extractPostEntries(entries);
}
