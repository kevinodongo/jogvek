<template>
  <v-app>
    <!--Chat section-->
    <v-card width="300" id="chat-section" v-if="chat">
      <v-toolbar flat dense color="primary" dark>
        <div>Contact us</div>
        <v-spacer></v-spacer>
        <v-icon
          @click="(chatForm = false), (showup = true), (showdown = false)"
          v-if="showdown"
          class="mr-3"
          >mdi-chevron-down</v-icon
        >
        <v-icon
          @click="(chatForm = true), (showdown = true), (showup = false)"
          v-if="showup"
          class="mr-3"
          >mdi-chevron-up</v-icon
        >
        <v-icon @click="chat = false" small>mdi-close</v-icon>
      </v-toolbar>
      <v-divider></v-divider>
      <div v-if="chatForm">
        <v-card-text>
          <div class="caption grey--text">
            For Inquiries, please fill in the form below for a response within
            one business day. In order to best serve your Support inquiry,
            please call (+254) 725 999157 or Chat with Technical Support.
          </div>
          <v-divider></v-divider>
          <div class="caption font-weight-bold mb-1 mt-2">Names *</div>
          <v-text-field
            name="name"
            outlined
            single-line
            dense
            hint="Complete the required field"
            persistent-hint
            background-color="grey lighten-2"
          ></v-text-field>
          <div class="caption font-weight-bold mb-1">Email Address</div>
          <v-text-field
            name="name"
            outlined
            single-line
            dense
            background-color="grey lighten-2"
          ></v-text-field>
          <div class="caption font-weight-bold mb-1">Phone Number</div>
          <v-text-field
            name="name"
            outlined
            single-line
            dense
            background-color="grey lighten-2"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="mb-5">
          <v-spacer></v-spacer>
          <v-btn outlined width="100">
            <span style="text-transform: capitalize">cancel</span>
          </v-btn>
          <v-btn color="primary" width="100" class="mr-2">
            <span style="text-transform: capitalize">submit</span>
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
    <v-main>
      <v-sheet :dark="dark">
        <v-sheet id="btn">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn @click="dark = !dark" icon v-bind="attrs" v-on="on"
                ><v-icon>mdi-cog</v-icon></v-btn
              >
            </template>
            <span>Change mode</span>
          </v-tooltip>
          <div>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on"
                  ><v-icon>mdi-share-variant</v-icon></v-btn
                >
              </template>
              <span>Our solutions</span>
            </v-tooltip>
          </div>
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon @click="chat = true" v-bind="attrs" v-on="on"
                ><v-icon>mdi-message-processing-outline</v-icon></v-btn
              >
            </template>
            <span>Send a message</span>
          </v-tooltip>
        </v-sheet>
        <router-view></router-view>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dark: false,
      chat: false,
      chatForm: true,
      showup: false,
      showdown: true
    };
  }
};
</script>

<style lang="css">
#btn {
  position: fixed;
  top: 50%;
  right: 0px;
  z-index: 99;
}
#chat-section {
  position: fixed;
  bottom: 0px;
  right: 60px;
  z-index: 99;
}
</style>
