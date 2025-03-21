"use client"

import { useState, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"

interface SearchFilterProps {
    categories: string[]
    selectedCategory: string
    onCategoryChange: (category: string) => void
}

export function SearchFilter({ categories, selectedCategory, onCategoryChange }: SearchFilterProps) {
    const handleCategoryChange = (category: string) => {
      onCategoryChange(category)
    }
  
    return (
      <div className="bg-blue-50 py-12">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">
              Find Your Perfect Boilerplate
            </h1>
            <p className="mx-auto max-w-[700px] text-blue-600 md:text-xl">
              Browse our collection of starter kits for your next project
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => {
                const isSelected = selectedCategory === category
                const baseClasses = "rounded-full px-4 py-2 font-medium transition-all duration-200 shadow-sm"
                const selectedClasses = isSelected
                  ? `bg-blue-600 text-white ${baseClasses}`
                  : `bg-white text-blue-700 hover:bg-blue-50 ${baseClasses}`
  
                return (
                  <button key={category} onClick={() => handleCategoryChange(category)} className={selectedClasses}>
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }