module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    "rules": {
        "strict": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
};