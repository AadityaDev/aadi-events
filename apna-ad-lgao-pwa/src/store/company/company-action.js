export default ({ $http }) => ({
  getAllCompanies(context) {
    return $http.get('/api/genome/v1/skills/countries', {
      headers: {
        'x-sharepoint-list-name': 'skills',
      },
      requestName: 'getAllCompanies',
    })
      .then((res) => {
        const response = res.data;
        context.commit('setAllCompaniesInState', response);
        return response;
      });
  },
});
