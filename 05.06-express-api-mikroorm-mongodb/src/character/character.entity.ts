import {
  Entity,
  Property,
  ManyToMany,
  Cascade,
  ManyToOne,
  Rel,
} from '@mikro-orm/core'
import { BaseEntity } from '../shared/db/baseEntity.entity.js'
import { CharacterClass } from './characterClass.entity.js'
import { Item } from './item.entity.js'

@Entity()
export class Character extends BaseEntity {
  @Property({ nullable: false })
  name!: string

  @ManyToOne(() => CharacterClass, { nullable: false })
  characterClass!: Rel<CharacterClass>

  @Property({ nullable: false })
  level!: number

  @Property({ nullable: false })
  hp!: number

  @Property({ nullable: false })
  mana!: number

  @Property({ nullable: false })
  attack!: number

  @ManyToMany(() => Item, (item) => item.characters, {
    cascade: [Cascade.ALL],
    owner: true,
  })
  items!: Item[]
}
