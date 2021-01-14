import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld';
import {mount} from 'vue-test-utils';

describe('HelloWorld.vue', () => {
  const Constructor = Vue.extend(HelloWorld)
  const vm = new Constructor().$mount();
  const wrapper = mount(HelloWorld);

  before(() => {
    // 在本区块的所有测试用例之前执行
    console.log('开始执行测试用例')
  });

  after(() => {
    // 在本区块的所有测试用例之后执行
    console.log('所有测试用例执行完毕')
  });

  beforeEach(() => {
    // 在本区块的每个测试用例之前执行
    console.log('开始')
  });

  afterEach(() => {
    // 在本区块的每个测试用例之前执行
    console.log('结束')
  });

  it('should render correct contents', () => {
    /**
     * expect方法开头的就是断言
     * 断言, 就是判断源码的实际执行结果与预期结果是否一致, 如果不一致, 就会抛出错误
     */
    expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Welcome to Your Vue.js App')
  })

  it('use ue-test-utils test content', () => {
    // expect(wrapper.find('.hello h1').text()).to.equal('Welcome to Your Vue.js App');
    const button = wrapper.find('.btn-text');
    button.trigger('click');
    expect(wrapper.vm.title).to.equal('WORLD');
  })

  it('click button change the text', () => {
    expect(vm.title).to.equal('HELLOW');
    const button = vm.$el.querySelector('button');
    // 新建点击事件
    const clickEvent = new window.Event('click');
    // 触发点击事件
    button.dispatchEvent(clickEvent);
    // 监听点击事件
    vm._watcher.run();
    expect(vm.title).to.equal('WORLD');
    vm.title.should.be.a('string');
  })

  it('click button count + 1 async', (done) => {
    const button = vm.$el.querySelector('.btn-count');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    vm._watcher.run();
    setTimeout(() => {
      expect(vm.count).to.equal(1);
      done();
    }, 1000)
  })
})
