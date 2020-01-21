import styles from './index.less';
import site from '@/assets/site.png';
import { Icon } from 'antd';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>hocgin`s Projects</h1>
      <div className={styles.gradientLine}/>
      {props.children}
      <footer className={styles.footer}>
        <div className={styles.site}>
          <div className={styles.logo}>
            <img src={site} alt="Site Logo"/>
          </div>
          <div className={styles.social}>
            <a href="#">
              <Icon type="weibo-circle" />
            </a>
            <a href="#">
              <Icon type="github" />
            </a>
            <a href="#">
              <Icon type="wechat" />
            </a>
          </div>
          <div className={styles.copy}>
            © 2020 hocgin | https://hocg.in
          </div>
        </div>
        <div className={styles.linkGroup}>
          <div className={styles.links}>
            <div className={styles.linkTitle}>组一</div>
            <a href="#">a1</a>
            <a href="#">a2</a>
          </div>
          <div className={styles.links}>
            <div className={styles.linkTitle}>组二</div>
            <a href="#">a1</a>
            <a href="#">a2</a>
          </div>
          <div className={styles.links}>
            <div className={styles.linkTitle}>组三</div>
            <a href="#">a1</a>
            <a href="#">a2</a>
          </div>
        </div>

        {/*<div className={styles.footerInfo}>*/}
        {/*  © 2020*/}
        {/*  <Icon className={styles.egg} type="heart" theme="filled" />*/}
        {/*  <a href="https://hocg.in" target="_blank">hocgin</a>*/}
        {/*</div>*/}
      </footer>
    </div>
  );
}

export default BasicLayout;
