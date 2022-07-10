import { createStore } from "vuex";
import { todoModule } from "./todoModule";

export default createStore({
  modules: {
    user: todoModule
  },
});
