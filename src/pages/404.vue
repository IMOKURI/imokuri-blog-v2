<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">404 - Not Found</h1>
    </div>

    <div class="post content-box">
      お探しのページが見つかりませんでした。。。
    </div>

    <Author class="post-author" />
  </Layout>
</template>

<script>
import Author from '~/components/Author.vue'
export default {
  components: {
    Author
  }
}
</script>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}
.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    img {
      width: 100%;
    }
    &:empty {
      display: none;
    }
  }
  &__content {
    h2:first-child {
      margin-top: 0;
    }
    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}
.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
