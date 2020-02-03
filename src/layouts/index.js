import styles from './index.less';
import { Icon } from 'antd';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>hocgin`s Projects</h1>
      <div className={styles.gradientLine}/>
      {props.children}
      <footer>
        <div className={styles.footerInfo}>
          © 2020
          <Icon className={styles.egg} type="heart" theme="filled" />
          <a href="https://hocg.in" target="_blank">hocgin</a>
        </div>
      </footer>
    </div>
  );
}

export default BasicLayout;
