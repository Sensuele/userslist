<template>
  <div v-if="users.length > 0" class="user-list">
    <user-item
      v-for="user in users"
      :user="user"
      :key="user.userId"
    />
  </div>
  <h2 class="empty" v-else>
    Empty list
  </h2>
</template>

<script>
import UserItem from "@/components/UserItem";
export default {
  components: {UserItem},
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

.empty {
  background: #DEE2F2;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #303B45;
  margin-top: 30px;
}

.user-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 30px;
}
@media (max-width: 1200px) {
  .user-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .user-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>