import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { Component } from '@angular/core'

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent {
  items = Array(5)
    .fill(1)
    .map((i, index) => `Item ${index + 1}`)

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex)
  }
}
