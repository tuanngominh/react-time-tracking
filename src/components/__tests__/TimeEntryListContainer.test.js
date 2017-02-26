import React from 'react'
import {shallow, mount} from 'enzyme'

import withStoreAndTheme from '../../__mocks__/withStoreAndTheme'
import {TimeEntryListContainer} from '../TimeEntryListContainer'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const uid = '123'
const TimeEntryListContainer_withStoreAndTheme = withStoreAndTheme(TimeEntryListContainer, {
  auth: {
    user: {
      uid
    }
  }
})

describe('TimeEntryListContainer', () => {
  it ('render', () => {
    const props = {
      onFetchList: jest.fn(),
      entries: {}
    }
    const wrapper = mount(<TimeEntryListContainer_withStoreAndTheme {...props} />)
    expect(props.onFetchList).toHaveBeenCalledTimes(1)
  })

})
