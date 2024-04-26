import { createClient } from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "jjegt9o2",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
  token: import.meta.env.VITE_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
