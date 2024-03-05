import request from '@/utils/request';

/**
 * 查询 api
 * get 方法 参数1：请求地址 参数2：请求信息
 */
export async function listUsers() {
  const res = await request.get('/system/user', { params });
  if (res.data.code === 0 && res.data.data) {
    return res.data.data;
  }
  return Promise.reject(new Error(res.data.message));
}

