<template>
  <div>
    <b-form-select v-model="month" :options="month_list" @input="change" :state="state" />
    <b-form-select v-model="year" :options="year_list" @input="change" :state="state" />
  </div>
</template>
<script>
import addYears from 'date-fns/add_years'
import differenceInCalendarYears from 'date-fns/difference_in_calendar_years'

export default {
  props: {
    eventDate: Date,
    value: Date,
    maxAge: {
      type: Number,
      default: 90
    },
    minAge: {
      type: Number,
      default: 5
    },
    state: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      month_int: null,
      year_int: null,
      month_list: [
        { text: 'Kies een maand', value: null },
        { value: 0, text: 'Januari' },
        { value: 1, text: 'Februari' },
        { value: 2, text: 'Maart' },
        { value: 3, text: 'April' },
        { value: 4, text: 'Mei' },
        { value: 5, text: 'Juni' },
        { value: 6, text: 'Juli' },
        { value: 7, text: 'Augustus' },
        { value: 8, text: 'September' },
        { value: 9, text: 'Oktober' },
        { value: 10, text: 'November' },
        { value: 11, text: 'December' }
      ]
    }
  },
  computed: {
    year_list: (state) => {
      const beginYear = addYears(state.eventDate, state.maxAge * -1)
      const endYear = addYears(state.eventDate, state.minAge * -1)
      const listYears = new Array({ text: 'Kies een jaar', value: null })

      const noYears = differenceInCalendarYears(endYear, beginYear)
      listYears.push(...Array.from(Array(noYears), (value, key) => {
        return beginYear.getFullYear() + key
      }))

      return listYears
    },
    month: {
      get () {
        if (this.value) {
          return this.value.getMonth()
        } else {
          return null
        }
      },
      set (newValue) {
        this.month_int = newValue
      }
    },
    year: {
      get () {
        if (this.value) {
          return this.value.getFullYear()
        } else {
          return null
        }
      },
      set (newValue) {
        this.year_int = newValue
      }
    }
  },
  methods: {
    change (source) {
      this.$emit('input', new Date(this.year_int, this.month_int, 1))
    }
  }
}
</script>
