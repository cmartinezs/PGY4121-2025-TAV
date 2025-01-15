import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setUserSession(username: string){
    localStorage.setItem('logged_user', username)
  }

  getUserSession(): string {
    return localStorage.getItem('logged_user') ?? 'Invitado'
  }

  removeUserSession(){
    localStorage.removeItem('logged_user')
  }
}
