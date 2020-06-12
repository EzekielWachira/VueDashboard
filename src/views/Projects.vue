<template>
  <div class="project">
    <h1 class="ml-2">Projects</h1>
    <v-container class="ml-2">
      <v-layout row wrap class="mb-4">
        <v-tooltip bottom>
          <template v-slot:activator="{on}">
            <v-btn small outlined color="green" @click="sortBy('title')" class="mr-2" v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By Project title</span>
            </v-btn>
          </template>
          <span>Sort Project</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{on}">
            <v-btn small outlined color="green" @click="sortBy('title')" class="mr-2" v-on="on">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By Project name</span>
            </v-btn>
          </template>
          <span>Sort Person</span>
        </v-tooltip>
      </v-layout>
      <v-card flat v-for="project in projects" :key="project.title" class="mb-1">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{project.date}}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'Projects',
  data: () => ({
    projects: [
      { title: 'Website development', person: 'John', date: '3/2/2020', status: 'complete' },
      { title: 'Android App development', person: 'Jane', date: '7/4/2020', status: 'complete' },
      { title: 'E-Commerce Website', person: 'John Doe', date: '7/2/2020', status: 'up' },
      { title: 'Machine Leaning', person: 'Jane Doe', date: '6/5/2020', status: 'pending' },
      { title: 'Neural Networks', person: 'Ezzy', date: '3/4/2020', status: 'complete' },
      { title: 'Website development', person: 'John', date: '3/2/2020', status: 'complete' },
      { title: 'Android App development', person: 'Jane', date: '7/4/2020', status: 'complete' },
      { title: 'E-Commerce Website', person: 'John Doe', date: '7/2/2020', status: 'up' },
      { title: 'Machine Leaning', person: 'Jane Doe', date: '6/5/2020', status: 'pending' },
      { title: 'Neural Networks', person: 'Ezzy', date: '3/4/2020', status: 'complete' }
    ]
  }),
  methods: {
    sortBy (prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>
<style scoped>
  .project.complete{
    border-left: 4px solid lime;
  }
  .project.up{
    border-left: 4px solid yellow;
  }
  .project.pending{
    border-left: 4px solid red;
  }
</style>
