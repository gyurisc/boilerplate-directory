"use client"

import { useState } from "react"
import { SearchFilter } from "@/components/SearchFilter"
import { BoilerplateGrid } from "@/components/BoilerplateGrid"
import type { Boilerplate } from "@/types/boilerplate"
import { filterBoilerplatesByCategory } from "@/lib/filterUtils"

interface BoilerplateExplorerProps {
  categories: string[]
  boilerplates: Boilerplate[]
  initialCategory: string
}

export function BoilerplateExplorer({ categories, boilerplates, initialCategory }: BoilerplateExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  console.log('selectedCategory: ', selectedCategory);
  console.log('boilerplates: ', boilerplates);
  console.log('categories: ', categories);
  // Filter boilerplates based on selected category
  const filteredBoilerplates = filterBoilerplatesByCategory(boilerplates, selectedCategory)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <SearchFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <BoilerplateGrid boilerplates={filteredBoilerplates} />
    </>
  )
}

