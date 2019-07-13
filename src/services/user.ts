import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  return request('https://localhost:44349/api/User');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
