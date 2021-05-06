import { latestPage, search, chapters, chapterDetail } from '@/apis/dmzj';
import { findByReg } from '@/utils';
import { Request, Response } from 'express';
export const getLatestPage = async (req: Request, res: Response) => {
  try {
    const result = await latestPage({ page: Number(req.params.page) });
    res.json(result);
  } catch(err) {
    res.json({
      err: err
    });
  }
};

export const getSearch = async (req: Request, res: Response) => {
  try {
    const result = await search({ keyword: req.params.keyword });
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
  } catch (error) {
    res.json(error);
  }
};

export const getComicChapters = async (req: Request, res: Response) => {
  try {
    const result = await chapters({ comicId: req.params.comicId });
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
  } catch (error) {
    res.json(error);
  }
};

export const getChapterDetails = async (req: Request, res: Response) => {
  try {
    const { comicId, chapterId } = req.body;
    const result = await chapterDetail({ chapterId, comicId });
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
  } catch (error) {
    res.json(error);
  }
};