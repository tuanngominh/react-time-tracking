import React from 'react'
import {shallow, mount} from 'enzyme'

import {toAmPm} from '../../utils/time'

import withStoreAndTheme from '../../__mocks__/withStoreAndTheme'
import TimeEntryInput_withConnect, {TimeEntryInput} from '../TimeEntryInput'

import withTheme from '../../__mocks__/withTheme'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const uid = '123'
const TimeEntryInput_withStoreAndTheme = withStoreAndTheme(TimeEntryInput_withConnect, {
  auth: {
    user: {
      uid
    }
  }
})
const TimeEntryInput_withTheme = withTheme(TimeEntryInput)

describe('<TimeEntryInput />', () => {
  it ('render with store and theme', () => {
    const wrapper = mount(<TimeEntryInput_withStoreAndTheme />)
    expect(wrapper.children().length).toBeGreaterThan(0)
  })

  it ('render', () => {
    const props = {
      onPull: jest.fn()
    }
    const wrapper = mount(<TimeEntryInput_withTheme {...props} />)
    expect(wrapper.children().length).toBeGreaterThan(0)
    expect(props.onPull).toHaveBeenCalledTimes(1)
  })

  it ('onPull: pull current tracking entry from server', () => {
    const props = {
      onPull: jest.fn()
    }
    const wrapper = mount(<TimeEntryInput_withTheme {...props} />)
    expect(props.onPull).toHaveBeenCalledTimes(1)
  })

  it ('onChangeStartTime - success', () => {
    
    const now = new Date()
    //earlier than now 20 minutes
    const originalStartTime = new Date((now).setMinutes(now.getMinutes() - 20))
    //earlier than now 10 minutes
    const newStartTime = new Date((now).setMinutes(now.getMinutes() - 10))
    const props = {
      onPull: jest.fn(),
      onChangeStartTime: jest.fn(),
      startTime: originalStartTime.toJSON(),
      uid
    }
    const wrapper = shallow(<TimeEntryInput {...props} />)

    wrapper.instance().handleUpdateStartTimeAmPm({
      target: {
        value: toAmPm(newStartTime)
      }
    })
    expect(props.onChangeStartTime).toHaveBeenCalledTimes(1)
    expect(props.onChangeStartTime.mock.calls[0][0]).toBe(uid)
    //remove milisecond during compare
    expect(props.onChangeStartTime.mock.calls[0][1].slice(0, -5)).toBe(newStartTime.toJSON().slice(0, -5))
  
  })

  it ('onChangeStartTime - failed so doesn\'t change startime', () => {
    
    const now = new Date()
    //earlier than now 20 minutes
    const originalStartTime = new Date((now).setMinutes(now.getMinutes() - 20))
    const originalStartTimeAmPm = toAmPm(originalStartTime)
    const props = {
      onPull: jest.fn(),
      onChangeStartTime: jest.fn(),
      startTime: originalStartTime.toJSON()
    }
    const wrapper = shallow(<TimeEntryInput {...props} />)

    wrapper.instance().handleUpdateStartTimeAmPm({
      target: {
        value: 'invalid time'
      }
    })
    
    expect(props.onChangeStartTime).toHaveBeenCalledTimes(0)
    expect(wrapper.state().startTimeAmPm).toBe(originalStartTimeAmPm)
  })  

})
