import { useState } from "react";
import { ThemeProvider } from "./hooks/useTheme";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { FilterPanel } from "./components/FilterPanel/FilterPanel";
import { CombinationGrid } from "./components/CombinationGrid/CombinationGrid";
import { DemoView } from "./components/DemoView/DemoView";
import { useFilters } from "./hooks/useFilters";
import { combinations } from "./data/combinations";

function GalleryView({ onDemoClick }: { onDemoClick: (id: string) => void }) {
  const { filters, filtered, setCategory, toggleTheme, toggleMood, setResponsiveOnly, setSearchQuery, clearAll } = useFilters();

  return (
    <>
      <FilterPanel
        filterState={filters}
        onFilterChange={{ setCategory, toggleTheme, toggleMood, setResponsiveOnly }}
        onClearAll={clearAll}
        onSearchChange={setSearchQuery}
        searchQuery={filters.searchQuery}
      />
      <CombinationGrid combinations={filtered} onDemoClick={onDemoClick} />
    </>
  );
}

export default function App() {
  const [activeDemoId, setActiveDemoId] = useState<string | null>(null);

  const activeCombination = activeDemoId ? combinations.find((c) => c.id === activeDemoId) ?? null : null;

  return (
    <ThemeProvider>
      <AppHeader />
      {activeCombination ? (
        <DemoView combination={activeCombination} onBack={() => setActiveDemoId(null)} />
      ) : (
        <GalleryView onDemoClick={setActiveDemoId} />
      )}
    </ThemeProvider>
  );
}
