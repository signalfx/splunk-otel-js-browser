/*
Copyright 2021 Splunk Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

module.exports = {
  'plugins': [
    'header',
  ],
  'env': {
    'mocha': true,
    'browser': true,
    'es2015': true,
    'commonjs': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'rules': {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'strict': ['error', 'safe'],
    'curly': 'error',
    'eqeqeq': 'error',
    'no-alert':'error',
    'no-useless-backreference':'error',
    'consistent-return': 'error',
    'no-constructor-return': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-script-url': 'error',
    'no-shadow': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'indent': ['error', 2],
    'no-tabs': 'error',
    'no-unneeded-ternary': 'error',
    'no-extra-parens': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable-loop': 'error',
    'block-scoped-var': 'error',
    'array-callback-return': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implicit-globals': 'error',
    'no-octal-escape': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-useless-call': 'error',
    'wrap-iife': 'error',
    'yoda': 'error',
    'no-use-before-define': 'error',
    'no-mixed-operators': 'error',
    'header/header': [2, 'block', [
      '',
      { 'pattern': 'Copyright 20\\d{2} Splunk Inc.', 'template': `Copyright ${new Date().getFullYear()} Splunk Inc.` },
      '',
      'Licensed under the Apache License, Version 2.0 (the "License");',
      'you may not use this file except in compliance with the License.',
      'You may obtain a copy of the License at',
      '',
      'http://www.apache.org/licenses/LICENSE-2.0',
      '',
      'Unless required by applicable law or agreed to in writing, software',
      'distributed under the License is distributed on an "AS IS" BASIS,',
      'WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.',
      'See the License for the specific language governing permissions and',
      'limitations under the License.',
      '',
    ], 2],
  },
  'overrides': [
    {
      'files': ['integration-tests/**/*.js'],
      'env': {
        'node': true
      },
      'parserOptions': {
        'ecmaVersion': 2018
      },
    },
    {
      'files': ['examples/**/*.js'],
      'parserOptions': {
        'ecmaVersion': 2018
      },
      rules: {
        'header/header': false,
      },
    },
  ]
};
