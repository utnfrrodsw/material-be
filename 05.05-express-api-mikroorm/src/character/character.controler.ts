import { Request, Response, NextFunction } from 'express'
import { Character } from './character.entity.js'

function sanitizeCharacterInput(
  req: Request,
  res: Response,
  next: NextFunction
) {
  req.body.sanitizedInput = {
    name: req.body.name,
    characterClass: req.body.characterClass,
    level: req.body.level,
    hp: req.body.hp,
    mana: req.body.mana,
    attack: req.body.attack,
    items: req.body.items,
  }
  //more checks here

  Object.keys(req.body.sanitizedInput).forEach((key) => {
    if (req.body.sanitizedInput[key] === undefined) {
      delete req.body.sanitizedInput[key]
    }
  })
  next()
}

async function findAll(req: Request, res: Response) {
  res.status(500).json({ message: 'Not implemented' })
}

async function findOne(req: Request, res: Response) {
  res.status(500).json({ message: 'Not implemented' })
}

async function add(req: Request, res: Response) {
  res.status(500).json({ message: 'Not implemented' })
}

async function update(req: Request, res: Response) {
  res.status(500).json({ message: 'Not implemented' })
}

async function remove(req: Request, res: Response) {
  res.status(500).json({ message: 'Not implemented' })
}

export { sanitizeCharacterInput, findAll, findOne, add, update, remove }
