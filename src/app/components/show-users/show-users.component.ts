import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  @Input() user;

  userForm: FormGroup

  constructor() { }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      name: new FormControl(this.user.name),
      address: new FormControl(this.user.address),
      city: new FormControl(this.user.city),
      phone: new FormControl(this.user.phone),
    });
  }

}
