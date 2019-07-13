import request from '@/utils/request';
import { isMethod } from '@babel/types';
import { get } from 'http';


//import request from 'umi-request';
export async function getMenuData(): Promise<any> {
  var t = request('https://localhost:44349/api/Menu')
  return t;
}


