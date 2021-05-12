import { latestPage } from '@/apis/xmh';
import { Request, Response } from 'express';
export const getLatestPage = async (req: Request, res: Response) => {
  try {
    const { pageIndex, pageSize } = req.body;
    const result = await latestPage({ pageIndex, pageSize });
    res.json(result);
  } catch(err) {
    res.json({
      err: err
    });
  }
};