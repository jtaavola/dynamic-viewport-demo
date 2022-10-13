# Dynamic Viewport Demo

Some browsers have a dyanmic viewport. For example, iOS Safari hides the address bar when scrolling, affecting the viewport height. This is a well document problem with using viewport units for CSS sizing. This repo explores the available [viewport sizes](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units_based_on_viewport) (`v*`, `sv*`, `lv*`, and `dv*`). [Try out the demo on your phone!](https://jtaavola.github.io/dynamic-viewport-demo).

<p>
  <img src="https://user-images.githubusercontent.com/46852381/195477091-9757cd66-1d8c-4dd1-9cdb-5204f5ffebcf.jpeg" alt="using 100vh" width="200"/>
  <img src="https://user-images.githubusercontent.com/46852381/195477075-634d1fdc-e873-4a91-90a0-a19575cc086e.jpeg" alt="using 100svh" width="200"/>
</p>

<sub>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [cra-template-styled](https://github.com/jtaavola/cra-templates/tree/main/cra-template-styled).</sub>

## Related resources
- [Webkit bugzilla report](https://bugs.webkit.org/show_bug.cgi?id=141832)
- [Addressing the iOS Address Bar in 100vh Layouts](https://medium.com/@susiekim9/how-to-compensate-for-the-ios-viewport-unit-bug-46e78d54af0d)
- [react-div-100vh](https://github.com/mvasin/react-div-100vh)

## Development

### `npm install`

Install necessary packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

