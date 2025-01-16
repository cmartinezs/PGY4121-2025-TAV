import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = []
  
  constructor(
      private localStorageService: LocalStorageService
    ) { 
    this.users = this.localStorageService.get('users') ?? []
  }

  getUsers(): User[] {
    return this.users
  }

  getUser(username: string): User | undefined { 
    return this.users.find(user => user.username === username)
  }

  addUser(u: string, p: string): void {
    this.users.push({
      username: u,
      password: p
    })
    this.localStorageService.save('users', this.users)
  }
}
