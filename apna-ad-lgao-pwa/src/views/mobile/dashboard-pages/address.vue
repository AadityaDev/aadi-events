<template>
  <section class="auth-page bg-white h-screen">
    <div class="flex flex-wrap h-screen items-center">
      <form class="max-w-xs mt-auto mx-auto p-6 w-full" method="post" name="validation" role="form" @submit.prevent="!disabled ? addPartnerCompanyAddress(partnerCompanyAddress) : enableEditMode()">
        <!-- <div class="mb-8 text-center">
          <img src="../../../assets/logo.png" class="mx-auto" width="125" alt="Apna Ad Lgao Logo">
        </div> -->

        <div class="mt-12 my-5 relative">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-gray-600 text-gray-800 text-xs uppercase" for="name">
            Name
          </label>
          <input
            id="name"
            v-model="partnerCompanyAddress.name"
            :disabled="disabled"
            class="
              appearance-none
              bg-gray-100
              block
              border
              focus:bg-white
              focus:border-gray-400
              focus:outline-none
              leading-tight
              px-4
              py-2
              rounded
              text-gray-600
              w-full
            "
            type="name"
            placeholder="Work Address"
          >
        </div>

        <div class="my-5">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-gray-600 text-gray-800 text-xs uppercase" for="name">
            Building
          </label>
          <input
            id="building"
            :disabled="disabled"
            v-model="partnerCompanyAddress.building"
            class="
              appearance-none
              bg-gray-100
              block
              border
              focus:bg-white
              focus:border-gray-400
              focus:outline-none
              leading-tight
              px-4
              py-2
              rounded
              text-gray-600
              w-full
            "
            type="text"
            placeholder="Building"
          >
        </div>

        <div class="my-5">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-gray-600 text-gray-800 text-xs uppercase" for="landmark">
            Landmark
          </label>
          <input
            id="password"
            :disabled="disabled"
            v-model="partnerCompanyAddress.landmark"
            class="
              appearance-none
              bg-gray-100
              block
              border
              focus:bg-white
              focus:border-gray-400
              focus:outline-none
              leading-tight
              px-4
              py-2
              rounded
              text-gray-600
              w-full
            "
            type="text"
            placeholder="Near By Landmark"
          >
        </div>

        <div class="my-5">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-gray-600 text-gray-800 text-xs uppercase" for="street">
            Street
          </label>
          <input
            id="street"
            :disabled="disabled"
            v-model="partnerCompanyAddress.street"
            class="
              appearance-none
              bg-gray-100
              block
              border
              focus:bg-white
              focus:border-gray-400
              focus:outline-none
              leading-tight
              px-4
              py-2
              rounded
              text-gray-600
              w-full
            "
            type="text"
            placeholder="Street"
          >
        </div>

        <div class="my-5">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-gray-600 text-gray-800 text-xs uppercase" for="pincode">
            PinCode
          </label>
          <input
            id="pincode"
            :disabled="disabled"
            v-model.number="partnerCompanyAddress.pincode"
            class="
              appearance-none
              bg-gray-100
              block
              border
              focus:bg-white
              focus:border-gray-400
              focus:outline-none
              leading-tight
              px-4
              py-2
              rounded
              text-gray-600
              w-full
            "
            type="number"
            placeholder="1100"
          >
        </div>

        <div class="my-5">
          <label class="block font-bold letter-spacing-05 mb-1 ml-1 text-gray-600 text-gray-800 text-xs uppercase" for="state">
            State
          </label>
          <input
            id="state"
            :disabled="disabled"
            v-model.number="partnerCompanyAddress.stateId"
            class="
              appearance-none
              bg-gray-100
              block
              border
              focus:bg-white
              focus:border-gray-400
              focus:outline-none
              leading-tight
              px-4
              py-2
              rounded
              text-gray-600
              w-full
            "
            type="number"
            placeholder="Select State"
          >
        </div>

        <button
          v-show="!disabled"
          :class="{ 'loading': request.key === 'login' && request.inProgress }"
          :disabled="request.key === 'login' && request.inProgress"
          class="bg-green-800 button font-bold hover:bg-green-600 leading-normal letter-spacing-1 mb-12 mt-2 py-3 rounded text-white uppercase w-full"
        >
          Save Address
          <ring-loader />
        </button>

        <button
          v-show="disabled"
          :class="{ 'loading': request.key === 'login' && request.inProgress }"
          :disabled="request.key === 'login' && request.inProgress"
          class="bg-gray-800 button font-bold hover:bg-gray-600 leading-normal letter-spacing-1 mb-12 mt-2 py-3 rounded text-white uppercase w-full"
        >
          Edit Address
          <ring-loader />
        </button>
      </form>
      <div class="mb-3 mt-auto mx-auto w-full">
        <p class="py-3 w-4/5 text-center rounded text-gray-500 text-sm flex justify-center align-center mx-auto">
          <span v-if="!isApp">  (C) 2020 TechNawabs</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Address',
  data() {
    return {
      disabled: true,
      isApp: process.env.VUE_APP_RUN_ENV === 'app',
      addresst: {
        name: '',
        building: '',
        landmark: '',
        street: '',
        pincode: 0,
        stateId: 0,
      },
    };
  },
  computed: {
    ...mapGetters(['request', 'version', 'partnerCompanyAddress']),
  },
  methods: {
    ...mapActions(['addPartnerCompanyAddress', 'getPartnerCompanyAddress']),
    enableEditMode() {
      this.disabled = !this.disabled;
    },
    scrollFunction() {
      this.showBtn = window.scrollY > 200;
    },
    topFunction() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  mounted() {
    this.getPartnerCompanyAddress();
    if (this.partnerCompanyAddress && this.partnerCompanyAddress.name) {
      this.disabled = true;
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.scrollFunction);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollFunction);
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(currentVal, oldVal) {
      if (currentVal.name === 'Dashboard.Address') {
        this.getPartnerCompanyAddress();
        if (this.partnerCompanyAddress && this.partnerCompanyAddress.name) {
          this.disabled = true;
        }
      }
    },
  },
};
</script>

<style lang="scss" src="@/styles/mobile/auth.scss" />
