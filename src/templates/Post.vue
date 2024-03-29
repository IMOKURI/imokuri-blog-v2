<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.post.title }}
      </h1>

      <PostMeta :post="$page.post" />
      <PostUpdatedMeta :post="$page.post" v-if="$page.post.updated" />

    </div>

    <div class="post content-box">

      <div class="post__header">
        <Alert :passYear="postIsOlderThanOneYear" v-if="postIsOlderThanOneYear > 0" />

        <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>

      <div class="post-comments">
        <!-- Add comment widgets here -->
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
        <div id="comments" />
      </div>
    </div>

    <Disclaimer/>
    <Author class="post-author" />
  </Layout>
</template>

<script>
import moment from 'moment'
import Alert from '~/components/Alert.vue'
import Author from '~/components/Author.vue'
import Disclaimer from '~/components/Disclaimer.vue'
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import PostUpdatedMeta from '~/components/PostUpdatedMeta'

export default {
  components: {
    Alert,
    Author,
    Disclaimer,
    PostMeta,
    PostUpdatedMeta,
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ],
      script: [{ src: 'https://platform.twitter.com/widgets.js' }]
    }
  },
  computed: {
    postIsOlderThanOneYear () {
      if (this.$page.post.updated) {
        const updateDate = moment(this.$page.post.updated)
        return moment().diff(updateDate, 'years')
      }
      const postDate = moment(this.$page.post.date)
      return moment().diff(postDate, 'years')
    }
  },
  mounted () {
    const script = window.document.createElement('script')
    const utterance = window.document.getElementById('comments')
    const attrs = {
      src: 'https://utteranc.es/client.js',
      repo: 'IMOKURI/imokuri-blog-v2',
      'issue-term': 'pathname',
      theme: 'github-light',
      label: 'comment',
      crossorigin: 'anonymous',
      async: true
    }
    Object.entries(attrs).forEach(([key, value]) => {
      script.setAttribute(key, value)
    })
    utterance.appendChild(script)
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "MMMM D, YYYY")
    updated (format: "MMMM D, YYYY")
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

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

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
