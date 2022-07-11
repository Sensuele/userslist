import router from '@/router';

export const authModule = {
  state: () => ({
    token: localStorage.getItem("user-token") || "",
  }),
  getters: {
    isAuthenticated: state => !!state.token,
  },
  mutations: {
    setToken(state, value) {
      state.token = value;
      window.localStorage.setItem('user-token', 'fake-token');
    },
  },
  actions: {
    fetchToken ({commit}, value) {
      commit('setToken', JSON.stringify(value));
      router.push("/");
    },

    logout({commit}) {
      commit('setToken', "");
      window.localStorage.removeItem('user-token');
      router.push("/login");
    }
  }
}