import CURRENT_USER from '@/graphql/users.gql';

export default ({ $http, $vf, $apollo }) => ({
  async getUsers(context) {
    const { data } = await $apollo.query({ query: CURRENT_USER });
    context.commit('setUserAndCompaniesInState', data.users);
    return data.users;
  },
});
