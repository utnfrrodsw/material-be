import { Router } from 'express'
import { findAll, findOne, add, update, remove } from './item.controler.js'

export const itemRouter = Router()

itemRouter.get('/', findAll)
itemRouter.get('/:id', findOne)
itemRouter.post('/', add)
itemRouter.put('/:id', update)
itemRouter.delete('/:id', remove)
