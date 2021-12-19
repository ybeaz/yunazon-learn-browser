# README

## Levels of Academy service usage

5 - click buttons to "consume" results
4 - click button to enter name after success
1 - click button to return after failure
3 - click button for final submit
2 - click button to start, module started, module step forward
1 - click plate to select a course

Example: getSavedAnanlyticsEvent({ type: 'click', name: 'logo clicked' })
Function available from src/ViewLayer/Hooks/getSavedAnanlyticsEvent.ts

## Plan

## Done

2021-05-31 Implement question limit and pass rate with default and custom settings
2021-05-31 Extend a course template with question limit for a course. For that to add a questions attribute isActive: type boolean
2021-05-31 Extend a course template with rate to pass test
2021-05-29 Extend a question template with attribute isActive: type boolean === false don't show up by default
2021-05-15 Tracking user data is implemented: server API, client support, but not display support
2021-05-01 SEO
2021-05-01 Pagination by two-three questions
2021-05-01 Cc to manager, share in social networks
2021-05-01 Not print
2021-05-01 Rejected. Grey out not related questions
2021-04-20 Assign a special way to load PresentAndSubscribe without connection to router
2021-04-20 SEO, Move II, SSR Server Side Rendering with schema.org
2021-04-20 SEO Move I, register in search engines, provide with basic meta tags
2021-04-20 To move PlayerIframe & ReadeIframe to Frames
2021-04-20 Fix MatrixHome Reader appearance defect
2021-04-20 Text as a content
2021-04-20 False course rating
2021-04-20 Sharing for major social network, move I
2021-04-20 /? Lazy loading, move I
2021-04-20 Load indicators for the plates
2021-04-20 Text content accommodation
2021-04-20 1 question for mobile
2021-04-20 Search/ filtering
2021-04-20 Certificate appearance/ look
2021-04-20 Load PresentAndSubscribe by courseID
2021-04-20 - Make URL work as src for id for youtube with regex function
2021-03-20 Create Yunazone learn Logo, first move
2021-03-20 To make layout and styling close to Youtube
2021-03-10 Integrate icon library React Icons
2021-03-10 Setup main layout
2021-03-09 Setup globalVars fetching
2021-03-08 Setup router, final (or one of the final :) move
2021-03-06 Setup environment and render "Hello World"

## Features and options

### URL Search Parameters

I. for courses
`?si=anything` Adding `si` or `search` or `searchInput` set initial `searchInput` for the app. If `si` is not set, then `searchInput` prop is applied from default settings `src/DataLayer/rootStoreDefault.ts`.

`?ln=en` Adding `ln` or `language` set initial language for the app. If `ln` is not set, then `language` prop is applied from default settings `src/DataLayer/rootStoreDefault.ts`.

`?qn=4` Adding `qn` or `nq` limit the number of questions in the test. If `typeof` `qn` or `nq` `string` (for instance `?qn=all`) then the limit becomes equal the total number of questions. If `qn` or `nq` are not set, then `questionNumber` prop is applied from default settings `src/DataLayer/rootStoreDefault.ts`. `qn` stands for question number.

`?pr=0.75` Adding `pr` or `rp` sets custom pass rate to pass tests. It means that if you answered correctly on 3 question of 4 then with pass rate 0.75 you have passed the test. If `pr` or `rp` are not set, then `passRate` prop is applied from default settings `src/DataLayer/rootStoreDefault.ts`. `pr` stands for pass rate.

II. For Skills Exchange Project (SEP) isSearchFormSepBottom
Full example: `/sep?ssr=Photoshop&intro=SkillExchangeIntro2&hiw=true&sfs=true&sfb=true`
`?sfb=true` value to control whether to display `SearchFormSep` in the bottom of the mobile page or not
`?scs=true` value to control whether to display `SuccessfulCasesSep` or not
`?sfs=true` value to control whether to display `ServiceFunctionsSep` or not
`?hiw=true` value to control whether to display `HowItWorksSep` or not
`?ssr=xyz` value to `selectSkillsRequired` form field
`?intro=xyz` value to set true and select component as an into for the page, one of the CHILDREN from `src/ViewLayer/Frames/ModalFrames.tsx`. Example: `?intro=SkillExchangeIntro`

### Architecture / development notes

1. Add a new screen:
   1. Use `Template.tsx` and `Template.less` from `Components` for a new screen
   2. Add a link to `....less` file into `src/ViewLayer/Styles/index.style.less`
   3. Add a router into `src/Constants/routes.const.ts`
   4. Add a component import and property to the object into `src/RouterScreensConfig.tsx`
   5. Add 2.4 to the screen component
2. Manage color themes `GLOBAL_THEME.colors`, `BRIGHTNESS` and `ALPHAS`
   1. Setup colors in `src/Constants/globalTheme.const.ts` Pay attention [0, 0, 12.5, 1] means for HSLA [hue, saturation, lightness, alphas] and for RGBA [red, green, blue, alpha]
   2. Set a default theme in `rootStoreDefault.globalVars.theme` in `src/DataLayer/rootStoreDefault.ts`
   3. Global theme has been added with `<GlobalTheme>` in `src/initializeBrowserApp.tsx`, and then with `getCreatedGlobalStyle` in `src/ViewLayer/Styles/getCreatedGlobalStyle.ts`
   4. Change default theme on the screen level such has been done in `useEffect(...)` in `SkillExchangeSeach.tsx`
   5. Add a custom theme color to the element in `getCreatedGlobalStyle` in `src/ViewLayer/Styles/getCreatedGlobalStyle.ts`
   6. You can specify a separate colors for each theme as it is done for example for `.ModalFrames .__content`
3. Input values. Passing input values from input component is implemented by event.target.value in handleEvents function of the related property name in `src/DataLayer/index.handleEvents.ts`
4. Passing actions. Passing an action is made through the secuence `Component` => `handleEvents` => `dispatch` => `reducer`
5. Adding an modal window is made by the following:
   1. Add `ModalFrames` component to `HeaderFrame` component (once)
   2. Add a specific new component to `CHILDREN` object in the `ModalFrames` component
   3. Add an object to the array that controls modal window appearance to state tree `state`: { `componentsState`: {
      `modalFrames`: [ ... ]
6. A developer is better to use `Template` for creating
   1. functional Components
   2. handlers
   3. reducers
   4. sagas
   5. connectors
7. Using predefined mixins
   1. `src/ViewLayer/Styles/mixins.style.less` defines a set of mixins for paddings and margins with a pattern `.p_y_x`, `.p_t_r_b_l`, `.m_y_x`, `.m_t_r_b_l`

## To run the project

1. Build Docker image from `docker-compose-mongodb.yml`
   - See here `/Users/admin/Dev/manuals/Docker.md`
2. Run Server
   - in server directory run `yarn dev`
3. Run application
   - here run `yarn dev:start` and to restart run `yarn dev`

## MongoDB collections

documents
