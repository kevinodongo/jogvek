<template>
  <div class="bottom">
    <v-sheet min-height="500" color="#CFD8DC">
      <v-container grid-list-xs>
        <v-row no-gutters justify="center">
          <v-col cols="12" md="6">
            <v-sheet height="500" color="#CFD8DC">
              <v-row class="fill-height" align="center">
                <v-col>
                  <div class="information-line">
                    <div class="ml-4 information">
                      <div>Obtaining further</div>
                      <div>
                        information by <span class="primary--text">make a</span>
                      </div>
                      <div>
                        <span class="primary--text">contact</span> with our
                      </div>
                      <div>experienced IT staffs.</div>
                    </div>
                  </div>
                  <div class="ml-4 mt-5 grey--text lighten-1">
                    We’re available for 8 hours a day!
                  </div>
                  <div class="ml-4 grey--text lighten-1">
                    Contact to require a detailed analysis and assessment of
                    your plan.
                  </div>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="6">
            <v-sheet height="450" color="#CFD8DC">
              <v-img
                src="https://i.imgur.com/jnVYHxH.png"
                height="450"
                contain
                gradient="to top, rgba(207, 216, 220,.92), rgba(207, 216, 220,.92)"
              >
                <v-row class="fill-height" align="center">
                  <v-col>
                    <div>REACH OUT NOW!</div>
                    <div class="primary--text display-1 font-weight-bold mt-5">
                      <v-icon color="primary">mdi-phone</v-icon> (+254) 725
                      999157
                    </div>
                    <div class="mt-5 grey--text">
                      Start the collaboration with us while figuring out the
                      best solution
                    </div>
                    <div class="grey--text">based on your needs.</div>
                    <div class="mt-4">
                      <v-btn
                        target="blank"
                        href="https://www.google.co.ke/maps/place/Nyaku+House/@-1.2953342,36.7966721,17z/data=!3m1!4b1!4m5!3m4!1s0x182f10be1cd0bc33:0x6733974af7e19a5c!8m2!3d-1.2953342!4d36.7988608?hl=en"
                        fab
                        small
                        elevation="0"
                        color="grey"
                        ><v-icon small>mdi-map-marker</v-icon></v-btn
                      ><span class="primary--text ml-3">
                        View on Google map</span
                      >
                    </div>
                  </v-col>
                </v-row></v-img
              >
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<style lang="css">
.information {
  font-size: 40px;
}
.information-line {
  border-left: 6px solid orange;
}
</style>
