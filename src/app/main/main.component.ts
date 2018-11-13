import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ThemeService } from '../theme.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches))

  constructor(
    private breakpointObserver: BreakpointObserver,
    private theme: ThemeService
  ) {}

  toggleTheme() {
    this.theme.toggleTheme()
  }
}
