import {bSave, bAdd, bEdit, bDelete, icon} from './common/components/index'

const buttons = [
  {name: 'b-save', component: bSave},
  {name: 'b-add', component: bAdd},
  {name: 'b-edit', component: bEdit},
  {name: 'b-delete', component: bDelete}
]

const Icon = {name: 'icon', component: icon}


export default {
  buttons,
  Icon
}
