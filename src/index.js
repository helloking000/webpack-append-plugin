/**
 * See the webpack docs for more information about plugins:
 * https://webpack.js.org/contribute/writing-a-plugin/#basic-plugin-architecture
 */

class WebpackAppendPlugin {
  constructor (snippets) {
    if (!Array.isArray(snippets)) { snippets = [snippets]; }
    this.snippets = snippets;
  }

  apply (compiler) {
    compiler.hooks.compilation.tap('appendJs', (compilation) => {
      compilation.hooks.processAssets.tap({
        name: 'appendJs',
        stage: compilation.PROCESS_ASSETS_STAGE_REPORT,
      }, (assets) => {
        Object.keys(assets).forEach(assetName => {
          const asset = assets[assetName];

          this.snippets.forEach((snippet) => {
            let sources = asset._source._children;
            if (snippet.header) { sources.unshift(snippet.header); }
            if (snippet.footer) { sources.push(snippet.footer); }
          });
        });
      });
    });
  }
}

module.exports = WebpackAppendPlugin;
