import { xmhReq } from '@/utils/request';
import { LatestParams, LatestRes } from './model/latestModel';
enum Api {
  Latest = 'manga-list/mangabz.ashx',
  Search = 'search/',
  Chapters = 'info/',
  ChaptersDetails = 'view/'
}

export function latestPage(params: LatestParams) {
  return xmhReq.request<LatestRes>({
    url: Api.Latest,
    method: 'GET',
    formData: {
      action: 'getclasscomics',
      pageindex: params.pageIndex,
      pagesize: params.pageSize,
      tagid: 0,
      status: 0,
      sort: 2
    }
  });
}