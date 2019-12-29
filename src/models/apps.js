import Apps from '@/utils/apps';

export default {
  namespace: 'apps',
  state: {
    projects: [],
  },
  effects: {
    * getProjects({ payload }, { call, put }) {
      let projects = Apps.getProjects();
      yield put({
        type: 'setProjects',
        payload: projects || [],
      });
    },
  },
  reducers: {
    setProjects(state, { payload }) {
      return {
        ...state,
        projects: payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }, done) {
      return history.listen(({ pathname, search }) => {
        dispatch({
          type: 'getProjects',
        });
      });
    },
  },
};