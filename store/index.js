import { atom } from 'recoil'

export const rangeState = atom({
  key: 'rangeState', // unique ID (with respect to other atoms/selectors)
  default: '1 ~ 100' // default value (aka initial value)
})
