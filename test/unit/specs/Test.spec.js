/**
 * @jest-environment node
 */

// Import Vue and the component being tested
import Vue from 'vue'
import Test from '@/components/Test'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('MyComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof Test.created).toBe('function')
  })

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof Test.data).toBe('function')
    const defaultData = Test.data()
    expect(defaultData.message).toBe('hello!')
  })

  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    const vm = new Vue(Test).$mount()
    expect(vm.message).toBe('bye!')
  })

  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    const Constructor = Vue.extend(Test)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toBe('bye!')
  })
})
