import createMiddleware from "next-intl/middleware";

const middlewareConfig = {
  // A list of all locales that are supported
  locales: ["en", "fa"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
};

export default createMiddleware(middlewareConfig);

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
