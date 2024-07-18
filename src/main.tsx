import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"
import {ThemeProvider} from '@primer/react'

import './index.css'
import { config } from './config'
import Router from './utils/Router'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider>
              <Router/>
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster/>
  </WagmiProvider>
)
