import { RequestHandler } from 'express'
import { createAcaSemService } from './acaSem.services'

export const createAcaSem: RequestHandler = async (req, res, next) => {
  try {
    const result = await createAcaSemService(req.body)
    res.status(200).send({
      success: true,
      message: 'Academic Semester successfully',
      result: result,
    })
  } catch (error) {
    next(error)
  }
}
