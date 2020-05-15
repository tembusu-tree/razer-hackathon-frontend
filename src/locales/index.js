export function generateLocalResources() {
  return {
    en: {
      translation: require("./common/en.json"),
    },
    id: {
      translation: require("./common/id.json"),
    },
  };
}

export function getSupportedLocales() {
  return ["en", "id"];
}
