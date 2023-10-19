import { Router } from 'express'
import {
  findAll,
  findOne,
  add,
  update,
  remove,
} from './characterClass.controler.js'

export const characterClassRouter = Router()

characterClassRouter.get('/', findAll)
characterClassRouter.get('/:id', findOne)
characterClassRouter.post('/', add)
characterClassRouter.put('/:id', update)
characterClassRouter.delete('/:id', remove)
