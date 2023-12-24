# README SEP Academy React Typescript UI Project

## Decisions made

## How to section, architecture / development notes

### How to add icon to the project

- Find a name of the icon (e.g. `MdLightbulbOutline`) by the link `https://react-icons.github.io/react-icons/icons/md/`
- Add the name of the icon to the import and export section in the `` file
- Use icon name for the icon property (e.g. `icon: 'MdLightbulbOutline'`) for the ButtonYrl, IconYrl components

### How to a component to the modal window

- Create a component in the ViewLayer > Components directory
- Add the less reference to the component less file in the `src/ViewLayer/Styles/index.style.less` style index
- Add the component to the `CHILDREN` dictionary in the `src/ViewLayer/Frames/ModalFrames/ModalFrames.tsx` file
- Add action to the Button
  <pre>
    action: {
          typeEvent: 'SET_MODAL_FRAMES',
          data: [
            {
              childName: 'MyNewComponent',
              isActive: true,
              childProps: {},
            },
          ],
        },
  </pre>

### How to add a page for routing navigation

- Create a component in the ViewLayer > Screen directory
- Add the less reference to the component less file in the `src/ViewLayer/Styles/index.style.less` style index
- Change the layout of the page by adding the class with the name `.MainFrame_MyNewScreen` in the `src/ViewLayer/Frames/MainFrame/MainFrame.less` file
- Add the name of this component to the `src/Constants/routes.const.ts` file
- Add the component to the `PAGES` dictionary in the `src/Navigation/NavigationWeb.tsx` file
- Check navigation working in the address browser field

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
