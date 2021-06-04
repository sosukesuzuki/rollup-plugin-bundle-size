import type { Plugin } from "rollup";
import prettyBytes from "pretty-bytes";

function getSize(code: string): string {
  return prettyBytes(Buffer.byteLength(code));
}

export const bundleSize: () => Plugin = function () {
  return {
    name: "bundle-size",
    generateBundle(_options, bundle) {
      for (const [filename, bundled] of Object.entries(bundle)) {
        if (bundled.type === "chunk") {
          console.log(`${filename}: ${getSize(bundled.code)}`);
        }
      }
    },
  };
};
