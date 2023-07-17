import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './Nav'
import NewNav from './NewNav'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CarJam API Demo',
  description: 'CarJam API Demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NavBar />
      <NewNav />
      <body className={inter.className}>{children}</body>

    </html>
  )
}
