const favicons = require('favicons')
const fs = require('fs')

const source = 'config/profile.png'

const configuration = {
  path: '/',
  appName: null,
  appShortName: null,
  appDescription: null,
  developerName: null,
  developerURL: null,
  dir: 'auto',
  lang: 'en-US',
  background: '#fff',
  theme_color: '#fff',
  appleStatusBarStyle: 'black-translucent',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  start_url: '/?homescreen=1',
  version: '1.0',
  logging: false,
  pixel_art: false,
  loadManifestWithCredentials: false,
  icons: {
    android: false,
    appleIcon: false,
    appleStartup: false,
    coast: false,
    favicons: ['favicon.ico'],
    firefox: false,
    windows: false,
    yandex: false,
  },
}

const createFile = function (path, content) {
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log(`${path} created`)
    }
  })
}

const callback = function (error, response) {
  if (error) {
    console.error(error.message)
    return
  }

  response.images.forEach((element) => {
    createFile('public/' + element.name, element.contents)
  })

  console.log('Successfully created favicons')
}

console.log('Generating favicons...')
favicons(source, configuration, callback)
