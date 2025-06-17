<template>
  <div>
    <section>
      <user-profile>
        <!-- 
          Vue 3에서는 더 이상 slot 속성을 직접 사용하지 않고 v-slot:name 또는 #name 문법 사용.
         -->
        <template #username>
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
        </template>
        <template #time>{{ 'Posted ' + fetchedItem.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '@/components/UserProfile.vue'

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5em;
}
.fa-user {
  font-size: 2.5em;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7em;
}
</style>