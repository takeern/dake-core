class SsrClientList {
  apply(compiler) {
    compiler.hooks.emit.tap('SsrClientList', (compilation) => {
      const stats = compilation.getStats().toJson()
      const fileList = stats.assets.map((item) => item.name)
      const manifest = {
        publicPath: stats.publicPath,
        filename: fileList,
      }
      const json = JSON.stringify(manifest, null, 2)
      compilation.assets['clientName.json'] = {
        source() {
          return json
        },
        size() {
          return json.length
        },
      }
    })
  }
}

module.exports = SsrClientList