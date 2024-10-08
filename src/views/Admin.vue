<template>
  <div>
    <nav>
        <router-link exact-active-class="active" to="/admin/dashboard">DashBoard</router-link>
        <router-link active-class="active" to="/admin/user">User</router-link>
        <router-link active-class="active" to="/admin/product">Product</router-link>
        <router-link  active-class="active" to="/admin/setting">Setting</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
    .active{
        background-color: red;
    }
</style>