```js
React = {
    nextReactId: 0,
    createClass : function(spec){                                     //        spec
        return Constructor                                            // ------> |
    },                                                                //        type
    createElement: function (type, props, child) {                    // ------> | + props , child
        return new ReactElement(type, props, child)                   //        element
    },                                                                //         | 
    render: function (el, target) {                                   //         V
        var ins = instantiateReactComponent(el)                       // ------> instance // return new XXComponent()
        var markup = ins.mountComponent(this.nextReactId++)           //         ?
        return markup
    }
}
```

```js
var Hello = React.createClass({
  componentWillMount: function() {
    console.log('Hi')
  },
  render: function() {
    return React.createElement("div");
  }
});
React.createElement('div',{id:'test'},['click me'])
React.createElement(Hello, {name: "John"},[])
```