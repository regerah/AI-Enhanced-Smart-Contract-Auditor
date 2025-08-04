'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider, Helmet } from 'react-helmet-async'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HelmetProvider>
          <Helmet>
            <title>Zenix AI - Smart Contract Auditor</title>
            <meta name="description" content="Advanced AI-powered smart contract security analysis and auditing platform" />
            <meta name="keywords" content="smart contract, audit, security, blockchain, AI, ethereum, solidity" />
            <meta name="author" content="Zenix AI Team" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />
            
            {/* Open Graph */}
            <meta property="og:title" content="Zenix AI - Smart Contract Auditor" />
            <meta property="og:description" content="Advanced AI-powered smart contract security analysis and auditing platform" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_US" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Zenix AI - Smart Contract Auditor" />
            <meta name="twitter:description" content="Advanced AI-powered smart contract security analysis and auditing platform" />
          </Helmet>
          <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E]">
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                },
                success: {
                  iconTheme: {
                    primary: '#00C6FF',
                    secondary: 'white',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#FF0080',
                    secondary: 'white',
                  },
                },
              }}
            />
          </div>
        </HelmetProvider>
      </body>
    </html>
  )
} 