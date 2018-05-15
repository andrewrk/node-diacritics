declare module 'diatrics' {
  interface ReplacementListEntry {
    base: string
    chars: string
  }

  interface DiacriticsMap {
    [key: string]: string
  }

  interface DiacriticsModule {
    /**
     * Replaces diacritics in the given string with non diatric equivalents
     * @param str
     */
    remove (str: string): string

    /**
     * Array containing replacement definition Objects
     */
    replacementList: ReplacementListEntry[]

    /**
     * Key value pairs that map diatric characters to a non-diatric character
     */
    diacriticsMap: DiacriticsMap
  }

  const e: DiacriticsModule

  export = e
}

