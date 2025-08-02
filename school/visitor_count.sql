-- Adminer 4.8.1 MySQL 8.0.35-0ubuntu0.20.04.1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `visitor_count`;
CREATE TABLE `visitor_count` (
  `id` int NOT NULL AUTO_INCREMENT,
  `count` int DEFAULT '0',
  `sessionid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- 2023-12-27 16:14:06
