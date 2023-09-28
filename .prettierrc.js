module.exports = {
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  semi: false,
  endOfLine: 'crlf',
  htmlWhitespaceSensitivity: 'strict',
  overrides: [
    {
      files: ['*.html', './src/*.html'], // Use an array to specify multiple file patterns
      options: {
        parser: 'html',
        singleQuote: true,
        tabWidth: 2,
        semi: false,
        jsxSingleQuote: true,
        htmlWhitespaceSensitivity: 'strict',
      },
    },
  ],
}
