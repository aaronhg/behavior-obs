import React from 'react'
import PropTypes from 'prop-types'
import { getShortID, getTimestamp } from '../../utils/id'
import { CirclePicker } from 'react-color'
import ReactTags from 'react-tag-autocomplete'

let itemDefaultValue = {

}
let weights = [{
    txt: "*1",
    val: 1,
}, {
    txt: "*2",
    val: 2,
}, {
    txt: "*3",
    val: 3,
}, {
    txt: "*5",
    val: 5,
}, {
    txt: "*10",
    val: 10,
}]
class ItemDetail extends React.Component {
    constructor(props) {
        super()
        this.handleSave = this.handleSave.bind(this)
        this.setColor = this.setColor.bind(this)
        this.setWeight = this.setWeight.bind(this)
        this.inputRefs = {}
        // let { item: { ref_tags } } = this.props
        let ref_tags = props.item && props.item.ref_tags
        let bgcolor = props.item && props.item.bgcolor
        let weight = props.item && props.item.weight
        this.state = {
            tags: ref_tags || [],
            color: bgcolor || "",
            weight: weight || 1,
            weightByCustom: false,
        }
    }
    handleSave() {
        let { item, existNames } = this.props
        const { name, bgcolor, gtype, order } = this.inputRefs
        this.props.saveItem({
            name: name.value,
            bgcolor: bgcolor && bgcolor.hex || "",
            gtype: gtype.value,
            id: item.id || getShortID(),
            ref_tags: this.state.tags,
            weight: this.state.weight,
            order: order.value,
        })
        this.props.gotoItems()
    }
    setColor(color) {
        this.inputRefs.bgcolor = color
        this.setState({ color })
    }
    setWeight(weight) {
        this.setState({ weight })
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    handleDelete(i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
    }
    handleAddition(tag) {
        if (!tag.id)
            tag.id = getShortID()
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags })
    }
    render() {
        let { item } = this.props
        let values = item || itemDefaultValue
        return (<form>
            <div className="row">
                <div className="small-3 columns">
                    <label className="text-right middle">name:</label>
                </div>
                <div className="small-3 columns">
                    <input ref={(ref) => this.inputRefs.name = ref} placeholder="item name" defaultValue={values.name} />
                </div>
            </div>
            <div className="row">
                <div className="small-3 columns">
                    <label className="text-right middle">bgcolor:</label>
                </div>
                <div className="small-3 columns">
                    <CirclePicker onChange={this.setColor} color={this.state.color}></CirclePicker>
                </div>
            </div>
            <div className="row">
                <div className="small-3 columns">
                    <label className="text-right middle">gtype:</label>
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
            <div className="row">
                <div className="small-3 columns">
                    <label className="text-right middle">tags:</label>
                </div>
                <div className="small-6 columns">
                    <ReactTags
                        tags={this.state.tags}
                        suggestions={this.props.tags}
                        minQueryLength={1}
                        handleDelete={this.handleDelete.bind(this)}
                        handleAddition={this.handleAddition.bind(this)}
                        allowNew={true}
                    />
                </div>
            </div>
            <div className="row">
                <div className="small-3 columns">
                    <label className="text-right middle">weight:</label>
                </div>
                <div className="small-6 columns">
                    {weights.map(w => {
                        let clz = w.val == this.state.weight ? "button alert" : "button"
                        return (<div key={w.val} className={clz} onClick={() => this.setWeight(w.val)}>{w.txt}</div>)
                    })}
                </div>
            </div>
            <div className="row">
                <div className="small-3 columns">
                    <label className="text-right middle">order:</label>
                </div>
                <div className="small-2 columns">
                    <input type="number" ref={(ref) => this.inputRefs.order = ref} placeholder="order" defaultValue={values.order} />
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
        // <input type="checkbox" readOnly="readOnly" value={this.state.weightByCustom} />custom:<input onChange={(v)=>this.setWeight(v)} defaultValue={values.weight} />
        // <FontIcon type="minus-circle-o" />
        // <FontIcon type="minus"  />
        // <FontIcon type="plus" />
        // <FontIcon type="plus-circle-o"  />
        // <span>{String.fromCharCode(9312)}</span>
        // <span>{String.fromCharCode(9313)}</span>
        // <span>{String.fromCharCode(9314)}</span>
        // <span>{String.fromCharCode(9315)}</span>
    }
}
ItemDetail.propTypes = {
    // addItem: PropTypes.func.isRequired,
}
export default ItemDetail