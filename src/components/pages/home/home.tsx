import { FC } from 'react';
import { Post } from '../../ui/post';
import styles from './home.module.scss';

export const Home: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Post
        userId='1'
        avatarUrl='https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg'
        nickname='Oleg'
        imageUrl='https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg'
        likes={20}
        isLikedByYou
        comments={[
          { nickname: 'Anton', text: 'hello world 1' },
          { nickname: 'Anton', text: 'hello world 2' },
          { nickname: 'Anton', text: 'hello world 3' },
          { nickname: 'Anton', text: 'hello world 4' },
        ]}
      />
    </div>
  );
};
