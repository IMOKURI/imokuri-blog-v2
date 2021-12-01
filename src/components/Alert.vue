<template>
  <div class="alert">
    ⚠️ この記事は、最終更新日から {{ passYear }} 年以上経過しています。 情報が古い可能性があります。
  </div>
</template>

<script>
export default {
  props: ['passYear']
}
</script>

<style lang="scss">
.alert {
  margin: .7em;
  color: currentColor;
  text-decoration: none;
  background-color: var(--warning-bg-color);
  color: currentColor!important; //Todo: remove important;
  padding: .5em;
  border-radius: var(--radius);
  text-align: center;
}
</style>
