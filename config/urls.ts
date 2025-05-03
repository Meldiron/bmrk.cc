const isProduction = process.env.NODE_ENV === 'production';

const domain = 'bmrk-cc-liard.vercel.app';
const local = 'localhost:3000';
const home = isProduction ? domain : local;
export const protocol = isProduction ? 'https://' : 'http://';

export const urls = {
  homeWithoutProtocol: home,
  home: `${protocol}${home}`,
  authCallback: `${protocol}${home}/app/auth/callback/`,
  account: `${protocol}${home}/account`,
  intro: `${protocol}${home}/intro`,
  settings: `${protocol}${home}/app/settings`,
  app: `${protocol}${home}/app`,
  api: `${protocol}${home}/api`,
  nonAppApi: `${protocol}${home}/api`,
  twitter: 'https://twitter.com/gokul_i',
  github: 'https://github.com/gokulkrishh/bmrk.cc',
  extensions: {
    chrome:
      'https://chromewebstore.google.com/detail/bookmark-it/fgnmdiklfcddmhmmmppepijecbljfjbm?utm_source=bmrk.cc',
  },
};
