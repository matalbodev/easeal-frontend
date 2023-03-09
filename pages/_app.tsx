import "../styles/globals.css";
import type { AppProps } from "next/app";
import SidePanelProvider from "../context/SidePanelProvider";
import SidePanel from "../components/dashboard/SidePanel";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidePanelProvider>
      <Component {...pageProps} />
      <SidePanel />
    </SidePanelProvider>
  );
}
