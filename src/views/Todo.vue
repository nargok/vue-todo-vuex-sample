<template>
  <el-container>
    <h1>Todo {{ msg }}</h1>
  </el-container>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      msg: "hello"
    };
  }
};
</script>
