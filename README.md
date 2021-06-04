# @sosukesuzuki/rollup-plugin-bundle-size

A simple rollup plugin to output bundle size.

## Install

```
npm install --save-dev @sosukesuzuki/rollup-plugin-bundle-size
```

## Usage

```js
import { bundleSize } from "@sosukesuzuki/rollup-plugin-bundle-size";

export default {
  input: "./index.js",
  output: {
    format: "cjs",
  },
  plugins: [bundleSize()],
};
```

## Release

```
npm run release -- --release=patch
```
