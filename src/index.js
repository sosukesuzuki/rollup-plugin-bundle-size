import zlib from "zlib";
import prettyBytes from "pretty-bytes";

function getGzipOptions(gzipped) {
  if (typeof gzipped === "object") {
    return { level: 9, ...gzipped };
  } else if (typeof gzipped === "boolean" && gzipped) {
    return { level: 9 };
  } else {
    throw new Error(`Invalid gzipped option: ${gzipped}`);
  }
}

export function bundleSize(opts = {}) {
  const getGzippedSize = (code) => {
    if (!opts.gzipped) {
      return null;
    }
    const options = getGzipOptions(opts.gzipped);
    return prettyBytes(zlib.gzipSync(code, options).length);
  };
  return {
    generateBundle(_options, bundle) {
      for (const [filename, bundleObj] of Object.entries(bundle)) {
        if (bundleObj.type === "chunk") {
          const { code } = bundleObj;
          const gzippedSize = getGzippedSize(code);
          const gzippedSizeText = gzippedSize
            ? `, ${gzippedSize} (gzipped)`
            : "";
          console.log(
            `${filename}: ${prettyBytes(
              Buffer.byteLength(code)
            )}${gzippedSizeText}`
          );
        }
      }
    },
  };
}
