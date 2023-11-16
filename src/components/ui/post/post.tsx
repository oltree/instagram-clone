import { FC, memo } from 'react';
import styles from './post.module.scss';
import { Badge } from '../badge';
import cn from 'classnames';
import { Comments } from './comments';
import { Buttons } from './buttons';
import { IPost } from '../../../types/post';
import { IUser } from '../../../types/user';

export interface PostProps {
  post: IPost;
  user: IUser;
  className?: string;
}

export const Post: FC<PostProps> = memo(({ post, user, className }) => {
  const isLikedByYou = post.likes.includes(Number(user.id));

  return (
    <div className={cn(styles.wrapper, className)}>
      <Badge
        id={post.author.id}
        avatarUrl={post.author.avatarUrl}
        nickname={post.author.nickname}
        className={styles.badge}
      />

      <img src={post.imgUrl} alt='post' className={styles.image} />

      <Buttons isLikedByYou={isLikedByYou} userId={user.id} post={post} />

      <p className={styles.likes}>{`Оценили ${post.likes.length} человек`}</p>

      <Comments comments={post.comments} />

      <textarea name='' id=''></textarea>
    </div>
  );
});
