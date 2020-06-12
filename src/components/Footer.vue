<template>
    <v-footer dark padless inset>
      <v-card class="flex" flat tile color="reed" :elevation="10">
        <v-card-text class="py-2 white--text text-center">
          Copyright &copy;{{new Date().getFullYear()}} <strong>WebTool Pro</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>
