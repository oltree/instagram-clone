import { FC, memo } from 'react';
import styles from './post.module.scss';
import { Badge } from '../badge';
import cn from 'classnames';
import { Comments } from './comments';
import { IComment } from '../comment/comment';
import { Buttons } from './buttons';

export interface PostProps {
  userId: number;
  avatarUrl: string;
  nickname: string;
  imageUrl: string;
  likes: number;
  isLikedByYou: boolean;
  comments: IComment[];
  className?: string;
}

export const Post: FC<PostProps> = memo(
  ({
    userId,
    avatarUrl,
    nickname,
    imageUrl,
    likes,
    isLikedByYou,
    comments,
    className,
  }) => {
    return (
      <div className={cn(styles.wrapper, className)}>
        <Badge
          id={userId}
          avatarUrl={avatarUrl}
          nickname={nickname}
          className={styles.badge}
        />

        <img src={imageUrl} alt='post' className={styles.image} />

        <Buttons isLikedByYou={isLikedByYou} />

        <p className={styles.likes}>{`Оценили ${likes} человек`}</p>

        <Comments comments={comments} />

        <textarea name='' id=''></textarea>
      </div>
    );
  }
);
