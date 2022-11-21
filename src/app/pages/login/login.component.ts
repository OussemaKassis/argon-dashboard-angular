import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Interface } from 'readline';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  credentials = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('user');
  }
  ngOnDestroy() {
  }
  login() {
    if(this.credentials.email !== "" && this.credentials.password !== "") {
      this.authService.logIn(this.credentials).subscribe({
        next: (response: any) => {
          localStorage.setItem('loggedIn' , 'true');
          localStorage.setItem('user' , JSON.stringify(response.user));
          this.router.navigate(['./dashboard']);
        },
        error: (error) => {
        },
        complete: () => {
        }
      })
    }
  }

}
