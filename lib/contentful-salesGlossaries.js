const POST_GRAPHQL_LIST_FIELDS = `
title
slug
`;

const POST_GRAPHQL_ITEM_FIELDS = `
title
slug
description
`;

const GLOSSARY_TAG = `
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
  return fetchResponse?.data?.salesGlossariesCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.salesGlossariesCollection?.items;
}

export async function getAllSalesGlossary(preview) {
  const entries = await fetchGraphQL(
    `query {
      salesGlossariesCollection(order:title_ASC,limit:1000, preview: ${
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

export async function getSalesGlossaryWithSlug(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
      salesGlossariesCollection(where: { slug: "${slug}" }, preview: ${
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

export async function geSalesGlossaryTitleWithSlug() {
  const entries = await fetchGraphQL(
    `query {
        integrationsCollection(where: { slug_exists: true }) {
          items {
            ${GLOSSARY_TAG}
          }
        }
      }`
  );
  return extractPostEntries(entries);
}
