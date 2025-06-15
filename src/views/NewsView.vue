<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedNews" class="post">
        <!-- 포인트 영역 -->
        <div class="point">
          {{ item.points }}
        </div>
        <!-- 기타 정보 역역 -->
        <div>
          <p class="news-title">
            <a :href="item.url" target="_blank">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            by
            <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>            
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['fetchedNews'])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.point {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>