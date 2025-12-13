import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'de','fa','fr','ja','it','ps','zh','ru','es'],
 
  // Used when no locale matches
  defaultLocale: 'fa'
});