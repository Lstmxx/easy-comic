import { Request } from './request';
import { CoreOptions } from 'request';
class Dmzj extends Request {
  parse(body: any) {
    try {
      body = JSON.parse(body);
      return body;
    } catch (error) {
      return body;
    }
  }
}

function createDmzj() {
  const op: CoreOptions = {
    baseUrl: 'https://m.dmzj.com/'
  };
  const dmzj = new Dmzj(op);
  return dmzj;
}

class Xmh extends Request {
  parse(body: any) {
    try {
      body = JSON.parse(body);
      return body;
    } catch (error) {
      return body;
    }
  }
}

function createXmh() {
  const op: CoreOptions = {
    baseUrl: 'http://www.xmanhua.com/',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  const xmh = new Xmh(op);
  return xmh;
}

export const dmzjReq = createDmzj();

export const xmhReq = createXmh();
