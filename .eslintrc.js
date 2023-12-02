module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "camelcase": ["error", { "properties": "never" }],
        "no-var": "error",
        "no-trailing-spaces": "error",
    }
};
