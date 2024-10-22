import Header from '@/sections/Landing/components/Header/Header'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Header />
      {children}
    </div>
  )
}
