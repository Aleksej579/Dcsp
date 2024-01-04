module.exports = {
  name: 'platon',
  sync: {
    proxy: 'http://dcsp.art-coral.com/',
  },
  js: {
    // do you needto minify js?
    minify: true,
    // do you need to concat js?
    concat: true,
  },
  css: {
    // do you need to minify css?
    clean: true,
    // do you want to add .min suffix to minified file?
    rename: false,
    // do you need a sourcemap?
    sourcemap: true,
  },
  ftp: {
    host: 'dcsp.art-coral.com',
    user: 'cc_dcsp',
    password: 'G4p0G5j0',
    path: "www/dcsp.art-coral.com/profiles/opigno_lms/themes/platon/",
  },
}