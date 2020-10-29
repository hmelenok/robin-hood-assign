module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
          project: './tsconfig.json',
    },
    rules: {
        'react/jsx-props-no-spreading': [1],
        'react/require-default-props': [1],
        'react/jsx-filename-extension': [1],
        'react/react-in-jsx-scope': [1],
    }
};