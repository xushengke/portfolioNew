-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 09, 2018 at 12:20 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_works`
--

DROP TABLE IF EXISTS `tbl_works`;
CREATE TABLE IF NOT EXISTS `tbl_works` (
  `work_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `work_name` varchar(100) NOT NULL,
  `work_image` varchar(100) NOT NULL,
  `work_description` varchar(1000) NOT NULL,
  `work_link` varchar(1000) NOT NULL,
  PRIMARY KEY (`work_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_works`
--

INSERT INTO `tbl_works` (`work_id`, `work_name`, `work_image`, `work_description`, `work_link`) VALUES
(3, 'work1', 'work1.jpg', 'This is my work for the a beer company. This is a branding work. The company is in the north America so I use the white bear to create the logo. The ear of wheat represents the beer and the color is black and gold. I also made the label and put in on a bottle to create the fake bottle.', ''),
(4, 'work2', 'work2.jpg', 'This is my work for the company who make environment-friendly products. So I use the leave to create the logo and make a fake name ‘green company’. I also made a leaflet for them for an event. I use the green and brown to represent the trees and forests.', ''),
(5, 'work3', 'work3.jpg', 'This is my for a real company in China. They want to put their products on the Amazon so I made the products images for them. I use the light weight font to make it elegant. The background color has to be white so I use some strong colors to make the product look awesome.', ''),
(6, 'work4', 'work4.jpg', 'This is also my work for the company. They want to put their products on the Amazon so I made the products images for them. I use the light weight font to make it elegant. The background color has to be white so I use some strong colors to make the product look awesome.', ''),
(7, 'work5', 'work5.jpg', 'This is my work for ‘The lord of the ring’. The movie is an old movie for me so I make it a little bit old school. I also create a video for the movie. I use the footage of the original movie and cut the music myself. The final website is a little big dark because I think the movies is pretty cool.', 'lordofthering'),
(8, 'work6', 'work6.jpg', 'This is my work with my classmate. We made a fake tattoo studio website. We use the black and yellow to make the website beautiful. We also add some javascript stuff to add interactive stuff on the website. We decided to use crown as our name so we create a logo which is crown shape.', 'tattoo');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
