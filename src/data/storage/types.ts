/**
 * Shared shape for the storage-duration calculator's per-week data files.
 *
 * A `StorageDataset` is content, not code: `StorageCalculator.astro` is the
 * one reusable component (round 2, epic constraint 12) and each week
 * contributes its own dataset of ingredients/dish types, storage
 * conditions and safe-storage durations, sourced from the same USDA FSIS
 * cold-chain guidance already cited in
 * `src/content/sessions/10-food-safety-and-the-cold-chain.md` and
 * `src/content/sessions/11-first-heat.md`.
 */

/** One selectable ingredient or dish type in a week's calculator. */
export interface StorageItem {
  /** Stable identifier, used as the <option> value. */
  id: string;
  /** Label shown in the ingredient/dish-type select. */
  label: string;
  /** The storage condition this duration assumes, stated with units. */
  condition: string;
  /** Safe-storage duration from the prep time, in hours. */
  durationHours: number;
  /**
   * Optional short caveat shown alongside the result — used where a figure
   * generalises a source's broader guidance to this specific item rather
   * than quoting an item-specific chart line, so the generalisation is
   * visible rather than silently implied.
   */
  note?: string;
}

/** A citation for one of the sources backing a week's dataset. */
export interface StorageSource {
  label: string;
  url: string;
}

/** A full per-week dataset for the storage-duration calculator. */
export interface StorageDataset {
  week: number;
  /** Short label for the week, shown as the calculator's heading context. */
  title: string;
  items: StorageItem[];
  sources: StorageSource[];
}
