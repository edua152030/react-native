module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-native", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:prettier/recommended",
  ],
  env: {
    "react-native/react-native": true,
    es2021: true,
  },
  rules: {
    "prettier/prettier": "error",
    // coloque suas regras personalizadas aqui
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
