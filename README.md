# TailwindCSS Accent Colour Plugin

[![npm](https://img.shields.io/npm/v/tailwind-accent-color.svg?style=flat-square)](https://www.npmjs.com/package/tailwind-accent-color)

This plugin generates [accent-color](https://drafts.csswg.org/css-ui-4/#widget-accent) classes.

## Installation

Add to your project via:

```bash
# Install using npm
npm install -D tailwind-accent-color

# Install using yarn
yarn add -D tailwind-accent-color
```

Add it to the plugins array of your Tailwind config.

```js
plugins: [
  require('tailwind-accent-color')(), // no options to configure
]
```

An `accent-{color}` class will be created for each Tailwind color, much like `bg-` classes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
