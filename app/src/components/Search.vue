<template>
  <div>
    <v-container>
      <v-card class="">
        <v-form action="#" method="POST">
          <v-container class="flex search-area">
            <v-sheet class="w-25 mr-8">
              <v-text-field variant="outlined" label="検索入力" class="w-100" v-model="inputText" clearable>
              </v-text-field>
            </v-sheet>
            <v-sheet class="mr-8 mt-2">
              <v-btn @click="clickSearch">
                検索
              </v-btn>
            </v-sheet>
            <v-card class="usage-area" v-if="isOpenUsage">
              (a) "H2O1" indicates two H atoms and one O atom composition. <br>
              <span class="ml-5">This also finds systems such as 10 H atoms and 5 O atoms in a unit cell.</span><br>
              <!-- (a)「H2O1」：組成比が水素2、酸素1のものを示す。<br>
            　　単位胞あたりに「水素原子10、酸素原子5」などのものを含む。<br> -->
              (b) "Mg#O#si#" finds Mg1O3Si1, Mg2O4Si2, etc. <br>
              <span class="ml-5">"#" means an arbitrary number.</span><br>
              <!-- (b)	「Mg#O#Si#」：「#」は任意の数字が入る事を示す。<br>
            　　この場合は「Mg1O3Si1」「Mg2O4Si2」等の組成を含む。<br> -->
              (c) "?1?1O3" finds Ba1Ti1O3, Ba1Bi1O3, Mg1O3Si1, etc. <br>
              <span class="ml-5">"?" means an arbitrary element.</span><br>
              <!-- (c)	「?1?1O3」：「?」は任意の元素記号が入ることを表す。<br>
            　　この場合は「Ba1Ti1O3」「Ba1Bi1O3」等の組成を含む。<br> -->
              (d) "*Fe#O#*" finds Fe1O1, "La1Fe1As1O1, etc. <br>
              <span class="ml-5">"*" means an arbitrary string.</span><br>
              <!-- (d)	「*Fe#O#*」：「*」は任意の文字列が入ることを示す。<br>
            　　この場合は「Fe1O1」「La1Fe1As1O1」等の組成を含む。 -->
            </v-card>
            <v-chip class="ml-auto" prepend-icon="mdi-help-circle" @click="isOpenUsage = !isOpenUsage">Usage
              Guide</v-chip>
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
        <table class="periodic-table" style="text-decoration-line: none;">
          <tbody style="text-decoration-line: none;">
            <tr>
              <th colspan="">&nbsp;
              </th>
              <th scope="col" class="header-group">&nbsp;<br>1
              </th>
              <th scope="col" class="header-group">&nbsp;<br>2
              </th>
              <th scope="col" class="header-group">&nbsp;<br>3
              </th>
              <th scope="col" class="header-group">&nbsp;<br>4
              </th>
              <th scope="col" class="header-group">&nbsp;<br>5
              </th>
              <th scope="col" class="header-group">&nbsp;<br>6
              </th>
              <th scope="col" class="header-group">&nbsp;<br>7
              </th>
              <th scope="col" class="header-group">&nbsp;<br>8
              </th>
              <th scope="col" class="header-group">&nbsp;<br>9
              </th>
              <th scope="col" class="header-group">&nbsp;<br>10
              </th>
              <th scope="col" class="header-group">&nbsp;<br>11
              </th>
              <th scope="col" class="header-group">&nbsp;<br>12
              </th>
              <th scope="col" class="header-group">&nbsp;<br>13
              </th>
              <th scope="col" class="header-group">&nbsp;<br>14
              </th>
              <th scope="col" class="header-group">&nbsp;<br>15
              </th>
              <th scope="col" class="header-group">&nbsp;<br>16
              </th>
              <th scope="col" class="header-group">&nbsp;<br>17
              </th>
              <th scope="col" class="header-group">&nbsp;<br>18
              </th>
            </tr>
            <tr>
              <th scope="row" class="header-group">&nbsp;<br>1
              </th>
              <td class="state-gas_aNT trend-nonmetal">1<br><a title="水素"><b>H</b></a>
              </td>
              <th colspan="16">&nbsp;
              </th>
              <td class="state-gas_aNT trend-nonmetal group-rare_gas">2<br><a title="ヘリウム"><b>He</b></a>
              </td>
            </tr>
            <tr>
              <th scope="row" class="header-group">&nbsp;<br>2
              </th>
              <td class="state-solid_aNT trend-metal trend-alkali_metal">3<br><a title="リチウム"><b>Li</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-alkaline_earth_metal">4<br><a
                  title="ベリリウム"><b>Be</b></a>
              </td>
              <td colspan="10">&nbsp;
              </td>
              <td class="state-solid_aNT trend-metalloid">5<br><a title="ホウ素"><b>B</b></a>
              </td>
              <td class="state-solid_aNT trend-nonmetal">6<br><a title="炭素"><b>C</b></a>
              </td>
              <td class="state-gas_aNT trend-nonmetal">7<br><a title="窒素"><b>N</b></a>
              </td>
              <td class="state-gas_aNT trend-nonmetal">8<br><a title="酸素"><b>O</b></a>
              </td>
              <td class="state-gas_aNT trend-nonmetal group-halogen">9<br><a title="フッ素"><b>F</b></a>
              </td>
              <td class="state-gas_aNT trend-nonmetal group-rare_gas">10<br><a title="ネオン"><b>Ne</b></a>
              </td>
            </tr>
            <tr>
              <th scope="row" class="header-group">&nbsp;<br>3
              </th>
              <td class="state-solid_aNT trend-metal trend-alkali_metal">11<br><a title="ナトリウム"><b>Na</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-alkaline_earth_metal">12<br><a
                  title="マグネシウム"><b>Mg</b></a>
              </td>
              <th colspan="10">&nbsp;
              </th>
              <td class="state-solid_aNT trend-metal trend-base_metal">13<br><a title="アルミニウム"><b>Al</b></a>
              </td>
              <td class="state-solid_aNT trend-metalloid">14<br><a title="ケイ素"><b>Si</b></a>
              </td>
              <td class="state-liquid_aRT trend-nonmetal">15<br><a title="リン"><b>P</b></a>
              </td>
              <td class="state-solid_aNT trend-nonmetal">16<br><a title="硫黄"><b>S</b></a>
              </td>
              <td class="state-gas_aNT trend-nonmetal group-halogen">17<br><a title="塩素"><b>Cl</b></a>
              </td>
              <td class="state-gas_aNT trend-nonmetal group-rare_gas">18<br><a title="アルゴン"><b>Ar</b></a>
              </td>
            </tr>
            <tr>
              <th scope="row" class="header-group">&nbsp;<br>4
              </th>
              <td class="state-solid_aNT trend-metal trend-alkali_metal">19<br><a title="カリウム"><b>K</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-alkaline_earth_metal">20<br><a
                  title="カルシウム"><b>Ca</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">21<br><a
                  title="スカンジウム"><b>Sc</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">22<br><a title="チタン"><b>Ti</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">23<br><a title="バナジウム"><b>V</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">24<br><a title="クロム"><b>Cr</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">25<br><a title="マンガン"><b>Mn</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">26<br><a title="鉄"><b>Fe</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">27<br><a title="コバルト"><b>Co</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">28<br><a title="ニッケル"><b>Ni</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">29<br><a title="銅"><b>Cu</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">30<br><a title="亜鉛"><b>Zn</b></a>
              </td>
              <td class="state-liquid_aRT trend-metal trend-base_metal">31<br><a title="ガリウム"><b>Ga</b></a>
              </td>
              <td class="state-solid_aNT trend-metalloid trend-base_metal">32<br><a title="ゲルマニウム"><b>Ge</b></a>
              </td>
              <td class="state-solid_aNT trend-metalloid">33<br><a title="ヒ素"><b>As</b></a>
              </td>
              <td class="state-solid_aNT trend-nonmetal">34<br><a title="セレン"><b>Se</b></a>
              </td>
              <td class="state-liquid_aNT trend-nonmetal group-halogen">35<br><a title="臭素"><b>Br</b></a>
              </td>
              <td class="state-gas_aNT trend-nonmetal group-rare_gas">36<br><a title="クリプトン"><b>Kr</b></a>
              </td>
            </tr>
            <tr>
              <th scope="row" class="header-group">&nbsp;<br>5
              </th>
              <td class="state-liquid_aRT trend-metal trend-alkali_metal">37<br><a title="ルビジウム"><b>Rb</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-alkaline_earth_metal">38<br><a
                  title="ストロンチウム"><b>Sr</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">39<br><a
                  title="イットリウム"><b>Y</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">40<br><a
                  title="ジルコニウム"><b>Zr</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">41<br><a title="ニオブ"><b>Nb</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">42<br><a
                  title="モリブデン"><b>Mo</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">43<br><a
                  title="テクネチウム"><b>Tc</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">44<br><a
                  title="ルテニウム"><b>Ru</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">45<br><a title="ロジウム"><b>Rh</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">46<br><a
                  title="パラジウム"><b>Pd</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">47<br><a title="銀"><b>Ag</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">48<br><a
                  title="カドミウム"><b>Cd</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-base_metal">49<br><a title="インジウム"><b>In</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-base_metal">50<br><a title="スズ"><b>Sn</b></a>
              </td>
              <td class="state-solid_aNT trend-metalloid trend-base_metal">51<br><a title="アンチモン"><b>Sb</b></a>
              </td>
              <td class="state-solid_aNT trend-metalloid">52<br><a title="テルル"><b>Te</b></a>
              </td>
              <td class="state-solid_aNT trend-nonmetal group-halogen">53<br><a title="ヨウ素"><b>I</b></a>
              </td>
              <td class="state-gas_aNT trend-nonmetal group-rare_gas">54<br><a title="キセノン"><b>Xe</b></a>
              </td>
            </tr>
            <tr>
              <th scope="row" class="header-group">&nbsp;<br>6
              </th>
              <td class="state-liquid_aRT trend-metal trend-alkali_metal">55<br><a title="セシウム"><b>Cs</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-alkaline_earth_metal">56<br><a
                  title="バリウム"><b>Ba</b></a>
              </td>
              <td class="state-dummy trend-metal trend-lanthanoid" style="font-size:smaller"><span
                  style="color:red">*1</span>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">72<br><a
                  title="ハフニウム"><b>Hf</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">73<br><a title="タンタル"><b>Ta</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">74<br><a
                  title="タングステン"><b>W</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">75<br><a title="レニウム"><b>Re</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">76<br><a
                  title="オスミウム"><b>Os</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">77<br><a
                  title="イリジウム"><b>Ir</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">78<br><a title="白金"><b>Pt</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-transition_metal">79<br><a title="金"><b>Au</b></a>
              </td>
              <td class="state-liquid_aNT trend-metal trend-transition_metal">80<br><a title="水銀"><b>Hg</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-base_metal">81<br><a title="タリウム"><b>Tl</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-base_metal">82<br><a title="鉛"><b>Pb</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-base_metal">83<br><a title="ビスマス"><b>Bi</b></a>
              </td>
              <td class="state-solid_aNT trend-metalloid trend-base_metal">84<br><a title="ポロニウム"><b>Po</b></a>
              </td>
              <td class="state-solid_aNT trend-metalloid group-halogen">85<br><a title="アスタチン"><b>At</b></a>
              </td>
              <td class="state-gas_aNT trend-nonmetal group-rare_gas">86<br><a title="ラドン"><b>Rn</b></a>
              </td>
            </tr>
            <tr>
              <th scope="row" class="header-group">&nbsp;<br>7
              </th>
              <td class="state-liquid_aNT trend-metal trend-alkali_metal">87<br><a title="フランシウム"><b>Fr</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-alkaline_earth_metal">88<br><a
                  title="ラジウム"><b>Ra</b></a>
              </td>
              <td class="state-dummy trend-metal trend-actinide" style="font-size:smaller"><span
                  style="color:red">*2</span>
              </td>
              <td class="state-unknown trend-metal trend-transition_metal type-synthetic">104<br><a
                  title="ラザホージウム"><b>Rf</b></a>
              </td>
              <td class="state-unknown trend-metal trend-transition_metal type-synthetic">105<br><a
                  title="ドブニウム"><b>Db</b></a>
              </td>
              <td class="state-unknown trend-metal trend-transition_metal type-synthetic">106<br><a
                  title="シーボーギウム"><b>Sg</b></a>
              </td>
              <td class="state-unknown trend-metal trend-transition_metal type-synthetic">107<br><a
                  title="ボーリウム"><b>Bh</b></a>
              </td>
              <td class="state-unknown trend-metal trend-transition_metal type-synthetic">108<br><a
                  title="ハッシウム"><b>Hs</b></a>
              </td>
              <td class="state-unknown trend-metal trend-transition_metal type-synthetic">109<br><a
                  title="マイトネリウム"><b>Mt</b></a>
              </td>
              <td class="state-unknown trend-metal trend-transition_metal type-synthetic">110<br><a
                  title="ダームスタチウム"><b>Ds</b></a>
              </td>
              <td class="state-unknown trend-metal trend-transition_metal type-synthetic">111<br><a
                  title="レントゲニウム"><b>Rg</b></a>
              </td>
              <td class="state-unknown trend-metal trend-transition_metal type-synthetic">112<br><a
                  title="コペルニシウム"><b>Cn</b></a>
              </td>
              <td class="state-unknown trend-unknown trend-base_metal type-synthetic">113<br><a
                  title="ニホニウム"><b>Nh</b></a>
              </td>
              <td class="state-unknown trend-metal trend-base_metal type-synthetic">114<br><a
                  title="フレロビウム"><b>Fl</b></a>
              </td>
              <td class="state-unknown trend-unknown trend-base_metal type-synthetic">115<br><a
                  title="モスコビウム"><b>Mc</b></a>
              </td>
              <td class="state-unknown trend-unknown trend-base_metal type-synthetic">116<br><a
                  title="リバモリウム"><b>Lv</b></a>
              </td>
              <td class="state-unknown trend-unknown trend-metalloid group-halogen type-synthetic">117<br><a
                  title="テネシン"><b>Ts</b></a>
              </td>
              <td class="state-unknown trend-unknown trend-nonmetal group-rare_gas type-synthetic">118<br><a
                  title="オガネソン"><b>Og</b></a>
              </td>
            </tr>

            <tr>
              <td colspan="18">&nbsp;
              </td>
            </tr>
            <tr>
              <th scope="row" class="header-group">&nbsp;<br>6
              </th>
              <td colspan="3" style="text-align:right; font-size:smaller"><span style="color:red">*1</span> <a
                  title="ランタノイド">ランタノイド</a>：
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">57<br><a title="ランタン"><b>La</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">58<br><a title="セリウム"><b>Ce</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">59<br><a title="プラセオジム"><b>Pr</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">60<br><a title="ネオジム"><b>Nd</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">61<br><a title="プロメチウム"><b>Pm</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">62<br><a title="サマリウム"><b>Sm</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">63<br><a title="ユウロピウム"><b>Eu</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">64<br><a title="ガドリニウム"><b>Gd</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">65<br><a title="テルビウム"><b>Tb</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">66<br><a title="ジスプロシウム"><b>Dy</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">67<br><a title="ホルミウム"><b>Ho</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">68<br><a title="エルビウム"><b>Er</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">69<br><a title="ツリウム"><b>Tm</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">70<br><a title="イッテルビウム"><b>Yb</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-lanthanoid">71<br><a title="ルテチウム"><b>Lu</b></a>
              </td>
            </tr>
            <tr>
              <th scope="row" class="header-group">&nbsp;<br>7
              </th>
              <td colspan="3" style="text-align:right; font-size:smaller"><span style="color:red">*2</span> <a
                  title="アクチノイド">アクチノイド</a>：
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide">89<br><a title="アクチニウム"><b>Ac</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide">90<br><a title="トリウム"><b>Th</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide">91<br><a title="プロトアクチニウム"><b>Pa</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide">92<br><a title="ウラン"><b>U</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide">93<br><a title="ネプツニウム"><b>Np</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide">94<br><a title="プルトニウム"><b>Pu</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide type-synthetic">95<br><a
                  title="アメリシウム"><b>Am</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide type-synthetic">96<br><a
                  title="キュリウム"><b>Cm</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide type-synthetic">97<br><a
                  title="バークリウム"><b>Bk</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide type-synthetic">98<br><a
                  title="カリホルニウム"><b>Cf</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide type-synthetic">99<br><a
                  title="アインスタイニウム"><b>Es</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide type-synthetic">100<br><a
                  title="フェルミウム"><b>Fm</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide type-synthetic">101<br><a
                  title="メンデレビウム"><b>Md</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide type-synthetic">102<br><a
                  title="ノーベリウム"><b>No</b></a>
              </td>
              <td class="state-solid_aNT trend-metal trend-actinide type-synthetic">103<br><a
                  title="ローレンシウム"><b>Lr</b></a>
              </td>
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
