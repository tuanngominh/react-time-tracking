import React, {Component, PropTypes} from 'react'

import CreateTagForm from './CreateTagForm'

import FlatButton  from 'material-ui/FlatButton'
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import FontIcon from 'material-ui/FontIcon'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'

class AddTagButton extends Component {
  static propTypes = {
    onCreateTag: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      openTagForm: false,
      createTagDialogOpen: false
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

  handleOpenCreateTagDialog = () => {
    this.setState({
      createTagDialogOpen: true,
      openTagForm: false
    })
  }

  handleCloseCreateTagDialog = () => {
    this.setState({
      createTagDialogOpen: false
    })
  }

  handleCreateTag = (tag, color) => {
    this.props.onCreateTag(tag, color)
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
          className="container-add-tag-popup"
        >
          <List className="list first">
            <FontIcon className="material-icons" style={{
              color: 'lightgrey', 
              fontSize: 18,
              top: 5,
              paddingRight: 8
            }}>search</FontIcon><TextField
              underlineShow={false}
              hintText="Find Tag"
              className="input-filter"
            />
          </List>
          <Divider />
          <List className="list">  
            <ListItem className='list-item' primaryText="Inbox" leftIcon={<FontIcon className="material-icons" style={{color: 'green'}}>lens</FontIcon>} />
            <ListItem className='list-item' primaryText="Starred" leftIcon={<FontIcon className="material-icons" style={{color: 'green'}}>lens</FontIcon>} />
          </List>  
          <Divider />
          <List className="list">
            <div style={{textAlign: 'center'}}>
              <FlatButton
                label="Add Tag"
                labelStyle={{textTransform: 'none'}}
                icon={<FontIcon className="material-icons" style={{color: 'lightgreen'}}>add</FontIcon>}
                onClick={this.handleOpenCreateTagDialog}
              />
            </div>
          </List>
        </Popover>
        <Dialog
          title="Create new tag"
          open={this.state.createTagDialogOpen}
          onRequestClose={this.handleCloseCreateTagDialog}
          contentStyle={{maxWidth: 400}}
        >
          <CreateTagForm onSave={this.handleCreateTag}/>
        </Dialog>        
      </div>
    )
  }
}

export default AddTagButton