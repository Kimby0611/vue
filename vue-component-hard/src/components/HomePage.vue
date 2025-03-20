<template>
  <div>
    <h2>Components</h2>
    <button @click="$router.push('/title')">title</button>
    <button @click="$router.push('/props')">props</button>
    <button @click="$router.push('/num')">number</button>
    <button @click="$router.push('/vali')">validator</button>
    <button @click="$router.push('/btnev')">btn event</button>
    <button @click="$router.push('/funcev')">func event</button>
    <button @click="$router.push('/dataoption')">Data Change</button>
    <button @click="$router.push('/eventdata')">Event Data</button>
    <button @click="$router.push('/datasync')">Event Data</button>
    <button @click="$router.push('/slot')">slot</button>
    <button @click="$router.push('/provide')">provide</button>
  </div>
</template>

<script>
export default {};
</script>
