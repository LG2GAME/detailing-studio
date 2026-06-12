import js from "@eslint/js"
import globals from "globals"
import pluginVue from "eslint-plugin-vue"
import prettier from "eslint-config-prettier"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: globals.browser
    },
    extends: [
      js.configs.recommended,
      ...pluginVue.configs["flat/essential"],
      prettier
    ]
  }
])