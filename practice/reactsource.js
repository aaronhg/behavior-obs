// var element = React.createElement('div',{id:'test'},['click me'])

// React.render(element)

// //生成的html为：

// <div data-reactid="0" id="test">
//     <span data-reactid="0.0">click me</span>
// </div>

function ReactDOMTextComponent(text) {
    this.el = '' + text
    this.id = null
}
ReactDOMTextComponent.prototype.mountComponent = function (id) {
    this.id = id
    let markup = `<span data-reactid=${id}>${this.el}</span>`
    return markup
}
function ReactElement(type, props, child) {
    this.type = type
    this.props = props
    this.child = child
}
function ReactDOMComponent(el) {
    this.el = el
    this.id = null
}
ReactDOMComponent.prototype.mountComponent = function (id) {
    this.id = id
    let s = `<${this.el.type} data-reactid=${id} `
    if (this.el.props) {
        for (var pr in this.el.props) {
            if (this.el.props.hasOwnProperty(pr))
                s += pr + "=\"" + this.el.props[pr] + "\" "
        }
    }
    s += `>`
    let e = `</${this.el.type}>`

    let m = ""
    let childrenInstances = []
    this.el.child.forEach(function (el, key) {
        let ins = instantiateReactComponent(el)
        childrenInstances.push(ins)
        m += ins.mountComponent(id + "." + key)
    }, this);
    this.childrenInstances = childrenInstances
    return s + m + e
}
function instantiateReactComponent(el) {
    if (typeof el == "string")
        return new ReactDOMTextComponent(el)
    if (typeof el == "object")
        return new ReactDOMComponent(el)
    if (typeof el === 'object' && typeof el.type === 'function')
        return new ReactCompositeComponent(el);
}
React = {
    nextReactId: 0,
    createElement: function (type, props, child) {
        return new ReactElement(type, props, child)
    },
    render: function (el, target) {
        var ins = instantiateReactComponent(el)
        var markup = ins.mountComponent(this.nextReactId++)
        return markup
    }
}

var element = React.createElement('div', { id: 'test' }, ['click me'])

console.log(React.render(element))

//---------------------------------------------------------------------

React.createClass = function(obj){
    return function(){
        this.getInitialState = obj.getInitialState
        this.componentWillMount = obj.componentWillMount
        this.getInitialState = obj.getInitialState
        this.render = obj.render
    }
}
function ReactCompositeComponent(el) {
    this.el = el
    el.type.call(this)
    this.state = this.getInitialState()
    this.id = null
}
ReactCompositeComponent.prototype.mountComponent = function(id){
    if (this.mountComponent)
        this.mountComponent()
    let markup = this.render()
    if (this.componentDidMount)
        this.componentDidMount()
    return markup
}

var HelloMessage = React.createClass({
  getInitialState: function() {
    return {type: 'say:'};
  },
  componentWillMount: function() {
    console.log('我就要开始渲染了。。。')
  },
  componentDidMount: function() {
    console.log('我已经渲染好了。。。')
  },
  render: function() {
    return React.createElement("div", null,[this.state.type, "Hello ", this.props.name]);
  }
});
console.log(React.render(React.createElement(HelloMessage, {name: "John"},[])))