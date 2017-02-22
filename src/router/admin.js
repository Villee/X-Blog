/**
 * Created by Wangfei on 2017/2/22.
 */
/**
 * Created by Wangfei on 2017/2/22.
 */
import Admin from '../components/admin/Admin.vue'
import Edit from '../components/admin/main_content/Edit.vue'

export default {
  path: '/admin',
  component: Admin,
  children: [
    {
      path: '/',
      name: 'Edit',
      component: Edit
    },{
      path: '/managePosts',
      name: 'ManagePosts',
      component: Edit
    },
  ]
}
