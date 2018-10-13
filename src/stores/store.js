import { store } from 'react-easy-state'

const Store = {

  name: "",
  city:"",
  language:"",
  isNeedHelp: "",
  url: "",
  selfLink:"",
  needsList: []

}

window.store = Store

export default store(Store)
