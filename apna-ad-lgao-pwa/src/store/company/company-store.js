import companiesActionModule from './company-action';

const initializeState = () => ({
  companies: [],
});

export default ({ $http, $vf }) => ({
  state: initializeState(),
  mutations: {
    setAllCompaniesInState(state, payload) {
      state.companies = payload.length ? payload : [];
    },
  },
  actions: companiesActionModule({ $http, $vf }),
  getters: {
    companies: (state) => state.companies,
  },
});
