![Netlify](https://img.shields.io/netlify/53967b51-b43d-4821-9bc1-05bf0fcedabd)
![LICENSE](https://img.shields.io/badge/license-MIT-green)
# Responsive React Asssesment Task
DEMO: [dashley.netlify.com](https://dashley.netlify.com)

This is an assesment task showcasing a Responsive UI built with React. It has been built with no frameworks other then React(TypeScript) and Webpack. The app utilizes PostCSS with CSS Modules. This enables components to have their styling locally scoped.

## How To Set Up
To set up the app, follow the following steps:
- Run `npm install` to install dependancies.
- To start the development server, run `yarn dev`.
- To build the app for production, run `yarn build`.

## How is the project structured?
### Routes
The main entry point, `src/index.tsx`, serves as the Router. It render's different components from the *templates* directory depeding on the current url. It also houses the **Navigation** component, which is present on all templates.

### Templates
Each *template* contains a `<main>` element that wraps the components that are present on that page. This keeps the page-level logic separate from the component logic.

### Components
Under the *components* directory lies all the UI components of the app. These are being used in templates. Each component has an `index.tsx` file, where the React component lives, and a `style.module.css`. This stylesheet is a CSS Module. It is locally scoped to the module, meaning there are no need to use methodologies such as BEM to handle scoping issues.

### TypeScript
Some components may make use of an `interface` to define it's **prop types**. Some components like the `Inputs` contain more than one export. This makes code re-usable and clean.

### Global
The styles in `src/global.css` are available from anywhere in the app. This sets up things like browser resets, base styles, colors and breakpoints.

The icons in `src/icons` can be imported as a normal React component. They can be styled using css `color` and scaled using `font-size`.
