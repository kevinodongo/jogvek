<template>
  <div class="Home">
    <Toolbar />
    <v-sheet color="#FFF3E0">
      <v-container grid-list-xs>
        <v-row>
          <v-col cols="12" md="6">
            <v-img
              src="https://i.imgur.com/BCMfaoS.png"
              contain
              gradient="to top, rgba(255, 243, 224,.70), rgba(255, 243, 224,.70)"
            >
              <v-row class="fill-height" align="center">
                <div class="headline font-weight-light ml-3">PRODUCTS</div>
              </v-row>
            </v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              src="https://i.imgur.com/eDndPAj.png"
              contain
              height="300"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet class="product">
      <v-container grid-list-xs>
        <v-sheet>
          <v-alert color="orange" class="black--text mb-10">
            <div class="font-weight-bold" style="text-decoration: underline">
              PRODUCTS
            </div>
            <div class="body-1 mt-3 font-weight-light">
              Biggest Business Challenge in today's technology-driven world is
              cost, Cloud Computing is the best remedy for this challenge. We
              assist companies and startup to architect best deisgn's to achieve
              the five pillars of AWS - operational excellence, security,
              reliability, performance efficiency, and cost optimization
            </div>
            <div class="mt-2 body-1 font-weight-light">
              We seek solutions to the world’s great inequities at the frontiers
              of science, technology, and innovation. Our mission is to find new
              way's and create applications that can bring impact and changes to
              human life.
            </div>
            <div class="mt-3 font-weight-bold">NOTE</div>
            <div class="font-weight-light mt-3">
              Some of our application's are on production while some are
              samples, Our main agenda is to build application's which can
              assist companies, ease our day to day activities and bring impact
              to human well being.
            </div>
          </v-alert>
          <v-row>
            <v-col cols="12" md="3">
              <v-card>
                <v-img src="https://i.imgur.com/hzY5Ou4.png" contain></v-img>
                <v-card-text>
                  <div class="text-center title font-weight-regular mb-3">
                    COVID
                  </div>
                  <div style="text-align: justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    delectus odio ullam illum cupiditate maxime. Optio dolores
                    nulla nesciunt maxime a esse deserunt ipsa? Reprehenderit
                    quis tenetur distinctio esse perspiciatis.
                  </div>
                  <div class="text-center mt-2">
                    <v-btn color="orange" text>
                      <span style="text-transform: capitalize"
                        >read more <v-icon small>mdi-arrow-right</v-icon></span
                      >
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="3">
              <v-card>
                <v-img src="https://i.imgur.com/Olzhd5B.jpg" contain></v-img>
                <v-card-text>
                  <div class="text-center title font-weight-regular mb-3">
                    AGRICULTURE
                  </div>
                  <div style="text-align: justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    delectus odio ullam illum cupiditate maxime. Optio dolores
                    nulla nesciunt maxime a esse deserunt ipsa? Reprehenderit
                    quis tenetur distinctio esse perspiciatis.
                  </div>
                  <div class="text-center mt-2">
                    <v-btn color="orange" text>
                      <span style="text-transform: capitalize"
                        >read more <v-icon small>mdi-arrow-right</v-icon></span
                      >
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="3">
              <v-card>
                <v-img src="https://i.imgur.com/8dNJbDj.jpg" contain></v-img>
                <v-card-text>
                  <div class="text-center title font-weight-regular mb-3">
                    WOMEN
                  </div>
                  <div style="text-align: justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    delectus odio ullam illum cupiditate maxime. Optio dolores
                    nulla nesciunt maxime a esse deserunt ipsa? Reprehenderit
                    quis tenetur distinctio esse perspiciatis.
                  </div>
                  <div class="text-center mt-2">
                    <v-btn color="orange" text>
                      <span style="text-transform: capitalize"
                        >read more <v-icon small>mdi-arrow-right</v-icon></span
                      >
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="3">
              <v-card>
                <v-img src="https://i.imgur.com/g5hdsNr.jpg" contain></v-img>
                <v-card-text>
                  <div class="text-center title font-weight-regular mb-3">
                    SME
                  </div>
                  <div style="text-align: justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    delectus odio ullam illum cupiditate maxime. Optio dolores
                    nulla nesciunt maxime a esse deserunt ipsa? Reprehenderit
                    quis tenetur distinctio esse perspiciatis.
                  </div>
                  <div class="text-center mt-2">
                    <v-btn color="orange" text>
                      <span style="text-transform: capitalize"
                        >read more <v-icon small>mdi-arrow-right</v-icon></span
                      >
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="3">
              <v-card>
                <v-img src="https://i.imgur.com/Q0Fug00.jpg" contain></v-img>
                <v-card-text>
                  <div class="text-center title font-weight-regular mb-3">
                    TECHNOLOGY
                  </div>
                  <div style="text-align: justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    delectus odio ullam illum cupiditate maxime. Optio dolores
                    nulla nesciunt maxime a esse deserunt ipsa? Reprehenderit
                    quis tenetur distinctio esse perspiciatis.
                  </div>
                  <div class="text-center mt-2">
                    <v-btn color="orange" text>
                      <span style="text-transform: capitalize"
                        >read more <v-icon small>mdi-arrow-right</v-icon></span
                      >
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="3">
              <v-card>
                <v-img src="https://i.imgur.com/L4XpSuC.jpg" contain></v-img>
                <v-card-text>
                  <div class="text-center title font-weight-regular mb-3">
                    GOVERANCE
                  </div>
                  <div style="text-align: justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    delectus odio ullam illum cupiditate maxime. Optio dolores
                    nulla nesciunt maxime a esse deserunt ipsa? Reprehenderit
                    quis tenetur distinctio esse perspiciatis.
                  </div>
                  <div class="text-center mt-2">
                    <v-btn color="orange" text>
                      <span style="text-transform: capitalize"
                        >read more <v-icon small>mdi-arrow-right</v-icon></span
                      >
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="3">
              <v-card>
                <v-img src="https://i.imgur.com/xtxDJa8.jpg" contain></v-img>
                <v-card-text>
                  <div class="text-center title font-weight-regular mb-3">
                    CHILDREN
                  </div>
                  <div style="text-align: justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    delectus odio ullam illum cupiditate maxime. Optio dolores
                    nulla nesciunt maxime a esse deserunt ipsa? Reprehenderit
                    quis tenetur distinctio esse perspiciatis.
                  </div>
                  <div class="text-center mt-2">
                    <v-btn color="orange" text>
                      <span style="text-transform: capitalize"
                        >read more <v-icon small>mdi-arrow-right</v-icon></span
                      >
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="3">
              <v-card>
                <v-img src="https://i.imgur.com/SY89EAg.jpg" contain></v-img>
                <v-card-text>
                  <div class="text-center title font-weight-regular mb-3">
                    TOURISIM
                  </div>
                  <div style="text-align: justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    delectus odio ullam illum cupiditate maxime. Optio dolores
                    nulla nesciunt maxime a esse deserunt ipsa? Reprehenderit
                    quis tenetur distinctio esse perspiciatis.
                  </div>
                  <div class="text-center mt-2">
                    <v-btn color="orange" text>
                      <span style="text-transform: capitalize"
                        >read more <v-icon small>mdi-arrow-right</v-icon></span
                      >
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>
    </v-sheet>
    <Footer />
  </div>
</template>

<script>
import Toolbar from "../components/Toolbar";
import Footer from "../components/Footer";
export default {
  components: { Toolbar, Footer },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="css">
.product {
  margin-top: 50px;
  margin-bottom: 80px;
}
</style>
