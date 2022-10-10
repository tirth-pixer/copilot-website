const POST_GRAPHQL_LIST_FIELDS = `
title
slug
description
date
tags
image{
    url
}
body{
    json
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
  return fetchResponse?.data?.updatesCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.updatesCollection?.items;
}

export async function getAllUpdates(preview) {
  const entries = await fetchGraphQL(
    `query {
        updatesCollection(order: date_DESC, preview: ${
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
