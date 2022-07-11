import axios from "axios";

export const todoModule = {
  state: () => ({
    isLoading: false,
    users: []
  }),
  getters: {
    formedList(state) {
      const map = [...state.users].reduce((acc, cur)=>{
        acc[cur.userId] = acc[cur.userId] || { 
          userId: cur.userId,
          title: [],
          completed: {
            true: 0,
            false: 0,
            total: 0
          }
        };
        cur.completed == true ? acc[cur.userId].completed.true++ : acc[cur.userId].completed.false++;
        acc[cur.userId].completed.total = acc[cur.userId].completed.true + acc[cur.userId].completed.false;
        acc[cur.userId].title.push(cur.title);
        return acc;
        },{})

        const result = Object.values(map);
        return result;
    },
    sortedUsers(state, getters) {
      if (!getters.formedList) {
        return;
      }
      return getters.formedList.sort((a, b) => a.completed.true > b.completed.true ? -1 : 1);
    },

    formedUsersId(state, getters) {
      if (!getters.formedList) {
        return;
      }
      const users = getters.formedList.map(item => item.userId);
      const total = getters.formedList.map(item => item.completed.total);
      const completed = getters.formedList.map(item => item.completed.true)

      function Users(users, total, completed) {
        this.users = users;
        this.total = total;
        this.completed = completed;
      }

      let usersObj = new Users(users, total, completed)
      return usersObj;
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    }
  },
  actions: {
    async getUsers({ commit }) {
      try {
        commit('setLoading', true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setUsers', response.data);
      } catch(e) {
        console.log(e);
      } finally {
        commit('setLoading', false);
      }
    }
  }
}