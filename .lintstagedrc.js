module.exports = {
  '(apps|libs|tools)/**/*': () => [
    'nx affected:lint --fix --uncommitted',
    'nx affected:test --uncommitted'
  ]
}
