import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privateheader',
  templateUrl: './privateheader.component.html',
  styleUrls: ['./privateheader.component.scss']
})
export class PrivateheaderComponent {
  userlabel = '';
  logged: boolean = false;

  constructor(private router: Router, private authService: AuthService) {

    this.userlabel = this.authService.getUsername();

    this.logged = this.authService.isLogged();

  }

  ngOnInit(): void {
    //redirect to home if not logged
    if(!this.logged) this.router.navigate(['/home']);
  }

}
