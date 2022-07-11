import { createStore } from "vuex";
import { authModule } from "./modules/authModule";
import { todoModule } from "./modules/todoModule";

export default createStore({
  modules: {
    user: todoModule,
    auth: authModule
  },
});
