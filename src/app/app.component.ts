import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UsersService) {};

  users = [];

  ngOnInit() {
    // this.userService.loadUser('5KKvd2opZQ9cdFHnK7KrZ8')
    //   .subscribe(user => this.user = user);

    // this.userService.loadUsers().subscribe(users => {
    //   this.users = users.map( (el) => el.fields);
    // });
  }

  loadUsers() {
    this.userService.loadUsers().subscribe(users => {
      this.users = users.map(el => el.fields);
    });
  }
}
