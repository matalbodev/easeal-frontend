import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SidePanelProvider from '../context/SidePanelProvider'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
