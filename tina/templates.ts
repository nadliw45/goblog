import type { TinaField } from "tinacms";
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
  ] as TinaField[];
}
