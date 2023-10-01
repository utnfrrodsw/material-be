import { Repository } from '../shared/repository.js'
import { Character } from './character.entity.js'
import { db } from '../shared/db/conn.js'
import { ObjectId } from 'mongodb'

const characters = db.collection<Character>('characters')

export class CharacterRepository implements Repository<Character> {
  public async findAll(): Promise<Character[] | undefined> {
    return await characters.find().toArray()
  }

  public async findOne(item: { id: string }): Promise<Character | undefined> {
    const _id = new ObjectId(item.id)
    return (await characters.findOne({ _id })) || undefined
  }

  public async add(item: Character): Promise<Character | undefined> {
    item._id = (await characters.insertOne(item)).insertedId
    return item
  }

  public async update(id: string, item: Character): Promise<Character | undefined> {
    const _id = new ObjectId(id)
    return (await characters.findOneAndUpdate({ _id }, { $set: item }, { returnDocument: 'after' })) || undefined
  }

  public async delete(item: { id: string }): Promise<Character | undefined> {
    const _id = new ObjectId(item.id)
    return (await characters.findOneAndDelete({ _id })) || undefined
  }
}
