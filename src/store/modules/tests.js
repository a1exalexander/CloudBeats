import { actionType } from '../../constants';

const initState = {
  loading: false,
  hasError: false,
  list: [],
};

const reducer = (state = { testsModule: { ...initState } }, action) => {
  switch (action.type) {
    case actionType.TESTS_REQUEST:
      return {
        ...state.testsModule,
        loading: true,
        hasError: false
      };
    case actionType.TESTS_SUCCESS:
      return {
        ...state.testsModule,
        loading: false,
        hasError: false
      };
    case actionType.TESTS_FAILURE:
      return {
        ...state.testsModule,
        loading: false,
        hasError: true
      };
    case actionType.TESTS_UPDATE:
      return {
        ...state.testsModule,
        list: [ ...action.payload ]
      };
    case actionType.TESTS_CLEAR:
      return {
        ...state.testsModule,
        list: []
      };
    default:
      return state.testsModule;
  }
};

export default {
  reducer
};