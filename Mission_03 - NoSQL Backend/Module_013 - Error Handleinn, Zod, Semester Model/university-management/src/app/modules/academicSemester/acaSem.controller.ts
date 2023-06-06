import { Request, Response } from 'express'
import { createAcaSemService } from './acaSem.services'
import { tryCatch } from '../../../utilities/tryCatch'

export const createAcaSem = tryCatch(async (req: Request, res: Response) => {
  const result = await createAcaSemService(req.body)
  res.status(200).send({
    success: true,
    message: 'Academic Semester successfully',
    result: result,
  })
})
