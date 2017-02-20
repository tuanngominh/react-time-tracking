import React, {Component, PropTypes} from 'react'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'

class ColorPicker extends Component {
  static propsTypes = {
    availableColors: PropTypes.array,
    itemPerRow: PropTypes.number,
    iconComponent: PropTypes.instanceOf(FontIcon)
  }
  static defaultProps = {
    availableColors: [
      '#ac725e', '#d06b64', '#f83a22', '#fa573c', '#ff7537', 
      '#ffad46', '#42d692', '#16a765', '#7bd148', '#b3dc6c', 
      '#fbe983', '#fad165', '#92e1c0', '#9fe1e7', '#9fc6e7',
      '#4986e7', '#9a9cff', '#b99aff', '#8f8f8f', '#cabdbf',
      '#cca6ac', '#f691b2', '#cd74e6', '#a47ae2', 'black'
    ],
    itemPerRow: 5,
    iconComponent: <FontIcon className="material-icons">lens</FontIcon>
  }
  render() {
    let jsx = []
    for (let i = 0; i < this.props.availableColors.length; i += this.props.itemPerRow) {
      //each icons row
      let jsxRow = []
      for (let j = 0; j < this.props.itemPerRow; j++) {
        if ((i+j) < this.props.availableColors.length) {
          jsxRow.push(
            <IconButton iconStyle={{color: this.props.availableColors[i+j]}} key={this.props.availableColors[i+j]}>
              {this.props.iconComponent}
            </IconButton>
          )          
        }
      }
      jsx.push(<div key={i} >{jsxRow}</div>)
    }
    return (
      <div>{jsx}</div>
    )
  }
}

export default ColorPicker