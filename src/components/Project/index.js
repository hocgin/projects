import React from 'react';
import styles from './index.less';
import Scrollable from '@/components/Scrollable';
import { Icon, Tooltip } from 'antd';

class Index extends React.PureComponent {


  render() {
    let {
      read: {
        title: projectTitle = '',
        subTitle: projectSubTitle = '',
        desc: projectDesc = '',
        logo: projectLogo = '',
        href: projectHref = '',
        tags: projectTags = [],
        actions: projectActions = {},
        images = [],
        badge = {},
      },
    } = this.props;
    let { title: badgeTitle = '' } = badge;
    let { list: actionList = [], follower = { number: 0 } } = projectActions;

    let IconButton = ({ href, type, text, ...rest }) => {
      return (<Tooltip placement="top" text={text}>
        <a href={href} style={{ color: 'unset' }}>
          <Icon className={styles.action} type={type}/>
        </a>
      </Tooltip>);
    };
    return (
      <div className={styles.component}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            <a href={projectHref}>
              <img className={styles.logo}
                   src={projectLogo}
                   alt="logo"/>
              {projectTitle}
            </a>
            {badgeTitle && <span className={styles.flag}>{badgeTitle}</span>}
          </h2>
          <div className={styles.subTitle}>{projectSubTitle}</div>
          <div className={styles.desc}>{projectDesc}</div>
          <div className={styles.actionWrapper}>
            {(actionList).map(({ type, text, href }) => (
              <IconButton className={styles.action}
                          href={href}
                          type={type}
                          text={text}/>))}
            {follower.number > 0 && <div className={styles.followers}>
              <span className={styles.followerNumber}>{follower.number}</span>
              <span>followers</span>
            </div>}
          </div>
          <div className={styles.tagWrapper}>
            {projectTags.join('、')}
          </div>
        </div>
        <div className={styles.scrollView}>
          <Scrollable datasource={images}/>
        </div>
      </div>
    );
  }
}

export default Index;
