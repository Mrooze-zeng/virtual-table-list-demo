<template>
  <th>
    <input type="text" @input="handleSearch" />
  </th>
</template>

<script>
export default {
  name: "search-caption",
  props: {
    caption: {
      type: Object,
      default: function() {},
    },
    namekey: {
      type: String,
      default: "",
    },
    action: {
      type: Function,
      default: function() {},
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSearch: function(e) {
      this.action(e.target.value, this.caption.action);
    },
  },
};
</script>

<style scoped>
th {
  padding: 0;
}
input {
  width: calc(100% - 15px);
}
</style>
