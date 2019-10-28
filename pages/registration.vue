<template>
  <b-row>
    <b-col>
      <h1>Personlijke informatie</h1>
      <h2>Je eigen informatie</h2>
      <b-form v-if="show" @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Postcode"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.postalcode"
            type="number"
            required
            placeholder="postcode"
          />
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="mobiel nummer"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.gsm"
            type="tel"
            required
            placeholder="mobiel nummer"
          />
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Email adres"
          label-for="input-1"
          description="We delen dit met niemand"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="email adres"
          />
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Geboortedatum"
          label-for="input-1"
        >
          <b-form-input
            id="datepicker-trigger"
            v-model="form.birthdate"
            type="text"
            required
            placeholder="Geboortedatum"
          />
          <AirbnbStyleDatepicker
            :trigger-element-id="'datepicker-trigger'"
            :mode="'single'"
            show-month-year-select
            :date-one="form.birthdate"
            :years-for-select="90"
            :end-date="endDate"
            :months-to-show="1"
            @date-one-selected="val => { form.birthdate = val }"
          />
        </b-form-group>
        <b-form-group id="input-group-2" label="Voornaam:" label-for="input-3">
          <b-form-input id="input-3" v-model="form.name" required placeholder="Geef je voornaam in" />
        </b-form-group>

        <b-form-group id="input-group-3" label="Achternaam:" label-for="input-4">
          <b-form-input id="input-4" v-model="form.name" required placeholder="Geef je achternaam in" />
        </b-form-group>

        <b-form-group id="input-group-3" label="Geslacht:" label-for="input-3">
          <b-form-select id="input-3" v-model="form.sex" :options="geslacht" required />
        </b-form-group>

        <b-form-group id="input-group-3" label="T-shirt type:" label-for="input-3">
          <b-form-select id="input-3" v-model="form.shirttype" :options="shirttype" required />
        </b-form-group>

        <b-form-group id="input-group-3" label="T-shirt maat:" label-for="input-3">
          <b-form-select id="input-3" v-model="form.size" :options="shirtsize" required />
        </b-form-group>

        <b-form-group id="input-group-3" label="Van waar ken je ons:" label-for="input-3">
          <b-form-input id="input-4" v-model="form.via" placeholder="Geef je dojo, school, ..." />
        </b-form-group>

        <div v-show="!isGuardianNeeded">
          <b-form-group id="input-group-3" label="Zijn er aandoeningen of allergieën waar we rekening mee moeten houden:" label-for="input-3">
            <b-form-textarea id="input-4" v-model="form.medical" />
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox-group id="checkboxes-4" v-model="form.questions">
              <b-form-checkbox value="photo">
                Ik ben akkoord dat er fotos genomen worden
              </b-form-checkbox>
              <b-form-checkbox value="contact">
                Je mag me contacteren voor de volgende events
              </b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </div>
        <div v-show="isGuardianNeeded">
          <h2>Informatie van je ouders/voogd</h2>
          <b-form-group
            id="input-group-1"
            label="Email adres ouders/voogd"
            label-for="input-1"
            description="We delen dit met niemand"
          >
            <b-form-input
              id="input-1"
              v-model="form.email_guardian"
              type="email"
              required
              placeholder="email adres"
            />
          </b-form-group>
          <b-form-group
            id="input-group-1"
            label="mobiel nummer ouders/voogd"
            label-for="input-1"
            description="Waar kunnen we jou bereiken in geval van nood"
          >
            <b-form-input
              id="input-1"
              v-model="form.gsm_guardian"
              type="tel"
              required
              placeholder="mobiel nummer"
            />
          </b-form-group>

          <b-form-group id="input-group-3" label="Zijn er aandoeningen of allergieën waar we rekening mee moeten houden:" label-for="input-3">
            <b-form-textarea id="input-4" v-model="form.medical" />
          </b-form-group>

          <b-form-group id="input-group-3" label="Is er nog extra informatie waar we rekening mee moeten houden:" label-for="input-3">
            <b-form-textarea id="input-4" v-model="form.extra" />
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox-group id="checkboxes-4" v-model="form.questions">
              <b-form-checkbox value="photo">
                Ik ben akkoord dat er fotos genomen worden
              </b-form-checkbox>
              <b-form-checkbox value="contact">
                Je mag me contacteren voor de volgende events
              </b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </div>
        <h1>Project</h1>
        <b-form-group label="">
          <b-form-radio v-model="own_project" name="own_project" value="own">
            Ik heb mijn eigen project
          </b-form-radio>
          <b-form-radio v-model="own_project" name="own_project" value="other">
            Ik werk mee aan een bestaand project
          </b-form-radio>
        </b-form-group>
        <div v-if="isOwnProject">
          <b-form-group id="input-group-3" label="Taal:" label-for="input-4" description="In welke taal wil je het project uitleggen aan de jury">
            <b-form-select v-model="form.project_lang" :options="languages" />
          </b-form-group>
          <b-form-group id="input-group-3" label="Projecttype:" label-for="input-4" description="Selecteer wat je project allemaal doet, nodig heeft">
            <b-form-select v-model="form.project_type" :options="project_types" multiple />
          </b-form-group>
          <b-form-group id="input-group-3" label="Projectnaam:" label-for="input-4">
            <b-form-input id="input-4" v-model="form.project_name" required placeholder="Projectnaam" />
          </b-form-group>
          <b-form-group id="input-group-3" label="Omschrijving:" label-for="input-3">
            <b-form-textarea id="input-4" v-model="form.project_descr" />
          </b-form-group>
        </div>
        <div v-else>
          <b-form-group id="input-group-3" label="Projectcode:" label-for="input-4" description="Geef de code in die je van de projecteigenaar gekregen hebt">
            <b-form-input id="input-4" v-model="form.project_code" required placeholder="Code" />
          </b-form-group>
        </div>
        <b-form-group>
          <b-form-checkbox value="ok">
            Ik ben akkoord met de algemene voorwaarden
          </b-form-checkbox>
        </b-form-group>
        <b-form-group>
          <b-button type="submit" variant="primary">
            Ik schrijf me in
          </b-button>
          <b-button type="reset" variant="danger">
            Verwijder alles
          </b-button>
        </b-form-group>
      </b-form>
    </b-col>
  </b-row>
