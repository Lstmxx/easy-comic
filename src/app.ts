import bodyParse from 'body-parser';
import express from 'express';
import { NextFunction, Request, Response } from 'express';
import compression from 'compression';

import * as dmzjController from '@/controllers/dmzj';

import * as dmzjMiddleware from '@/middleware/dmzj';
const app = express();
/*中间件*/

// 压缩
app.use(compression());

// 请求解析
app.use(bodyParse.json({ limit: '20mb' }));
app.use(
  bodyParse.urlencoded(
    {
      limit: '20mb',
      extended: true
    }
  )
);

app.get('/dmzj/latest/:page', dmzjMiddleware.validateGet, dmzjController.getLatestPage);
app.get('/dmzj/search/:keyword', dmzjMiddleware.validateGet, dmzjController.getSearch);
app.get('/dmzj/comic/details/:comicId', dmzjMiddleware.validateGet, dmzjController.getComicChapters);
app.post('/dmzj/chapters/details', dmzjMiddleware.validateChapterDetailsParams, dmzjController.getChapterDetails);

app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
  return res.sendStatus(500);
});

export default app;
