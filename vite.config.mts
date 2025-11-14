import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import zaloMiniApp from "zmp-vite-plugin";
// Removed the import for react-refresh as it's no longer needed

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./src",
    base: "",
    assetsInclude: ["**/*.svg"],
    plugins: [
      svgr(),
      reactRefresh(),
      zaloMiniApp(),
      {
        name: "override-config",
        config: () => ({
          build: {
            target: "esnext",
          },
        }),
      },
    ],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "views/static/[name].[hash][extname]",
        },
      },
    },
  });
};
function reactRefresh():
  | import("vite").PluginOption
  | import("vite").PluginOption[] {
  return react();
}
