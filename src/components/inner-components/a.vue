<template>
  <div>
    <label>
      <input
        type="checkbox"
        @change="handleClick"
        :value="isChecked"
        v-model="isChecked"
      />
      <span> {{ renderLabel() }} </span>
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
    "$attrs.data.checked": function(b) {
      this.isChecked = b;
    },
  },
  methods: {
    handleClick: function(event) {
      this.isChecked = event.target.checked;
      console.log(this.$attrs, "====", event.target.checked, this.isChecked);

      this.$attrs.updateRow(
        this.$attrs.data.map((item) => {
          item.checked = event.target.checked;
          return item;
        }),
      );
    },
    renderLabel: function() {
      return this.$attrs.column.title;
    },
  },
  mounted() {
    // console.log("------", this.$attrs);
  },
};
</script>
