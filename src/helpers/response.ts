import express from "express"

const response = (res: express.Response, data: {}, code = 200) => {
  console.log(code)
  res.status(code).send({ ...data, timestamp: Date.now() });
};


export default response