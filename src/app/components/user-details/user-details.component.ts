import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styles: '',
})
export class UserDetailsComponent {
  @Input() email!: string;
  @Input() city!: string;
  @Input() state!: string;
  @Input() phone!: string;
}
