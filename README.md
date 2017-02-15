# Vivid Trace [![CircleCI](https://circleci.com/gh/tuanngominh/react-time-tracking.svg?style=svg)](https://circleci.com/gh/tuanngominh/react-time-tracking) [![codecov](https://codecov.io/gh/tuanngominh/react-time-tracking/branch/master/graph/badge.svg)](https://codecov.io/gh/tuanngominh/react-time-tracking)

Time tracking app on [React](https://facebook.github.io/react/) ([demo](https://vivid-trace.firebaseapp.com/)).

# Tech stack
Web application based on React (clientside) and Firebase (serverside)

- Clientside UI libraries: [material ui](http://material-ui.com), [flexboxgrid](http://flexboxgrid.com/) layout, [formsy](https://github.com/christianalfoni/formsy-react) form validation, [chartjs](http://www.chartjs.org) chart
- State management: redux, redux thunk, reselect
- Unit test: jest + enzyme

# Features
Authentication
- [x] Signup using email
- [x] Login, logout, forgot password

Time entry
- [x] Can add time entry
- [x] Can track time spent on time entry and stop a time entry tracking
- [x] Can list time entries
- [x] Delete time entry
- [x] Report

Tag
- Add tag to time entry
- CRUD tag

- User profile

Low priority
- Signup using google, facebook

# Enzyme notes
Simulate `onClick` event in `shallow` ([github](https://github.com/airbnb/enzyme/issues/323#issuecomment-210039710))
```js
const componentWrapper = shallow(<Component />)
componentWrapper.simulate('click', { preventDefault() {} })
```

Simulate change event in [material-ui's TextField](http://www.material-ui.com/#/components/text-field) ([github](https://github.com/airbnb/enzyme/issues/364#issuecomment-217475038))
```js
const input = wrapper.find('input[name="text"]')
input.node.value = "newvalue"
input.simulate('change', input)
```

# Material UI 0.16.7 notes
Click on button in a Table's Row without select that row ([github](https://github.com/callemall/material-ui/issues/4535#issuecomment-231375019))

Doesn't support responsive ([github](https://github.com/callemall/material-ui/issues/3614#issuecomment-235568806))

