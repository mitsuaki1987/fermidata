<template>
  <div>
    <v-container>
      <v-card class="">
        <v-form action="#" method="POST">
          <v-container class="flex search-area">
            <v-sheet class="w-25 mr-8">
              <v-text-field variant="outlined" label="Composition" class="w-100" v-model="inputText" clearable>
              </v-text-field>
            </v-sheet>
            <v-sheet class="mr-8 mt-2">
              <v-btn @click="clickSearch">
                Search
              </v-btn>
            </v-sheet>
            <v-card class="usage-area" v-if="isOpenUsage">
              (a) "H2O1" indicates two H atoms and one O atom composition. <br>
              <span class="ml-5">This also finds systems such as 10 H atoms and 5 O atoms in a unit cell.</span><br>
              (b) "Mg#O#si#" finds Mg1O3Si1, Mg2O4Si2, etc. <br>
              <span class="ml-5">"#" means an arbitrary number.</span><br>
              (c) "?1?1O3" finds Ba1Ti1O3, Ba1Bi1O3, Mg1O3Si1, etc. <br>
              <span class="ml-5">"?" means an arbitrary element.</span><br>
              (d) "*Fe#O#*" finds Fe1O1, "La1Fe1As1O1, etc. <br>
              <span class="ml-5">"*" means an arbitrary string.</span><br>
            </v-card>
            <v-chip class="ml-auto" prepend-icon="mdi-help-circle" @click="isOpenUsage = !isOpenUsage">Composition-formula rule</v-chip>
          </v-container>

          <v-container>
            <v-sheet class="my-2" width="">Formation energy from isolated atoms (eV/atom)</v-sheet>
            <div class="flex">
              <v-sheet class="mr-4" width="80px">
                <v-text-field variant="outlined" label="min" class="w-100" v-model="minEform">
                </v-text-field>
              </v-sheet>
              <v-sheet class="mr-8" width="80px">
                <v-text-field variant="outlined" label="max" class="w-100" v-model="maxEform">
                </v-text-field>
              </v-sheet>
            </div>
            <v-sheet class="my-2" width="">Total magnetic moment (/atom)</v-sheet>
            <div class="flex">
              <v-sheet class="mr-4" width="80px">
                <v-text-field variant="outlined" label="min" class="w-100" v-model="minMagt">
                </v-text-field>
              </v-sheet>
              <v-sheet class="mr-8" width="80px">
                <v-text-field variant="outlined" label="max" class="w-100" v-model="maxMagt">
                </v-text-field>
              </v-sheet>
            </div>
            <v-sheet class="my-2" width="">Density of states at Fermi level (both spin/eV/atom)</v-sheet>
            <div class="flex">
              <v-sheet class="mr-4" width="80px">
                <v-text-field variant="outlined" label="min" class="w-100" v-model="minDosf">
                </v-text-field>
              </v-sheet>
              <v-sheet class="mr-8" width="80px">
                <v-text-field variant="outlined" label="max" class="w-100" v-model="maxDosf">
                </v-text-field>
              </v-sheet>
            </div>
          </v-container>

        </v-form>
      </v-card>
    </v-container>

    <v-container>
      <div class="">
        <table style="text-decoration-line: none;">
          <tbody style="text-decoration-line: none;">
            <tr>
              <th colspan="">&nbsp;</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
              <th>16</th>
              <th>17</th>
              <th>18</th>
            </tr>
            <tr>
              <th>1</th>
              <td>1<br>H</td>
              <th colspan="16">&nbsp;</th>
              <td>2<br>He</td>
            </tr>
            <tr>
              <th>2</th>
              <td>3<br>Li</td>
              <td>4<br>Be</td>
              <td colspan="10">&nbsp;</td>
              <td>5<br>B</td>
              <td>6<br>C</td>
              <td>7<br>N</td>
              <td>8<br>O</td>
              <td>9<br>F</td>
              <td>10<br>Ne</td>
            </tr>
            <tr>
              <th>3</th>
              <td>11<br>Na</td>
              <td>12<br>Mg</td>
              <th colspan="10">&nbsp;</th>
              <td>13<br>Al</td>
              <td>14<br>Si</td>
              <td>15<br>P</td>
              <td>16<br>S</td>
              <td>17<br>Cl</td>
              <td>18<br>Ar</td>
            </tr>
            <tr>
              <th>4</th>
              <td>19<br>K</td>
              <td>20<br>Ca</td>
              <td>21<br>Sc</td>
              <td>22<br>Ti</td>
              <td>23<br>V</td>
              <td>24<br>Cr</td>
              <td>25<br>Mn</td>
              <td>26<br>Fe</td>
              <td>27<br>Co</td>
              <td>28<br>Ni</td>
              <td>29<br>Cu</td>
              <td>30<br>Zn</td>
              <td>31<br>Ga</td>
              <td>32<br>Ge</td>
              <td>33<br>As</td>
              <td>34<br>Se</td>
              <td>35<br>Br</td>
              <td>36<br>Kr</td>
            </tr>
            <tr>
              <th>5</th>
              <td>37<br>Rb</td>
              <td>38<br>Sr</td>
              <td>39<br>Y</td>
              <td>40<br>Zr</td>
              <td>41<br>Nb</td>
              <td>42<br>Mo</td>
              <td>43<br>Tc</td>
              <td>44<br>Ru</td>
              <td>45<br>Rh</td>
              <td>46<br>Pd</td>
              <td>47<br>Ag</td>
              <td>48<br>Cd</td>
              <td>49<br>In</td>
              <td>50<br>Sn</td>
              <td>51<br>Sb</td>
              <td>52<br>Te</td>
              <td>53<br>I</td>
              <td>54<br>Xe</td>
            </tr>
            <tr>
              <th>6</th>
              <td>55<br>Cs</td>
              <td>56<br>Ba</td>
              <td>*1</td>
              <td>72<br>Hf</td>
              <td>73<br>Ta</td>
              <td>74<br>W</td>
              <td>75<br>Re</td>
              <td>76<br>Os</td>
              <td>77<br>Ir</td>
              <td>78<br>Pt</td>
              <td>79<br>Au</td>
              <td>80<br>Hg</td>
              <td>81<br>Tl</td>
              <td>82<br>Pb</td>
              <td>83<br>Bi</td>
              <td>84<br>Po</td>
              <td>85<br>At</td>
              <td>86<br>Rn</td>
            </tr>
            <tr>
              <th>7</th>
              <td>87<br>Fr</td>
              <td>88<br>Ra</td>
              <td>*2</td>
              <td>104<br>Rf</td>
              <td>105<br>Db</td>
              <td>106<br>Sg</td>
              <td>107<br>Bh</td>
              <td>108<br>Hs</td>
              <td>109<br>Mt</td>
              <td>110<br>Ds</td>
              <td>111<br>Rg</td>
              <td>112<br>Cn</td>
              <td>113<br>Nh</td>
              <td>114<br>Fl</td>
              <td>115<br>Mc</td>
              <td>116<br>Lv</td>
              <td>117<br>Ts</td>
              <td>118<br>Og</td>
            </tr>

            <tr>
              <td colspan="18">&nbsp;</td>
            </tr>
            <tr>
              <th colspan="4">*1 Lanthanoide</th>
              <td>57<br>La</td>
              <td>58<br>Ce</td>
              <td>59<br>Pr</td>
              <td>60<br>Nd</td>
              <td>61<br>Pm</td>
              <td>62<br>Sm</td>
              <td>63<br>Eu</td>
              <td>64<br>Gd</td>
              <td>65<br>Tb</td>
              <td>66<br>Dy</td>
              <td>67<br>Ho</td>
              <td>68<br>Er</td>
              <td>69<br>Tm</td>
              <td>70<br>Yb</td>
              <td>71<br>Lu</td>
            </tr>
            <tr>
              <th colspan="4">*2 Actinide</th>
              <td>89<br>Ac</td>
              <td>90<br>Th</td>
              <td>91<br>Pa</td>
              <td>92<br>U</td>
              <td>93<br>Np</td>
              <td>94<br>Pu</td>
              <td>95<br>Am</td>
              <td>96<br>Cm</td>
              <td>97<br>Bk</td>
              <td>98<br>Cf</td>
              <td>99<br>Es</td>
              <td>100<br>Fm</td>
              <td>101<br>Md</td>
              <td>102<br>No</td>
              <td>103<br>Lr</td>
            </tr>

          </tbody>
        </table>
      </div>
    </v-container>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Search',

  data: () => ({
    inputText: '',
    minEform: '',
    maxEform: '',
    minMagt: '',
    maxMagt: '',
    minDosf: '',
    maxDosf: '',
    isOpenUsage: 'true',
    usageText: '',
  }),

  methods: {
    clickSearch() {
      if ((this.inputText.includes("#")) && (this.inputText.includes("?"))) {
        this.checkInputText();
      } else {
        axios.get("http://163.220.177.102:3000/materials", {
          params: {
            keyword: this.inputText,
            minE: this.minEform,
            maxE: this.maxEform,
            minM: this.minMagt,
            maxM: this.maxMagt,
            minD: this.minDosf,
            maxD: this.maxDosf,
          }
        })
          .then(response => {
            var data = JSON.stringify(response.data);
            console.log(data);
            this.$router.push({ name: 'Result', query: { data: data, keyword: this.inputText, minE: this.minEform, maxE: this.maxEform, minM: this.minMagt, maxM: this.maxMagt, minD: this.minDosf, maxD: this.maxDosf } });
          })
          .catch(error => {
            console.log(error);
          })
        // window.open('/result', '_blank');
      }
    },
    checkInputText() {
      this.inputText = '';
      this.$router.push('/Search');
      console.log('checkInputText called!')
      // window.open('/result', '_blank');
    },
  }
}
</script>
<style>
table {
  border-collapse: collapse;
}

.flex {
  display: flex;
  align-items: flex-start;
}

.search-area {
  position: relative;
}

.usage-area {
  position: absolute;
  right: 8px;
  top: 8px;
  padding: 8px;
  padding-top: 48px;
  font-size: smaller;
}

.periodic-table {
  margin: 8px auto;
  /* width: 100%;
    overflow-x: auto; */
}

td,
th {
  text-align: center;
}

a {
  text-decoration-line: none;
}
</style>
