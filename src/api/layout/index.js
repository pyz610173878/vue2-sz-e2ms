import request from '@/utils/request';

/**
 * 获取当前登录的用户信息、菜单、权限、角色
 */
export async function getUserInfo() {
  // 导出函数
  const res = await request.get('/auth/user');
  // get 请求地址
  if (res.data.code === 0 && res.data.data) {
    // 响应判断与处理
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
  // 处理异常，返回错误提示。
}

/**
 * 修改当前登录的用户密码
 */
export async function updatePassword(data) {
  const res = await request.put('/auth/password', data);
  if (res.data.code === 0) {
    return res.data.message ?? '修改成功';
  }
  return Promise.reject(new Error(res.data.message));
}

/**
 * 查询未读通知
 */
export async function getUnreadNotice() {
  return {
    notice: [
      {
        color: '#60B2FC',
        icon: 'el-icon-s-comment',
        title: '你收到了一封14份新周报',
        time: '2020-07-27 18:30:18'
      }
    ],
    letter: [
      {
        avatar:
          'https://cdn.eleadmin.com/20200609/c184eef391ae48dba87e3057e70238fb.jpg',
        title: 'SunSmile 评论了你的日志',
        content: '写的不错, 以后多多向你学习~',
        time: '2020-07-27 18:30:18'
      }
    ],
    todo: [
      {
        status: 0,
        title: '刘诗雨的请假审批',
        description: '刘诗雨在 07-27 18:30 提交的请假申请'
      }
    ]
  };
}
