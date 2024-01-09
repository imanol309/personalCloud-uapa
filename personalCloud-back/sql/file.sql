/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `file` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_file` text,
  `type` varchar(255) DEFAULT NULL,
  `link` text,
  `date` date DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_id` (`user_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `file` (`id`, `name_file`, `type`, `link`, `date`, `user_id`) VALUES
(1, '1.jpg', 'jpg', 'https://personalcloud-next.s3.amazonaws.com/1.jpg', '2024-01-08', 'user_2aEE3bGZaSlzbKHcQHdGHrFRbiN');
INSERT INTO `file` (`id`, `name_file`, `type`, `link`, `date`, `user_id`) VALUES
(75, 'lista-solicitudes_1703705684092.xlsx', 'pdf', 'https://personalcloud-next.s3.us-east-1.amazonaws.com/lista-solicitudes_1703705684092.xlsx', '2024-01-09', 'user_2aFb5yL9Lx7p64qOsUl7jv4BxD8');
INSERT INTO `file` (`id`, `name_file`, `type`, `link`, `date`, `user_id`) VALUES
(95, 'Screenshot 2023-06-29 121900.png', 'png', 'https://personalcloud-next.s3.us-east-1.amazonaws.com/Screenshot 2023-06-29 121900.png', '2024-01-09', 'user_2aFb5yL9Lx7p64qOsUl7jv4BxD8');
INSERT INTO `file` (`id`, `name_file`, `type`, `link`, `date`, `user_id`) VALUES
(96, 'Screenshot 2023-07-12 153436.png', 'png', 'https://personalcloud-next.s3.us-east-1.amazonaws.com/Screenshot 2023-07-12 153436.png', '2024-01-09', 'user_2aFb5yL9Lx7p64qOsUl7jv4BxD8'),
(97, 'Screenshot 2023-06-29 121910.png', 'png', 'https://personalcloud-next.s3.us-east-1.amazonaws.com/Screenshot 2023-06-29 121910.png', '2024-01-09', 'user_2aFb5yL9Lx7p64qOsUl7jv4BxD8'),
(98, 'Screenshot 2023-06-29 185437.png', 'png', 'https://personalcloud-next.s3.us-east-1.amazonaws.com/Screenshot 2023-06-29 185437.png', '2024-01-09', 'user_2aFb5yL9Lx7p64qOsUl7jv4BxD8'),
(99, 'Screenshot 2023-08-01 152441.png', 'png', 'https://personalcloud-next.s3.us-east-1.amazonaws.com/Screenshot 2023-08-01 152441.png', '2024-01-09', 'user_2aFb5yL9Lx7p64qOsUl7jv4BxD8'),
(100, 'Screenshot 2023-08-02 105449.png', 'png', 'https://personalcloud-next.s3.us-east-1.amazonaws.com/Screenshot 2023-08-02 105449.png', '2024-01-09', 'user_2aFb5yL9Lx7p64qOsUl7jv4BxD8'),
(101, 'Screenshot 2023-07-12 153436.png', 'png', 'https://personalcloud-next.s3.us-east-1.amazonaws.com/Screenshot 2023-07-12 153436.png', '2024-01-09', 'user_2aEE3bGZaSlzbKHcQHdGHrFRbiN'),
(102, 'Screenshot 2023-06-28 113318.png', 'png', 'https://personalcloud-next.s3.us-east-1.amazonaws.com/Screenshot 2023-06-28 113318.png', '2024-01-09', 'user_2aEE3bGZaSlzbKHcQHdGHrFRbiN'),
(103, 'Screenshot 2023-07-25 111730.png', 'png', 'https://personalcloud-next.s3.us-east-1.amazonaws.com/Screenshot 2023-07-25 111730.png', '2024-01-09', 'user_2aEE3bGZaSlzbKHcQHdGHrFRbiN'),
(104, 'Screenshot 2023-06-29 121910.png', 'png', 'https://personalcloud-next.s3.us-east-1.amazonaws.com/Screenshot 2023-06-29 121910.png', '2024-01-09', 'user_2aEE3bGZaSlzbKHcQHdGHrFRbiN'),
(105, 'Screenshot 2023-08-02 105449.png', 'png', 'https://personalcloud-next.s3.us-east-1.amazonaws.com/Screenshot 2023-08-02 105449.png', '2024-01-09', 'user_2aEE3bGZaSlzbKHcQHdGHrFRbiN');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;