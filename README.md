# Custom Info Window Demo
Using a React component in a Google map marker's info window can be tricky.
This solution demonstrates how to do this with React [portals](https://react.dev/reference/react-dom/createPortal), the gist of it:
- create the info window with a simple div with a unique ID (e.g. `<div id='unique-id' />`)
- listen to the info window's [domready](https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.domready) event
  - when the event triggers, create the portal using the component you want to render and the info window's placeholder div (i.e. document.getElementById('unique-id')) as the DOM node where the component should be rendered

## Using the demo
- Modify App.jsx to use your google maps API key in place of `<ENTER YOUR API KEY HERE>`
- Install dependencies: `npm i`
- Run the app: `npm run dev`

## Project scaffolded using React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
