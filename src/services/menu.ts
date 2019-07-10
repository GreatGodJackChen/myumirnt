import request from '@/utils/request';

//import request from 'umi-request';

export async function getMenuData(): Promise<any> {
  var t = request('/api/getMenuData');
  return t;
}


