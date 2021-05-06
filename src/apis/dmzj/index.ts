
import { dmzjReq } from '@/utils/request';
import { ComicItem } from './model/baseModel';
import { LatestParams } from './model/latestModel';
import { SearchParams } from './model/searchModel';
import { ChaptersParams, ChapterDetailsParams } from './model/chapterModel';
enum Api {
  Latest = 'latest/',
  Search = 'search/',
  Chapters = 'info/',
  ChaptersDetails = 'view/'
}
export function latestPage(params: LatestParams) {
  return dmzjReq.request<ComicItem[]>({
    url: Api.Latest + params.page + '.json',
    method: 'GET'
  });
}

export async function search(params: SearchParams) {
  const html = await dmzjReq.request<string>({
    url: Api.Search + params.keyword + '.html',
    method: 'GET'
  });
  return html; 
}

export async function chapters(params: ChaptersParams) {
  const html = await dmzjReq.request<string>({
    url: Api.Chapters + params.comicId + '.html',
    method: 'GET'
  });
  return html;
}

export async function chapterDetail(params: ChapterDetailsParams) {
  const html = await dmzjReq.request<string>({
    url: `${Api.ChaptersDetails}${params.comicId}/${params.chapterId}.html`,
    method: 'GET'
  });
  return html;
}