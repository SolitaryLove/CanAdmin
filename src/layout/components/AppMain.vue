<template>
    <router-view :key="key" v-slot="{ Component }">
        <Transition name="slide-fade" mode="out-in">
            <component :is="Component" />
        </Transition>
    </router-view>
</template>

<script setup lang='ts' name="AppMain">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const key = ref(route.path);

</script>
<style scoped>
/* bounce */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

/* slide-fade */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
