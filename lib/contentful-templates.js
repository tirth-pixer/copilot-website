const POST_GRAPHQL_LIST_FIELDS = `
title
slug
description
file{
  url
}
businessCategory{
    title
    slug
}
banner{
    url
}
mainImage{
    title
    url
}
body{
    json
}
`;

const TEMPLATE_TAG = `
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
  return fetchResponse?.data?.templatesCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.templatesCollection?.items;
}

export async function getAllTemplates(preview) {
  const entries = await fetchGraphQL(
    `query {
        templatesCollection( preview: ${preview ? "true" : "false"}) {
        items {
          ${POST_GRAPHQL_LIST_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getTemplateWithSlug(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
        templatesCollection(where: { slug: "${slug}" }, preview: ${
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

export async function getTamplateTitleWithSlug() {
  const entries = await fetchGraphQL(
    `query {
        templatesCollection(where: { slug_exists: true }) {
          items {
            ${TEMPLATE_TAG}
          }
        }
      }`
  );
  return extractPostEntries(entries);
}
