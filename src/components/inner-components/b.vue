<template>
  <div>
    <label>
      <input
        type="checkbox"
        @change.prevent="handleClick"
        :value="isChecked"
        v-model="isChecked"
      />
      <span> {{ renderLabel() }} {{ isChecked }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return { isChecked: this.$attrs.data.checked };
  },
  watch: {
    "$attrs.data": function({ checked }) {
      this.isChecked = checked;
    },
  },
  methods: {
    handleClick: function(event) {
      console.log(this.$attrs, "====", event.target.checked, this.isChecked);

      this.isChecked = event.target.checked;

      this.$attrs.updateCol({
        ...this.$attrs.data,
        ...{ checked: event.target.checked },
      });
    },
    renderLabel: function() {
      return this.$attrs.data.id;
    },
  },
  mounted() {
    // console.log(this.$attrs, "------");
  },
};
</script>
