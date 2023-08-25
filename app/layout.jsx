import React from 'react'
import '@style/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "Omishtu-Joy AgTech",
    description: "connect with the Prompt AI to get updated information"
}

const RootLayout= ({children}) => {
  return (
        <html lang='en'>
          <body>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                <Nav />
                {children}
            </main>
          </body>
        </html>
  )
}

export default RootLayout;