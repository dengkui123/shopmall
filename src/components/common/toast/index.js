import Toast from './Toast.vue'

const obj = {}
obj.install = (Vue) => {
  // Vue.extend()
  // document.body.appendChild(Toast.$el);
  // console.log(Toast.$el);
  // Vue.prototype.$toast = Toast;
  // 当前未挂载，无法获取$el

  // 1.创建组件构造器
  const ToastConstructor = Vue.extend(Toast);

  // 2. new的方式，根据组件构造器创建一个组件对象
  const toast = new ToastConstructor();

  // 3.将组件对象，手动挂载到某个元素上
  toast.$mount(document.createElement('div'));

  // 4.toast.$el对应的就是div
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
}
export default obj
