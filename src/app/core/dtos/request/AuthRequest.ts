export interface AuthRequest {
  email: string;
  password: string;
  providerType: string;
  code?: string;
}
