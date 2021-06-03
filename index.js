module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'index': [0, 2], // 回车使用两个空格
    'react/jsx-props-no-spreading': 'off', // 组件中可以使用 ...扩展运算符
    'func-names': ['error', 'as-needed'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'arrow-body-style': 'off',
    'click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'import/order': 'off',
    'eol-last': 'off',
    'react/destructuring-assignment': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'max-len': ['error', { code: 150 }],
    'prefer-destructuring': 'off',
    'object-curly-newline': 'off',
    '@typescript-eslint/no-explicit-any': ['error'],
    'react-hooks/exhaustive-deps': 'error',
  },
};
