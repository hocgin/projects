import styles from './index.less';
import React from 'react';
import Footer from '@/components/Footer';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>hocgin`s Projects</h1>
      <div className={styles.gradientLine}/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default BasicLayout;
