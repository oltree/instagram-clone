import { FC, memo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { userSelector } from '../../../store/selectors/users';
import styles from './user.module.scss';
import { getUserById } from '../../../store/thunks/users';
import { getPostsByUser } from '../../../store/thunks/posts';
import { postsByUserSelector } from '../../../store/selectors/posts';
import { useParams } from 'react-router-dom';
import { ActionButtons } from '../../ui/action-buttons/action-buttons';

export const User: FC = memo((props) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const user = useAppSelector(userSelector);
  const { posts } = useAppSelector(postsByUserSelector);

  useEffect(() => {
    dispatch(getUserById(id || ''));
    dispatch(getPostsByUser(id || ''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.descriptionContainer}>
        <img
          src={user.avatarUrl}
          alt={user.nickname}
          className={styles.avatar}
        />

        <div className={styles.infornation}>
          <p className={styles.nickname}>{user.nickname}</p>

          <div className={styles.subscribers}>
            <p className={styles.text}>
              <span className={styles.textBold}>{12}</span> posts
            </p>
            <p className={styles.text}>
              <span className={styles.textBold}>{user.subscribers.length}</span>{' '}
              subscribers
            </p>
            <p className={styles.text}>
              <span className={styles.textBold}>{user.subscribed.length}</span>{' '}
              subscribed
            </p>
          </div>

          <p className={styles.text}>{`${user.firstName} ${user.lastName}`}</p>

          <p className={styles.text}>{user.description}</p>

          <a href={user.url} className={styles.link}>
            {user.url}
          </a>
        </div>
      </div>

      <div className={styles.cards}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <img
              src={post.imgUrl}
              alt={post.author.nickname}
              className={styles.image}
            />

            <div className={styles.actions}>
              <ActionButtons user={user} post={post} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
