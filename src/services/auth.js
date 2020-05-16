import { localStorageItemExists } from "../utils/storage";

export const isAuthenticated = () => {
  return localStorageItemExists();
};
