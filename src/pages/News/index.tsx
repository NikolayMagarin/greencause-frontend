import Header from '../../components/Header';
import Card from './components/Card';
import SloganBlock from './components/SloganBlock';
import ThemeBlock from './components/ThemeBlock';

import { useHorizontalScroll } from '../../utils/useHorizontalScroll';

import styles from './News.module.css';

import ThemeImage from './images/image.png';

function News() {
  const cardsRef = useHorizontalScroll<HTMLDivElement>();
  return (
    <>
      <Header navigated='news' />
      <main>
        <SloganBlock
          data={{
            users: 12034,
            petitions: 762,
            money: 34509,
          }}
        />
        <div className={styles.block}>
          <div className={styles.head}>Наша цель изменить мир к лучшему</div>
          <div className={styles.cards} ref={cardsRef}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.head}>
            Благодаря небезразличным сердцам
            <br />
            мы многого добились
          </div>
          <div>
            <ThemeBlock
              name='Животный мир'
              text='Текст про животный мир'
              image={ThemeImage}
            />
            <ThemeBlock
              name='Природа'
              text='Текст про природу'
              image={ThemeImage}
            />
            <ThemeBlock
              name='Погода'
              text='Текст про погоду'
              image={ThemeImage}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default News;
