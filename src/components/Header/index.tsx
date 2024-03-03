import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import LogoIcon from './images/logo60.png';
import SearchIcon from './images/search-icon.svg';
import UserIcon from './images/user-icon.svg';

function Header({ navigated }: { navigated?: 'news' | 'browse' | 'create' }) {
  const [suggestions, setSuggestions] = useState<Array<string>>([]);

  /**
   * TODO: делать запросы на подсказки при вводе
   *
   * А при нажатии на Enter будет переход на другую страницу, которая
   * и будет осуществлять поиск и отображение
   */

  const onSearchSubmit = (value: string) => {
    alert(value);
    setSuggestions([]);
  };

  const onSeacrhChange = (value: string) => {
    // вообще тут нужен дебаунс потом когда запросы делать буду (или тхротл?)
    setSuggestions(suggestions.concat(value));
  };

  return (
    <header className={styles.header}>
      <div className={styles['nav-area']}>
        <div className={styles['logo-wrapper']}>
          <img src={LogoIcon} className={styles.logo} alt='logo'></img>
          GreenCause
        </div>
        <nav className={styles['nav-links']}>
          <div
            className={`${styles['link-wrapper']} ${
              navigated === 'news' ? styles.navigated : ''
            }`}
          >
            <Link to='/' className={styles.link}>
              Главная
            </Link>
            <div className={styles.underline}></div>
          </div>
          <div
            className={`${styles['link-wrapper']} ${
              navigated === 'create' ? styles.navigated : ''
            }`}
          >
            <Link to='/create' className={styles.link}>
              Создать петицию
            </Link>
            <div className={styles.underline}></div>
          </div>
          <div
            className={`${styles['link-wrapper']} ${
              navigated === 'browse' ? styles.navigated : ''
            }`}
          >
            <Link to='/browse' className={styles.link}>
              Посмотреть акции
            </Link>
            <div className={styles.underline}></div>
          </div>
        </nav>
      </div>
      <div className={styles['search-area']}>
        <img
          src={SearchIcon}
          alt='search icon'
          className={styles['search-icon']}
        />
        <input
          className={styles.input}
          type='search'
          name='search'
          autoComplete={'off'}
          onKeyDown={(event) => {
            event.code === 'Enter' && onSearchSubmit(event.currentTarget.value);
          }}
          onChange={(event) => onSeacrhChange(event.currentTarget.value)}
          onSubmit={(event) => {
            onSearchSubmit(event.currentTarget.value);
          }}
        />
      </div>
      <div className={styles['account-area']}>
        <Link to='/login' className={styles.link}>
          Войти
        </Link>
        <Link to='/my'>
          <img src={UserIcon} alt='search icon' />
        </Link>
      </div>
    </header>
  );
}

export default Header;
