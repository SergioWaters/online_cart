<template>
  <button :class="'button ' + type">{{ text }}</button>
</template>

<script>
export default {
  name: "TheButton",
  props: {
    text: "",
    type: "",
  },
};
</script>

<style lang="scss" scoped>
.button {
  @include font_lato_semibold;
  font-size: 18px;
  line-height: 26px;
  padding: 14px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: $border-radius;
  border: 1px solid $col_blue_1;

  &.filled {
    background-color: $col_blue_1;
    color: white;
  }
  &.outlined {
    background-color: white;
    color: $col_blue_1;
  }
}
</style>
