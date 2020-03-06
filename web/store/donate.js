import { client } from '@/api/machine'
import { Message } from 'iview'

export default {
  state: {
    donateList: {},
    summary: {
      TotalIncome: 0,
      TotalOutcome: 0,
      TotalLeft: 0,
      CountOfIncome: 0,
      CountOfOutcome: 0,
      ProvinceInfos: [],
    },
    isLoading: false
  },
  mutations: {
    setLoadingStatus (state, isLoading) {
      state.isLoading = isLoading
    },
    setDonateList (state, list) {
      state.donateList = list
    },
    setSummary (state, summary) {
      state.summary = summary;
    } 
  },
  actions: {
    async getDonateList ({ state, commit, dispatch }, payload) {
      commit('setLoadingStatus', true)
      try {
        client.request(
          'RpcStub.ListCharityIncome',
          [payload],
          function (err, error, result) {
            if (err) throw err
            // console.log('ListCharityIncome',  result)
            commit('setLoadingStatus', false)
            commit('setDonateList', result)
          }
        )
      } catch (error) {
        console.log(error)
      }
    },

    async getSummary ({ state, commit, dispatch }, payload) {
      commit('setLoadingStatus', true)
      try {
        client.request(
          'RpcStub.ListCharitySummary',
          [{} ],
          function (err, error, result) {
            if (err) throw err
            // console.log('ListCharitySummary',result)
            commit('setLoadingStatus', false)
            commit('setSummary', result)
          }
        )
      } catch (error) {
        console.log(error)
      }
    },

    async addDonate ({ state, commit, dispatch }, payload) {
      commit('setLoadingStatus', true)
      console.log(payload)
      try {
        client.request(
          'RpcStub.AddCharityIncome',
          [payload],
          function (err, error, result) {
            if (err) throw err
            // console.log(err, error, result)
            commit('setLoadingStatus', false)
            Message.success({
              'content': '添加成功！',
              onClose: () => {
                // router.push('/donates/list')
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
