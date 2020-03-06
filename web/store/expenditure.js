import { client } from '@/api/machine'
import { Message } from 'iview'
// import router from '@/router'

export default {
  state: {
    expenditureList: {},
    isLoading: false
  },
  mutations: {
    setLoadingStatus (state, isLoading) {
      state.isLoading = isLoading
    },
    setExpenditureList (state, list) {
      state.expenditureList = list
    },
  },
  actions: {
    async getExpenditureList ({ state, commit, dispatch }, payload) {
      commit('setLoadingStatus', true)
      try {
        client.request(
          'RpcStub.ListCharityOutcome',
          [payload],
          function (err, error, result) {
            if (err) throw err
            console.log(result)
            commit('setLoadingStatus', false)
            commit('setExpenditureList', result)
          }
        )
      } catch (error) {
        console.log(error)
      }
    },

    async addExpenditure ({ state, commit, dispatch }, payload) {
      commit('setLoadingStatus', true)
      console.log(payload)
      try {
        client.request(
          'RpcStub.AddCharityOutcome',
          [payload],
          function (err, error, result) {
            if (err) throw err
            console.log(err, error, result)
            commit('setLoadingStatus', false)
            Message.success({
              'content': '添加成功！',
              onClose: () => {
                // router.push('/expenditures/list')
              }
            })
          }
        )
      } catch (error) {
        console.log(error)
      }
    },
  }
}
