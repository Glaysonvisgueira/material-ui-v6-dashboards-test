import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pigment } from "@pigment-css/vite-plugin";
import { createTheme } from "@mui/material";

/**
 * @type {import('@pigment-css/vite-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ["@mui/material"],
  theme: createTheme({
    cssVariables: true,
  }),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pigment(pigmentConfig)],
});
