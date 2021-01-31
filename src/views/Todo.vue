<template>
  <el-container>
    <el-main>
      <h1>Todo {{ msg }}</h1>
      <TodoForm />
      <TodoList listTitle="Todo" :taskStatus="false" />
      <TodoList listTitle="Done" :taskStatus="true" />
    </el-main>
  </el-container>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>

<script>
import { mapGetters } from "vuex";
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";

export default {
  name: "Todo",
  components: {
    TodoList,
    TodoForm
  },
  data() {
    return {
      msg: "hello",
      todo: ""
    };
  },
  computed: mapGetters(["allTodos"])
};
</script>
