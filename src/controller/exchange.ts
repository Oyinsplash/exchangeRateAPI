import express, { Request, Response, NextFunction } from "express";
import {
  getLatestRate,
} from "../services/exchange";
import response from "../helpers/response";


const latest = async (req: Request, res: Response) => {
  const result = await getLatestRate(req.query);
  return response(res, result);
};

export default latest;
