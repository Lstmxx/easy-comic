import { RequestSender, Msg } from './type';
import { deepMerge, cloneDeep } from '@/utils';
import request from 'request';
import { Options, CoreOptions } from 'request';
export function promiseRequest(options: Options) {
  return new Promise((resolve, reject) => {
    try {
      request(options, function name(error, response, body) {
        if (!error && response.statusCode === 200) {
          resolve(body);
        } else {
          reject(error);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}

export class Request implements RequestSender {
  private readonly options: CoreOptions

  constructor(options: CoreOptions) {
    this.options = options;
  }

  parse(body: any) {
    return body;
  }

  async request<T = any>(options: Options): Promise<Msg<T>> {
    const thisOp = cloneDeep(this.options);
    const op = deepMerge(thisOp, options);
    op.url = encodeURI(op.url);
    const response: Msg<T> = {
      msg: '',
      code: 200,
      data: null
    };
    try {
      const body = await promiseRequest(op);
      const data = this.parse(body);
      response.data = data;
    } catch (error) {
      response.code = 500;
      response.msg = String(error);
    }
    return response;
  }
}
