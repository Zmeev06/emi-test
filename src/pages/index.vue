<script setup lang="ts">
import FadeLoader from "vue-spinner/src/FadeLoader.vue";
import { RouteMeta, RouterView, useRouter } from 'vue-router';
import { Loader } from "@shared/ui/Loader";
import { ref } from 'vue';
import { MainLayout } from "@shared/ui/Layouts/MainLayout";

const router = useRouter();
const isShowLoader = ref(false);

const getTransitionName = (transitionMeta: RouteMeta) => {
  if (
    transitionMeta &&
    typeof transitionMeta === "object" &&
    transitionMeta.transition &&
    typeof transitionMeta.transition === "string"
  ) {
    return transitionMeta.transition;
  }
  return "fade";
};

router.beforeEach(() => {
  isShowLoader.value = true;
});
router.afterEach(() => {
  isShowLoader.value = false;
});

</script>

<template>
  <MainLayout>
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <Transition :name="getTransitionName(route.meta)">
          <Suspense>
            <template #default>
              <component :is="Component" />
            </template>
            <template #fallback>
              <FadeLoader color="#0019fb" />
            </template>
          </Suspense>
        </Transition>
      </template>
      <template v-if="isShowLoader">
        <Loader />
      </template>
    </RouterView>
  </MainLayout>
</template>
<style></style>
