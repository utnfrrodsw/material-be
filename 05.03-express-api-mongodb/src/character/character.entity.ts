import { ObjectId } from 'mongodb'
import crypto from 'node:crypto'

export class Character {
  constructor(
    public name: string,
    public characterClass: string,
    public level: number,
    public hp: number,
    public mana: number,
    public attack: number,
    public items: string[],
    public _id?: ObjectId
  ) {}
}
