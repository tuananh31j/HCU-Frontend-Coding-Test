module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'react', 'import', 'prettier'],
    rules: {
        'import/newline-after-import': 'warn',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'import/extensions': 'off',
        'import/no-cycle': 'error',
        'no-underscore-dangle': 'off',
        'no-console': 'warn',
        'import/no-unresolved': 'error',
        'import/no-extraneous-dependencies': 'off',
        'import/order': 'off',
        'no-unneeded-ternary': 'warn',
        'no-restricted-exports': 'off',
        'import/prefer-default-export': 'warn',
        'no-param-reassign': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'error',
        'jsx-a11y/no-static-element-interactions': 'warn',
        'no-useless-computed-key': 'warn',
        'react/prop-types': 'off',
        'no-underscore-dangle': 'off',
        'no-unsafe-optional-chaining': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'spaced-comment': 'warn',
        'no-shadow': 'warn',
        '@typescript-eslint/no-shadow': ['warn'],
        'prefer-destructuring': [
            'warn',
            {
                array: false,
                object: true,
            },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': 'error',
        'prettier/prettier': [
            'warn',
            {
                arrowParens: 'always',
                semi: true,
                trailingComma: 'es5',
                tabWidth: 4,
                endOfLine: 'auto',
                useTabs: false,
                singleQuote: true,
                printWidth: 120,
                jsxSingleQuote: true,
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': { typescript: {} },
    },
};
