-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2022 at 03:41 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users_24`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(150) NOT NULL,
  `content` text NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `content`, `date`) VALUES
(1, 'Post 1', 'Text of Post 1', '2022-03-02'),
(2, 'Post 2', 'Text of Post 2', '2022-03-09'),
(3, 'Post 3', 'Text of Post 3', '2022-03-09'),
(4, 'Post 4', 'Text of Post 4', '2022-03-09');

-- --------------------------------------------------------

--
-- Table structure for table `tutorials`
--

CREATE TABLE `tutorials` (
  `id` int(11) NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(180) NOT NULL,
  `content` text NOT NULL,
  `private` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tutorials`
--

INSERT INTO `tutorials` (`id`, `user_id`, `title`, `content`, `private`) VALUES
(1, 5, 'Learn CSS', 'Use the Menu\r\nWe recommend reading this tutorial, in the sequence listed in the menu.\r\n\r\nIf you have a large screen, the menu will always be present on the left.\r\n\r\nIf you have a small screen, open the menu by clicking the top menu sign ☰.\r\n\r\nCSS Templates\r\nWe have created some responsive W3.CSS templates for you to use.\r\n\r\nYou are free to modify, save, share, and use them in all your projects.\r\n\r\nFree CSS Templates!', 1),
(2, 1, 'Learn HTML', 'HTML References\r\nAt W3Schools you will find complete references about HTML elements, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, browser support, and more:', 0),
(3, 2, 'Uzduotis', '1. Susikuriame lenteles:\r\n\r\nusers (id, email, password, reg_timestamp);\r\ntutorials (id, user_id, title, content, private: boolean).\r\n2. Sukuriame route’us:\r\n\r\nAuth: POST /login\r\nAuth: POST /register\r\nAuth: GET /users (paduoda skaičių vartotojų - t.y. COUNT users įrašus)\r\nTutorials: GET /user-tutorials/:id (tik prisijungusiems - paduoda visus tutorialus, kurie priklauso specifiniam vartotojui pagal jo ID)\r\nTutorials: GET /tutorials (paduoda visus tutorialus, jei vartotojas auth - paduoda visus; jei neprisijungęs, tik tuos, kur private = 0)\r\nTutorials: POST /tutorials (tik prisijungusiems vartotojams, sukuria naują įrašą - user_id paima iš token)\r\n3. Sukuriame frontend\'ą, kuriame būtų galima prisiregistruoti, prisijungti ir pamatyti sukurtus įrašus iš tutorials lentelės.', 1),
(4, 5, 'Learn SQL', 'SQL is a standard language for storing, manipulating and retrieving data in databases.\r\n\r\nOur SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `reg_timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `reg_timestamp`) VALUES
(1, 'my@email.com', '$2a$10$Dx3ERXhRyr6WMgVUvnKJw.Sn.aIq.2WJR3LxyKnlV3JiF/CHlHUWq', '2022-03-09 13:02:11'),
(2, 'my1@email.com', '$2a$10$aonhV/cngi0UipFccier7.t4WrJMq3VKVLKNr1GZ/CzxZt9WnwniS', '2022-03-09 13:21:49'),
(4, 'my2@email.com', '$2a$10$BCxQZY.etxd7KEWhbwUjju5jANhg9M.Xy55egkTD35aFd1cmBOqfK', '2022-03-09 13:46:33'),
(5, 'james@bond.lt', '$2a$10$QKhuuvQ.xHUU9E23mmzQGeNC3LxDrhsa9fc0.DqIcR/D9nhY4CAHC', '2022-03-10 13:39:40'),
(6, 'marius@marius.lt', '$2a$10$tf/3PSeR8pKUWRpycHI3seL8juPSLUUvgKNHEJQCFCx5vdM/S/0Su', '2022-03-10 13:45:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tutorials`
--
ALTER TABLE `tutorials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tutorials`
--
ALTER TABLE `tutorials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
