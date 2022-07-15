import { Logo } from '../Logo';
import { Search } from '../Search';
import { ProfileLink } from '../ProfileLink';
import styles from './header.module.css';

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href="/">
          <Logo />
        </a>
      </div>
      <Search onInput={() => null} />
      <ProfileLink src="" name="test" />
    </div>
  );
};