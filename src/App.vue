<template>
 <div class="container">
  <router-view></router-view>
 </div>
</template>

<script>

</script>

<style>
body {
  background: #F1F4FF;
}
.container {
  max-width: 1400px;
  padding: 20px;
  margin: 0 auto;
}

.btn {
  padding: 10px 30px;
  color: white;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  background: #3D7FFC;
  cursor: pointer;
}

.btn[disabled] {
  opacity: .8;
  cursor: default;
}

.btn-logout {
  background: white;
  color: #455368;
  border: 1px solid #81ACFF;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.download-btn {
  display: flex;
  align-items: center;
}

</style>
