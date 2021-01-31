<template>
  <el-container>
    <el-main>
      <h1>Todo {{ msg }}</h1>
      <TodoList listTitle="Todo" :todos="todos" :taskStatus="false" />
      <TodoList listTitle="Done" :todos="todos" :taskStatus="true" />
    </el-main>
  </el-container>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Todo",
  components: {
    TodoList
  },
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
  methods: {
    toggleTaskStatus(task) {
      return !task.status;
    }
  }
};
</script>
