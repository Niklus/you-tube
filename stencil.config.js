exports.config = {
  namespace: 'youtube',
  generateDistribution: true,
  bundles: [
    { components: ['you-tube'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
