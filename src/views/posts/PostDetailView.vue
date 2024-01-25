<template>
  <div>
    <h2>{{ form.title }}</h2>
    <p>{{ form.content }}</p>
    <p class="text-muted">{{ form.createAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
    <!-- 
    <p>params: {{ $route.params }}</p>
    <p>params id: {{ $route.params.id }}</p>
    <p>query: {{ $route.query }}</p>
    <p>query searchText: {{ $route.query.searchText }}</p>
    <p>hash: {{ $route.hash }}</p>
    -->
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { getPostById } from '@/api/posts'
import { reactive, ref } from "vue";

const props = defineProps({
  id: Number,
})

const router = useRouter();
// const id = route.params.id;
// console.log(getPostById(id));

// reactvie와 ref의 장단점 비교
/**
 * ref
 * 장점1) 객체 할당 가능
 * 장점2) 일관성 -> 레퍼런스 타입도 가능하고 프리미티브 타입도 가능함
 * 
 * 단점) form.value.title, form.value.content와 같이 .value 속성을 이용하여 값에 접근
 * 
 * reactvie
 * 장점) form.title, form.content
 * 단점) 객체 할당 불가능
*/

// reactvie
// const form = reactive({});

// const fetchPost = () => {
//   const data = getPostById(id);
//   form.title = data.title;
//   form.content = data.content;
// };

// ref
const form = ref({});

const fetchPost = () => {
  const data = getPostById(props.id);
  form.value = { ...data };
};

fetchPost();

const goListPage = () => router.push({
  name: 'PostList',
});

const goEditPage = () => router.push({
  name: 'PostEdit',
  params: {
    id: props.id
  }
});

</script>

<style lang="scss" scoped>

</style>