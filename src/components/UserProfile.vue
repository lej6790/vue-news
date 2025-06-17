<template>
    <div class="user-container">
        <div>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
            <div>
              <slot name="username">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
              </slot>
            </div>
            <div class="time">
              <slot name="time">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
              </slot>
              <slot name="karma">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
              </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
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