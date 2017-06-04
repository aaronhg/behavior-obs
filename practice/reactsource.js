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
    if (typeof el === 'object' && typeof el.type === 'function')
        return new ReactCompositeComponent(el);
    if (typeof el == "object")
        return new ReactDOMComponent(el)
    
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
var ReactClass = function(){
}
ReactClass.prototype.render = function(){}

React.createClass = function(obj){
    var Constructor = function (props) {
        this.props = props;
        this.state = this.getInitialState ? this.getInitialState() : null;
    }
    Constructor.prototype = new ReactClass()
    Constructor.prototype.componentWillMount = obj.componentWillMount
    Constructor.prototype.getInitialState = obj.getInitialState
    Constructor.prototype.render = obj.render
    return Constructor
}
function ReactCompositeComponent(el) {
    this.el = el
    this.id = null
    this.ins = null
}
ReactCompositeComponent.prototype.mountComponent = function(id){
    this.id = id
    let ins = new this.el.type(this.el.props)
    this.ins = ins
    if (this.componentWillMount)
        this.componentWillMount()
    this.childrenInstance = instantiateReactComponent(ins.render())
    let markup = this.childrenInstance.mountComponent(id)
    
    return markup
}

var HelloMessage = React.createClass({
  getInitialState: function() {
    return {type: 'say:'};
  },
  componentWillMount: function() {
    console.log('我就要开始渲染了。。。')
  },
  render: function() {
    return React.createElement("div", null,[this.state.type, "Hello ", this.props.name]);
  }
});
console.log(React.render(React.createElement(HelloMessage, {name: "John"},[])))