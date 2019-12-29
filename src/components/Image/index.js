import React from 'react';
import styles from './index.less';

class Index extends React.PureComponent {
  render() {
    let { src } = this.props;
    let prefix = this.getImagePrefix(src);
    return (
      <div className={styles.component}>
        <div className={styles.photoShot}>
          <div className={styles.photoImg}>
            <img src={src} className={styles.photo}/>
          </div>
        </div>
        {prefix !== '' && <div className={styles.indicator}>{prefix}</div>}
      </div>
    );
  }

  getImagePrefix = (src) => {
    let prefix = `${src}`;
    if (prefix.includes('.')) {
      let lastIndex = prefix.lastIndexOf('.');
      prefix = prefix.substr(lastIndex + 1);
    }
    if (prefix.length > 4) {
      prefix = '';
    }
    return prefix.toUpperCase();
  };
}

export default Index;
