import Vue from 'vue';
import Vuex from 'vuex';
import accountsModule from '@/store/accounts/accounts-store';
import adminModule from '@/store/admin/admin-store';
// import bannerModule from '@/store/banner/banner-store';
import addressModule from '@/store/address/address-store';
import campaignModule from '@/store/campaign/campaign-store';
import campaignTagsModule from '@/store/campaignTags/campaignTags-store';
import companyModule from '@/store/company/company-store';
import countryModule from '@/store/country/country-store';
import deviceModule from '@/store/device-store';
import industryModule from '@/store/industry/industry-store';
import mediaTypeModule from '@/store/mediaType/mediaType-store';
import stateModule from '@/store/state/state-store';
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
    address: addressModule(injectionObj),
    campaign: campaignModule(injectionObj),
    campaignTags: campaignTagsModule(injectionObj),
    companies: companyModule(injectionObj),
    country: countryModule(injectionObj),
    device: deviceModule(),
    notifications: notificationsModule(),
    partner: partnerModule(injectionObj),
    request: requestModule(),
    router: routerModule(),
  },
});
