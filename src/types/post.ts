interface IComment {
  nickname: string;
  text: string;
}

interface IAuthor {
  id: number;
  nickname: string;
  avatarUrl: string;
}

export interface IPost {
  id: number;
  imgUrl: string;
  likes: number[];
  comments: IComment[];
  author: IAuthor;
}
