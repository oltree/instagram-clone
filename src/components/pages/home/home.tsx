import { FC, useEffect, useState } from 'react';
import { Post } from '../../ui/post';
import styles from './home.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { getPosts } from '../../../store/slices/posts';
import { selectPosts } from '../../../store/selectors/posts';
import { MagnifyingGlass } from 'react-loader-spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { nanoid } from 'nanoid';

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { posts, isLoading, totalPosts } = useAppSelector(selectPosts);

  const [page, setPage] = useState(1);

  const nextHandler = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(getPosts(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  console.log(posts.length);

  return isLoading ? (
    <div className={styles.loader}>
      <MagnifyingGlass
        height='150'
        width='150'
        ariaLabel='MagnifyingGlass-loading'
      />
    </div>
  ) : (
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
          <Post
            key={nanoid()}
            isLikedByYou
            userId={post.id}
            avatarUrl={post.author.avatarUrl}
            nickname={post.author.nickname}
            imageUrl={post.imgUrl}
            likes={post.likes.length}
            comments={post.comments}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};
