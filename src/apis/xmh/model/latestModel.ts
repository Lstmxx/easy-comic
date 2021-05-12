export type LatestParams = {
  pageIndex: string
  pageSize: string
}
export type LatestItem = {
  Author?: string[],
  ComicPart?: string
  Content?: string
  ID?: number
  LastPartUrl?: string
  LastUpdateTime?: string
  Logo?: string
  ShelvesTime?: string
  ShowConver?: string
  ShowLastPartName?: string
  ShowPicUrlB?: string
  ShowReads?: string
  ShowSource?: any
  Star?: number
  Status?: number
  Title?: string
  UrlKey?: string
}

export type LatestRes = {
  Count?: number
  UpdateComicItems: LatestItem[]
}