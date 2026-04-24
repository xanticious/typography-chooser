import { useState, useMemo } from "react";
import { combinations } from "../data/combinations";
import type { ShowcaseCombination, Theme, Mood, AppCategory } from "../data/types";

export interface FilterState {
  category: AppCategory | null;
  themes: Theme[];
  moods: Mood[];
  responsiveOnly: boolean;
  searchQuery: string;
}

export function filterCombinations(
  all: ShowcaseCombination[],
  filters: FilterState,
): ShowcaseCombination[] {
  return all.filter((c) => {
    if (filters.category && c.category !== filters.category) return false;
    if (filters.themes.length > 0 && !filters.themes.includes(c.theme)) return false;
    if (filters.moods.length > 0 && !filters.moods.some((m) => c.mood.includes(m))) return false;
    if (filters.responsiveOnly && !c.responsive) return false;
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase();
      if (!c.name.toLowerCase().includes(q)) return false;
    }
    return true;
  });
}

const initialFilters: FilterState = {
  category: null,
  themes: [],
  moods: [],
  responsiveOnly: false,
  searchQuery: "",
};

export function useFilters() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const filtered = useMemo(() => filterCombinations(combinations, filters), [filters]);

  function setCategory(category: AppCategory | null) {
    setFilters((f) => ({ ...f, category }));
  }
  function toggleTheme(theme: Theme) {
    setFilters((f) => ({
      ...f,
      themes: f.themes.includes(theme) ? f.themes.filter((t) => t !== theme) : [...f.themes, theme],
    }));
  }
  function toggleMood(mood: Mood) {
    setFilters((f) => ({
      ...f,
      moods: f.moods.includes(mood) ? f.moods.filter((m) => m !== mood) : [...f.moods, mood],
    }));
  }
  function setResponsiveOnly(responsiveOnly: boolean) {
    setFilters((f) => ({ ...f, responsiveOnly }));
  }
  function setSearchQuery(searchQuery: string) {
    setFilters((f) => ({ ...f, searchQuery }));
  }
  function clearAll() {
    setFilters(initialFilters);
  }

  return {
    filters,
    filtered,
    setCategory,
    toggleTheme,
    toggleMood,
    setResponsiveOnly,
    setSearchQuery,
    clearAll,
  };
}
