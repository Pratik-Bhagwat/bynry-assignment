import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { UsersService } from '../../services/users.service';
import { User } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './home.component.html',
  styles: '',
})
export class HomeComponent {
  constructor(private userService: UsersService) {}

  users: User[] = [];

  ngOnInit() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data.users;
    });
  }
}
