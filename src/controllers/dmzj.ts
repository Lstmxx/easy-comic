import { latestPage, search, chapters, chapterDetail } from '@/apis/dmzj';
import { findByReg } from '@/utils';
import { Request, Response } from 'express';
export const getLatestPage = (req: Request, res: Response) => {
  latestPage({ page: Number(req.params.page) }).then((result) => {
    res.json(result);
  }).catch((err) => {
    res.json({
      err: err
    });
  });
};

export const getSearch = (req: Request, res: Response) => {
  search({ keyword: req.params.keyword }).then((result) => {
    const findDataReg = /\[\{.*\}\]/g;
    const  r = findByReg(findDataReg, result.data || '');
    let data = {};
    try {
      data = JSON.parse(r);
    } catch (error) {
      data = {};
    }
    res.json({
      msg: '',
      data: data,
      code: 200
    });
  }).catch((err) => {
    res.json(err);
  });
};

export const getComicChapters = async (req: Request, res: Response) => {
  chapters({ comicId: req.params.comicId }).then((result) => {
    const findDataReg = /(\[\{.*\}\])/g;
    const r = findByReg(findDataReg, result.data || '');
    let data = {};
    try {
      data = JSON.parse(r);
    } catch (error) {
      data = {};
    }
    res.json({
      msg: '',
      data: data,
      code: 200
    });
  }).catch((err) => {
    res.json(err);
  });
};

export const getChapterDetails = async (req: Request, res: Response) => {
  const { comicId, chapterId } = req.body;
  chapterDetail({ chapterId, comicId }).then((result) => {
    const findDataReg = /mReader\.initData.*/g;
    const r = findByReg(findDataReg, result.data || '')
                .replace('mReader.initData(', '');
    let data = {};
    try {
      data = JSON.parse(`[${r.slice(0, r.lastIndexOf('}') + 1)}]`);
    } catch (error) {
      data = {};
    }
    res.json({
      msg: '',
      data: data,
      code: 200
    });
  }).catch((err) => {
    res.json(err);
  });
};