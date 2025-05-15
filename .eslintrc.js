// .eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'tailwindcss'
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:tailwindcss/recommended',
        'prettier'
    ],
    rules: {
        '@typescript-eslint/consistent-type-imports': 'error', // Makes sure type-only imports are fixed
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
