import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = []
  
  constructor() { 
    const dataJson = localStorage.getItem('users') ?? '[]'
    this.users = JSON.parse(dataJson)
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

    localStorage.setItem('users', JSON.stringify(this.users))
  }
}
