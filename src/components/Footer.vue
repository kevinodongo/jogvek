<template>
  <div class="footer">
    <v-sheet color="#424242" dark>
      <v-container grid-list-xs>
        <v-row class="mt-10">
          <v-col cols="12" md="4">
            <v-row justify="center">
              <v-col cols="11">
                <div class="headline font-weight-bold">ABOUT US</div>
                <div class="line mt-2"></div>
                <div class="mt-4 mb-2 title">JOGVEK GROUP LIMITED</div>
                <div style="text-align: justify" class="grey--text">
                  Biggest Business Challenge in today's technology-driven world
                  is cost, Cloud Computing is the best remedy for this
                  challenge. We assist companies and startup to architect best
                  deisgn's to achieve the five pillars of AWS - operational
                  excellence, security, reliability, performance efficiency, and
                  cost optimization
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="4">
            <v-row justify="center">
              <v-col cols="11">
                <div class="headline font-weight-bold">IT SERVICES</div>
                <div class="line mt-2"></div>
                <v-row no-gutters>
                  <v-col cols="6">
                    <div class="mt-4 grey--text">
                      <v-icon class="mr-2">mdi-chevron-double-right</v-icon
                      >Cloud Computing
                    </div>
                    <div class="grey--text">
                      <v-icon class="mr-2">mdi-chevron-double-right</v-icon>IT
                      Support
                    </div>
                    <div class="grey--text">
                      <v-icon class="mr-2">mdi-chevron-double-right</v-icon>IT
                      Consultancy
                    </div>
                    <div class="grey--text">
                      <v-icon class="mr-2">mdi-chevron-double-right</v-icon>
                      Cloud Security
                    </div>
                    <div class="grey--text">
                      <v-icon class="mr-2">mdi-chevron-double-right</v-icon>Web
                      Design and Development
                    </div>
                    <div class="grey--text">
                      <v-icon class="mr-2">mdi-chevron-double-right</v-icon
                      >Disaster Management
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="mt-4 grey--text">
                      <v-icon class="mr-2">mdi-chevron-double-right</v-icon
                      >Graphics
                    </div>
                    <div class="grey--text">
                      <v-icon class="mr-2">mdi-chevron-double-right</v-icon
                      >Designs
                    </div>
                    <div class="grey--text">
                      <v-icon class="mr-2">mdi-chevron-double-right</v-icon
                      >Privacy
                    </div>

                    <div class="grey--text">
                      <v-icon class="mr-2">mdi-chevron-double-right</v-icon
                      >Contacts
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="4">
            <v-row justify="center">
              <v-col cols="11">
                <div class="headline font-weight-bold">CONTACT INFO</div>
                <div class="line mt-2"></div>
                <div class="mt-4 grey--text">
                  <strong>Address:</strong> 29-00517, Nairobi, Kenya
                </div>
                <div class="grey--text">
                  <strong>Phone:</strong> +254 725 999157
                </div>
                <div class="grey--text">
                  <strong>E-mail:</strong> jogvek@aol.com
                </div>
                <div class="mt-3">
                  <v-btn fab x-small elevation="0" tile class="mr-1"
                    ><v-icon small>mdi-facebook</v-icon></v-btn
                  >
                  <v-btn fab tile x-small elevation="0" class="mr-1"
                    ><v-icon small>mdi-twitter</v-icon></v-btn
                  >
                  <v-btn fab tile x-small elevation="0"
                    ><v-icon small>mdi-instagram</v-icon></v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet height="100" color="secondary"></v-sheet>
    <v-footer padless dark absolute>
      <v-card class="flex" flat tile color="black">
        <v-container grid-list-xs>
          <div class="white--text text-end font-weight-light">
            Copyright &copy; {{ new Date().getFullYear() }} —
            <strong>Jogvek Group Limited</strong>
          </div>
        </v-container>
      </v-card>
    </v-footer>
  </div>
</template>
