module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        node: true,
        mocha: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
};
