module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'object-curly-spacing': [2, 'always'],
    'max-len': [2, 120, 2],
  },
}