import { observable, action } from 'mobx'

class SumNum {
  @observable number = 0

  @action add(number = 1) {
    this.number += number
  }

  @action minus(number = 1) {
    this.number -= number
  }
}

export default new SumNum()
