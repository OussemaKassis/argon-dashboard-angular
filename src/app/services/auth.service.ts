import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sharedConstants } from '../shared/sharedConstants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public logIn(credentials: any) {
    return this.http.post(sharedConstants.API_ENDPOINT + 'user/login', credentials);
  }
}
