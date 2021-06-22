module.exports = {
  presets: [
    "@babel/preset-typescript", 
    ['@babel/preset-env', { loose: true }],
    '@babel/preset-react'
  ],
  plugins: [
    ['@babel/plugin-transform-runtime'],    
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-react-jsx', {
      runtime: 'automatic',
      importSource: 'preact'
      //pragma: 'h',
      //pragmaFrag: 'Fragment'
    }] 
  ]
};