<template>
  <label>
    <input
      type="checkbox"
      @change.prevent="handleClick"
      :value="$attrs.data.checked"
      :checked="$attrs.data.checked"
    />
    <span> {{ renderLabel() }} </span>
  </label>
</template>

<script>
export default {
  name: "checkbox-body",
  props: {
    column: {
      type: Object,
      default: function() {
        return {};
      },
    },
    updateRow: {
      type: Function,
      default: function() {},
    },
    updateCol: {
      type: Function,
      default: function() {},
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick: function(event) {
      this.updateCol({
        ...this.$attrs.data,
        ...{ checked: event.target.checked },
      });
    },
    renderLabel: function() {
      return this.$attrs.data.id;
    },
  },
  mounted() {
    // console.log(this.data);
  },
};
</script>
