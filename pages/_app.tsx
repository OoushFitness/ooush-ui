import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp









let nestedArr = [
  'level1',
  [
    'level2',
  ['level3',
  'level4',
  'level5',]
]
]