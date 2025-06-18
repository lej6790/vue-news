<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
import bus from '@/utils/bus.js'

export default {
  components: {
    ListItem,
  },
  created() {
    bus.emit('start:spinner');
    setTimeout(() => {
      // dispatch는 항상 Promise를 반환
      this.$store.dispatch('FETCH_ASK')
        .then(() => {
          console.log('fetched ask');
          bus.emit('end:spinner');
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
  }
}
</script>