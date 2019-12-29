import styles from './index.less';
import React from 'react';
import classname from 'classname';
import Project from '@/components/Project';
import { Divider, List } from 'antd';
import { connect } from 'dva';

@connect(({ apps, loading }) => {
  return {
    projects: apps.projects,
    isLoading: loading.effects['apps/getProjects'],
  };
}, dispatch => ({}))
class index extends React.Component {
  state = {
    desc: false,
  };

  render() {
    let { projects } = this.props;
    let { desc } = this.state;
    let newProjects = this.getSortedProject(projects, desc);

    return (
      <div className={styles.page}>
        <div className={styles.toolbar}>
          <a className={classname({
            [styles.selected]: !desc,
          })} onClick={this.onClickSort.bind(this, false)}>正序</a>
          <Divider type="vertical"/>
          <a className={classname({
            [styles.selected]: desc,
          })} onClick={this.onClickSort.bind(this, true)}>倒序</a>
        </div>
        <div className={styles.wrapInner}>
          <List size="large"
                dataSource={newProjects || []}
                renderItem={item => (<div className={styles.item}>
                  <Project read={item}/>
                  <Divider/>
                </div>)}/>
        </div>
      </div>
    );
  }

  onClickSort(desc = false) {
    this.setState({
      desc,
    });
  }

  getSortedProject = (projects = [], desc = false) => {
    let tmp = [...projects];
    if (desc) {
      tmp = tmp.reverse();
    }
    return tmp;
  };
}

export default index;