<script setup lang='ts'>
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

interface Props {
  images: string[],
}

const props = defineProps<Props>()
const [emblaRef] = emblaCarouselVue({ loop: true }, [Autoplay()])
</script>
<template>
  <div class="embla" ref="emblaRef">
    <div class="embla__container">
      <div v-for="(item, index) in props.images" :key="index" class="embla__slide h-full"
        :style="{ backgroundImage: `url(${item})` }"></div>
    </div>
  </div>
</template>
<style scoped>
.embla {
  overflow: hidden;
  height: 100%;
}

.embla__container {
  display: flex;
  height: 100%;
}

.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
  min-height: 208px;
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>