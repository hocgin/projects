import styles from './index.less';
import { HeartFilled } from '@ant-design/icons';
import React from 'react';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>hocgin`s Projects</h1>
      <div className={styles.gradientLine}/>
      {props.children}
      <footer>
        <div className={styles.footerInfo}>
          © 2020
          <HeartFilled className={styles.egg}/>
          <a href="https://hocg.in" target="_blank" rel="noopener noreferrer">hocgin</a>
        </div>
      </footer>
    </div>
  );
}

export default BasicLayout;
