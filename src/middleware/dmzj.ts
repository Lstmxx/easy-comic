import { NextFunction, Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
export function validateGet(req: Request, res: Response, next: NextFunction) {
  const { id = null, keyword = null, page = null } = req.params;
  if (id || keyword || page) {
    next();
  } else {
    res.json({
      code: 500,
      msg: '不合法参数名',
      data: null
    });
  }
}

export async function validateChapterDetailsParams(req: Request, res: Response, next: NextFunction) {
  console.log(req.body);
  await check('comicId', 'comicId 不能为空').not().isEmpty().run(req);
  await check('chapterId', 'chapterId 不能为空').not().isEmpty().run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.json({
      code: 500,
      msg: errors.array().join(' '),
      data: null
    });
  } else {
    next();
  }
}