jest.useFakeTimers()
import React from 'react'
import {shallow, mount} from 'enzyme'
import TimeEntryInputForm_withConnect, {TimeEntryInputForm} from '../TimeEntryInputForm'
import withTheme from '../../__mocks__/withTheme'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const TimeEntryInputForm_withTheme = withTheme(TimeEntryInputForm)

describe('<TimeEntryInputForm />', () => {
  it ('render', () => {
    const wrapper = shallow(<TimeEntryInputForm />)
    expect(wrapper.children().length).toBeGreaterThan(0)    
  })

  it('start time tracking', () => {
    const props = {
      onStart: jest.fn()
    }
    const wrapper = shallow(<TimeEntryInputForm {...props} />)
    wrapper.find('FlatButton').simulate('click', { preventDefault() {} })
    expect(props.onStart).toHaveBeenCalledTimes(1)
  })

  it('open time dialog', () => {
    const props = {
      onOpenDialog: jest.fn()
    }
    const wrapper = shallow(<TimeEntryInputForm {...props} />)
    wrapper.find('span').simulate('click')
    expect(props.onOpenDialog).toHaveBeenCalledTimes(1)
  })

  it('stop time tracking', () => {
    const now = new Date()
    //earlier than now 20 minutes
    const startTime = new Date((now).setMinutes(now.getMinutes() - 20))

    const props = {
      startTime,
      onStop: jest.fn()
    }

    const wrapper = mount(<TimeEntryInputForm_withTheme {...props} />)
    //Stop button is a RaisedButton which include an EnhancedButton
    const stopButton = wrapper.findWhere(n => {
      return (
        (n.name() === 'EnhancedButton') 
        && 
        (n.prop('name') === 'btn-stop')
      )
    })
    stopButton.simulate('click')
    expect(props.onStop).toHaveBeenCalledTimes(1)

    
  })

  it('change time tracking text', () => {
    // jest.useFakeTimers();
    const now = new Date()
    //earlier than now 20 minutes
    const startTime = new Date((now).setMinutes(now.getMinutes() - 20))
    const text = 'text123'
    const newText = 'text1234'
    const props = {
      startTime,
      text,
      onChangeText: jest.fn()
    }


    setTimeout.mockReset()
    const wrapper = mount(<TimeEntryInputForm_withTheme {...props} />)
    
    const input = wrapper.find('input[name="text"]')
    input.node.value = newText
    input.simulate('change', input)
    expect(setTimeout.mock.calls.length).toBe(2)
    //FIXME: runAllTimers frozen nodejs
    // jest.runAllTimers()
    // expect(props.onChangeText).toHaveBeenCalledTimes(1)
  })

})
