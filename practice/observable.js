// todo : cold to hot

var Observable = function (xx) {
    this.xx = xx // name ?
    this.isComplete = false
}
Observable.create = function(xx) {
    return new Observable(xx)
}
Observable.prototype = {
    subscribe: function (observer) {
        this.xx(observer)
    },
    map: function (func) {
        return Observable.create((observer) => {
            this.subscribe({
                next: function (value) {
                    observer.next(func(value))
                },
                error: function (e) {
                    observer.error(e)
                },
                complete: function () {
                    observer.complete()
                },
            })
        })
    },
    take: function (n) {
        var i = 0
        return Observable.create((observer) => {
            this.subscribe({
                next: function (value) {
                    if (i<n) {
                        i++
                        observer.next(value)
                    }
                    else
                        observer.complete()
                },
                error: function (e) {
                    observer.error(e)
                },
                complete: function () {
                    observer.complete()
                },
            })
        })
    },
}
var observer = {
    next: function (value) {
        console.log(value)
    },
    error: function (e) {
        console.error(e)
    },
    complete: function () {
        console.log("complete")
    },
}

var obs1 = Observable.create(function (observer) {
    let i = 0
    let ii = setInterval(() => observer.next(i++), 500)
    setTimeout(() => clearInterval(ii), 4000)
}, )
// obs1.subscribe(observer)


obs1.map(i => i + 1).take(1).subscribe(observer)