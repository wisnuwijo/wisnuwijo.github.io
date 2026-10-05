'use client'

import { useState, useEffect } from 'react'
import { getYOE } from './experience'

/**
 * React hook that dynamically returns the user's current years of experience.
 * Automatically increments when the calendar year advances.
 */
export function useYOE() {
  const [yoe, setYoe] = useState(getYOE())

  useEffect(() => {
    setYoe(getYOE())
  }, [])

  return yoe
}
