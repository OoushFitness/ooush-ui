import '../styles/globals.css'
import '../src/main.scss'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import Layout from '../src/components/layout/layout'
import { AuthProvider } from '../auth/AuthContexts';
import { ProtectRoute } from '../auth/AuthContexts';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    if(router.pathname !== '/' && router.pathname !== '/about') {
        return (
            <AuthProvider>
                <ProtectRoute>
                    <Layout><Component {...pageProps} /></Layout>
                </ProtectRoute>
            </AuthProvider>
        )
    } else {
        return <Layout><Component {...pageProps} /></Layout>
    }
}

export default MyApp