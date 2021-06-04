import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import { bundleSize } from "@sosukesuzuki/rollup-plugin-bundle-size";
import pkg from "./package.json";

export default {
  input: "./src/index.ts",
  output: [
    { file: pkg.main, format: "cjs", exports: "auto" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [typescript(), resolve(), commonjs(), terser(), bundleSize()],
};
