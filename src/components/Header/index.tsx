import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src='/logo192.png'></img>
      </div>
      <div>
        <nav className={styles['nav-links']}>
          <div>
            <Link to='/'>Главная</Link>
          </div>
          <div>
            <Link to='/create'>Создать петицию</Link>
          </div>
          <div>
            <Link to='/browse'>Просмотреть акции</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
