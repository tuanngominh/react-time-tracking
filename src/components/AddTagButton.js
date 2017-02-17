import React, {Component} from 'react'

import FlatButton  from 'material-ui/FlatButton'
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import FontIcon from 'material-ui/FontIcon'
import TextField from 'material-ui/TextField'

class AddTagButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      openTagForm: false
    }
  }

  handleOpenTagForm = (event) => {
    // This prevents ghost click.
    event.preventDefault()

    this.setState({
      openTagForm: true,
      anchorEl: event.currentTarget,
    })    
  }

  handleCloseTagForm = () => {
    this.setState({
      openTagForm: false,
    });
  }

  render() {
    return (
      <div className="container-add-tag">
        <FlatButton
          onTouchTap={this.handleOpenTagForm}
          label="Tag"
          icon={<FontIcon className="material-icons" style={{color: 'green', fontSize: 30}}>add</FontIcon>}
        />
        <Popover
          open={this.state.openTagForm}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleCloseTagForm}
          animation={PopoverAnimationVertical}
          style={{
            paddingLeft: 10,
            paddingRight: 10
          }}
        >
          <List className="list">
            <FontIcon className="material-icons" style={{
              color: 'lightgrey', 
              fontSize: 18,
              top: 5,
              paddingRight: 8
            }}>search</FontIcon><TextField
              underlineShow={false}
              hintText="Find Tag"
            />
          </List>
          <Divider />
          <List className="list">  
            <ListItem className='listItem' primaryText="Inbox" leftIcon={<FontIcon className="material-icons" style={{color: 'green'}}>lens</FontIcon>} />
            <ListItem className='listItem' primaryText="Starred" leftIcon={<FontIcon className="material-icons" style={{color: 'green'}}>lens</FontIcon>} />
          </List>  
          <Divider />
          <List className="list">
            <div style={{textAlign: 'center'}}>
              <FlatButton
                label="Add Tag"
                labelStyle={{textTransform: 'none'}}
                icon={<FontIcon className="material-icons" style={{color: 'lightgreen'}}>add</FontIcon>}
              />            
            </div>
          </List>
        </Popover>        
      </div>
    )
  }
}

export default AddTagButton