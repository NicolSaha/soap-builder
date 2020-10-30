module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'mainGreen': '#4C5C59',
        'subGreen': '#BACDC7',
        'mainLavender': '#9A97B4',
        'subLavender': '#CDCBDB',
      },
      fontFamily: {
        title: ["Libre Baskerville", "sans"],
        body: ["Work Sans", "sans-serif"]
      }
    }
  },
  variants: {},
  plugins: [],
}
