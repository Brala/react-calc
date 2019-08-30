import React from 'react'
import { shallow } from 'enzyme'
import App from './'
import { expect } from 'chai'

describe('<App />', () => {
    it('renders text', () => {
        const wrapper = shallow(<App />)
    })
})
