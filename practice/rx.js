import {Observable} from 'rxjs'
var app = document.createElement("div")
app.innerHTML = "1"
document.body.appendChild(app);
var click = Observable;
var source = click.map(e => Rx.Observable.interval(1000).take(3));

var example = source.concatAll();
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
//----------------------------------------------------------------------------------------

// import {Observable} from 'rxjs'
var app = document.createElement("div")
app.innerHTML = "hello"
document.body.appendChild(app);
var source = Observable.from("abcdefgh")//.zip(Observable.interval(1000)).scan((x)=>x[1])
//var source = click.map(e => Rx.Observable.interval(1000).take(3));

source = Observable.interval(1000)//.merge(Observable.interval(500))


// var example = source.concatAll();

setTimeout(()=>{
    source.subscribe({
        next: (value) => { console.log(value); },
        error: (err) => { console.log('Error: ' + err); },
        complete: () => { console.log('complete'); }
    });
},3000)

source.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

//----------------------------------------------------------------------------------------
function create(subscriber) {
    var observable = {
        subscribe: function(observer) {
            subscriber(observer)
        }       
    };
    return observable;
}

var observable = create(function(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
})

var observer = {
  next: function(value) {
    console.log(value)
  }
}

observable.subscribe(observer)
// 1
// 2
// 3