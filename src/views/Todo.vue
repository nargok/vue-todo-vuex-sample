<template>
  <el-container>
    <el-main>
      <h1>Todo {{ msg }}</h1>
      <h3>Todo</h3>
      <ul>
        <li v-for="todo in todoList(todos)" :key="todo.id">
          <el-checkbox v-model="todo.done">
            <span :class="{ done: todo.done }">{{ todo.title }}</span>
          </el-checkbox>
        </li>
      </ul>
      <h3>Done</h3>
      <ul>
        <li v-for="todo in doneList(todos)" :key="todo.id">
          <el-checkbox v-model="todo.done">
            <span :class="{ done: todo.done }">{{ todo.title }}</span>
          </el-checkbox>
        </li>
      </ul>
    </el-main>
  </el-container>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>

<script>
export default {
  name: "Todo",
  data() {
    return {
      msg: "hello",
      todos: [
        {
          id: 1,
          title: "これはタスク1",
          done: false
        },
        {
          id: 2,
          title: "これはタスク2",
          done: true
        },
        {
          id: 3,
          title: "これはタスク3",
          done: false
        }
      ]
    };
  },
  computed: {
    todoList() {
      return function(todos) {
        return todos.filter(todo => todo.done === false);
      };
    },
    doneList() {
      return function(todos) {
        return todos.filter(todo => todo.done === true);
      };
    }
  },
  methods: {
    toggleTaskStatus(task) {
      return !task.status;
    }
  }
};
</script>
