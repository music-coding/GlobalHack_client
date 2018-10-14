import { store } from 'react-easy-state'

const Store = {

  name: "",
  email:"",
  city:"",
  language:"",
  isNeedHelp: "",
  url: "",
  selfLink:"",
  needsList: [],
  userMatchList:[],
  usersAlreadyPushed:[],
  loading: true

}

window.store = Store

export default store(Store)
