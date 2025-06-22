import { h } from 'vue'
import ListView from './ListView.vue'
import bus from '@/utils/bus.js'

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name,
        created() {
            bus.emit('start:spinner');
            // dispatch는 항상 Promise를 반환
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                console.log(`fetched ${this.$route.name}`);
                bus.emit('end:spinner');
                })
                .catch((error) => {
                console.log(error);
                });
        },
        render() {
            return h(ListView);
        }
    }
}