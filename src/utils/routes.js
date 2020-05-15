import { publicRoutes } from "../config/routes";
import memoize from "memoize-one";

/**
 *
 * @param {string} route
 */
const mIsPublicRoute = (route) => {
  let isPublic = false;

  publicRoutes.forEach((options) => {
    if (options.link === "/") {
      return;
    }

    if (route.startsWith(options.link)) {
      isPublic = true;
    }
  });

  return isPublic;
};

export const isPublicRoute = memoize(mIsPublicRoute);
