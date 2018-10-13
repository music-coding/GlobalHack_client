import { store } from 'react-easy-state'

const Store = {

  name: "",
  city:"",
  language:"",
  isNeedHelp: "",
  url: "",
  selfLink:"",
  urlList: []

}

window.store = Store

export default store(Store)
