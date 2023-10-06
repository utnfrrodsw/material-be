create database if not exists heroclash4geeks;

use heroclash4geeks;

## uncomment if you are not using docker
## create user if not exists dsw@'%' identified by 'dsw';
## grant select, update, insert, delete on heroclash4geeks.* to dsw@'%';


create table if not exists `heroclash4geeks`.`characters` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `characterClass` VARCHAR(255) NULL,
  `attack` INT UNSIGNED NULL,
  `hp` INT UNSIGNED NULL,
  `level` INT UNSIGNED NULL,
  `mana` INT UNSIGNED NULL,
  PRIMARY KEY (`id`));

create table if not exists `heroclash4geeks`.`characterItems` (
  `characterId` INT UNSIGNED NOT NULL,
  `itemName` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`characterId`, `itemName`),
  CONSTRAINT `fk_characterItem_character`
    FOREIGN KEY (`characterId`)
    REFERENCES `heroclash4geeks`.`characters` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE);

insert into heroclash4geeks.characters values(1,'Anakin Skywalker','Fallen Jedi',11,101,11,22);
insert into heroclash4geeks.characterItems values(1,'Lightsaber');
insert into heroclash4geeks.characterItems values(1,'Death Star');