import React from "react";
import { NavigationBar } from "../components/navbar/navbar";
import './globals.css'

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FICE</title>
      </head>
      <body>
        <NavigationBar/>
        {children}
        
      </body>
    </html>
  )
}