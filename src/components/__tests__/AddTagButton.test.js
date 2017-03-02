import React from 'react'
import {shallow, mount} from 'enzyme'
import withTheme from '../../__mocks__/withTheme'
import AddTagButton, {TagItem, TagItemList, TagButton} from '../AddTagButton'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('TagItem widget', () => {
  const actionProps = () => ({
    onSelectTag: jest.fn()
  })

  it('can render without error', () => {
    const wrapper = shallow(<TagItem />)
  })

  it('can select by click', () => {
    const props = Object.assign({
      name: 'tag 1',
      color: 'black',
      id: 'b12123'
    }, actionProps())
    const wrapper = shallow(<TagItem {...props}/>)
    wrapper.instance().handleSelectTag()
    expect(props.onSelectTag).toHaveBeenCalledWith(props.id, props.name, props.color)

  })
})

const tags = [
  {key: '1', id: '1', name: 'tag 1', color: '#ac725e'},
  {key: '2', id: '2', name: 'tag 2', color: '#8f8f8f'}
]
const TagItemList_withTheme = withTheme(TagItemList)
describe('TagItemList widget', () => {
  const actionProps = () => ({
    onSelectTag: jest.fn()
  })

  it('can render without error', () => {
    const wrapper = mount(<TagItemList_withTheme tags={tags} {...actionProps} />)
    expect(wrapper.find('List').length).toBe(2)
    expect(wrapper.find('TagItem').length).toBe(2)
  })
})

describe('AddTag button', () => {
  const actionProps = () => ({
    onClick: jest.fn()
  })

  it('Can render without value', () => {
    const wrapper = shallow(<TagButton {...actionProps()}/>)
  })

  it('Can render with value', () => {
    const wrapper = shallow(<TagButton tagName='tag 1' tagColor='black' {...actionProps()}/>)
  })

  it('Can click to open tag form', () => {
    const actionsProp = actionProps()
    const wrapper = shallow(<TagButton tagName='tag 1' tagColor='black' {...actionsProp}/>)
    wrapper.find('FlatButton').simulate('click')
    expect(actionsProp.onClick).toHaveBeenCalledTimes(1)
  })  

})

const AddTagButton_withTheme = withTheme(AddTagButton)
describe('Add tag button widget', () => {
  const actionProps = () => ({
    onCreateTag: jest.fn(),
    onFetchList: jest.fn(),
    onSelectTag: jest.fn()
  })

  it('can render without error', () => {
    const wrapper = shallow(<AddTagButton {...actionProps()}/>)
  })

  it('can fetch data when render', () => {
    const props = actionProps()
    const wrapper = mount(<AddTagButton_withTheme {...props}/>)
    expect(props.onFetchList).toHaveBeenCalled()
  })

  it('can create', () => {
    const props = actionProps()
    const wrapper = shallow(<AddTagButton {...props}/>)
    wrapper.instance().handleCreateTag()
    expect(props.onCreateTag).toHaveBeenCalled()
  })
})