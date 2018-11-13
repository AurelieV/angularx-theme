import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { Component } from '@angular/core'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  items = Array(10)
    .fill(1)
    .map((i, index) => `Item ${index + 1}`)

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex)
  }
}
