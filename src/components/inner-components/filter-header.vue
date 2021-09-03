<template>
  <div class="filter-container">
    <div>{{ renderLabel() }}</div>
    <div class="filters">
      <a @click="handleUp"> ↑</a><a @click="handleDown">↓</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "filter-header",
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      },
    },
    column: {
      type: Object,
      default: function() {
        return {};
      },
    },
    action: {
      type: Function,
      default: function() {},
    },
  },
  methods: {
    renderLabel: function() {
      return this.column.title;
    },
    handleUp: function() {
      const data = this.data;
      this.action(
        data.sort((a, b) => {
          return a[this.column.key] - b[this.column.key];
        }),
        this.column.header.action,
      );
    },
    handleDown: function() {
      const data = this.data;
      this.action(
        data.sort((a, b) => {
          return b[this.column.key] - a[this.column.key];
        }),
        this.column.header.action,
      );
    },
  },
};
</script>

<style scoped>
.filter-container {
  display: flex;
  align-items: center;
}
.filters {
  display: flex;
  flex-wrap: wrap;
  width: 15px;
  margin-left: 15px;
  cursor: pointer;
}
</style>