</template>
<script>
import addYears from 'date-fns/add_years'
import differenceInCalendarYears from 'date-fns/difference_in_calendar_years'

export default {
  data () {
    return {
      ok: false,
      own_project: 'own',
      startDateEvent: new Date(2020, 5, 16),
      form: {
        email: '',
        name: '',
        sex: null,
        questions: [],
        birthdate: null,
        size: null,
        shirttype: null,
        via: '',
        medical: '',
        extra: '',
        project_name: '',
        project_descr: '',
        project_type: [],
        project_code: null,
        project_lang: 'nl'
      },
      geslacht: [
        { text: 'Kies een', value: null },
        'Meisje',
        'Jongen',
        'X'
      ],
      shirttype: [
        { text: 'Kies een type', value: null },
        'Meisje',
        'Jongen'
      ],
      shirtsize: [
        { text: 'Kies een maat', value: null },
        'S',
        'M',
        'L',
        'XL',
        'XXL',
        '3XL'
      ],
      show: true,
      project_types: [
        { value: 'scratch', text: 'Scratch' },
        { value: 'hardware', text: 'Hardware' },
        { value: 'software', text: 'Software' },
        { value: 'wifi', text: 'Wifi' },
        { value: 'kabel', text: 'Kabelnetwerk' }
      ],
      languages: [
        { value: 'nl', text: 'Nederlands' },
        { value: 'fr', text: 'Frans' },
        { value: 'en', text: 'Engels' }
      ]
    }
  },
  computed: {
    endDate: (state) => {
      return addYears(state.startDateEvent, -5)
    },
    isGuardianNeeded: (state) => {
      return differenceInCalendarYears(state.startDateEvent, state.form.birthdate) < 16
    },
    isOwnProject: (state) => {
      return state.own_project === 'own'
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style></style>
