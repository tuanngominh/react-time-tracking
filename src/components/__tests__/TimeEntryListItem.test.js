import React from 'react'
import {shallow, mount} from 'enzyme'

import withStoreAndTheme from '../../__mocks__/withStoreAndTheme'
import withTheme from '../../__mocks__/withTheme'
import TimeEntryListItem from '../TimeEntryListItem'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const TimeEntryListItem_withStoreAndTheme = withStoreAndTheme(TimeEntryListItem)

const props = {
  uid : "123",
  text : "entry description sample",
  id : "1",
  startTime : new Date("2017-02-06T03:18:05.672Z"),
  endTime : new Date("2017-02-06T04:18:05.672Z")
}


describe('<TimeEntryListItem />', () => {
  it ('shoulde handle remove tracked item', () => {
    const actions = {
      onRemove: jest.fn()
    }
    const wrapper = shallow(<TimeEntryListItem {...actions} {...props} />)
    wrapper.instance().handleRemove()
    expect(actions.onRemove).toHaveBeenCalledTimes(1)
    expect(actions.onRemove).toHaveBeenCalledWith(props.uid, props.id)
  })

  it ('should render correctly and without error', () => {
    const wrapper = mount(<TimeEntryListItem_withStoreAndTheme {...props} />)
    
    expect(wrapper.find('TextField').length).toBeGreaterThan(0)
    expect(wrapper.find('FlatButton').length).toBeGreaterThan(0)
  })  

})
