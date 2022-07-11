<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { mapActions, mapGetters } from 'vuex'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: false
        }
      }
      },
      title: {
          display: true,
          text: 'Oversikt'
        },
        
    }
  },

   computed: {
    ...mapGetters({
      formedUsersId: 'formedUsersId'
    }),

      chartData() {
        return {
        labels: this.formedUsersId.users,
        datasets: [
          {
            label: 'Completed = true',
            backgroundColor: 'blue',
            data: this.formedUsersId.completed
          }, 
          {
            label: 'Total',
            backgroundColor: '#f87979',
            data: this.formedUsersId.total
          }
        ]
        }
      },
  },

  mounted() {
    // console.log(this.$store.getters.formedUsersId)
  },
   methods: {
    ...mapActions({
      getUsers: 'getUsers',
    }),
  }
}
</script>
