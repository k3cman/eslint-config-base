module.exports = {
    plugins: ["unused-imports"],
    extends: [
        // Recommended Eslint config
        "eslint:recommended",
        // AirBnB Styleguide rules
        "airbnb-typescript/base",
        "prettier",
        "plugin:prettier/recommended",
    ],
    rules: {
        "unused-imports/no-unused-imports": "error",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "class-methods-use-this": "off",
        "no-useless-escape": "warn",
        "no-underscore-dangle": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        "prefer-template": "off",
        "no-return-await": "off",
        "@typescript-eslint/return-await": "off",
        "no-continue": "off",
        "no-await-in-loop": "off",
        // No param reassign should be enabled in order to enforce immutable code style
        "no-param-reassign": "off",
        "no-useless-return": "off",
        // THis disabled using of prototype calls like hasOwnProperty
        "no-prototype-builtins": "off",
        // Should we turn off destructuring of arrays/objects
        "@typescript-eslint/unbound-method": [
          "error",
          {
            ignoreStatic: true,
          },
        ],
        // We are defining Prettier rules here so we can override them with rules from root of the project where this is installed
        "prettier/prettier": [
            "error",
            {
              trailingComma: "all",
              tabWidth: 2,
              semi: true,
              singleQuote: true,
              bracketSpacing: true,
              printWidth: 140,
            },
          ],
    }
}