import { FC, useEffect, useState } from 'react';
import { Post } from '../../ui/post';
import styles from './home.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { postsSelector } from '../../../store/selectors/posts';
import { MagnifyingGlass } from 'react-loader-spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { nanoid } from 'nanoid';
import { getPosts } from '../../../store/slices/posts';
import { userSelector } from '../../../store/selectors/users';
import { getUserById } from '../../../store/slices/users';

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { posts, totalPosts } = useAppSelector(postsSelector);
  const user = useAppSelector(userSelector);

  const [page, setPage] = useState(1);

  const nextHandler = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(getPosts(page));
    dispatch(getUserById(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={nextHandler}
      hasMore={posts.length < totalPosts}
      loader={
        <div className={styles.loader}>
          <MagnifyingGlass
            height='100'
            width='100'
            ariaLabel='MagnifyingGlass-loading'
          />
        </div>
      }
      endMessage={<p className={styles.endMessage}>Thats all!</p>}
    >
      <div className={styles.posts}>
        {posts.map((post) => (
          <Post key={nanoid()} post={post} user={user} />
        ))}
      </div>
    </InfiniteScroll>
  );
};
