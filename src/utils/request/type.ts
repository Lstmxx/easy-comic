import { Options } from 'request';

export type Msg<T> = {
  msg: string
  data: T | null
  code: number
}
export interface RequestSender {
  parse: (body: any) => any
  request: <T>(options: Options) => Promise<Msg<T>>
}
