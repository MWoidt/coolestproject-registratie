<template>
  <div>
    <b-form-select v-model="month" :options="month_list" :state="state" @input="change" />
    <b-form-select v-model="year" :options="year_list" :state="state" @input="change" />
  </div>
</template>
<script>
import addYears from 'date-fns/add_years'
import differenceInCalendarYears from 'date-fns/difference_in_calendar_years'

export default {
  props: {
    eventDate: Date,
    value: [String, Date],
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
      month_int: 0,
      year_int: 0,
      month_list: [
        { text: 'Kies een maand', value: null },
        { value: 0, text: 'januari' },
        { value: 1, text: 'februari' },
        { value: 2, text: 'maart' },
        { value: 3, text: 'april' },
        { value: 4, text: 'mei' },
        { value: 5, text: 'juni' },
        { value: 6, text: 'juli' },
        { value: 7, text: 'augustus' },
        { value: 8, text: 'september' },
        { value: 9, text: 'oktober' },
        { value: 10, text: 'november' },
        { value: 11, text: 'december' }
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
          if (this.value instanceof Date) {
            return this.value.getMonth()
          } else {
            return new Date(this.value).getMonth()
          }
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
          if (this.value instanceof String) {
            return this.value.getFullYear()
          } else {
            return new Date(this.value).getFullYear()
          }
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
