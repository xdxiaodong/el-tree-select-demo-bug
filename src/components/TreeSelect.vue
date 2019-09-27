<template>
  <div>
    <el-tree-select />
    <span>点击红圈控制台就会报错，chrome(版本 77.0.3865.75)，firefox(版本 69.0.1)，edge三个浏览器都会触发</span>
    <svg>
      <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>