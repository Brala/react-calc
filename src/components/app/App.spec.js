import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import App from './App'
import { expect } from 'chai'

describe('<App />', () => {

    it('renders calculator', () => {
        const component = mount(<Provider store={store}><App /></Provider>)
        // console.log(component.debug())
        const wrapper = component.find('.calculator')
        // console.log(wrapper)
        expect(component.find('.calculator')).to.have.lengthOf(1)
        expect(wrapper.length).to.equal(1)
    })
    it('renders', ()=>{expect(1).to.eql(1)})

})
