import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'antd'
import { CirclePicker } from 'react-color'

class ItemDetail extends React.Component {
    constructor() {
        super()
        this.handleAdd = this.handleAdd.bind(this)
        this.setColor = this.setColor.bind(this)
        this.inputRefs = {}
    }
    handleAdd() {
        let { id } = this.props
        const { name, bgcolor, gtype } = this.inputRefs
        this.props.addItem({
            name: name.value,
            bgcolor: bgcolor.hex,
            gtype: gtype.value,
            id: this.props.nextid || 1,
        })
        // todo : then redriect to /home
        // todo : thunk ?
    }
    setColor(color) {
        this.inputRefs.bgcolor = color
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    render() {
        let { setColor } = this
        return (<form>
            <div className="row">
                <div className="small-3 columns">
                    <label className="text-right middle">Name:</label>
                </div>
                <div className="small-3 columns">
                     <input ref={(ref) => this.inputRefs.name = ref} placeholder=".medium-6.columns" />
                </div>
            </div>
            <div className="row">
                <div className="small-3 columns">
                    <label className="text-right middle">Background Color:</label>
                </div>
                <div className="small-3 columns">
                     <CirclePicker onChangeComplete={setColor} ></CirclePicker>
                </div>
            </div>
            <div className="row">
                <div className="small-3 columns">
                    <label className="text-right middle">Type:</label>
                </div>
                <div className="small-3 columns">
                     <select ref={(ref) => this.inputRefs.gtype = ref} defaultValue="+-2" >
                        <option value="+-2">
                            +-2
                                    </option>
                        <option value="+4">
                            +4
                                    </option>
                    </select>
                </div>
            </div>
            <a className="button tiny" style={{
                position: "absolute",
                bottom: 0,
                right: "20px",}} onClick={this.handleAdd}> Save </a>
        </form>
        )
        // todo : 
        // <Icon type="minus-circle-o" />
        // <Icon type="minus"  />
        // <Icon type="plus" />
        // <Icon type="plus-circle-o"  />
        // <span>{String.fromCharCode(9312)}</span>
        // <span>{String.fromCharCode(9313)}</span>
        // <span>{String.fromCharCode(9314)}</span>
        // <span>{String.fromCharCode(9315)}</span>
    }
}
ItemDetail.propTypes = {
    // addItem: PropTypes.func.isRequired,
    // defaultValue: PropTypes.arrayOf(PropTypes.object).isRequired,
    // defaultValue: PropTypes.object,
    // defaultValue: PropTypes.arrayOf(PropTypes.object),
}
export default ItemDetail