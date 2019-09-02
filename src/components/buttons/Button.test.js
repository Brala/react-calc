import React from 'react'
import { shallow } from 'enzyme'
import Buttons from './Buttons'
import { expect } from 'chai'

describe('<Buttons />', () => {
    it('renders text', () => {
        const wrapper = shallow(<Buttons handleClick={false} /> ).dive()
        expect(wrapper.find('div').text()).to.contain('0')
    })
})