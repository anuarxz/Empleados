-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-02-2024 a las 13:57:17
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `experienceis`
--
DROP DATABASE IF EXISTS `empleados`;
CREATE DATABASE IF NOT EXISTS `empleados` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `empleados`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname1` varchar(250) NOT NULL,
  `surname2` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--
INSERT INTO `usuarios` (`id`, `name`, `surname1`, `surname2`, `email`) VALUES
(1, 'Anuar', 'Iziani', '', 'anuar@gmail.com'),
(2, 'Juan', 'Gomez', 'Garcia', 'juad32@yopmail.com'),
(3, 'Carlos', 'Pérez', 'Martínez', 'carlos.perez@example.com'),
(4, 'Laura', 'Fernández', 'López', 'laura.fernandez@example.com'),
(5, 'María', 'Rodríguez', 'Gómez', 'maria.rodriguez@example.com'),
(6, 'David', 'González', 'Sánchez', 'david.gonzalez@example.com'),
(7, 'Sara', 'Martínez', 'Rodríguez', 'sara.martinez@example.com'),
(8, 'José', 'Hernández', 'Pérez', 'jose.hernandez@example.com'),
(9, 'Ana', 'Sánchez', 'García', 'ana.sanchez@example.com'),
(10, 'Pedro', 'López', 'Martínez', 'pedro.lopez@example.com'),
(11, 'Elena', 'García', 'Fernández', 'elena.garcia@example.com');


--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
