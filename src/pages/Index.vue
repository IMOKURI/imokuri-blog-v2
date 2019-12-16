<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

    <Pager
      class="pager"
      v-if="$page.posts.pageInfo.totalPages > 1"
      :info="$page.posts.pageInfo" />

  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allPost(
    filter: {published: {eq: true}},
    sortBy: "date",
    order: DESC,
    perPage: 10,
    page: $page
  ) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, YYYY")
        updated (format: "MMMM D, YYYY")
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Pager,
    Author,
    PostCard
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss">
.pager {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 2) 0;

  margin-top: -.5em;
  a {
    margin: 0 .8em;
    text-decoration: none;
    color: currentColor;
  }
}
</style>
