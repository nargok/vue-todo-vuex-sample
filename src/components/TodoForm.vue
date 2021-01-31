<template>
  <div>
    <!-- Enterを押しても送信されてないようにする -->
    <el-form :inline="true" label-width="120px" @submit.native.prevent>
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
import { mapGetters, mapActions } from "vuex";
import { ADD_TODO } from "@/store/action-types";

export default {
  name: "TaskForm",
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    ...mapActions([ADD_TODO]),
    createTask() {
      const task = {
        id: this.allTodos.length + 1,
        title: this.todo,
        done: false
      };
      this[ADD_TODO](task);
      this.todo = "";
    }
  },
  computed: mapGetters(["allTodos"])
};
</script>
