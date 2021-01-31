import Vue from "vue";
import Vuex from "vuex";
import { ADD_TODO } from "@/store/action-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    allTodos(state) {
      return state.todos;
    }
  },
  mutations: {
    [ADD_TODO](state, todo) {
      state.todos.push(todo);
    }
  },
  actions: {
    [ADD_TODO]({ commit }, payload) {
      commit(ADD_TODO, payload);
    }
  },
  modules: {}
});
