import { Injectable } from '@angular/core';
import {createClient, Entry} from 'contentful';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {


  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  loadUser(userId: string) {
    const promis = this.client.getEntry(userId);
    return from(promis).pipe(map(userContent => userContent.fields));
  }

  loadUsers() {
    const promis = this.client.getEntries();
    return from(promis).pipe(map(usersContent => usersContent.items));
  }

}
