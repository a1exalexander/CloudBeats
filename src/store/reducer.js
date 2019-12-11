import { testsModule } from './modules';

const reducer = (state, action) => {
  return {
    testsModule: testsModule.reducer(state, action),
  }
}

export default reducer;
