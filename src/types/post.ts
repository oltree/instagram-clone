interface IComment {
  nickname: string;
  text: string;
}

interface IAuthor {
  id: string;
  nickname: string;
  avatarUrl: string;
}

export interface IPost {
  id: string;
  imgUrl: string;
  likes: number[];
  comments: IComment[];
  author: IAuthor;
}
