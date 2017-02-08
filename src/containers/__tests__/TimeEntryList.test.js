import React from 'react'
import {shallow, mount} from 'enzyme'

import withStoreAndTheme from '../../__mocks__/withStoreAndTheme'
import TimeEntryList_withConnect, {TimeEntryList} from '../TimeEntryList'

import withTheme from '../../__mocks__/withTheme'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const uid = '123'
const TimeEntryList_withStoreAndTheme = withStoreAndTheme(TimeEntryList_withConnect, {
  auth: {
    user: {
      uid
    }
  }
})
const TimeEntryList_withTheme = withTheme(TimeEntryList)

describe('<TimeEntryList />', () => {
  it ('render with store and theme', () => {
    const wrapper = mount(<TimeEntryList_withStoreAndTheme />)
  })

  it ('render', () => {
    const props = {
      onFetchList: jest.fn(),
      entries: {}
    }
    const wrapper = mount(<TimeEntryList_withTheme {...props} />)
    expect(props.onFetchList).toHaveBeenCalledTimes(1)
  })

})
