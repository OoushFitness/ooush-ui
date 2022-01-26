import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../auth/AuthContexts';
import { ProtectRoute } from '../auth/ProtectRoute';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <ProtectRoute>
                <Component {...pageProps} />
            </ProtectRoute>
        </AuthProvider>
    )
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