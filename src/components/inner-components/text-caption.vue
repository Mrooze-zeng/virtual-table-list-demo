<template>
  <th class="caption">
    <span>{{ caption.text }}</span>
  </th>
</template>

<script>
export default {
  name: "text-caption",
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
};
</script>
<style scoped>
.caption {
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #e54d38;
  color: #fff;
  clip-path: polygon(calc(100% - 34.5px) 0%, 100% 100%, 100% 100%, 0 100%, 0 0);
}
</style>
