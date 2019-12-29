import React from 'react';
import styles from './index.less';
import Image from '@/components/Image';

class Index extends React.PureComponent {

  render() {
    let { datasource = [] } = this.props;
    return (
      <ol className={styles.component}>
        {(datasource || []).map(({src}) => <li className={styles.item}><Image src={src}/></li>)}
      </ol>
    );
  }
}

export default Index;
