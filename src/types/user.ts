export interface IUser {
  id: string;
  nickname: string;
  avatarUrl: string;
  firstName?: string;
  lastName?: string;
  description?: string;
  url?: string;
  subscribers?: string[];
  subscribed?: string[];
}
