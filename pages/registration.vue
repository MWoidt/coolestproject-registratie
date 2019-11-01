<template>
  <b-row>
    <b-col>
      <h1>{{ $t('title') }}</h1>
      <h2>{{ $t('personal_info') }}</h2>
      <ValidationObserver ref="observer" v-slot="{ passes }">
        <b-form @submit.prevent="passes(onSubmit)" @reset="onReset">
          <ValidationProvider v-slot="{ valid, errors }" rules="required|digits:4" name="PostalCode">
            <b-form-group
              id="input-group-1"
              label="Postcode"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.postalcode"
                placeholder="postcode"
                type="number"
                :state="errors[0] ? false : (valid ? true : null)"
                aria-describedby="input-1-live-feedback"
              />
              <b-form-invalid-feedback id="input-1-live-feedback">
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider v-slot="{ valid, errors }" :rules="{ required: true, regex: /^((\+|00)32\s?|0)4(60|[789]\d)(\s?\d{2}){3}$/ }" name="MobileNumber">
            <b-form-group
              id="input-group-2"
              label="mobiel nummer (+32)"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.gsm"
                type="tel"
                placeholder="mobiel nummer"
                :state="errors[0] ? false : (valid ? true : null)"
                aria-describedby="input-2-live-feedback"
              />
              <b-form-invalid-feedback id="input-2-live-feedback">
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider v-slot="{ valid, errors }" rules="required|email" name="Email">
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
                placeholder="email adres"
                :state="errors[0] ? false : (valid ? true : null)"
                aria-describedby="input-3-live-feedback"
              />
              <b-form-invalid-feedback id="input-3-live-feedback">
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider v-slot="{ valid, errors }" :rules="{ required:true, between_dates: { min: beginYear, max: endYear } }" name="Birthmonth">
            <b-form-group
              id="input-group-4"
              label="Geboortemaand"
              label-for="input-4"
            >
              <YearMonth
                id="input-4"
                v-model="form.birthmonth"
                :event-date="startDateEvent"
                :state="errors[0] ? false : (valid ? true : null)"
                aria-describedby="input-3-live-feedback"
                :minAge="minAge"
                :maxAge="maxAge"
              />
              <b-form-invalid-feedback id="input-4-live-feedback">
                  {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider v-slot="{ valid, errors }" rules="required|alpha_spaces" name="FirstName">
            <b-form-group
              id="input-group-5"
              label="Voornaam:"
              label-for="input-5"
            >
              <b-form-input
                id="input-5"
                v-model="form.firstname"
                placeholder="Geef je voornaam in"
                :state="errors[0] ? false : (valid ? true : null)"
                aria-describedby="input-5-live-feedback"
              />
              <b-form-invalid-feedback id="input-5-live-feedback">
                  {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider v-slot="{ valid, errors }" rules="required|alpha_spaces" name="LastName">
            <b-form-group
              id="input-group-6"
              label="Achternaam:"
              label-for="input-6"
            >
              <b-form-input
                id="input-6"
                v-model="form.lastname"
                placeholder="Geef je achternaam in"
                :state="errors[0] ? false : (valid ? true : null)"
                aria-describedby="input-6-live-feedback"
              />
              <b-form-invalid-feedback id="input-6-live-feedback">
                  {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider v-slot="{ valid, errors }" rules="required" name="Sex">
            <b-form-group
              id="input-group-7"
              label="Geslacht:"
              label-for="input-7"
            >
              <b-form-select
                id="input-7"
                v-model="form.sex"
                :options="geslacht"
                :state="errors[0] ? false : (valid ? true : null)"
                aria-describedby="input-7-live-feedback"
              />
              <b-form-invalid-feedback id="input-7-live-feedback">
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider v-slot="{ valid, errors }" rules="required" name="T-shirtType">
            <b-form-group
              id="input-group-8"
              label="T-shirt type:"
              label-for="input-8"
            >
              <b-form-select
                id="input-8"
                v-model="form.shirttype"
                :options="shirttype"
                :state="errors[0] ? false : (valid ? true : null)"
                aria-describedby="input-8-live-feedback"
              />
              <b-form-invalid-feedback id="input-8-live-feedback">
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider v-slot="{ valid, errors }" rules="required" name="T-shirtSize">
            <b-form-group
              id="input-group-9"
              label="T-shirt maat:"
              label-for="input-9"
            >
              <b-form-select
                id="input-9"
                v-model="form.size"
                :options="shirtsize"
                :state="errors[0] ? false : (valid ? true : null)"
                aria-describedby="input-9-live-feedback"
              />
               <b-form-invalid-feedback id="input-9-live-feedback">
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider v-slot="{ valid, errors }" name="Via">
            <b-form-group
              id="input-group-10"
              label="Van waar ken je ons:"
              label-for="input-10"
            >
              <b-form-input
                id="input-10"
                v-model="form.via"
                placeholder="Geef je dojo, school, ..."
                :state="errors[0] ? false : (valid ? true : null)"
                aria-describedby="input-10-live-feedback"
              />
               <b-form-invalid-feedback id="input-10-live-feedback">
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <div v-if="!isGuardianNeeded">
            <ValidationProvider v-slot="{ valid, errors }" name="MedicalInfo">
              <b-form-group
                id="input-group-11"
                label="Zijn er aandoeningen of allergieën waar we rekening mee moeten houden:"
                label-for="input-11"
              >
                <b-form-textarea
                  id="input-11"
                  v-model="form.medical"
                  :state="errors[0] ? false : (valid ? true : null)"
                  aria-describedby="input-11-live-feedback"
                />
                <b-form-invalid-feedback id="input-11-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider v-slot="{ valid, errors }" name="GeneralQuestions">
              <b-form-group
                id="input-group-12"
                label="Algemene vragen:"
              >
                <b-form-checkbox-group
                  id="checkboxes-12"
                  v-model="form.questions"
                  :options="general_questions"
                  :state="errors[0] ? false : (valid ? true : null)"
                  aria-describedby="input-12-live-feedback"
                />
                <b-form-invalid-feedback id="input-12-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </div>
          <div v-else>
            <h2>Informatie van je ouders/voogd</h2>
            <ValidationProvider v-slot="{ valid, errors }" rules="required|email" name="Email">
              <b-form-group
                id="input-group-13"
                label="Email adres ouders/voogd"
                label-for="input-13"
                description="We delen dit met niemand"
              >
                <b-form-input
                  id="input-13"
                  v-model="form.email_guardian"
                  type="email"
                  placeholder="email adres"
                  :state="errors[0] ? false : (valid ? true : null)"
                  aria-describedby="input-13-live-feedback"
                />
                <b-form-invalid-feedback id="input-13-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider v-slot="{ valid, errors }" :rules="{ required: true, regex: /^((\+|00)32\s?|0)4(60|[789]\d)(\s?\d{2}){3}$/ }" name="Phone">
              <b-form-group
                id="input-group-14"
                label="mobiel nummer ouders/voogd"
                label-for="input-14"
                description="Waar kunnen we jou bereiken in geval van nood"
              >
                <b-form-input
                  id="input-14"
                  v-model="form.gsm_guardian"
                  type="tel"
                  placeholder="mobiel nummer"
                  :state="errors[0] ? false : (valid ? true : null)"
                  aria-describedby="input-14-live-feedback"
                />
              </b-form-group>
              <b-form-invalid-feedback id="input-14-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
            </ValidationProvider>
            <ValidationProvider v-slot="{ valid, errors }" name="Medical">
              <b-form-group
                id="input-group-15"
                label="Zijn er aandoeningen of allergieën waar we rekening mee moeten houden:"
                label-for="input-15"
              >
                <b-form-textarea
                  id="input-15"
                  v-model="form.medical"
                  :state="errors[0] ? false : (valid ? true : null)"
                  aria-describedby="input-15-live-feedback"
                />
                <b-form-invalid-feedback id="input-15-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider v-slot="{ valid, errors }" name="Extra">
              <b-form-group
                id="input-group-16"
                label="Is er nog extra informatie waar we rekening mee moeten houden:"
                label-for="input-16"
              >
                <b-form-textarea
                  id="input-16"
                  v-model="form.extra"
                  :state="errors[0] ? false : (valid ? true : null)"
                  aria-describedby="input-16-live-feedback"
                />
                <b-form-invalid-feedback id="input-16-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider v-slot="{ valid, errors }" name="GeneralQuestions">
              <b-form-group
                id="input-group-17"
                label="Algemene vragen"
              >
                <b-form-checkbox-group
                  id="checkboxes-17"
                  v-model="form.general_questions"
                  :options="general_questions"
                  :state="errors[0] ? false : (valid ? true : null)"
                  aria-describedby="input-17-live-feedback"
                />
                <b-form-invalid-feedback id="input-17-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
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
            <ValidationProvider v-slot="{ valid, errors }" rules="required" name="Language">
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
                  :state="errors[0] ? false : (valid ? true : null)"
                  aria-describedby="input-18-live-feedback"
                />
                <b-form-invalid-feedback id="input-18-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider v-slot="{ valid, errors }" rules="required" name="ProjectQuestions">
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
                  :state="errors[0] ? false : (valid ? true : null)"
                  aria-describedby="input-19-live-feedback"
                />
                <b-form-invalid-feedback id="input-19-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider v-slot="{ valid, errors }" rules="required|max_value:25" name="ProjectName">
              <b-form-group
                id="input-group-20"
                label="Projectnaam:"
                label-for="input-20"
              >
                <b-form-input
                  id="input-20"
                  v-model="form.project_name"
                  placeholder="Projectnaam"
                  :state="errors[0] ? false : (valid ? true : null)"
                  aria-describedby="input-20-live-feedback"
                />
                <b-form-invalid-feedback id="input-20-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider v-slot="{ valid, errors }" rules="required|max_value:200" name="ProjectDescription">
              <b-form-group
                id="input-group-21"
                label="Omschrijving:"
                label-for="input-21"
              >
                <b-form-textarea
                  id="input-21"
                  v-model="form.project_descr"
                  :state="errors[0] ? false : (valid ? true : null)"
                  aria-describedby="input-21-live-feedback"
                />
                <b-form-invalid-feedback id="input-21-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </div>
          <div v-else>
            <ValidationProvider v-slot="{ valid, errors }" :rules="{ required: true, regex: /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/ }" name="ProjectCode">
              <b-form-group
                id="input-group-22"
                label="Projectcode:"
                label-for="input-22"
                description="Geef de code in die je van de projecteigenaar gekregen hebt"
              >
                <b-form-input
                  id="input-22"
                  v-model="form.project_code"
                  placeholder="Code"
                  :state="errors[0] ? false : (valid ? true : null)"
                  aria-describedby="input-22-live-feedback"
                />
                <b-form-invalid-feedback id="input-22-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </div>
          <ValidationProvider v-slot="{ valid, errors }" :rules="{required: true, all_true: mandatory_approvals}" name="ProjectName">
            <b-form-group
              description="Je moet akkoord gaan met volgende vragen om je te kunnen inschrijven"
            >
              <b-form-checkbox-group
                id="checkboxes-23"
                v-model="form.mandatory_approvals"
                :options="mandatory_approvals"
                :state="errors[0] ? false : (valid ? true : null)"
                aria-describedby="input-23-live-feedback"
              />
              <b-form-invalid-feedback id="input-23-live-feedback">
                  {{ errors[0] }}
                </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
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
      </ValidationObserver>
    </b-col>
  </b-row>
</template>
<script>
import addYears from 'date-fns/add_years'
import differenceInCalendarYears from 'date-fns/difference_in_calendar_years'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import YearMonth from '~/components/YearMonth.vue'

export default {
  components: {
    YearMonth,
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      ok: false,
      own_project: 'own',
      startDateEvent: new Date(2020, 5, 16),
      maxAge: 90,
      minAge: 5,
      form: {
        postalcode: '',
        email: null,
        firstname: null,
        lastname: null,
        sex: null,
        general_questions: [],
        mandatory_approvals: [],
        birthmonth: null,
        size: null,
        shirttype: null,
        via: null,
        medical: null,
        extra: null,
        project_name: null,
        project_descr: null,
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
      return differenceInCalendarYears(state.startDateEvent, state.form.birthmonth) < 16
    },
    isOwnProject: (state) => {
      return state.own_project === 'own'
    },
    beginYear: (state) => {
      return addYears(state.startDateEvent, state.maxAge * -1)
    },
    endYear: (state) => {
      return addYears(state.startDateEvent, state.minAge * -1)
    }
  },
  methods: {
    onSubmit (evt) {
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      // Reset our form values
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.$refs.observer.reset()
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
