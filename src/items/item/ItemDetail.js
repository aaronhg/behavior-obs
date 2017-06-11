import React from 'react'
import PropTypes from 'prop-types'
import gen from '../../utils/id'
import { Icon } from 'antd'
import { CirclePicker } from 'react-color'
let itemDefaultValue = {

}
class ItemDetail extends React.Component {
    constructor() {
        super()
        this.handleSave = this.handleSave.bind(this)
        this.setColor = this.setColor.bind(this)
        this.inputRefs = {}
    }
    handleSave() {
        let { item, existNames } = this.props
        const { name, bgcolor, gtype } = this.inputRefs
        this.props.saveItem({
            name: name.value,
            bgcolor: bgcolor.hex,
            gtype: gtype.value,
            id: item.id || gen(),
        })
        // todo : then redriect to /home , thunk ?
    }
    setColor(color) {
        this.inputRefs.bgcolor = color
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    render() {
        let { item } = this.props
        let values = item || itemDefaultValue
        return (<form>
            <div className="row">
                <div className="small-3 columns">
                    <label className="text-right middle">Name:</label>
                </div>
                <div className="small-3 columns">
                    <input ref={(ref) => this.inputRefs.name = ref} placeholder="item name" defaultValue={values.name} />
                </div>
            </div>
            <div className="row">
                <div className="small-3 columns">
                    <label className="text-right middle">Background Color:</label>
                </div>
                <div className="small-3 columns">
                    <CirclePicker onChangeComplete={this.setColor} color={values.bgcolor}></CirclePicker>
                </div>
            </div>
            <div className="row">
                <div className="small-3 columns">
                    <label className="text-right middle">Type:</label>
                </div>
                <div className="small-3 columns">
                    <select ref={(ref) => this.inputRefs.gtype = ref} defaultValue={values.gtype} >
                        <option value="+-2">
                            +-2
                                    </option>
                        <option value="+5">
                            +5
                                    </option>
                        <option value="keyin">
                            keyin
                                    </option>
                    </select>
                </div>
            </div>
            <a className="button tiny" style={{
                position: "absolute",
                bottom: 0,
                right: "20px",
            }} onClick={this.handleSave}> Save </a>
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