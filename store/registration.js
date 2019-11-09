const originalState = () => {
  return {
    postalcode: null,
    email: null,
    firstname: null,
    lastname: null,
    sex: null,
    general_questions: ['photo', 'contact'],
    mandatory_approvals: [],
    birthmonth: null,
    size: null,
    type: null,
    via: null,
    medical: null,
    extra: null,
    project_name: null,
    project_descr: null,
    project_type: [],
    project_code: null,
    project_lang: 'nl',
    gsm: null,
    gsm_guardian: null,
    email_guardian: null
  }
}

export const state = originalState

export const mutations = {
  email_guardian (state, emailGuardian) {
    state.email_guardian = emailGuardian
  },
  gsm (state, gsm) {
    state.gsm = gsm
  },
  gsm_guardian (state, gsmGuardian) {
    state.gsm_guardian = gsmGuardian
  },
  postalcode (state, postalcode) {
    state.postalcode = postalcode
  },
  email (state, email) {
    state.email = email
  },
  firstname (state, firstname) {
    state.firstname = firstname
  },
  lastname (state, lastname) {
    state.lastname = lastname
  },
  sex (state, sex) {
    state.sex = sex
  },
  general_questions (state, generalQuestions) {
    state.general_questions = generalQuestions
  },
  mandatory_approvals (state, mandatoryApprovals) {
    state.mandatory_approvals = mandatoryApprovals
  },
  birthmonth (state, birthmonth) {
    state.birthmonth = birthmonth
  },
  size (state, size) {
    state.size = size
  },
  type (state, type) {
    state.type = type
  },
  via (state, via) {
    state.via = via
  },
  medical (state, medical) {
    state.medical = medical
  },
  extra (state, extra) {
    state.extra = extra
  },
  project_name (state, projectName) {
    state.project_name = projectName
  },
  project_descr (state, projectDescr) {
    state.project_descr = projectDescr
  },
  project_type (state, projectType) {
    state.project_type = projectType
  },
  project_code (state, projectCode) {
    state.project_code = projectCode
  },
  project_lang (state, projectLang) {
    state.project_lang = projectLang
  }
}

export const actions = {
  email_guardian ({ commit }, emailGuardian) {
    commit('email_guardian', emailGuardian)
  },
  gsm ({ commit }, gsm) {
    commit('gsm', gsm)
  },
  gsm_guardian ({ commit }, gsmGuardian) {
    commit('gsm_guardian', gsmGuardian)
  },
  postalcode ({ commit }, postalcode) {
    commit('postalcode', postalcode)
  },
  email ({ commit }, email) {
    commit('email', email)
  },
  firstname ({ commit }, firstname) {
    commit('firstname', firstname)
  },
  lastname ({ commit }, lastname) {
    commit('lastname', lastname)
  },
  sex ({ commit }, sex) {
    commit('sex', sex)
  },
  general_questions ({ commit }, generalQuestions) {
    commit('general_questions', generalQuestions)
  },
  mandatory_approvals ({ commit }, mandatoryApprovals) {
    commit('mandatory_approvals', mandatoryApprovals)
  },
  birthmonth ({ commit }, birthmonth) {
    commit('birthmonth', birthmonth)
  },
  size ({ commit }, size) {
    commit('size', size)
  },
  type ({ commit }, type) {
    commit('type', type)
  },
  via ({ commit }, via) {
    commit('via', via)
  },
  medical ({ commit }, medical) {
    commit('medical', medical)
  },
  extra ({ commit }, extra) {
    commit('extra', extra)
  },
  project_name ({ commit }, projectName) {
    commit('project_name', projectName)
  },
  project_descr ({ commit }, projectDescr) {
    commit('project_descr', projectDescr)
  },
  project_type ({ commit }, projectType) {
    commit('project_type', projectType)
  },
  project_code ({ commit }, projectCode) {
    commit('project_code', projectCode)
  },
  project_lang ({ commit }, projectLang) {
    commit('project_lang', projectLang)
  },
  // clear registration form
  clear_form ({ commit }) {
    const origState = originalState()
    Object.keys(origState).forEach(function (key) {
      commit(key, origState[key])
    })
  }
}
