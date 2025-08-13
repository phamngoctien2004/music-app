import {Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserResponse} from '../dtos/response/UserResponse';
import {API} from '../constant/Api';

@Injectable({providedIn: 'root'})
export class UserService{
  private readonly _userState = signal<UserResponse | null>(null);
  readonly userState = this._userState.asReadonly();
  constructor(private http: HttpClient) {
    console.log(this.userState())
  }

  public setState(user: UserResponse | null): void {
    this._userState.set(user);
  }
  public loadUser() {
    if (localStorage.getItem('keokera') != null) {
      this.http.get<UserResponse>(API.URL + API.ENDPOINT.USER.ME).subscribe({
        next: (response) => {
          this.setState(response);
        },
        error: (error) => {
          console.error('Failed to load user:', error);
          this.setState(null);
        }
      });
    }
  }
}
