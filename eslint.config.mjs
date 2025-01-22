import antfu from "@antfu/eslint-config"

export default antfu({
  type: "app",
  formatters: true,
  stylistic: {
    indent: 2,
    semi: false,
    quotes: "double",
  },
  rules: {
    "no-console": ["warn"],
    "unused-imports/no-unused-vars": ["warn"],
    "react-refresh/only-export-components": ["off"],
    "style/comma-dangle": ["off"],
    "style/no-trailing-spaces": ["off"],
    "react-dom/no-dangerously-set-innerhtml": ["off"],
    "ts/consistent-type-definitions": ["error", "type"],
    "style/operator-linebreak": ["error", "after"],
    "antfu/if-newline": ["off"],
    "style/eol-last": ["warn", "always"],
    "style/brace-style": ["off"],
    "style/arrow-parens": ["warn", "as-needed"],
  },

  ignores: ["get_network_local_ip.js", "app-env.d.ts", "tsconfig.json", "node_modules"],

  react: true,
  typescript: true,
})
