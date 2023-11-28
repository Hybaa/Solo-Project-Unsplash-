-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema unsplash
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema unsplash
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `unsplash` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `unsplash` ;

-- -----------------------------------------------------
-- Table `unsplash`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `unsplash`.`posts` (
  `id_post` INT NOT NULL AUTO_INCREMENT,
  `postName` VARCHAR(55) NOT NULL,
  `image` LONGTEXT NOT NULL,
  `desc` LONGTEXT NOT NULL,
  `hashtags` LONGTEXT NOT NULL,
  `likes` INT NOT NULL,
  `location` VARCHAR(145) NOT NULL,
  `date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_post`),
  UNIQUE INDEX `id_posts_UNIQUE` (`id_post` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `unsplash`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `unsplash`.`users` (
  `id_users` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(85) NOT NULL,
  `userEmail` VARCHAR(225) NOT NULL,
  `collectionName` VARCHAR(145) NOT NULL,
  PRIMARY KEY (`id_users`),
  UNIQUE INDEX `id_users_UNIQUE` (`id_users` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `unsplash`.`collection`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `unsplash`.`collection` (
  `users_id` INT NOT NULL,
  `posts_id` INT NOT NULL,
  `colName` VARCHAR(145) NOT NULL,
  PRIMARY KEY (`users_id`, `posts_id`),
  INDEX `fk_users_has_posts_posts1_idx` (`posts_id` ASC) VISIBLE,
  INDEX `fk_users_has_posts_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_posts_posts1`
    FOREIGN KEY (`posts_id`)
    REFERENCES `unsplash`.`posts` (`id_post`),
  CONSTRAINT `fk_users_has_posts_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `unsplash`.`users` (`id_users`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
