import styles from './index.less';
import React from 'react';
import GinEggs from '@hocgin/gin-eggs';
import GinFooter from '@hocgin/gin-footer';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <GinEggs/>
      <h1 className={styles.title}>hocgin`s Projects</h1>
      <div className={styles.gradientLine}/>
      {props.children}
      <GinFooter/>
    </div>
  );
}

export default BasicLayout;
