<template>
  <tr ref="item">
    <slot />
  </tr>
</template>
<script>
export default {
  name: "cn-table-body-item",
  props: {},
  mounted() {
    const _this = this;
    let observer = new IntersectionObserver(
      function(entries) {
        if (entries[0].intersectionRatio <= 0) return;
        observer.unobserve(entries[0].target);
        console.log("-=-=-=");
        _this.$emit("add-item");
      },
      {
        root: null,
        rootMargin: "0px",
      },
    );
    observer.observe(this.$refs["item"]);
  },
};
</script>
