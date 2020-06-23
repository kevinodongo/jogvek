<template>
  <v-app>
    <!--Chat section-->
    <v-card width="300" id="chat-section" v-if="chat">
      <v-toolbar flat dense color="orange darken-1" dark>
        <v-icon small class="mr-2">mdi-email-plus</v-icon>
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
      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        color="orange"
      ></v-progress-linear>
      <div v-if="chatForm">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-text>
            <div class="caption font-weight-bold mb-1 mt-2">Names *</div>
            <v-text-field
              name="name"
              v-model="name"
              :rules="nameRules"
              required
              outlined
              single-line
              dense
              hint="Complete the required field"
              persistent-hint
              background-color="grey lighten-2"
            ></v-text-field>
            <div class="caption font-weight-bold mb-1">Email Address</div>
            <v-text-field
              name="email"
              v-model="email"
              :rules="emailRules"
              required
              outlined
              single-line
              dense
              background-color="grey lighten-2"
            ></v-text-field>
            <div class="caption font-weight-bold mb-1">Phone Number *</div>
            <v-text-field
              name="phone"
              v-model="phone"
              :rules="phoneRules"
              required
              outlined
              single-line
              dense
              background-color="grey lighten-2"
            ></v-text-field>
            <div class="caption font-weight-bold mb-1">Subject *</div>
            <v-textarea
              v-model="subject"
              :rules="subjectRules"
              required
              background-color="grey lighten-2"
              single-line
              outlined
              name="input-7-4"
            ></v-textarea>
          </v-card-text>
          <v-card-actions class="mb-5">
            <v-spacer></v-spacer>
            <v-btn outlined width="100" @click="chat = false">
              <span style="text-transform: capitalize">cancel</span>
            </v-btn>
            <v-btn
              @click="send"
              color="orange darken-1"
              dark
              :loading="loading"
              width="100"
              class="mr-2"
            >
              <span style="text-transform: capitalize">submit</span>
            </v-btn>
          </v-card-actions>
        </v-form>
      </div>
    </v-card>
    <!--Button Scroll Up-->
    <v-btn
      id="myBtn"
      onclick="document.body.scrollTop=0;document.documentElement.scrollTop=0;event.preventDefault()"
      x-small
      height="40"
      color="orange"
    >
      <v-icon class="white--text">mdi-chevron-up</v-icon>
    </v-btn>
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
                <v-btn to="/products" icon v-bind="attrs" v-on="on"
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
import { API, graphqlOperation } from "aws-amplify";
import { uuid } from "vue-uuid";
import { createContact } from "./graphql/mutations";
export default {
  data() {
    return {
      dark: false,
      chat: false,
      chatForm: true,
      showup: false,
      showdown: true,
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      name: "",
      nameRules: [v => !!v || "Name is required"],
      subject: "",
      subjectRules: [v => !!v || "Subject is required"],
      phone: "",
      phoneRules: [v => !!v || "Phone is required"],
      loading: false,
      loader: null
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    }
  },
  mounted() {
    this.scrollButton();
  },
  methods: {
    scrollButton() {
      var mybutton = document.getElementById("myBtn");
      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {
        scrollFunction();
      };
      function scrollFunction() {
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
    },
    async send() {
      this.loader = true;
      this.loading = true;
      if (this.$refs.form.validate()) {
        const data = {
          id: uuid.v4(),
          name: this.name,
          email: this.email,
          phone: this.phone,
          subject: this.subject,
          createdAt: new Date()
        };
        this.$refs.form.reset();
        await API.graphql(graphqlOperation(createContact, { input: data }));
        this.loading = false;
        this.chat = false;
      }
      this.loader = false;
      this.loading = false;
    }
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
#myBtn {
  display: none;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 99;
}
</style>
