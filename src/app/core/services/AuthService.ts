import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthRequest} from '../dtos/request/AuthRequest';
import {API} from '../constant/Api';
import {Observable} from 'rxjs';
import {AuthResponse} from '../dtos/response/AuthResponse';

@Injectable({providedIn: 'root'})
export class AuthService{
  constructor(private http: HttpClient) {
  }

  public login(request: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(API.URL + API.ENDPOINT.AUTH.LOGIN, request);
  }
}
