<template>
  <b-row>
    <b-col>
      <h1>{{ $t('title') }}</h1>
      <h2>{{ $t('personal_info') }}</h2>
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
          id="input-group-2"
          label="mobiel nummer"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.gsm"
            type="tel"
            required
            placeholder="mobiel nummer"
          />
        </b-form-group>
        <b-form-group
          id="input-group-3"
          label="Email adres"
          label-for="input-3"
          description="We delen dit met niemand"
        >
          <b-form-input
            id="input-3"
            v-model="form.email"
            type="email"
            required
            placeholder="email adres"
          />
        </b-form-group>
        <b-form-group
          id="input-group-4"
          label="Geboortemaand"
          label-for="input-4"
        >
          <YearMonth
            id="input-4"
            v-model="form.birthdate"
            :event-date="startDateEvent"
          />
        </b-form-group>
        <b-form-group
          id="input-group-5"
          label="Voornaam:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="form.name"
            required
            placeholder="Geef je voornaam in"
          />
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Achternaam:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="form.name"
            required
            placeholder="Geef je achternaam in"
          />
        </b-form-group>

        <b-form-group
          id="input-group-7"
          label="Geslacht:"
          label-for="input-7"
        >
          <b-form-select
            id="input-7"
            v-model="form.sex"
            :options="geslacht"
            required
          />
        </b-form-group>

        <b-form-group
          id="input-group-8"
          label="T-shirt type:"
          label-for="input-8"
        >
          <b-form-select
            id="input-8"
            v-model="form.shirttype"
            :options="shirttype"
            required
          />
        </b-form-group>

        <b-form-group
          id="input-group-9"
          label="T-shirt maat:"
          label-for="input-9"
        >
          <b-form-select
            id="input-9"
            v-model="form.size"
            :options="shirtsize"
            required
          />
        </b-form-group>

        <b-form-group
          id="input-group-10"
          label="Van waar ken je ons:"
          label-for="input-10"
        >
          <b-form-input
            id="input-10"
            v-model="form.via"
            required
            placeholder="Geef je dojo, school, ..."
          />
        </b-form-group>

        <div v-if="!isGuardianNeeded">
          <b-form-group
            id="input-group-11"
            label="Zijn er aandoeningen of allergieën waar we rekening mee moeten houden:"
            label-for="input-11"
          >
            <b-form-textarea
              id="input-11"
              v-model="form.medical"
            />
          </b-form-group>

          <b-form-group
            id="input-group-12"
            label="Algemene vragen:"
          >
            <b-form-checkbox-group
              id="checkboxes-12"
              v-model="form.questions"
              :options="general_questions"
            />
          </b-form-group>
        </div>
        <div v-else>
          <h2>Informatie van je ouders/voogd</h2>
          <b-form-group
            id="input-group-13"
            label="Email adres ouders/voogd"
            label-for="input-13"
            description="We delen dit met niemand"
            required
          >
            <b-form-input
              id="input-13"
              v-model="form.email_guardian"
              type="email"
              required
              placeholder="email adres"
            />
          </b-form-group>
          <b-form-group
            id="input-group-14"
            label="mobiel nummer ouders/voogd"
            label-for="input-14"
            description="Waar kunnen we jou bereiken in geval van nood"
            required
          >
            <b-form-input
              id="input-14"
              v-model="form.gsm_guardian"
              type="tel"
              required
              placeholder="mobiel nummer"
            />
          </b-form-group>

          <b-form-group
            id="input-group-15"
            label="Zijn er aandoeningen of allergieën waar we rekening mee moeten houden:"
            label-for="input-15"
          >
            <b-form-textarea
              id="input-15"
              v-model="form.medical"
            />
          </b-form-group>

          <b-form-group
            id="input-group-16"
            label="Is er nog extra informatie waar we rekening mee moeten houden:"
            label-for="input-16"
          >
            <b-form-textarea
              id="input-16"
              v-model="form.extra"
            />
          </b-form-group>

          <b-form-group
            id="input-group-17"
            label="Algemene vragen"
          >
            <b-form-checkbox-group
              id="checkboxes-17"
              v-model="form.questions"
              :options="general_questions"
            />
          </b-form-group>
        </div>
        <h1>Project</h1>
        <b-form-group>
          <b-form-radio v-model="own_project" name="own_project" value="own">
            Ik heb mijn eigen project
          </b-form-radio>
          <b-form-radio v-model="own_project" name="own_project" value="other">
            Ik werk mee aan een bestaand project
          </b-form-radio>
        </b-form-group>
        <div v-if="isOwnProject">
          <b-form-group
            id="input-group-18"
            label="Taal:"
            label-for="select-18"
            description="In welke taal wil je het project uitleggen aan de jury"
          >
            <b-form-select
              id="select-18"
              v-model="form.project_lang"
              :options="languages"
            />
          </b-form-group>
          <b-form-group
            id="input-group-19"
            label="Projecttype:"
            label-for="input-19"
            description="Selecteer wat je project allemaal doet, nodig heeft"
          >
            <b-form-checkbox-group
              id="checkboxes-19"
              v-model="form.project_type"
              :options="project_types"
            />
          </b-form-group>
          <b-form-group
            id="input-group-20"
            label="Projectnaam:"
            label-for="input-20"
          >
            <b-form-input
              id="input-20"
              v-model="form.project_name"
              required
              placeholder="Projectnaam"
            />
          </b-form-group>
          <b-form-group
            id="input-group-21"
            label="Omschrijving:"
            label-for="input-21"
          >
            <b-form-textarea
              id="input-21"
              v-model="form.project_descr"
            />
          </b-form-group>
        </div>
        <div v-else>
          <b-form-group
            id="input-group-22"
            label="Projectcode:"
            label-for="input-22"
            description="Geef de code in die je van de projecteigenaar gekregen hebt"
          >
            <b-form-input
              id="input-22"
              v-model="form.project_code"
              required
              placeholder="Code"
            />
          </b-form-group>
        </div>
        <b-form-group
          description="Je moet akkoord gaan met volgende vragen om je te kunnen inschrijven"
        >
          <b-form-checkbox-group
            id="checkboxes-23"
            v-model="form.mandatory_approvals"
            :options="mandatory_approvals"
          />
        </b-form-group>
        <b-form-group>
          <b-button
            type="submit"
            variant="info"
            class="button-hero"
          >
            <font-awesome-icon :icon="['fas', 'paper-plane']" /> Ik schrijf me in
          </b-button>
          <b-button
            type="reset"
            variant="danger"
            class="button-hero"
          >
            <font-awesome-icon :icon="['fas', 'trash-alt']" /> Verwijder alles
          </b-button>
        </b-form-group>
      </b-form>
    </b-col>
  </b-row>
</template>
<script>
import addYears from 'date-fns/add_years'
import differenceInCalendarYears from 'date-fns/difference_in_calendar_years'
import YearMonth from '~/components/YearMonth.vue'

export default {
  components: {
    YearMonth
  },
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
        { text: 'Ik ben een', value: null },
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
      ],
      general_questions: [
        { value: 'photo', text: 'Ik ben akkoord dat er fotos genomen worden' },
        { value: 'contact', text: 'Je mag me contacteren voor de volgende events' }
      ],
      mandatory_approvals: [
        { value: 'ok', text: 'Ik ben akkoord met de algemene voorwaarden' }
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
<i18n>
{
  "en": {
    "title": "Registration",
    "personal_info": "Personal information"
  },
  "nl": {
    "title": "Registratie",
    "personal_info": "Persoonlijke informatie"
  }
}
</i18n>
