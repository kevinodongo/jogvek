<template>
  <div class="home">
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
    <v-app-bar app color="grey darken-1" flat>
      <v-container grid-list-xs>
        <v-card-actions>
          <div class="headline font-weight-bold d-none d-sm-flex">
            JOGVEK GROUP LIMITED
          </div>
          <div class="title font-weight-bold d-flex d-sm-none">
            JOGVEK GROUP LIMITED
          </div>
          <v-spacer></v-spacer>
          <v-btn text to="/" class="d-none d-md-flex">home</v-btn>
          <v-btn text to="/about-cloud" class="d-none d-md-flex">about</v-btn>
          <v-btn text to="/products" class="d-none d-md-flex">products</v-btn>
          <v-btn text to="/contact" class="d-none d-md-flex">contact</v-btn>
          <v-btn class="d-flex d-md-none" @click="expand = !expand" icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-app-bar>
    <v-expand-transition>
      <v-card v-show="expand" width="100%" class="mx-auto">
        <v-list>
          <v-list-item to="/" active-class="orange--text">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="about-cloud" active-class="orange--text">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item to="/products" active-class="orange--text">
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item>
          <v-list-item to="/contact" active-class="orange--text">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-expand-transition>
    <v-img height="850" src="https://i.imgur.com/LpKFb0g.jpg">
      <div class="contact d-none d-sm-flex">
        <v-container grid-list-xs>
          <v-card-actions class="pa-2">
            <v-spacer></v-spacer>
            <v-icon small class="ml-2">mdi-phone</v-icon>
            <div class="ml-2 caption">+254 725 999 157</div>
            <v-icon small class="ml-2">mdi-email</v-icon>
            <div class="caption ml-2">jogvek@aol.com</div>
            <v-icon small class="ml-2 mr-2">mdi-clock-outline</v-icon>
            <div class="caption">Mon-Fri 7.00 - 5.00</div>
          </v-card-actions>
        </v-container>
      </div>
      <v-divider></v-divider>
      <div style="margin-top: 100px;">
        <v-row justify="center">
          <v-col cols="11" md="8">
            <div class="display-3 font-weight-black text-center">
              <span>ONE COMPANY</span>
            </div>
            <div class="display-3 font-weight-black mt-2 text-center">
              <span>INFINITE POTENTIAL</span>
            </div>
            <div class="headline text-center mt-3">
              Cloud Computing Solutions Designed For Your Business
            </div>
            <v-row justify="center" class="mt-10">
              <v-col cols="12" sm="3">
                <v-btn block color="white" large class="mr-3"
                  ><span class="orange--text" style="text-transform: capitalize"
                    >Free Consultation</span
                  ></v-btn
                >
              </v-col>
              <v-col cols="12" sm="3">
                <v-btn block dark color="orange" large
                  ><v-icon>mdi-menu-right</v-icon
                  ><span style="text-transform: capitalize"
                    >how we work</span
                  ></v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-img>
    <Discover />
    <v-img
      src="https://i.imgur.com/jnVYHxH.png"
      contain=""
      height="400"
      gradient="to top, rgba(128, 128, 128,.92), rgba(128, 128, 128,.92)"
    >
      <v-container grid-list-xs class="fill-height">
        <v-row align="center">
          <v-col cols="12" md="8">
            <div class="_text">
              We run all kinds of IT services that vow your
              <span class="orange--text">success</span>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <v-row>
              <v-col cols="6">
                <v-btn color="white" x-large block
                  ><v-icon small color="primary"
                    >mdi-comment-processing-outline</v-icon
                  >
                  <span
                    style="text-transform: capitalize"
                    class="caption primary--text"
                    >let's talk</span
                  ></v-btn
                >
              </v-col>
              <v-col cols="6">
                <v-btn color="orange" dark x-large block
                  ><v-icon class="mr-2" small>mdi-information-outline</v-icon>
                  <span style="text-transform: capitalize" class="caption"
                    >get info</span
                  ></v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <Services />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Discover from "../components/Discover";
export default {
  components: { Footer, Contact, Services, Discover },
  data() {
    return {
      loading: true,
      color: "orange--text",
      items: [
        {
          src: "https://i.imgur.com/n6CzWiq.jpg",
          color: "white--text"
        },
        {
          src: "https://i.imgur.com/LpKFb0g.jpg",
          color: "orange--text"
        }
      ],
      expand: false
    };
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
    }
  }
};
</script>

<style lang="css">
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: burlywood;
}
.line {
  border-bottom: 6px solid orange;
  width: 20%;
}
._text {
  font-size: 40px;
  font-weight: bolder;
  color: white;
}
#myBtn {
  display: none;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 99;
}
</style>
