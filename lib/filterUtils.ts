import type { Boilerplate } from "@/types/boilerplate"

export function filterBoilerplatesByCategory(boilerplates: Boilerplate[], selectedCategory: string): Boilerplate[] {
  return boilerplates.filter((boilerplate) => {
    // Filter by category
    const matchesCategory =
      selectedCategory === "" || selectedCategory === "All" || boilerplate.categories.includes(selectedCategory)

    return matchesCategory
  })
}

export function getAllCategories(boilerplates: Boilerplate[]): string[] {
  const categoriesSet = new Set<string>()

  boilerplates.forEach((boilerplate) => {
    boilerplate.categories.forEach((category) => {
      categoriesSet.add(category)
    })
  })

  return ["All", ...Array.from(categoriesSet).sort()];
}

