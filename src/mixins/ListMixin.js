import bus from '@/utils/bus.js'

export default {
    // 재사용할 컴포넌트 옵션 & 로직
    mounted() {
        bus.emit('end:spinner');
    },
    // created() {
    //     bus.emit('start:spinner');
    //     setTimeout(() => {
    //     // dispatch는 항상 Promise를 반환
    //     this.$store.dispatch('FETCH_LIST', this.$route.name)
    //         .then(() => {
    //             console.log('fetched');
    //             bus.emit('end:spinner');
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    //     }, 3000);
    // }
}