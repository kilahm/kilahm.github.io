module.exports = {
  '**/*.((t|j)s?(x)|html|?(s)css)': () => [
    'nx affected:lint --fix --base=main',
  ]
}
