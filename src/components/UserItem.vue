<template>
  <div class="user">
    <div class="user-inner">
      <div class="user-top">
        <h3>User:  {{ user.userId }}</h3>
        <div>
          <span style="color: green">{{ user.completed.true }} </span> /
          <span style="color: red">{{ user.completed.false }}</span>
        </div>
      </div>
      

      <ul>
        <li v-for="(todo, index) in user.title" v-bind:key="index">
          {{ todo }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.user {
  padding: 15px;
  border: 1px solid #DEE2F2;
  border-radius: 5px;
  background: white;
  display: flex;
}

.user-top {
  display: flex;
  justify-content: space-between;
}

.user-inner {
  width: 100%;
}

.user ul {
  padding-left: 20px;
}

h3 {
  margin: 0;
}
</style>
