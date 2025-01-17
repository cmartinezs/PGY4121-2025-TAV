import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  userKey: string = 'logged_user'

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  setUserSession(username: string){
    this.localStorageService.save(this.userKey, username)
  }

  getUserSession(): string {
    return this.localStorageService.get(this.userKey) ?? 'Invitado'
  }

  removeUserSession(){
    this.localStorageService.remove(this.userKey)
  }

  isAuthenticated(){
    return this.getUserSession() !== 'Invitado'
  }
}
