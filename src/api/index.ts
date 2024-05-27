import request from '@/utils/request'

export async function getBinGoNews(): Promise<any> {
  return request('?page=main&zone_name=news')
}
