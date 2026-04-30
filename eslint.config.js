import tsParser from "@typescript-eslint/parser"
import tsPlugin from "@typescript-eslint/eslint-plugin"

export default [
  {
    ignores: ["dist/**", "node_modules/**", "public/**"],
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        navigator: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
        IntersectionObserver: "readonly",
        ResizeObserver: "readonly",
        HTMLElement: "readonly",
        HTMLAnchorElement: "readonly",
        HTMLCanvasElement: "readonly",
        CanvasRenderingContext2D: "readonly",
        matchMedia: "readonly",
        localStorage: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]
