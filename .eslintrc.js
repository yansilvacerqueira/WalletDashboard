module.exports = {
  extends: [
    "react-app",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  overrides: [
    {
      files: ["src/**/*.ts?(x)"],
      rules: {},
    },
  ],
};
