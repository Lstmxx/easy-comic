import { latestPage } from '@/apis/xmh';
import { Request, Response } from 'express';
export const getLatestPage = async (req: Request, res: Response) => {
  const { pageIndex, pageSize } = req.body;
  latestPage({ pageIndex, pageSize }).then((result) => {
    res.json(result);
  }).catch((err) => {
    res.json({
      err: err
    });
  });
};