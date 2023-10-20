import { Request, Response } from 'express'
import { Item } from './item.entity.js'
import { orm } from '../shared/db/orm.js'

const em = orm.em

async function findAll(req: Request, res: Response) {
  try {
    const items = await em.find(Item, {})
    res.status(200).json({ message: 'found all items', data: items })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id)
    const item = await em.findOneOrFail(Item, { id })
    res.status(200).json({ message: 'found item', data: item })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function add(req: Request, res: Response) {
  try {
    const item = em.create(Item, req.body)
    await em.flush()
    res.status(201).json({ message: 'item created', data: item })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function update(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id)
    const item = em.getReference(Item, id)
    em.assign(item, req.body)
    await em.flush()
    res.status(200).json({ message: 'item updated' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id)
    const item = em.getReference(Item, id)
    await em.removeAndFlush(item)
    res.status(200).send({ message: 'item deleted' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export { findAll, findOne, add, update, remove }
