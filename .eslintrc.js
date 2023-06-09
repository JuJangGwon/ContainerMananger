module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    parserOptions: {
        project: "./tsconfig.json",
    },
    env: {
        node: true,
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "airbnb-typescript",
        "plugin:prettier/recommended",
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off",
        "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }], //should add ".ts" if typescript project
    },
};