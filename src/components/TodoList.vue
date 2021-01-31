<template>
  <div>
    <h3>{{ listTitle }}</h3>
    <ul>
      <li v-for="todo in filteredTodoList(allTodos)" :key="todo.id">
        <el-checkbox v-model="todo.done">
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
        </el-checkbox>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TodoList",
  props: {
    listTitle: String,
    taskStatus: Boolean
  },
  computed: {
    ...mapGetters(["allTodos"]),
    filteredTodoList() {
      return function(todos) {
        return todos.filter(todo => todo.done === this.taskStatus);
      };
    }
  }
};
</script>
