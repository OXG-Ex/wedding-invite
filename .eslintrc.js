module.exports = {
  extends: [
    "plugin:storybook/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:effector/recommended",
    "plugin:effector/future",
    "plugin:effector/react",
    "prettier",
  ],
  rules: {
    "import/prefer-default-export": "off",
    "react/function-component-definition": "off",
    "react/no-unstable-nested-components": [
      "error",
      {
        allowAsProps: true,
      },
    ],
    "react/no-array-index-key": "off",
    "object-curly-spacing": ["error", "never"],
    "react/jsx-filename-extension": [1, {extensions: [".tsx", ".jsx"]}],
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-shadow": "warn",
    "no-shadow": "off",
    "no-void": ["error", {allowAsStatement: true}],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "@typescript-eslint/no-empty-interface": "off",
    "react/button-has-type": "off",
    "react/jsx-props-no-spreading": "off",
    "no-plusplus": "off",
    "react/prop-types": "off",
    "import/no-unresolved": "error",
    "react/require-default-props": "off",
    "sort-destructure-keys/sort-destructure-keys": [
      "warn",
      {caseSensitive: false},
    ],
    "no-underscore-dangle": "off",
    "react-refresh/only-export-components": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "import/order": [
      "warn",
      {
        groups: [
          "external",
          "builtin",
          ["internal", "unknown"],
          "parent",
          "sibling",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        controlComponents: ["Input", "Textarea"],
        assert: "both",
        depth: 3,
      },
    ],
    // Чтобы не формировать отдельный пакет под кастомные рули, они патчатся ярном в sort-destructure-keys
    "sort-destructure-keys/lodash-es-use-default-import": "error",
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "sort-destructure-keys",
    "react-refresh",
    "import",
    "effector",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["./tsconfig.json", "packages/*/tsconfig.json"],
      },
    },
  },
  ignorePatterns: ["**/*.js", "node_modules"],
};
