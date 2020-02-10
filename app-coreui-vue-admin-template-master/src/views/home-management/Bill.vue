<template>
  <div>
    <b-card>
      <div slot="header">
        <b-row>
          <b-col cols="9">Bill : {{currentDate}}</b-col>
          <b-col cols="3" class="text-right">
            <b-add/>
          </b-col>
        </b-row>
      </div>
      <table class="table table-hover table-striped table-bordered" id="table">
        <thead>
        <tr>
          <th class="text-center">#</th>
          <th class="text-center">Month</th>
          <th class="text-center"><icon :icon="'free-code-camp'"/>&nbsp;Electric</th>
          <th class="text-right">Amount</th>
          <th class="text-center"><icon :icon="'eercast'"/>&nbsp;Water</th>
          <th class="text-right">Amount</th>
          <th class="text-center"><icon :icon="'feed'"/>&nbsp;Internet</th>
          <th class="text-right">Amount</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in items" :key="`fruit-${index}`">
          <td class="text-center">{{index+1}}</td>
          <td class="text-center">{{item[0]}}</td>
          <td class="text-center">
            <b-badge v-if="item[1]=='Y'" :variant="'success'"><icon :icon="'check'"/> paid</b-badge>
            <b-badge v-if="item[1]=='N'" :variant="'danger'"><icon :icon="'times'"/> Not yet paid</b-badge>
          </td>
          <td class="text-right">{{item[2]}}</td>
          <td class="text-center">
            <b-badge v-if="item[1]=='Y'" :variant="'success'"><icon :icon="'check'"/> paid</b-badge>
            <b-badge v-if="item[1]=='N'" :variant="'danger'"><icon :icon="'times'"/> Not yet paid</b-badge>
          </td>
          <td class="text-right">{{item[4]}}</td>
          <td class="text-center">
            <b-badge v-if="item[1]=='Y'" :variant="'success'"><icon :icon="'check'"/> paid</b-badge>
            <b-badge v-if="item[1]=='N'" :variant="'danger'"><icon :icon="'times'"/> Not yet paid</b-badge>
          </td>
          <td class="text-right">{{item[4]}}</td>
          <td class="text-center">
            <b-edit/>&nbsp;<b-delete/>
          </td>
        </tr>
        </tbody>
      </table>
    </b-card>
  </div>
</template>
<script>

  import BDelete from "../../common/components/buttons/b-delete";
  const $ = require('jquery');
  export default {
    name: 'Bill',
    components: {BDelete},
    data() {
      return {
        items: [
          ['02/2020', 'Y', '732', 'Y', '334'],
          ['03/2020', 'N', '532', 'Y', '334'],
          ['04/2020', 'Y', '1230', 'N', '334'],
          ['05/2020', 'Y', '732', 'Y', '334'],
          ['06/2020', 'Y', '732', 'Y', '230'],
          ['07/2020', 'N', '2230', 'Y', '334'],
          ['08/2020', 'N', '732', 'Y', '334'],
        ],
        currentDate: new Date()
      }
    },
    methods:{
      callDataTable(){
        $("#table").dataTable({
          searching: false,
          "scrollX": true
        })
      }
    },
    updated() {
      console.log("updated")
    },
    created() {
      this.callDataTable()
      console.log('created')
    }
  }
</script>
