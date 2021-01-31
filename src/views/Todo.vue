<template>
  <el-container>
    <el-main>
      <h1>Todo {{ msg }}</h1>
      <ul>
        <li v-for="todo in todos" :key="todo.id" :class="{ done: todo.done }">
          {{ todo.title }}
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
          id: 2,
          title: "これはタスク2",
          done: false
        }
      ]
    };
  }
};
</script>
