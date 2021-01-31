<template>
  <div>
    <h3>{{ listTitle }}</h3>
    <ul>
      <li v-for="todo in filteredTodoList(todos)" :key="todo.id">
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
export default {
  name: "TodoList",
  props: {
    listTitle: String,
    todos: Array,
    taskStatus: Boolean
  },
  computed: {
    filteredTodoList() {
      console.log("*** debug ***");
      return function(todos) {
        console.log(todos);
        return todos.filter(todo => todo.done === this.taskStatus);
      };
    }
  }
};
</script>
