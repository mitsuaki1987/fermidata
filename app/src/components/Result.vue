<template>
  <div>
    <!-- デバッグ用 -->
    <!-- <div>
      {{ exData }}
    </div> -->

    <br>
    <br>

    <!-- 検索時入力値表示欄 -->
    <table class="input-table">
    <tbody>
      <tr>
        <th>material</th>
        <th>eform</th>
        <th>magt</th>
        <th>dosf</th>
      </tr>
      <tr>
        <td rowspan="2">{{ keyword }}</td>
        <td>{{ maxEform }}</td>
        <td>{{ maxMagt }}</td>
        <td>{{ maxDosf }}</td>
      </tr>
      <tr>
        <!-- <td></td> -->
        <td>{{ minEform }}</td>
        <td>{{ minMagt }}</td>
        <td>{{ minDosf }}</td>
      </tr>
    </tbody>
    </table>
    <br>

    <!-- 検索結果表示欄 -->
    <v-data-table-virtual
      :headers="headers"
      :items="items"
      id="result-table"
      no-data-text="No results"
      density="compact"
      disable-pagination
      :items-per-page="100"
      height="500"
    >
      <template v-slot:item="{ item }">
        <tr :class="'tr-' + item.rowid" @click="this.rowExpand(item.rowid)">
          <td
            v-if="item.material"
            :rowspan="item.rowspan"
          >
            <a :href="'http://163.220.177.91/fermidata/html/' + item.material + '.html'" target="_blank">
              {{ item.material }}
            </a>
          </td>
          <td v-if="item.eform" :rowspan="item.rowspan">{{ item.eform }}</td>
          <td v-if="item.magt" :rowspan="item.rowspan">{{ item.magt }}</td>
          <td v-if="item.dosf" :rowspan="item.rowspan">{{ item.dosf }}</td>
          <td>{{ item.element }}</td>
          <td>{{ item.nat }}</td>
          <!-- <td>{{ item.element_data }}</td> -->
        </tr>
      </template>
    </v-data-table-virtual>

  </div>
</template>

<script>

export default {
  name: 'Result',

  data: () => ({
    keyword: '(検索キーワード)',
    minEform: '(min-eform)',
    maxEform: '(max-eform)',
    minMagt: '(min-magt)',
    maxMagt: '(max-magt)',
    minDosf: '(min-dosf)',
    maxDosf: '(max-dosf)',
    headers: [
      { title: 'material', sortable: false, align: 'center', key: 'material' },
      { title: 'eform', sortable: false, align: 'center', key: 'eform' },
      { title: 'magt', sortable: false, align: 'center', key: 'magt' },
      { title: 'dosf', sortable: false, align: 'center', key: 'dosf' },
      { title: 'element', sortable: false, align: 'center', key: 'element' },
      { title: 'nat', sortable: false, align: 'center', key: 'nat' },
      // { title: 'element_data', align: 'center', key: 'element_data' },
    ],
    items: [
    ],
    showRow: true,
    exData: '',
  }),

  mounted() {
    this.exData = JSON.parse(this.$route.query.data);
    if(this.$route.query.keyword) {this.keyword = this.$route.query.keyword;};
    if(this.$route.query.minE) {this.minEform = this.$route.query.minE;};
    if(this.$route.query.maxE) {this.maxEform = this.$route.query.maxE;};
    if(this.$route.query.minM) {this.minMagt = this.$route.query.minM;};
    if(this.$route.query.maxM) {this.maxMagt = this.$route.query.maxM;};
    if(this.$route.query.minD) {this.minDosf = this.$route.query.minD;};
    if(this.$route.query.maxD) {this.maxDosf = this.$route.query.maxD;};
    this.makeTableitems();
  },

  methods: {
    makeTableitems() {
      // 検索されたJSONデータ
      const jsonData = this.exData;
      const items = [];
      var rowId = 1;

      // JSONデータを整形してItems情報に追加
      jsonData.forEach(record => {
        console.log('length:' + Object.keys(record['types']).length);
        console.log('dosf:' + record.dosf_value);
        var rowCnt = Object.keys(record['types']).length;
        var item = {};
        for(var i = 0; i < rowCnt; i++){
          if(i == 0) {
            item = {
              rowid: rowId,
              rowspan: rowCnt,
              url: record.material_page_url,
              material: record.material_code,
              eform: record.eform_value.toString(),
              magt: record.magt_value.toString(),
              dosf: record.dosf_value.toString(),
              element: record.types[i].element_symbol_name,
              nat: record.types[i].nat_value,
              element_data: record.types[i].element_data
            };
          } else {
            item = {
              rowid: rowId,
              // material: '',
              // eform: '',
              // magt: '',
              // dosf: '',
              element: record.types[i].element_symbol_name,
              nat: record.types[i].nat_value,
              element_data: record.types[i].element_data
            };
          }
          items.push(item);
        }
        rowId++;
      });

      this.items = items;
    },
    rowExpand(rowNo) {
      console.log('rowExpand called!');
      if(this.showRow == true){
        const elm = document.getElementsByClassName('tr-' + rowNo);
        for(var i = elm.length - 1; i > 0; i--) {
          elm[i].classList.add('row-hide');
        }
        this.showRow = false;
      } else {
        const elm = document.getElementsByClassName('tr-' + rowNo);
        console.log(elm.length);
        for(var i = elm.length - 1; i > 0; i--) {
          elm[i].classList.remove('row-hide');
        }
        this.showRow = true;
      }
    },
  },
}
</script>
<style>
  #result-table {
    max-width: 95%;
    margin: 0 auto;
    :height: 600px;
    border: solid 1px #CCCCCC;
    position: relative;
  }
  #result-table table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    font-size: 1rem;
  }
  #result-table thead {
    position: sticky;
    top: 0;
    left: 0;
    background: none;
    border-top: none;
    border-bottom: none;
    z-index: 10;
  }
  #result-table thead::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #CCCCCC;
  }
  #result-table th, #result-table td {
    vertical-align: middle;
    border: 1px solid #CCCCCC;
  }
  #result-table th {
    background-color: #EEEEEE;
    z-index: 10;
    font-weight: bold;
  }
  #result-table td {
    width: fit-content;
  }

  .input-table {
    margin: 0 auto;
    margin-top: 100px;
    border: solid 1px #CCCCCC;
    border-collapse: collapse;
  }
  .input-table td {
    color: #CCCCCC;
  }
  .test-table {
    margin: 0 auto;
    margin-top: 100px;
    border: solid 1px #CCCCCC;
    border-collapse: collapse;
  }
  .test-table tr, th, td{
    border: solid 1px #CCCCCC;
    vertical-align:top;
  }
  th, td {
    padding: 0 8px;
  }
  .row-hide {
    visibility: collapse;
  }

</style>
