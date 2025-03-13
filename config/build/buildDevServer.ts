import { BuildOptions } from "./types/config";
// import type
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true, // позволяет при обновлении показывать страницу
  };
}
