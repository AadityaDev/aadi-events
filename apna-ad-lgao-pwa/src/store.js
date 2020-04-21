import Vue from 'vue';
import Vuex from 'vuex';
import accountsModule from '@/store/accounts/accounts-store';
import adminModule from '@/store/admin/admin-store';
import deviceModule from '@/store/device-store';
import notificationsModule from '@/store/notifications-store';
import partnerModule from '@/store/partner/partner-store';
import requestModule from '@/store/requests-store';
import routerModule from '@/store/router-store';
import apolloClient from './vue-apollo';

Vue.use(Vuex);

const injectionObj = {
  $http: Vue.prototype.$http,
  $vf: Vue.prototype.$vf,
  $apollo: apolloClient,
};

export default new Vuex.Store({
  strict: true,
  modules: {
    admin: adminModule(injectionObj),
    accounts: accountsModule(injectionObj),
    device: deviceModule(),
    notifications: notificationsModule(),
    partner: partnerModule(injectionObj),
    request: requestModule(),
    router: routerModule(),
  },
});
