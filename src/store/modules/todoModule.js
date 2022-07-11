import axios from "axios";

export const todoModule = {
  state: () => ({
    isLoading: false,
    users: []
  }),
  getters: {
    sortedUsers(state) {
      const map = [...state.users].reduce((acc, cur)=>{
      acc[cur.userId] = acc[cur.userId] || { 
        userId: cur.userId,
        title: [],
        completed: {
          true: 0,
          false: 0
        }
      };
      cur.completed == true ? acc[cur.userId].completed.true++ : acc[cur.userId].completed.false++
      acc[cur.userId].title.push(cur.title);
      return acc;
      },{})

      const result = Object.values(map);
      result.sort((a, b) => a.completed.true > b.completed.true ? -1 : 1);
      return result;
    },
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