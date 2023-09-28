module.exports = {
  extends: ['stylelint-config-html, stylelint-config-recommended'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends'],
      },
    ],
    'block-no-empty': null,
    'unit-allowed-list': ['em', 'rem', 's', 'px'],
    'property-no-vendor-prefix': [
      true,
      {
        severity: 'warning',
      },
    ],
  },
}
