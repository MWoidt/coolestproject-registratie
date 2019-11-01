import { extend } from 'vee-validate'
import { required, digits, regex, email, alpha_spaces as AlphaSpaces, oneOf, required_if as requiredIf } from 'vee-validate/dist/rules'
import isWithinRange from 'date-fns/is_within_range'
import addYears from 'date-fns/add_years'

// install the 'required' rule.
extend('required', {
  ...required
})

extend('digits', {
  ...digits
})

extend('regex', {
  ...regex
})

extend('email', {
  ...email
})

extend('alpha_spaces', {
  ...AlphaSpaces
})

extend('oneOf', {
  ...oneOf
})

extend('required_if', {
  ...requiredIf
})

extend('between_dates', {
  params: ['min', 'max'],
  validate (value, { min, max }) {
    return isWithinRange(value, addYears(min, -1), addYears(max, 1))
  }
})

extend('all_true', {
  params: ['values'],
  validate (value, { values }) {
    return (value + '') === (Array.isArray(values) ? values.map((item) => { return item.value }).join() : values.value)
  }
})
