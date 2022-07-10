<template>
  <div class="container">
    <div class="wrapper">
      <button class="btn" :disabled="isLoading" @click="getUsers">Download data</button>
      <Circle v-show="isLoading" style="width: 30px; height: 30px; margin-left: 20px;"></Circle>
    </div>
    <user-list
      v-if="!isLoading"
      :users="sortedUsers"
      />

  </div>
</template>

<script>
import UserList from './components/UserList.vue';
 import {Circle} from 'vue-loading-spinner'
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  components: { UserList, Circle },
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
    }),
  }
};
</script>

<style>
body {
  background: #F1F4FF;
}
.container {
  max-width: 1400px;
  padding: 20px;
  margin: 0 auto;
}

.btn {
  padding: 10px 30px;
  color: white;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  background: #3D7FFC;
  cursor: pointer;
}

.btn[disabled] {
  opacity: .8;
  cursor: default;
}

.wrapper {
  display: flex;
  align-items: center;
}

</style>
