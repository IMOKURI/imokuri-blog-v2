<template>
  <Layout>
    <!-- Author intro -->
    <Author :show-title="true" />

    <div class="post content-box">
      <div class="post__header">
        <g-image alt="Cover image" v-if="$page.about.cover_image" :src="$page.about.cover_image" />
      </div>

      <div class="post__content" v-html="$page.about.content" />

      <div class="post__footer">
        <PostMeta :post="$page.about" />
      </div>

    </div>

  </Layout>
</template>

<page-query>
query {
  about: static (path: "/content/static/about") {
    title
    path
    date (format: "MMMM D, YYYY")
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostMeta from '~/components/PostMeta'

export default {
  components: {
    Author,
    PostMeta
  },
  metaInfo () {
    return {
      title: this.$page.about.title
    }
  }
}
</script>

<style lang="scss">
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
</style>
