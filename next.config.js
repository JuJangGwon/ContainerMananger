/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
    rapidApiKey: process.env.rapidApiKey,
    browser: true,
    es6: true,
    node: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://JuJangGwon.github.io/ContainerMananger"
      : "",

  images: {
    domains: ['firebasestorage.googleapis.com'],
    loader: 'imgix',
    path: 'https://firebasestorage.googleapis.com/v0/b/',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // 해당 플러그인의 권장 규칙을 사용합니다.
  ],
  parser: '@typescript-eslint/parser', // ESLint 파서를 지정합니다.
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX를 파싱할 수 있습니다.
    },
    ecmaVersion: 12, // Modern ECMAScript를 파싱할 수 있습니다.
    sourceType: 'module', // import, export를 사용할 수 있습니다.
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // ESLint 규칙을 지정합니다. extends에서 지정된 규칙을 덮어 쓸수도 있습니다.
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect', // 현재 사용하고 있는 react 버전을 eslint-plugin-react가 자동으로 감지합니다.
    },
  },

}
