import { withBase, parseURL } from "ufo";
import type { ProviderGetImage } from "@nuxt/image"
import { createOperationsGenerator } from "#image";

const caisyCdn = "https://assets.caisy.io";

export const operationsGenerator = createOperationsGenerator({
  keyMap: {
    width: "w",
    height: "h",
    quality: "q",
  },
  joinWith: "&",
  formatter: (key: string, value: string) => `${key}=${value}`,
});

export const getImage: ProviderGetImage = (
  src,
  { modifiers = {}, baseURL = caisyCdn } = {}
) => {
  const operations = operationsGenerator(modifiers);

  const { pathname } = parseURL(src);
  const path = pathname + (operations ? "?" + operations : "");
  const url = withBase(path, baseURL);

  return {
    url,
  };
};
