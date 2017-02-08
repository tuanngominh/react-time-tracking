import React from 'react'
import {shallow, mount} from 'enzyme'
import TimeEntryListItem from '../TimeEntryListItem'
import withTheme from '../../__mocks__/withTheme'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const TimeEntryListItem_withTheme = withTheme(TimeEntryListItem)

describe('<TimeEntryListItem />', () => {
  it ('render shallow with props', () => {
    const wrapper = shallow(<TimeEntryListItem 
      text="entry description sample" 
      id="1" 
      startTime="2017-02-06T03:18:05.672Z" 
      endTime="2017-02-06T04:18:05.672Z" 
    />)
    expect(wrapper.children().length).toBeGreaterThan(0)    
  })

  it ('render full', () => {
    const wrapper = mount(<TimeEntryListItem_withTheme 
      text="entry description sample" 
      id="1" 
      startTime="2017-02-06T03:18:05.672Z" 
      endTime="2017-02-06T04:18:05.672Z" 
    />)
    expect(wrapper.find('TextField').length).toBeGreaterThan(0)
    expect(wrapper.find('FlatButton').length).toBeGreaterThan(0)
  })  

})
