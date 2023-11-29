# README SEP Academy React Typescript UI Project

## Decisions made

## How to section, architecture / development notes

### How to build and deploy web.yourails.com

@link https://github.com/jsdelivr/jsdelivr // Link to CDN that works with GitHub.com
@link https://docs.expo.dev/distribution/publishing-websites/

- In VS Code, `~/Dev/yourails_sep_academy_web/deployment`,
  - open `/deployment/index-academy.yourails.html`
  - !!! change version in links for `bundle.min.js` and `main.bundle.min.js`
- Building
  `yarn export:web`: To build. It runs script from package.json file
- Copy `~/Dev/yourails_sep_academy_web/web-build/static` into
  `~/Dev/yourails-assets-sep-academy-web/dist/static`
- In Browser authorise at https://www.npmjs.com/ and check previous `yourails-assets-sep-academy-web` package version
- In VS code change versions (for example `"version": "0.60.0",`) in
  `/Users/admin/Dev/yourails_sep_academy_web/package.json` and
  `/Users/admin/Dev/yourails-assets-sep-academy-web/package.json`
- In Terminal
  - `cd ~/Dev/yourails-assets-sep-academy-web/ && eval $(ssh-agent -s); ssh-add ~/.ssh/2020-10-19-rsa && npm init && npm publish`,
    go through steps and change version to the next one
- In ForkLift copy
  - copy `/deployment/index-r1.userto.html` to `r1.userto.com/www/`
  - copy `/deployment/index-web.yourails.html` to `../web.yourails.com/www`
  - `/deployment/index-web.yourails.html``index.html` and `.htaccess` to the directories
- In Browser, new Tab,
  - `shift`+`command`+`delete` and remove cache
  - check r1.userto.com
  - check `web.yourails.com`
- Check version in https://www.npmjs.com/
