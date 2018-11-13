import { Inject, Injectable } from '@angular/core'
import { DOCUMENT } from '@angular/platform-browser'
import { generatePalette } from './colors.helper'

export interface Theme {
  '--primary-50': string
  '--primary-100': string
  '--primary-200': string
  '--primary-300': string
  '--primary-400': string
  '--primary-500': string
  '--primary-600': string
  '--primary-700': string
  '--primary-800': string
  '--primary-900': string
  '--primary-A100': string
  '--primary-A200': string
  '--primary-A400': string
  '--primary-A700': string
  '--accent-50': string
  '--accent-100': string
  '--accent-200': string
  '--accent-300': string
  '--accent-400': string
  '--accent-500': string
  '--accent-600': string
  '--accent-700': string
  '--accent-800': string
  '--accent-900': string
  '--accent-A100': string
  '--accent-A200': string
  '--accent-A400': string
  '--accent-A700': string
}

@Injectable()
export class ThemeService {
  private defaultTheme: Theme
  private otherTheme: Theme
  private isDefault: boolean = true

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.defaultTheme = this.generateTheme('#254d7e', '#808080')
    this.otherTheme = this.generateTheme('#673AB7', '#E91E63')
    this.resetTheme()
  }

  resetTheme() {
    this.loadTheme(this.defaultTheme)
  }

  toggleTheme() {
    if (this.isDefault) {
      this.loadTheme(this.otherTheme)
    } else {
      this.resetTheme()
    }
    this.isDefault = !this.isDefault
  }

  loadTheme(theme: Theme, el: HTMLElement = this.document.body) {
    for (const key in theme) {
      el.style.setProperty(key, theme[key])
    }
  }

  generateTheme(primary: string, accent: string): Theme {
    try {
      const primaryPalette = generatePalette(primary, 'primary')
      const accentPalette = generatePalette(accent, 'accent')

      return {
        ...primaryPalette,
        ...accentPalette,
      } as any
    } catch (e) {
      throw e
    }
  }
}
