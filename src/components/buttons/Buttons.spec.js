import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import { shallow, mount } from 'enzyme'
import Buttons from './Buttons'
import { expect } from 'chai'

describe('<Buttons />', () => {
    it('renders "0" button', () => {
        const wrapper = mount(<Provider store={store}><Buttons handleClick={false} /></Provider> )//.dive()
        // console.log(wrapper.debug())
        expect(wrapper.find('div').text()).to.contain('0')
    })
})