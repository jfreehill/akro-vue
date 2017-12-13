import Vue from 'vue'
import Home from '@/components/Home'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.categories')).toEqual(expect.anything())
    expect(vm.$el.querySelector('.letters')).toEqual(expect.anything())
  })
})
