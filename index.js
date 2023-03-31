module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'index': [0, 2], // 缩进时使用两个空格
    'react/jsx-props-no-spreading': 'off', // 组件中可以使用扩展运算符(...)
    'func-names': ['error', 'as-needed'], // 函数名称仅在必要时需要
    'react/react-in-jsx-scope': 'off', // 允许在没有引入React的情况下使用JSX
    '@typescript-eslint/comma-dangle': 'off', // 允许在对象和数组字面量中使用尾随逗号
    'arrow-body-style': 'off', // 允许在箭头函数中使用大括号
    'click-events-have-key-events': 'off', // 不要求click事件同时包含按键事件
    'jsx-a11y/no-static-element-interactions': 'off', // 允许使用具有静态属性的元素进行交互
    'jsx-a11y/click-events-have-key-events': 'off', // 不要求click事件同时包含按键事件
    'import/order': 'off', // 关闭import排序规则
    'eol-last': 'off', // 关闭强制要求文件以换行符结束
    'react/destructuring-assignment': 'off', // 不要求使用解构赋值
    'import/prefer-default-export': 'off', // 不要求使用默认导出
    '@typescript-eslint/no-use-before-define': 'off', // 允许使用定义前的变量
    'max-len': ['error', { code: 150 }], // 强制一行的最大长度为150个字符
    'prefer-destructuring': 'off', // 不要求使用解构赋值
    'object-curly-newline': 'off', // 不要求花括号换行
    '@typescript-eslint/no-explicit-any': ['error'], // 不允许使用any类型
    'react-hooks/exhaustive-deps': 'error', // 强制在effect的依赖项列表中使用所有变量
    'no-console': ['warn', { allow: ['error'] }], // 允许使用console.error
    'no-magic-numbers': ['error', { ignore: [0, 1] }], // 忽略数组中的魔法数字（例如 length - 1）
    'arrow-parens': 'off', // 允许在箭头函数中省略参数括号
    'react/require-default-props': 'off', // 不要求定义默认属性
    'linebreak-style': 'off', // 不要求强制执行特定的换行符号
    'curly': ['error', 'all'], // 强制使用大括号
    'import/extensions': 'off', // 不要求指定导入文件扩展名
    '@typescript-eslint/type-annotation-spacing': ['error', { after: true }], // 强制类型注释后留有一个空格
    '@typescript-eslint/no-unsafe-member-access': ['error'],// 不允许使用unsafe的成员访问
    'no-debugger': 'error', // 禁止使用 debugger
    'no-duplicate-imports': ['error'], // 禁止重复导入
    'import/no-extraneous-dependencies': 'off', // 允许导入未在 package.json 中的依赖
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface', // 接口命名约定
        format: ['PascalCase'], // 帕斯卡命名法
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'enum', // 枚举命名约定
        format: ['PascalCase'], // 帕斯卡命名法
        custom: {
          regex: '^E[A-Z]',
          match: true,
        },
      },
    ],
    'no-restricted-syntax': [ // 禁止使用特定的语法
      'error',
      {
        selector: 'TSInterfaceDeclaration, TSEnumDeclaration',
        message: 'Please put interfaces and enums in a types.ts file',
      },
    ],
  },
  overrides: [ // 重写某些文件的规则
    {
      files: ['**/*.types.ts', '**/*.spec.ts', '**/*.test.ts', '**/types.ts'],
      rules: {
        'no-restricted-syntax': 'off',
      },
    },
  ],
};
