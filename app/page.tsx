import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getAllCategories } from '@/lib/filterUtils'

import boilerplatesData from '@/data/boilerplates.json'
import type { Boilerplate } from '@/types/boilerplate'
import { BoilerplateExplorer } from '@/components/BoilerplatExplorer'

export default function Home() {
  const boilerplates = boilerplatesData as Boilerplate[];
  const categories = getAllCategories(boilerplates);

  return (
    <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <BoilerplateExplorer categories={categories} boilerplates={boilerplates} initialCategory="All" />
    </main>
    <Footer />
  </div>
  )
}
