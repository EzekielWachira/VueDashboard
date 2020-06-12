<template>
  <div>
    <h1 class="ml-2">Dashboard</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
              <v-list-item>
                <v-list-item-avatar tile class="mt-n7 justify-center elevation-10">
                  <v-sheet color="green" width="80" height="80" elevation="10">
                    <v-icon dark large>store</v-icon>
                  </v-sheet>
                </v-list-item-avatar>
                <v-list-item-content>
                  <div class="overline text-right">Articles</div>
                  <v-list-item-title class="headline mb-1 text-right">382793</v-list-item-title>
                  <div>
                    <v-divider></v-divider>
                  </div>
                </v-list-item-content>
              </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">person</v-icon>
              <div class="overline">Lorem</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7 justify-center elevation-10">
                <v-sheet color="orange" width="80" height="80" elevation="10">
                  <v-icon dark small>fas fa-video</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Videos</div>
                <v-list-item-title class="headline mb-1 text-right">3897223</v-list-item-title>
                <div>
                  <v-divider></v-divider>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">fas fa-video</v-icon>
              <div class="overline">Lorem</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7 justify-center elevation-10">
                <v-sheet color="purple" width="80" height="80" elevation="10">
                  <v-icon dark large>shopping_cart</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Shopping</div>
                <v-list-item-title class="headline mb-1 text-right">278213</v-list-item-title>
                <div>
                  <v-divider></v-divider>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">shopping_cart</v-icon>
              <div class="overline">Lorem</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7 justify-center elevation-10">
                <v-sheet color="red" width="80" height="80" elevation="10">
                  <v-icon dark large>folder_open</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">Articles</div>
                <v-list-item-title class="headline mb-1 text-right">382793</v-list-item-title>
                <div>
                  <v-divider></v-divider>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">folder</v-icon>
              <div class="overline">Lorem</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 v-for="person in teams" :key="person.name">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="red lighten-2">
                <v-img src="/avatar.jpg"></v-img>
              </v-avatar>
              <v-card-text>
                <div class="subheading">{{person.name}}</div>
                <div class="grey--text">{{person.role}}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn outlined color="orange">
                  <v-icon left small>message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-responsive>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    teams: [
      { name: 'John', role: 'Android Developer', avatar: '/avatar.jpg' },
      { name: 'Jane', role: 'Web developer', avatar: '/avatar.jpg' },
      { name: 'John Doe', role: 'Mobile developer', avatar: '/avatar.jpg' },
      { name: 'Jane Doe', role: 'Full Stack developer', avatar: '/avatar.jpg' }
    ]
  }),
  components: {

  }
}
</script>
