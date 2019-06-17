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
        '@typescript-eslint/explicit-member-accessibility': 0,  // I actually LIKE things being public, I'll turn this on when it becomes a problem
        '@typescript-eslint/no-explicit-any': 0,                // sometimes we just don't know
        '@typescript-eslint/interface-name-prefix':0,           // Let me name my interfaces what I want please, thank you
        '@typescript-eslint/no-non-null-assertion':0,           // We allow null in this here town
        'no-console':1,
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