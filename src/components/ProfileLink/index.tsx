import { ProfileLinkIcon } from '../ProfileLinkIcon';
import styles from './profileLink.module.css';

interface IProfileLink {
  src: string;
  name: string;
};

export const ProfileLink = ({ src, name }: IProfileLink) => {
  return (
    <a href="#" className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.avatar} style={{ backgroundImage: src }} />
        <div className={styles.name}>{name}</div>
      </div>
      <ProfileLinkIcon />
    </a>
  );
}