import { Inject, Injectable } from '@angular/core'
import { DOCUMENT } from '@angular/platform-browser'

export enum Theme {
  DEFAULT,
  PURPLE,
}
@Injectable()
export class ThemeService {
  private _currentTheme: Theme = Theme.DEFAULT

  constructor(@Inject(DOCUMENT) private document: Document) {}

  get currentTheme() {
    return this._currentTheme
  }

  set currentTheme(theme: Theme) {
    if (theme === Theme.PURPLE) {
      this.document.body.className = 'purple'
    } else {
      this.document.body.className = ''
    }
    this._currentTheme = theme
  }

  toggleTheme() {
    this.currentTheme =
      this.currentTheme === Theme.DEFAULT ? Theme.PURPLE : Theme.DEFAULT
  }
}
