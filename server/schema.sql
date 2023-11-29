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
-- Table `unsplash`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `unsplash`.`users` (
  `id_users` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(255) NOT NULL,
  `userEmail` VARCHAR(255) NOT NULL,
  `collectionName` VARCHAR(145) NOT NULL,
  PRIMARY KEY (`id_users`),
  UNIQUE INDEX `id_users_UNIQUE` (`id_users` ASC) VISIBLE,
  UNIQUE INDEX `userEmail_UNIQUE` (`userEmail` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT =0
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `unsplash`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `unsplash`.`posts` (
  `id_post` INT NOT NULL AUTO_INCREMENT,
  `postName` VARCHAR(45) NOT NULL,
  `img` VARCHAR(225) NOT NULL,
  `descreption` VARCHAR(85) NOT NULL,
  `hashtags` VARCHAR(95) NOT NULL,
  `map` VARCHAR(85) NOT NULL,
  `likes` INT NOT NULL DEFAULT 0,
  `date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id_post`),
  UNIQUE INDEX `id_posts_UNIQUE` (`id_post` ASC) VISIBLE,
  INDEX `fk_posts_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_posts_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `unsplash`.`users` (`id_users`))
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

ALTER TABLE `unsplash`.`collection` 
DROP FOREIGN KEY `fk_users_has_posts_posts1`;
ALTER TABLE `unsplash`.`collection` 
ADD CONSTRAINT `fk_users_has_posts_posts1`
  FOREIGN KEY (`posts_id`)
  REFERENCES `unsplash`.`posts` (`id_post`)
  ON DELETE CASCADE;


-- Inserting a user into the users table
INSERT INTO unsplash.users (userName, userEmail, collectionName) VALUES ('Hyba', 'hyba@gmaim.com', 'hyba');

INSERT INTO unsplash.users (userName, userEmail, collectionName) VALUES ('ahmed', 'Hadeda@gmaim.com', 'ahmed');

INSERT INTO unsplash.users (userName, userEmail, collectionName) VALUES ('Michael', 'michael_photographer@yahoo.com', 'MichaelsPortfolio');

INSERT INTO unsplash.users (userName, userEmail, collectionName) VALUES ('Emily', 'emily_artsy@hotmail.com', 'EmilysArtGallery');

INSERT INTO unsplash.users (userName, userEmail, collectionName) VALUES ('John', 'john@example.com', 'JohnsCollection');

INSERT INTO unsplash.users (userName, userEmail, collectionName) VALUES ('Bob', 'bob123@yahoo.com', 'BobsGallery');

INSERT INTO unsplash.users (userName, userEmail, collectionName) VALUES ('Sarah', 'sarah_photos@gmail.com', 'SarahsSnaps');

INSERT INTO unsplash.users (userName, userEmail, collectionName) VALUES ('Alice', 'alice@gmail.com', 'AlicesPhotos');

-- Inserting users into the users table
INSERT INTO `unsplash`.`users` (
    `userName`,
    `userEmail`,
    `collectionName`
) VALUES (
    'JohnDoe',
    'john.doe@example.com',
    'My Favorites'
);
INSERT INTO `unsplash`.`users` (
    `userName`,
    `userEmail`,
    `collectionName`
) VALUES (
    'JaneSmith',
    'jane.smith@example.com',
    'Nature Lovers'
);

INSERT INTO `unsplash`.`users` (
    `userName`,
    `userEmail`,
    `collectionName`
) VALUES (
    'MikeJohnson',
    'mike.johnson@example.com',
    'Adventure Seekers'
);

INSERT INTO `unsplash`.`users` (
    `userName`,
    `userEmail`,
    `collectionName`
) VALUES (
    'EmilyWilliams',
    'emily.williams@example.com',
    'City Explorers'
);

INSERT INTO `unsplash`.`users` (
    `userName`,
    `userEmail`,
    `collectionName`
) VALUES (
    'ChrisMiller',
    'chris.miller@example.com',
    'Art Enthusiasts'
);

INSERT INTO `unsplash`.`users` (
    `userName`,
    `userEmail`,
    `collectionName`
) VALUES (
    'SophiaBrown',
    'sophia.brown@example.com',
    'Sunset Admirers'
);

INSERT INTO `unsplash`.`users` (
    `userName`,
    `userEmail`,
    `collectionName`
) VALUES (
    'DanielLee',
    'daniel.lee@example.com',
    'Travel Memories'
);

INSERT INTO `unsplash`.`users` (
    `userName`,
    `userEmail`,
    `collectionName`
) VALUES (
    'OliviaClark',
    'olivia.clark@example.com',
    'Animal Lovers'
);

INSERT INTO `unsplash`.`users` (
    `userName`,
    `userEmail`,
    `collectionName`
) VALUES (
    'MatthewWhite',
    'matthew.white@example.com',
    'Historical Wonders'
);

INSERT INTO `unsplash`.`users` (
    `userName`,
    `userEmail`,
    `collectionName`
) VALUES (
    'AvaTurner',
    'ava.turner@example.com',
    'Modern Architecture'
);

INSERT INTO `unsplash`.`users` (
    `userName`,
    `userEmail`,
    `collectionName`
) VALUES (
    'LiamHarris',
    'liam.harris@example.com',
    'Mountain Explorers'
);















INSERT INTO `unsplash`.`posts` (
    `postName`,
    `img`,
    `descreption`,
    `hashtags`,
    `map`,
    `likes`,
    `users_id`
) VALUES (
    'Beautiful Sunset',
    'sunset.jpg',
    'An amazing view of the sunset over the mountains',
    '#sunset #nature #scenery',
    'Mountain View, XYZ',
    100,
    1
);
-- Example 1
INSERT INTO `unsplash`.`posts` (
    `postName`,
    `img`,
    `descreption`,
    `hashtags`,
    `map`,
    `likes`,
    `users_id`
) VALUES (
    'Golden Beach',
    'beach.jpg',
    'A serene beach with golden sand',
    '#beach #nature #relax',
    'Tropical Paradise, ABC',
    200,
    2
);

-- Example 2
INSERT INTO `unsplash`.`posts` (
    `postName`,
    `img`,
    `descreption`,
    `hashtags`,
    `map`,
    `likes`,
    `users_id`
) VALUES (
    'City Lights',
    'city.jpg',
    'Cityscape with dazzling lights at night',
    '#city #lights #urban',
    'City Center, XYZ',
    150,
    3
);

-- Example 3
INSERT INTO `unsplash`.`posts` (
    `postName`,
    `img`,
    `descreption`,
    `hashtags`,
    `map`,
    `likes`,
    `users_id`
) VALUES (
    'Snowy Mountains',
    'mountains.jpg',
    'Snow-capped mountains under a clear sky',
    '#mountains #snow #landscape',
    'Snowy Peaks, DEF',
    180,
    1
);

-- Example 4
INSERT INTO `unsplash`.`posts` (
    `postName`,
    `img`,
    `descreption`,
    `hashtags`,
    `map`,
    `likes`,
    `users_id`
) VALUES (
    'Colorful Gardens',
    'gardens.jpg',
    'Vibrant flowers in a beautiful garden',
    '#flowers #gardens #nature',
    'Botanical Gardens, LMN',
    120,
    2
);

-- Example 5
INSERT INTO `unsplash`.`posts` (
    `postName`,
    `img`,
    `descreption`,
    `hashtags`,
    `map`,
    `likes`,
    `users_id`
) VALUES (
    'Countryside Sunset',
    'countryside.jpg',
    'Sunset over a peaceful countryside landscape',
    '#sunset #landscape #peaceful',
    'Rural Fields, PQR',
    90,
    3
);

-- Example 6
INSERT INTO `unsplash`.`posts` (
    `postName`,
    `img`,
    `descreption`,
    `hashtags`,
    `map`,
    `likes`,
    `users_id`
) VALUES (
    'Modern Architecture',
    'architecture.jpg',
    'Sleek and modern architectural design',
    '#architecture #modern #design',
    'Urban District, STU',
    220,
    1
);

-- Example 7
INSERT INTO `unsplash`.`posts` (
    `postName`,
    `img`,
    `descreption`,
    `hashtags`,
    `map`,
    `likes`,
    `users_id`
) VALUES (
    'Misty Forest',
    'forest.jpg',
    'Mist-covered trees in a mysterious forest',
    '#forest #mist #nature',
    'Enchanted Woods, WXY',
    130,
    2
);

-- Example 8
INSERT INTO `unsplash`.`posts` (
    `postName`,
    `img`,
    `descreption`,
    `hashtags`,
    `map`,
    `likes`,
    `users_id`
) VALUES (
    'Historic Landmarks',
    'landmarks.jpg',
    'Iconic landmarks with rich history',
    '#landmarks #history #architecture',
    'Historical Square, UVW',
    190,
    3
);

-- Example 9
INSERT INTO `unsplash`.`posts` (
    `postName`,
    `img`,
    `descreption`,
    `hashtags`,
    `map`,
    `likes`,
    `users_id`
) VALUES (
    'Wildlife Safari',
    'safari.jpg',
    'A thrilling wildlife safari adventure',
    '#wildlife #safari #adventure',
    'Safari Park, GHI',
    110,
    1
);

-- Example 10
INSERT INTO `unsplash`.`posts` (
    `postName`,
    `img`,
    `descreption`,
    `hashtags`,
    `map`,
    `likes`,
    `users_id`
) VALUES (
    'Sunrise at the Lake',
    'lake.jpg',
    'Captivating sunrise by the tranquil lake',
    '#sunrise #lake #scenery',
    'Lakeside Retreat, JKL',
    170,
    2
);






-- Inserting a collection entry for a user and a post
INSERT INTO `unsplash`.`collection` (
    `users_id`,
    `posts_id`,
    `colName`
) VALUES (
    1,
    1,
    'Favorites'
);
-- User 1's Collection
INSERT INTO `unsplash`.`collection` (
    `users_id`,
    `posts_id`,
    `colName`
) VALUES (
    1,
    2,
    'Travel Memories'
);

INSERT INTO `unsplash`.`collection` (
    `users_id`,
    `posts_id`,
    `colName`
) VALUES (
    1,
    4,
    'Cityscapes'
);

-- User 2's Collection
INSERT INTO `unsplash`.`collection` (
    `users_id`,
    `posts_id`,
    `colName`
) VALUES (
    2,
    3,
    'Nature Wonders'
);

INSERT INTO `unsplash`.`collection` (
    `users_id`,
    `posts_id`,
    `colName`
) VALUES (
    2,
    5,
    'Adventure Spots'
);

-- User 3's Collection
INSERT INTO `unsplash`.`collection` (
    `users_id`,
    `posts_id`,
    `colName`
) VALUES (
    3,
    6,
    'Architectural Marvels'
);
-- User 1's Collection
INSERT INTO `unsplash`.`collection` (
    `users_id`,
    `posts_id`,
    `colName`
) VALUES (
    1,
    7,
    'Sunset Vibes'
);

-- User 2's Collection
INSERT INTO `unsplash`.`collection` (
    `users_id`,
    `posts_id`,
    `colName`
) VALUES (
    2,
    8,
    'Ocean Views'
);

INSERT INTO `unsplash`.`collection` (
    `users_id`,
    `posts_id`,
    `colName`
) VALUES (
    2,
    10,
    'Wildlife Encounters'
);

-- User 3's Collection
INSERT INTO `unsplash`.`collection` (
    `users_id`,
    `posts_id`,
    `colName`
) VALUES (
    3,
    9,
    'Historical Journeys'
);

INSERT INTO `unsplash`.`collection` (
    `users_id`,
    `posts_id`,
    `colName`
) VALUES (
    3,
    11,
    'Scenic Landscapes'
);
