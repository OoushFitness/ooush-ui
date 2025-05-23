import type { AppProps } from 'next/app'
import Layout from '../src/components/layout/layout'
import { AuthProvider } from '../auth/AuthContexts';
import { ProtectRoute } from '../auth/AuthContexts';

import '../src/main.scss'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <ProtectRoute>
                <Layout><Component {...pageProps} /></Layout>
            </ProtectRoute>
        </AuthProvider>
    )
}

export default MyApp