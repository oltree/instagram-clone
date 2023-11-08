export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  nickname: string;
  avatarUrl: string;
  description: string;
  url: string;
  subscribers: number[];
  subscribed: number[];
}
