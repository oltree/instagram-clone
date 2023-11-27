import { IUser } from './user';

interface IComment {
  nickname: string;
  text: string;
}

export interface IPost {
  id: string;
  imgUrl: string;
  likes: string[];
  comments: IComment[];
  author: IUser;
}
