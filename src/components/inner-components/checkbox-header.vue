<template>
  <label>
    <input
      type="checkbox"
      @change="handleClick"
      :value="data.checked"
      :checked="data.checked"
    />
    <span> {{ renderLabel() }} </span>
  </label>
</template>

<script>
export default {
  name: "checkbox-header",
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
  data() {
    return {};
  },
  methods: {
    handleClick: function(event) {
      const data = this.data;
      this.action(
        data.map((item) => {
          item.checked = event.target.checked;
          return item;
        }),
        this.column.header.action,
      );
    },
    renderLabel: function() {
      return this.column.title;
    },
  },
  mounted() {},
};
</script>
