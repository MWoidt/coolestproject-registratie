import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['registration']
})
export const plugins = [vuexLocal.plugin]

export const state = () => ({
  startDateEvent: new Date(2020, 5, 16),
  maxAge: 90,
  minAge: 5,
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
  general_questions_list: [
    { value: 'photo', text: 'Ik ben akkoord dat er fotos genomen worden' },
    { value: 'contact', text: 'Je mag me contacteren voor de volgende events' }
  ],
  mandatory_approvals_list: [
    { value: 'ok', text: 'Ik ben akkoord met de algemene voorwaarden' }
  ]
})
