<template>
    <div class="wrapper">
      <div class="download-btn">
        <button class="btn" :disabled="isLoading" @click="getUsers">Download data</button>
        <Circle v-show="isLoading" style="width: 30px; height: 30px; margin-left: 10px;"></Circle>
      </div>
      <button class="btn btn-logout" @click="logout">Logout</button>
    </div>
    <user-list
      v-if="!isLoading"
      :users="sortedUsers"
      />
    <BarChart v-if="users.length > 0" />

</template>

<script>
import UserList from '@/components/UserList.vue';
import BarChart from '@/components/BarChart.vue';
import {Circle} from 'vue-loading-spinner'
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  components: { UserList, Circle, BarChart },
  computed: {
    ...mapState({
      users: state => state.user.users,
      isLoading: state => state.user.isLoading
    }),
    ...mapGetters({
      sortedUsers: 'sortedUsers'
    }),
  },
  

  methods: {
    ...mapActions({
      getUsers: 'getUsers',
      logout: 'logout'
    }),
  }
};
</script>

<style>
</style>
