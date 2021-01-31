<template>
  <el-container>
    <el-main>
      <h1>Todo {{ msg }}</h1>
      <el-form :inline="true" label-width="120px">
        <el-form-item>
          <el-input placeholder="タスクを入力" v-model="todo"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="createTask">ボタン</el-button>
        </el-form-item>
      </el-form>
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
      todo: "",
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
    createTask() {
      const task = {
        id: this.todos.length + 1,
        title: this.todo,
        done: false
      };
      this.todos.push(task);
      this.todo = "";
    }
  }
};
</script>
