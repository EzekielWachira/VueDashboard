<template>
  <nav>
    <v-app-bar color="red" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Web</span>
        <span>Tool Pro</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text>
        <span>Exit</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
<!--      <v-menu offset-y>-->
<!--        <template v-slot:activator="{ok}">-->
<!--          <v-btn v-on="ok">-->
<!--            <v-icon left>fas fa-chevron-down</v-icon>-->
<!--            <v-avatar size="20" color="yellow"></v-avatar>-->
<!--          </v-btn>-->
<!--        </template>-->
<!--        <v-list flat>-->
<!--          <v-list-item v-for="more in mores" :key="more">-->
<!--            <v-list-item-title>{{more}}</v-list-item-title>-->
<!--          </v-list-item>-->
<!--        </v-list>-->
<!--      </v-menu>-->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark app class="red darken-4" width="250">
      <v-layout align-center column>
        <v-flex class="mt-5">
          <v-avatar size="80">
            <v-img src="/avatar.jpg"></v-img>
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">webdeveloper@webtool.com</p>
        </v-flex>
        <v-flex class="mt-4 mb-4">
          <Popup />
        </v-flex>
      </v-layout>
      <v-list flat>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup'
export default {
  name: 'Navbar',
  components: {
    Popup
  },
  data: () => ({
    drawer: true,
    links: [
      { icon: 'dashboard', text: 'Dashboard', route: '/' },
      { icon: 'folder', text: 'My Projects', route: '/projects' },
      { icon: 'person', text: 'Teams', route: '/teams' }
    ],
    mores: [
      'My Account', 'Settings', 'Logout'
    ]
  })
}
</script>

<style scoped>
.border{
  border-left: 4px solid lime;
}
</style>
