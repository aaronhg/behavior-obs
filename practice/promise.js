var p = new Promise((res, rej) => {
    res(1)
    rej()
})
p.then(console.log, console.error)

var State = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
};

function P(fn) {
    this.state = State.PENDING
    // fn(resolve.bind(this), reject.bind(this))
}
function resolve(value) {
    if (this.state != State.PENDING)
        return
    this.state = State.FULFILLED
    this.value = value
    // this.thenables.forEach((then) => then(value))
}
function reject(error) {
    if (this.state != State.PENDING)
        return
    this.state = State.FULFILLED
    this.value = error
    // this.thenables.forEach((then) => then(value))
}
P.prototype.then = function (fn) {
    if (this.resolved)
        fn(this.value)
    else
        this.thens.push(fn)
    // return new P(fn)
}

Promise.resolve()
var p1 = new P((res) => res(1))
p1.then(console.log)
p1.then(console.log)

var p1 = new Promise((res) => setTimeout(() => res(1), 4000))
var p2 = new Promise((res) => setTimeout(() => res(2), 1000))
var p3 = p1.then(p2)
p3.then(console.log)

// todo: 錯誤穿透

// 它先返回一个Promise对象，后面的操作以同步的方式，寄存在这个对象上面。等到异步操作有了结果，再执行前期寄放在它上面的其他操作。