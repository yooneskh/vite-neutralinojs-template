<script setup>

function showMessage() {
  Neutralino.os.showMessageBox('Hello', 'From NeuVite!');
}

</script>

<template>
  <div style="height: 100vh; width: 100vw; display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <h1>
      Hello NeuVite ^_^
    </h1>
    <button @click="showMessage">
      Show Message (Works only in Neu window)
    </button>
  </div>
</template>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }
</style>
