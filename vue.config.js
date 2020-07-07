module.exports = {
  publicPath: './',
  outputDir: 'packed-app',
  pages:{
    index: {
      entry: './app/src/main.js',
      template: './app/public/index.html',
      title: 'Hostile Waters Modifier'
    }
  }
}