import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../types';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserImageComponent } from '../user-image/user-image.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [UserImageComponent, UserDetailsComponent],
  templateUrl: './profile.component.html',
  styles: '',
})
export class ProfileComponent {
  @Input() profile!: User;
}
