class Observer {
  constructor(name) {
    this.namePick = name
  }

  updateStatus(location) {
    this.goToHelp(location)
  }

  goToHelp(location) {
    console.log(`${this.namePick}::::PING::::${location}`)
  }
}

class Subject {
  constructor() {
    this.observerList = []
  }

  addObserver(observer) {
    this.observerList.push(observer)
  }

  notify(location) {
    this.observerList.forEach((osv) => osv.updateStatus(JSON.stringify(location)))
  }
}

const subject = new Subject()

// your pick
const jinx = new Observer('Jinx')
const lucian = new Observer('Lucian')

// add jinx and lucian to Team
subject.addObserver(jinx)
subject.addObserver(lucian)

// push location to Team
subject.notify({ long: 123, lat: 345 })
