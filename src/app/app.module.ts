import { DragDropModule } from '@angular/cdk/drag-drop'
import { LayoutModule } from '@angular/cdk/layout'
import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ItemsListComponent } from './items-list/items-list.component'
import { MainComponent } from './main/main.component'
import { ThemeService } from './theme.service'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    ItemsListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
