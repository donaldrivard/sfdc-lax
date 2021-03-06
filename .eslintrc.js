module.exports = {
    "extends": "airbnb-base",
    "globals": {
        "$A": true,
    },
    "rules": {
        // override default options for rules from base configurations
        "indent": ["error", 2],
        "no-unused-expressions": "off",
        "no-underscore-dangle": "off",
        "no-use-before-define": "off",
        "prefer-arrow-callback": "off",

        // disable rules from base configurations
        "max-len": ["error", { "code": 120 , "ignoreComments": true}],
        "no-console": "off",
        "object-shorthand": "off",
        "prefer-template": "off"
    }
};