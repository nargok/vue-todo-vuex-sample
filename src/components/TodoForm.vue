<template>
  <div>
    <el-form :inline="true" label-width="120px">
      <el-form-item>
        <el-input placeholder="タスクを入力" v-model="todo"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="createTask">ボタン</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "TaskForm",
  props: {
    todos: Array
  },
  data() {
    return {
      todo: ""
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
