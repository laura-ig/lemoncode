import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  correctUser = 'beard';
  correctPass = '1234';

  constructor() { }

  login(username: string, pass: string): boolean {
    if(username===this.correctUser && pass===this.correctPass) {
      console.log(username);
      localStorage.setItem('sotuser', username);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('sotuser');
  }

  isLogged(): boolean {
    return (localStorage.getItem('sotuser'))?true:false;
  }

  getUsername(): string {
    const ls = localStorage.getItem('sotuser');
    return (typeof ls === "string")?ls:'';
  }

}
