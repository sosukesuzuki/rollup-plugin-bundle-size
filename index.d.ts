import { ZlibOptions } from "zlib";
import { Plugin } from "rollup";

export interface BundleSizePluginOptions {
  gzipped: boolean | ZlibOptions;
}

export function bundleSize(opts: BundleSizePluginOptions): Plugin;
