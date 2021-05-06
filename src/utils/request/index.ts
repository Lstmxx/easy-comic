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

export const dmzjReq = createDmzj();
