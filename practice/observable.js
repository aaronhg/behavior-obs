// todo : cold to hot

var Observable = {
    create: function (xx) { // ?
        return {
            subscribe: function (observer) {
                xx(observer)
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
        }
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
    observer.next(1)
    observer.next(1)
    observer.next(1)
}, )
// obs1.subscribe(observer)


obs1.map(i => i + 1).subscribe(observer)