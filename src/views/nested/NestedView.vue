<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <RouterLink to="/nested/one" class="nav-link" active-class="active">
          Nested One
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/nested/two" class="nav-link" active-class="active">
          Nested Two
        </RouterLink>
      </li>
    </ul>
    <hr class="my-4" />
    <RouterView></RouterView>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>