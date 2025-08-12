import {UserResponse} from './UserResponse';

export interface AuthResponse{
  accessToken: string;
  userResponse: UserResponse;
}
