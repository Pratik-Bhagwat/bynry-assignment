import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-image',
  standalone: true,
  imports: [],
  templateUrl: './user-image.component.html',
  styles: '',
})
export class UserImageComponent {
  @Input() image!: string;
  @Input() firstName!: string;
  @Input() bloodGroup!: string;
  @Input() height!: number;
  @Input() weight!: number;
}
