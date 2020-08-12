import { Effect, Reducer } from 'umi';

import { queryCurrent, query as queryUsers } from '@/services/user';

// export interface CurrentUser {
//   avatar?: string;
//   name?: string;
//   title?: string;
//   group?: string;
//   signature?: string;
//   tags?: {
//     key: string;
//     label: string;
//   }[];
//   merchantId?: string;
//   unreadCount?: number;
// }

// export interface UserModelState {
//   currentUser?: CurrentUser;
// }

// export interface UserModelType {
//   namespace: 'user';
//   state: UserModelState;
//   effects: {
//     fetch: Effect;
//     fetchCurrent: Effect;
//   };
//   reducers: {
//     saveCurrentUser: Reducer<UserModelState>;
//     changeNotifyCount: Reducer<UserModelState>;
//   };
// }

const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {
      avatar: '',
      name: '',
      title: '',
      group: '',
      signature: '',
      tags: {
        key: '',
        label: '',
      },
      unreadCount: '',
    },
    merchantId: '1',
  },

  effects: {
    *fetch (_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent (_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },

  reducers: {
    saveCurrentUser (state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount (
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
    saveMerchantId (state, action) {
      return {
        ...state,
        merchantId: action.payload || '',
      }
    }
  },
};

export default UserModel;
