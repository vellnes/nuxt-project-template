module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'arrow-parens': [1, 'as-needed'],
    'arrow-spacing': [1, {before: true, after: true}],
    'accessor-pairs': 2,
    'block-scoped-var': 2,
    'brace-style': [0, '1tbs'],
    'camelcase': 1,
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {before: false, after: true}],
    'comma-style': [2, 'last'],
    'complexity': [1, 11],
    'computed-property-spacing': [2, 'never'],
    'consistent-return': 0,
    'consistent-this': [0, 'that'],
    'constructor-super': 2,
    'curly': [2, 'all'],
    'default-case': 0,
    'dot-location': 0,
    'dot-notation': [2, {allowKeywords: true}],
    'eol-last': 2,
    'eqeqeq': 2,
    'func-names': 0,
    'func-style': [0, 'declaration'],
    'generator-star-spacing': 0,
    'guard-for-in': 1,
    'handle-callback-err': 0,
    'id-length': [2, {min: 1, max: 40}],
    'indent': [2, 2, {SwitchCase: 1}],
    'key-spacing': [2, {beforeColon: false, afterColon: true}],
    'lines-around-comment': 0,
    'linebreak-style': [0, 'unix'],
    'max-depth': [0, 4],
    'max-len': [0, 120, 4],
    'max-nested-callbacks': [1, 4],
    'max-params': [0, 3],
    'max-statements': [0, 10],
    'new-cap': 2,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-caller': 2,
    'no-catch-shadow': 2,
    'no-cond-assign': 2,
    'no-console': 0,
    'no-constant-condition': 2,
    'no-continue': 0,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-div-regex': 0,
    'no-dupe-keys': 2,
    'no-dupe-args': 2,
    'no-duplicate-case': 2,
    'no-else-return': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 0,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inline-comments': 0,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-implicit-coercion': [2, {boolean: false, number: true, string: true}],
    'no-loop-func': 2,
    'no-mixed-requires': [0, false],
    'no-mixed-spaces-and-tabs': [2, false],
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {max: 1, maxEOF: 0}],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 0,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 0,
    'no-path-concat': 0,
    'no-plusplus': 0,
    'no-process-env': 0,
    'no-process-exit': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 1,
    'no-restricted-modules': 0,
    'no-return-assign': 2,
    'no-script-url': 0,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 1,
    'no-sync': 0,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-throw-literal': 0,
    'no-this-before-super': 2,
    'no-unexpected-multiline': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-underscore-dangle': 2,
    'no-unneeded-ternary': 2,
    'no-unreachable': 2,
    'no-unused-expressions': 2,
    'no-unused-vars': [2, {vars: 'all', args: 'after-used'}],
    'no-use-before-define': 2,
    'no-useless-call': 2,
    'no-void': 0,
    'no-var': 2,
    'no-warning-comments': 0,
    'no-with': 2,
    'new-parens': 2,
    'newline-after-var': 0,
    'object-curly-spacing': [1, 'never'],
    'one-var': [2, 'never'],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': 0,
    'padded-blocks': 0,
    'prefer-const': 1,
    'prefer-spread': 2,
    'quote-props': [2, 'as-needed'],
    'quotes': [2, 'single'],
    'radix': 1,
    'semi': [2, 'always'],
    'semi-spacing': [2, {before: false, after: true}],
    'sort-vars': 0,
    'keyword-spacing': [2, {before: true, after: true}],
    'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],
    'space-in-parens': 0,
    'space-infix-ops': 2,
    'space-unary-ops': [2, {words: true, nonwords: false}],
    'spaced-comment': [1, 'always'],
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,
    'vars-on-top': 2,
    'wrap-iife': 0,
    'wrap-regex': 0,
    'yoda': [2, 'never']
  },
  globals: {
    'NODE_ENV': true,
    'window': true,
    'TimelineMax': true,
    'TimelineLite': true,
    'Power1': true,
    'Power2': true,
    'Power3': true,
    'Sine': true,
    '$': true
  }
}
