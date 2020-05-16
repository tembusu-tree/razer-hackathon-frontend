export function setLocalStorage(key, value) {
  let stored;

  if (typeof value === "string") {
    stored = value;
  } else {
    stored = JSON.stringify(value);
  }

  return stored;
}

export function getLocalStorageItem(key, asJson = false) {
  const item = localStorage.getItem(key);

  if (asJson) {
    return JSON.parse(item);
  }

  return item;
}

export function localStorageItemExists(key) {
  return !!localStorage.getItem(key);
}
