import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-privatemenu',
  templateUrl: './privatemenu.component.html',
  styleUrls: ['./privatemenu.component.scss']
})
export class PrivatemenuComponent {

  constructor(private authService: AuthService) {

  }

  logout() {
    this.authService.logout();
    console.log("Bye");
  }

}
