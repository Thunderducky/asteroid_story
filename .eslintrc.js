module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': ['plugin:@typescript-eslint/recommended'],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    'rules': {
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-implicit-any': 0,
        'no-var': 2,
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ]
    }
}