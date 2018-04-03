export const config = {
  profiteurPath: {
    type: 'string',
    default: 'profiteur.js',
    description: `Path to profiteur executable; if set to 'profiteur.js'
(default) will use bundled ghcjs-powered implementation`,
  },
}

// generated by typed-config.js
declare module 'atom' {
  interface ConfigValues {
    'ide-haskell-profiteurjs.profiteurPath': string
    'ide-haskell-profiteurjs': {
      profiteurPath: string
    }
  }
}