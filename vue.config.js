// https://1sonjm.github.io/sight-reading-and-fingering-trainer/
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/sight-reading-and-fingering-trainer' : '/',
  outputDir: 'docs',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  },
	chainWebpack: (config) => {
		config.plugin('define').tap((definitions) => {
			// eslint-disable-next-line no-param-reassign
			definitions[0] = Object.assign(definitions[0], {
				VUE_APP_API_URL: JSON.stringify(process.env.VUE_APP_API_URL),
			})
			return definitions
		})
	},
}
