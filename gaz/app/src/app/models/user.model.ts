
export interface UserModel {
  id: number;
  name: string;
  email: string;
  username: string;
  idProfile: number;
  idSupervisor: string;
  lastLogin?: string;
  acceptTerms?: boolean;
}
