CREATE DATABASE  IF NOT EXISTS `gaz` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gaz`;
-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gaz
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `APP_CITIES`
--

DROP TABLE IF EXISTS `APP_CITIES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `APP_CITIES` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `NAME` varchar(80) NOT NULL,
  `CODE` varchar(10) NOT NULL,
  `TYPE` varchar(1) NOT NULL,
  `CITY_ID` int(10) unsigned DEFAULT NULL,
  `ACTIVE` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `CREATED_AT` timestamp NULL DEFAULT NULL,
  `UPDATED_AT` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `APP_MENUS`
--

DROP TABLE IF EXISTS `APP_MENUS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `APP_MENUS` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(3) NOT NULL,
  `name` varchar(150) NOT NULL,
  `path` varchar(200) NOT NULL DEFAULT '#',
  `icon` varchar(100) DEFAULT NULL,
  `id_menu` int(10) unsigned DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `APP_OPERATION_CENTERS`
--

DROP TABLE IF EXISTS `APP_OPERATION_CENTERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `APP_OPERATION_CENTERS` (
  `ID` int(11) NOT NULL,
  `CODE` varchar(3) NOT NULL,
  `NAME` varchar(50) NOT NULL,
  `APP_ZONE_ID` int(10) unsigned NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `APP_PROFILES`
--

DROP TABLE IF EXISTS `APP_PROFILES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `APP_PROFILES` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `code` varchar(2) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `APP_STATISTICS`
--

DROP TABLE IF EXISTS `APP_STATISTICS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `APP_STATISTICS` (
  `PERIOD` varchar(6) NOT NULL,
  `YEAR` varchar(4) NOT NULL,
  `MONTH` varchar(2) NOT NULL,
  `ID_OC` varchar(6) NOT NULL,
  `NAME_OC` varchar(30) DEFAULT NULL,
  `ID_ZONE` int(10) unsigned DEFAULT NULL,
  `NAME_ZONE` varchar(20) DEFAULT NULL,
  `CODIGO` varchar(12) NOT NULL,
  `SUCURSAL` varchar(2) NOT NULL,
  `ID_SUPERVISOR` varchar(10) DEFAULT NULL,
  `ID_REFERENCIA` varchar(8) NOT NULL,
  `PESOS` decimal(12,2) NOT NULL DEFAULT '0.00',
  `KILOS` decimal(10,2) NOT NULL DEFAULT '0.00',
  KEY `IDX_PERIOD` (`PERIOD`) /*!80000 INVISIBLE */,
  KEY `IDX_ID_OC` (`ID_OC`) /*!80000 INVISIBLE */,
  KEY `IDX_ID_ZONE` (`ID_ZONE`) /*!80000 INVISIBLE */,
  KEY `IDX_CODIGO` (`CODIGO`) /*!80000 INVISIBLE */,
  KEY `IDX_SUCURSAL` (`SUCURSAL`) /*!80000 INVISIBLE */,
  KEY `IDX_ID_SUPERVISOR` (`ID_SUPERVISOR`) /*!80000 INVISIBLE */,
  KEY `IDX_ID_REFERENCIA` (`ID_REFERENCIA`),
  KEY `IDX_YEAR` (`YEAR`) /*!80000 INVISIBLE */,
  KEY `IDX_MONTH` (`MONTH`),
  KEY `IDX_NAME_ZONE` (`NAME_ZONE`) /*!80000 INVISIBLE */,
  KEY `IDX_NAME_OC` (`NAME_OC`),
  KEY `IDX_PESOS` (`PESOS`) /*!80000 INVISIBLE */,
  KEY `IDX_KILOS` (`KILOS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `APP_USERS`
--

DROP TABLE IF EXISTS `APP_USERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `APP_USERS` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `adress` varchar(60) DEFAULT NULL,
  `id_city` int(10) unsigned DEFAULT NULL,
  `email` varchar(250) NOT NULL,
  `username` varchar(20) NOT NULL,
  `access` varchar(80) NOT NULL,
  `profile_id` int(10) unsigned NOT NULL,
  `supervisor_id` varchar(12) NOT NULL,
  `token` varchar(60) DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `accept_terms` tinyint(1) unsigned DEFAULT '0',
  `active` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `APP_V_KILOS_REFERENCIA`
--

DROP TABLE IF EXISTS `APP_V_KILOS_REFERENCIA`;
/*!50001 DROP VIEW IF EXISTS `APP_V_KILOS_REFERENCIA`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `APP_V_KILOS_REFERENCIA` AS SELECT 
 1 AS `YEAR`,
 1 AS `ID_REFERENCIA`,
 1 AS `PESOS`,
 1 AS `KILOS`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `APP_V_POS_AVERAGE`
--

DROP TABLE IF EXISTS `APP_V_POS_AVERAGE`;
/*!50001 DROP VIEW IF EXISTS `APP_V_POS_AVERAGE`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `APP_V_POS_AVERAGE` AS SELECT 
 1 AS `YEAR`,
 1 AS `MONTH`,
 1 AS `CODIGO`,
 1 AS `PESOS`,
 1 AS `KILOS`,
 1 AS `PRICE`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `APP_V_PRECIOS_ZONAS`
--

DROP TABLE IF EXISTS `APP_V_PRECIOS_ZONAS`;
/*!50001 DROP VIEW IF EXISTS `APP_V_PRECIOS_ZONAS`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `APP_V_PRECIOS_ZONAS` AS SELECT 
 1 AS `YEAR`,
 1 AS `MONTH`,
 1 AS `NAME_ZONE`,
 1 AS `PESOS`,
 1 AS `KILOS`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `APP_V_VENTAS_ZONAS`
--

DROP TABLE IF EXISTS `APP_V_VENTAS_ZONAS`;
/*!50001 DROP VIEW IF EXISTS `APP_V_VENTAS_ZONAS`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `APP_V_VENTAS_ZONAS` AS SELECT 
 1 AS `YEAR`,
 1 AS `NAME_ZONE`,
 1 AS `PESOS`,
 1 AS `KILOS`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `APP_ZONES`
--

DROP TABLE IF EXISTS `APP_ZONES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `APP_ZONES` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `NAME` varchar(12) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `CMMOVIMIENTO_VENTAS`
--

DROP TABLE IF EXISTS `CMMOVIMIENTO_VENTAS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `CMMOVIMIENTO_VENTAS` (
  `LAPSO_DOC` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_EMP` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CO` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_TIPDOC` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DOCUMENTO_FC` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FECHA_DCTO` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_TERC` char(13) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_SUC` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DOC_RM_EMP` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DOC_RM_CO` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DOC_RM_TIPO` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DOCUMENTO_RM` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FECHA_RM` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DOC_PD_CO` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DOC_PD_TIPO` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DOCUMENTO_PD` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DOC_ALT_EMP` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DOC_ALT_CO` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DOC_ALT_TIP` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DOCUMENTO_ALT` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_F_PAGO` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_VENDEDOR` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_ITEM` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_EXT_ITM` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_TALLA` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_SERIAL` char(112) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CONCEPTO` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_MOTIVO` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_UNIDAD` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CANTIDAD` decimal(20,4) DEFAULT NULL,
  `CANTIDAD_CAP` decimal(20,4) DEFAULT NULL,
  `PRECIO_UNI` decimal(20,4) DEFAULT NULL,
  `DSCTO_NETOS` decimal(20,4) DEFAULT NULL,
  `TOT_VENTA` decimal(20,4) DEFAULT NULL,
  `TOT_BRUTO` decimal(20,4) DEFAULT NULL,
  `IMP_NETOS` decimal(20,4) DEFAULT NULL,
  `COSTO_VTA` decimal(20,4) DEFAULT NULL,
  `RENTABIL` decimal(20,4) DEFAULT NULL,
  `PRECIO_UNI_ME` decimal(20,4) DEFAULT NULL,
  `DSCTO_NETOS_ME` decimal(20,4) DEFAULT NULL,
  `TOT_VENTA_ME` decimal(20,4) DEFAULT NULL,
  `IMP_NETOS_ME` decimal(20,4) DEFAULT NULL,
  `ID_LOCAL` char(5) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CANTIDAD_2` decimal(20,4) DEFAULT NULL,
  `ID_LOTE` char(12) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_UBICACION` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_LIPRE` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_LIDES` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CTA_CXC` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CO_CXC` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CTA_VEN` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CO_VEN` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CTA_CCO` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CO_CCO` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CCOSTO` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PROYECTO` char(10) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NRO_REQ` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_ORIDES` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PORC_DSCTO1` decimal(20,4) DEFAULT NULL,
  `PORC_DSCTO2` decimal(20,4) DEFAULT NULL,
  `PORC_DSCTO_GL1` decimal(20,4) DEFAULT NULL,
  `PORC_DSCTO_GL2` decimal(20,4) DEFAULT NULL,
  `PORC_TASA_IVA` decimal(20,4) DEFAULT NULL,
  `CANTIDAD_TALLA_1` decimal(20,4) DEFAULT NULL,
  `CANTIDAD_TALLA_2` decimal(20,4) DEFAULT NULL,
  `CANTIDAD_TALLA_3` decimal(20,4) DEFAULT NULL,
  `CANTIDAD_TALLA_4` decimal(20,4) DEFAULT NULL,
  `CANTIDAD_TALLA_5` decimal(20,4) DEFAULT NULL,
  `CANTIDAD_TALLA_6` decimal(20,4) DEFAULT NULL,
  `CANTIDAD_TALLA_7` decimal(20,4) DEFAULT NULL,
  `CANTIDAD_TALLA_8` decimal(20,4) DEFAULT NULL,
  `CANTIDAD_TALLA_9` decimal(20,4) DEFAULT NULL,
  `CANTIDAD_TALLA_10` decimal(20,4) DEFAULT NULL,
  `DETALLE_1` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DETALLE_2` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DETALLE_3` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DETALLE_4` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CARGUE_CO` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CARGUE_NRO` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FECHA_VCTO_LOTE` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_AUTOVENTA` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NOM_CLI_CONTADO` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NIT_CLI_CONTADO` char(13) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `TIP_IDE_CONTADO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PESO` decimal(20,4) DEFAULT NULL,
  `VOLUMEN` decimal(20,4) DEFAULT NULL,
  `FECHA_GEN` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_GRULOC` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_TERC_FA` char(13) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_SUC_FA` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NOMBRE_FA` char(50) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_VEND_CC` char(13) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NOMBRE_VEND` char(50) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CARGUE` char(9) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CLATER1` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CLATER2` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CLATER` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FECHA_PD` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DCTO_FACT` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ANO_FACT` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DETALLE_RM_1` char(60) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DETALLE_RM_2` char(60) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DETALLE_RM_3` char(60) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DETALLE_RM_4` char(60) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DETALLE_RM_5` char(60) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DETALLE_RM_6` char(60) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DETALLE_RM_7` char(60) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DETALLE_RM_8` char(60) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DETALLE_RM_9` char(60) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DETALLE_RM_10` char(60) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_TERC_MOV` char(13) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_SUC_MOV` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NOMBRE_TERC_MOV` char(60) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `VLRTOT_BRU_ME` decimal(20,4) DEFAULT NULL,
  `VLRDES_LINEA1_ME` decimal(20,4) DEFAULT NULL,
  `VLRDES_LINEA2_ME` decimal(20,4) DEFAULT NULL,
  `VLRDES_GLOBAL1_ME` decimal(20,4) DEFAULT NULL,
  `VLRDES_GLOBAL2_ME` decimal(20,4) DEFAULT NULL,
  `VLRIVA_ME` decimal(20,4) DEFAULT NULL,
  `VLRIMPOCONSUMO1_ME` decimal(20,4) DEFAULT NULL,
  `VLRIMPOCONSUMO2_ME` decimal(20,4) DEFAULT NULL,
  `VLRNET_ME` decimal(20,4) DEFAULT NULL,
  `DETALLE_DOC` char(60) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ORDEN_COMPRA` char(10) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `VLRIMPOCONSUMO1` decimal(20,4) DEFAULT NULL,
  `VLRIMPOCONSUMO2` decimal(20,4) DEFAULT NULL,
  `NTD_TALLA` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_TERC_PROV` char(13) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `VLRDES_LINEA1` decimal(20,4) DEFAULT NULL,
  `VLRDES_LINEA2` decimal(20,4) DEFAULT NULL,
  `VLRDES_GLOBAL1` decimal(20,4) DEFAULT NULL,
  `VLRDES_GLOBAL2` decimal(20,4) DEFAULT NULL,
  `CIUDAD_DESP_COD` char(10) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CIUDAD_DESP_DESC` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DIR_DESP` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CODBAR` char(15) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DOC_ALTERNO` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FECHA_VCTODOC` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CODIGO_SERIAL` char(20) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FEC_CIERRE_CAR` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `VTA_GRAVADA` decimal(20,4) DEFAULT NULL,
  `VTA_EXENTA` decimal(20,4) DEFAULT NULL,
  `CARGUE_ESTADO` char(10) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `HORA_ING_MOVRM` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FECHA_FV` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `HORA_ING_FV` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  KEY `IDX_LAPSO` (`LAPSO_DOC`),
  KEY `IDX_EMP` (`ID_EMP`),
  KEY `IDX_CO` (`ID_CO`),
  KEY `IDX_DCTO` (`ID_EMP`,`ID_CO`,`ID_TIPDOC`,`DOCUMENTO_FC`),
  KEY `IDX_FECHA` (`FECHA_DCTO`),
  KEY `IDX_TERC` (`ID_TERC`,`ID_SUC`),
  KEY `IDX_VENDEDOR` (`ID_VENDEDOR`),
  KEY `IDX_ITEM` (`ID_ITEM`,`ID_EXT_ITM`),
  KEY `IDX_CCOSTO` (`CCOSTO`),
  KEY `IDX_MOTIVO` (`ID_MOTIVO`),
  KEY `IDX_CONCEPTO` (`ID_CONCEPTO`),
  KEY `IDX_LOCAL` (`ID_LOCAL`),
  KEY `IDX_LIPRE` (`ID_LIPRE`),
  KEY `IDX_ORIDES` (`ID_ORIDES`),
  KEY `IDX_CLATER` (`ID_CLATER`),
  KEY `IDX_GRULOC` (`ID_GRULOC`),
  KEY `IDX_SUC` (`ID_SUC`),
  KEY `ID_TIPDOC` (`ID_TIPDOC`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `FICHAS_TEC_CLI`
--

DROP TABLE IF EXISTS `FICHAS_TEC_CLI`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `FICHAS_TEC_CLI` (
  `ID_TERC` char(13) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_SUC` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_FTEC` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_NRO_CAMPO` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_DESC` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CAMPO` char(15) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_DESC_CAMPO` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  KEY `ID_TERC` (`ID_TERC`,`ID_SUC`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ITEMS`
--

DROP TABLE IF EXISTS `ITEMS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ITEMS` (
  `ID_ITEM` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_EXT_ITM` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_REFERENCIA` char(15) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CODBAR` char(15) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DESCRIPCION` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DESCRIPCION_2` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_PROCEDENCIA` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_TIPO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_LINEA1_6` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_LINEA1` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_LINEA3_6` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_LINEA2` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_LINEA5_6` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_LINEA` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_GRUPO1_6` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_GRUPO1` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_GRUPO3_6` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_GRUPO2` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_GRUPO5_6` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_GRUPO` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_GRUCON` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CRICLA1` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CRICLA2` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CRICLA3` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CRICLA4` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ESTADO` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `UNIMED_INV_1` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `UNIMED_INV_2` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FACTOR_INV_2` decimal(20,4) DEFAULT NULL,
  `UNIMED_EMPAQ` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FACTOR_EMPAQ` decimal(20,4) DEFAULT NULL,
  `PESO` decimal(20,4) DEFAULT NULL,
  `VOLUMEN` decimal(20,4) DEFAULT NULL,
  `ID_CURVA` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IMPUESTO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `RTEFTE` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_CLASIF` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_BODEGA_DEFAULT` char(5) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `COSTO_EST_ESTENIV` decimal(20,4) DEFAULT NULL,
  `COSTO_EST_ACUM` decimal(20,4) DEFAULT NULL,
  `COSTO_ACT_ESTENIV` decimal(20,4) DEFAULT NULL,
  `COSTO_ACT_ACUM` decimal(20,4) DEFAULT NULL,
  `ULTIMO_COSTO_ED` decimal(20,4) DEFAULT NULL,
  `ID_TERC` char(13) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NOM_TERC` char(60) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DESC_ITEM_PADRE` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ARANCELARIA` char(14) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `REFERENCIA_ALT` char(15) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_TALLA` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_ESTADO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_RTE_RENTA` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_BASE_RENTA` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_PLAN_MAESTRO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_EXIGE_OP` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_POLIT_ORDEN` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `TAM_PROM_LOTE` decimal(20,4) DEFAULT NULL,
  `TIEMPO_SEG` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `INV_SEG` decimal(20,4) DEFAULT NULL,
  `PER_CUBRIM` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `TIEMPO_REP` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CRITICO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `BODEGA_DEFAULT` char(5) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `MIN_ORDENAR` decimal(20,4) DEFAULT NULL,
  `MAX_ORDENAR` decimal(20,4) DEFAULT NULL,
  `INCREM_ORDENAR` decimal(20,4) DEFAULT NULL,
  `PORC_DESPER` decimal(20,4) DEFAULT NULL,
  `COD_RUTA` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `COD_LISMAT` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `EXT_DEFAULT` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `UNIMED_COM` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FACTOR_COM` decimal(20,4) DEFAULT NULL,
  `FECHA_INGRESO` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  KEY `ITEMS_ix` (`ID_ITEM`,`ID_EXT_ITM`),
  KEY `ITEMS_REFER_ix` (`ID_REFERENCIA`,`ID_EXT_ITM`),
  KEY `ITEMS_LINEA1_ix` (`ID_LINEA1`),
  KEY `ITEMS_LINEA2_ix` (`ID_LINEA2`),
  KEY `ITEMS_LINEA1_6ix` (`ID_LINEA1_6`),
  KEY `ITEMS_LINEA3_6ix` (`ID_LINEA3_6`),
  KEY `ITEMS_LINEA5_6ix` (`ID_LINEA5_6`),
  KEY `ITEMS_LINEA_ix` (`ID_LINEA`),
  KEY `ITEMS_CRICLA1_ix` (`ID_CRICLA1`),
  KEY `ITEMS_CRICLA2_ix` (`ID_CRICLA2`),
  KEY `ITEMS_CRICLA3_ix` (`ID_CRICLA3`),
  KEY `ITEMS_CRICLA4_ix` (`ID_CRICLA4`),
  KEY `ITEMS_DESC_ix` (`DESCRIPCION`),
  KEY `TIPINV_ix` (`ID_TIPO`),
  KEY `ITEM_LINEA1_IX` (`ID_TIPO`,`ID_LINEA1`),
  KEY `ITEM_LINEA2_IX` (`ID_TIPO`,`ID_LINEA2`),
  KEY `ITEM_LINEA1_6IX` (`ID_TIPO`,`ID_LINEA1_6`),
  KEY `ITEM_LINEA3_6IX` (`ID_TIPO`,`ID_LINEA3_6`),
  KEY `ITEM_LINEA5_6IX` (`ID_TIPO`,`ID_LINEA5_6`),
  KEY `ITEM_LINEA_IX` (`ID_TIPO`,`ID_LINEA`),
  KEY `ITEM_GRUPO_IX` (`ID_TIPO`,`ID_GRUPO`),
  KEY `ITEM_GRUPO16_IX` (`ID_TIPO`,`ID_GRUPO1_6`),
  KEY `ITEM_GRUPO36_IX` (`ID_TIPO`,`ID_GRUPO3_6`),
  KEY `ITEM_GRUPO56_IX` (`ID_TIPO`,`ID_GRUPO5_6`),
  KEY `ITEM_GRUPO1_IX` (`ID_TIPO`,`ID_GRUPO1`),
  KEY `ITEM_GRUPO2_IX` (`ID_TIPO`,`ID_GRUPO2`),
  KEY `ITEM_CRICLA1_IX` (`ID_CRICLA1`),
  KEY `ITEM_CRICLA2_IX` (`ID_CRICLA2`),
  KEY `ITEM_CRICLA3_IX` (`ID_CRICLA3`),
  KEY `ITEM_CRICLA4_IX` (`ID_CRICLA4`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `TERCEROS`
--

DROP TABLE IF EXISTS `TERCEROS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `TERCEROS` (
  `CODIGO` char(13) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `SUCURSAL` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DESCRIPCION` char(50) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NIT` char(15) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NIT_DV` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `TIPO_TERCERO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `TIPO_IDENTIFICA` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_CLI` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_PRO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_EMPL` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_ACCI` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_VAR` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_INT` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_TAR` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_PDV` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ESTADO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FECHA_CREACION` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PAIS_CORRESP` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DPTO_CORRESP` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CIUDAD_CORRESP` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DIRECCION_1` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DIRECCION_2` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DIRECCION_3` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `TELEFONO_1` char(15) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `TELEFONO_2` char(15) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FAX` char(15) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `BARRIO` char(15) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CODIGO_CIIU` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `EMAIL` char(50) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ESTABLECIMIENTO` char(50) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_CLASE_1` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_CLASE_2` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_CLASE` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_CO` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_ZONA_1` char(9) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_ZONA_2` char(9) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_ZONA` char(9) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_VENDEDOR` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_CONTACTO` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_CRITERIO_NIV_1` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_CRITERIO_NIV_2` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_CRITERIO_NIV_3` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_CALIFICA` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_COND_PAGO` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_OBSERVA` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_D_GRACIA` decimal(20,6) DEFAULT NULL,
  `CLI_CUPO_CRE` decimal(20,6) DEFAULT NULL,
  `CLI_DSCTO_GL` decimal(20,6) DEFAULT NULL,
  `CLI_IND_BLO_CUPO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_IND_BLO_MORA` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_ESTADO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_LIPRE` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_LIDES` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_FORMA_PAGO` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_RUTA_VIS` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_RUTA_TRA` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_PUNTO_ENV` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PRO_CLASE_1` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PRO_CLASE_2` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PRO_CLASE` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PRO_CONTACTO` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PRO_COND_PAGO` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PRO_D_GRACIA` decimal(20,6) DEFAULT NULL,
  `PRO_CUPO_CRE` decimal(20,6) DEFAULT NULL,
  `PRO_ESTADO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PRO_OBSERVA` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PRO_CPTO_FUJO` char(10) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PRO_CALIFICA` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_RETEIVA` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_RETEICA` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_RETEOTR` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_PTOENV` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PTOENV_DESC` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_GRAN_CONT` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `APELLIDO1` char(15) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `APELLIDO2` char(15) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NOMBRES` char(20) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CIUDAD_TERCERO` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_LIQ_IMPTO_C` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PRO_FORMA_PAGO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `TIPO_CUENTA` char(20) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `METODO_PAGO` char(20) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NRO_CTA_BANCO` char(30) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `TITULAR_CTA` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `COD_BANCO` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DESC_BANCO` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FICHA_TECNICA` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_RETERENTA` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_REGIMEN_SIMP` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `MES_NACI` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DIA_NACI` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `TIPO_DIAN` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `EXIGE_CHEQUE_POSF` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `EXIGE_OC` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `OBSERVACION_C` char(60) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DIAS_PP_PROV` decimal(20,4) DEFAULT NULL,
  `DSCTO_PP_PROV` decimal(20,4) DEFAULT NULL,
  `DCTO_PP_CLIEN` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FECHA_ULT_PAGO` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `TOT_DIAS_ATRAS` char(5) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NRO_PAGO_ATRAS` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `TOT_DIAS_PAGO` char(5) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NRO_PAGOS` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FEC_ULT_VENTA` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `VENTA_BRUTA` decimal(20,2) DEFAULT NULL,
  `COSTO_VENTAS` decimal(20,2) DEFAULT NULL,
  `DESCUENTOS` decimal(20,2) DEFAULT NULL,
  `FACT_MAYOR_VLR` decimal(20,2) DEFAULT NULL,
  `NRO_VENTAS` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NRO_DEVOL` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NRO_CHEDEV` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FEC_ULT_MVTO` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `P_FECHA_ULT_PAGO` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `P_TOT_DIAS_ATRAS` char(5) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `P_NRO_PAGO_ATRAS` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `P_TOT_DIAS_PAGO` char(5) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `P_NRO_PAGOS` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `P_FEC_ULT_COMPRA` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `P_COMPRAS_BRUTAS` decimal(20,2) DEFAULT NULL,
  `P_NRO_COMPRAS` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `P_NRO_DEVOL` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `P_FEC_ULT_MVTO` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_IND_REMISIONES_C` char(14) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_FT_CAMPO1_C` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_FT_CAMPO2_C` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `COD_POSTAL` char(10) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `GRAN_CONTRIB_C` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `GRAN_CONTRIB_P` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_RETERENTA_P` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLI_CARNET` char(13) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  KEY `TERC_ix` (`CODIGO`,`SUCURSAL`),
  KEY `NIT_ix` (`NIT`),
  KEY `IXTERC_CLI_CLASE_1` (`CLI_CLASE_1`),
  KEY `IXTERC_CLI_CLASE_2` (`CLI_CLASE_2`),
  KEY `IXTERC_CLI_CLASE_3` (`CLI_CLASE`),
  KEY `IXTERC_CO` (`CLI_CO`),
  KEY `IXTERC_ZONA_1` (`CLI_ZONA_1`),
  KEY `IXTERC_ZONA_2` (`CLI_ZONA_2`),
  KEY `IXTERC_ZONA_3` (`CLI_ZONA`),
  KEY `IXTERC_VENDEDOR` (`CLI_VENDEDOR`),
  KEY `IXTERC_CRIT1` (`CLI_CRITERIO_NIV_1`),
  KEY `IXTERC_CRIT2` (`CLI_CRITERIO_NIV_2`),
  KEY `IXTERC_CRIT3` (`CLI_CRITERIO_NIV_3`),
  KEY `IXTERC_FPAGO` (`CLI_FORMA_PAGO`),
  KEY `IXTERC_PRO_CLASE_1` (`PRO_CLASE_1`),
  KEY `IXTERC_PRO_CLASE_2` (`PRO_CLASE_2`),
  KEY `IXTERC_PRO_CLASE_3` (`PRO_CLASE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `cartera`
--

DROP TABLE IF EXISTS `cartera`;
/*!50001 DROP VIEW IF EXISTS `cartera`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `cartera` AS SELECT 
 1 AS `ID_CO`,
 1 AS `ZONA`,
 1 AS `NOMBRE_CENTRO`,
 1 AS `ID_CUENTA`,
 1 AS `DESCRIPCION`,
 1 AS `ID_TERC`,
 1 AS `ID_SUC`,
 1 AS `NOMBRE`,
 1 AS `TIPO_DOC`,
 1 AS `NUMERO`,
 1 AS `ID_CUOTA_CRU`,
 1 AS `ID_RANGO`,
 1 AS `ID_DIAS_VCTO`,
 1 AS `EDAD`,
 1 AS `LAPSO_DOC`,
 1 AS `FECHA`,
 1 AS `FECHA_VENCE`,
 1 AS `SALDOS_TOT_CARTERA`,
 1 AS `SALDOS_TOT_CARTERA_L2`,
 1 AS `CUPO`,
 1 AS `PLAZO`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `centro_operacion`
--

DROP TABLE IF EXISTS `centro_operacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `centro_operacion` (
  `CODIGO` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DESCRIPCION` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DIRECCION_1` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DIRECCION_2` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DIRECCION_3` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `GRUPO_CO` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CO_CONTABLE` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `UN_CONTABLE` char(20) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  KEY `CO_ix` (`CODIGO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cgresumen_cxc`
--

DROP TABLE IF EXISTS `cgresumen_cxc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cgresumen_cxc` (
  `ID_EMP` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CO` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CUENTA` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_TERC` char(13) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_SUC` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_TIPO_CRU` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_NRO_CRU` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CUOTA_CRU` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_VENDEDOR` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_RANGO` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_DIAS_VCTO` decimal(20,4) DEFAULT NULL,
  `LAPSO_DOC` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_FECHA` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_FECHA_VCTO` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CCOSTO` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_PROYECTO` char(10) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `SALDOS_TOT_CARTERA` decimal(20,4) DEFAULT NULL,
  `SALDOS_TOT_CARTERA_ME` decimal(20,4) DEFAULT NULL,
  `SALDOS_INI` decimal(20,4) DEFAULT NULL,
  `TOT_DEBITOS` decimal(20,4) DEFAULT NULL,
  `TOT_CREDITOS` decimal(20,4) DEFAULT NULL,
  `VLR_ORIGINAL` decimal(20,4) DEFAULT NULL,
  `FECHA_GEN` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_FECHA_CONTAB` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_FECHA_CANC` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_GPO_PROYEC` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PREFIJO_PROV` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NUMERO_PROV` char(12) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ANO_CXC` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FORMA_PAGO_DOC` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `TOT_PPAGO` decimal(20,4) DEFAULT NULL,
  `TOT_PPAGO_ME` decimal(20,4) DEFAULT NULL,
  `TOT_RETE_IMP` decimal(20,4) DEFAULT NULL,
  `TOT_RETE_IMP_ME` decimal(20,4) DEFAULT NULL,
  `TOT_APROV` decimal(20,4) DEFAULT NULL,
  `TOT_APROV_ME` decimal(20,4) DEFAULT NULL,
  `FECHA_RADIC` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `VALOR_ORI_DOC` decimal(20,4) DEFAULT NULL,
  `FECHA_RECAUDO` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `SALDOS_TOT_CARTERA_L2` decimal(20,4) DEFAULT NULL,
  `SALDOS_TOT_CARTERA_L2_ME` decimal(20,4) DEFAULT NULL,
  `SALDOS_INI_L2` decimal(20,4) DEFAULT NULL,
  `TOT_DEBITOS_L2` decimal(20,4) DEFAULT NULL,
  `TOT_CREDITOS_L2` decimal(20,4) DEFAULT NULL,
  `VLR_ORIGINAL_L2` decimal(20,4) DEFAULT NULL,
  `CLASE_DOCTO` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `INMOBILARIA_LOCAL` char(9) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DIAS_GRACIA` decimal(20,0) DEFAULT NULL,
  `FECHA_CORTE` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CHEQUE_POSFEC` decimal(20,4) DEFAULT NULL,
  `PUNTO_ENVIO` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NOMBRE_PTOENV` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  KEY `IDX_LAPSO` (`LAPSO_DOC`),
  KEY `IDX_EMP` (`ID_EMP`),
  KEY `IDX_CO` (`ID_CO`),
  KEY `IDX_TERC` (`ID_TERC`,`ID_SUC`),
  KEY `IDX_CUENTA` (`ID_CUENTA`),
  KEY `IDX_TIPO_CRU` (`ID_TIPO_CRU`),
  KEY `IDX_DCTO_CRU` (`ID_EMP`,`ID_CO`,`ID_TIPO_CRU`,`ID_NRO_CRU`),
  KEY `IDX_VENDEDOR` (`ID_VENDEDOR`),
  KEY `IDX_FECHA` (`ID_FECHA`),
  KEY `IDX_FECHA_VCTO` (`ID_FECHA_VCTO`),
  KEY `IDX_CCOSTO` (`ID_CCOSTO`),
  KEY `IDX_ANO_CXC` (`ANO_CXC`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cities` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `code` varchar(10) NOT NULL,
  `relation` varchar(20) DEFAULT NULL,
  `type` varchar(1) NOT NULL,
  `id_city` int(10) unsigned DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1134 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ciudades`
--

DROP TABLE IF EXISTS `ciudades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ciudades` (
  `ID_CIUDAD` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `UNCIUDAD_DESCRIPCION` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  KEY `CIUDADES_ix` (`ID_CIUDAD`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cmlista_descuentos_d`
--

DROP TABLE IF EXISTS `cmlista_descuentos_d`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cmlista_descuentos_d` (
  `ID_LIDES1` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_ITEM` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_EXT_ITM` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_REFERENCIA` char(15) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_TIPINV` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_GRULIN` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `LAPSO` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FECHA_VIG` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `IND_DSCTO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CANT_DES1` decimal(20,4) DEFAULT NULL,
  `CANT_DES2` decimal(20,4) DEFAULT NULL,
  `CANT_DES3` decimal(20,4) DEFAULT NULL,
  `CANT_DES4` decimal(20,4) DEFAULT NULL,
  `CANT_DES5` decimal(20,4) DEFAULT NULL,
  `PORC_DES1` decimal(20,4) DEFAULT NULL,
  `PORC_DES2` decimal(20,4) DEFAULT NULL,
  `PORC_DES3` decimal(20,4) DEFAULT NULL,
  `PORC_DES4` decimal(20,4) DEFAULT NULL,
  `PORC_DES5` decimal(20,4) DEFAULT NULL,
  `VLRS_DES1` decimal(20,4) DEFAULT NULL,
  `VLRS_DES2` decimal(20,4) DEFAULT NULL,
  `VLRS_DES3` decimal(20,4) DEFAULT NULL,
  `VLRS_DES4` decimal(20,4) DEFAULT NULL,
  `VLRS_DES5` decimal(20,4) DEFAULT NULL,
  `PORC_DSCTO_PP` decimal(20,4) DEFAULT NULL,
  `PORC_DSCTO2` decimal(20,4) DEFAULT NULL,
  `VLRS_DSCTO2` decimal(20,4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cmlista_precios_d`
--

DROP TABLE IF EXISTS `cmlista_precios_d`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cmlista_precios_d` (
  `ID_LIPRE1` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_ITEM` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_EXT_ITM` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_REFERENCIA` char(15) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `LAPSO` char(6) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FECHA_VIG` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `PRECIO_MIN_1` decimal(20,4) DEFAULT NULL,
  `PRECIO_MAX_1` decimal(20,4) DEFAULT NULL,
  `PRECIO_SUG_1` decimal(20,4) DEFAULT NULL,
  `VLRIVA_UNI_1` decimal(20,4) DEFAULT NULL,
  `IMPOCONSUMO1_1` decimal(20,4) DEFAULT NULL,
  `IMPOCONSUMO2_1` decimal(20,4) DEFAULT NULL,
  `PRECIO_MIN_2` decimal(20,4) DEFAULT NULL,
  `PRECIO_MAX_2` decimal(20,4) DEFAULT NULL,
  `PRECIO_SUG_2` decimal(20,4) DEFAULT NULL,
  `VLRIVA_UNI_2` decimal(20,4) DEFAULT NULL,
  `IMPOCONSUMO1_2` decimal(20,4) DEFAULT NULL,
  `IMPOCONSUMO2_2` decimal(20,4) DEFAULT NULL,
  `PUNTOS_MIN` decimal(20,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `configurations`
--

DROP TABLE IF EXISTS `configurations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `configurations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `code` varchar(10) NOT NULL,
  `value` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cuentas_contab`
--

DROP TABLE IF EXISTS `cuentas_contab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cuentas_contab` (
  `CODIGO` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_TIPOCTA` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CTANIV1` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CTANIV2` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CTANIV3` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CTANIV4` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CTANIV5` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CTANIV6` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CTANIV7` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CTANIV8` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DESCRIPCION` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NIVEL` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CUENTA_PADRE` char(8) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `TIPO` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `NATURALEZA` char(1) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `FMTO_EDICION` char(12) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `UNIDAD_NEGOCIO` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `COD_MONEDA` char(2) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  KEY `IX_CUENTA_N1` (`ID_CTANIV1`),
  KEY `IX_CUENTA_N2` (`ID_CTANIV2`),
  KEY `IX_CUENTA_N3` (`ID_CTANIV3`),
  KEY `IX_CUENTA_N4` (`ID_CTANIV4`),
  KEY `IX_CUENTA_N5` (`ID_CTANIV5`),
  KEY `IX_CUENTA_N6` (`ID_CTANIV6`),
  KEY `IX_CUENTA_N7` (`ID_CTANIV7`),
  KEY `IX_CUENTA_N8` (`ID_CTANIV8`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `departamentos`
--

DROP TABLE IF EXISTS `departamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `departamentos` (
  `ID_DPTO` char(5) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `UNDPTO_DESCRIPCION` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  KEY `DPTO_ix` (`ID_DPTO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `inventories`
--

DROP TABLE IF EXISTS `inventories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `inventories` (
  `code` varchar(10) NOT NULL,
  `branch_office` varchar(2) NOT NULL,
  `product` varchar(20) NOT NULL,
  `quantity` int(10) unsigned NOT NULL,
  UNIQUE KEY `fk_product` (`code`,`branch_office`,`product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `lista_descuentos`
--

DROP TABLE IF EXISTS `lista_descuentos`;
/*!50001 DROP VIEW IF EXISTS `lista_descuentos`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `lista_descuentos` AS SELECT 
 1 AS `discount_id`,
 1 AS `reference`,
 1 AS `effective_date`,
 1 AS `discount_vlr`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `lista_precios`
--

DROP TABLE IF EXISTS `lista_precios`;
/*!50001 DROP VIEW IF EXISTS `lista_precios`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `lista_precios` AS SELECT 
 1 AS `price_id`,
 1 AS `id_item`,
 1 AS `reference`,
 1 AS `effective_date`,
 1 AS `price`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `profiles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `code` varchar(2) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `prospects`
--

DROP TABLE IF EXISTS `prospects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `prospects` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `trade_name` varchar(100) DEFAULT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(250) NOT NULL,
  `address` varchar(100) NOT NULL,
  `id_city` int(10) unsigned NOT NULL,
  `location` json NOT NULL,
  `supplier` varchar(60) NOT NULL,
  `installed_capacity` json NOT NULL,
  `monthly_volume` int(10) unsigned NOT NULL,
  `observations` varchar(250) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `punto_ventas`
--

DROP TABLE IF EXISTS `punto_ventas`;
/*!50001 DROP VIEW IF EXISTS `punto_ventas`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `punto_ventas` AS SELECT 
 1 AS `ID_LIPRE1`,
 1 AS `CODE`,
 1 AS `SUC`,
 1 AS `DESCRIPTION`,
 1 AS `NAME`,
 1 AS `ESTABLISHMENT`,
 1 AS `DEPARTMENT`,
 1 AS `NAME_DEPARTMENT`,
 1 AS `CITY`,
 1 AS `NAME_CITY_T`,
 1 AS `NAME_CITY`,
 1 AS `DIRECTION`,
 1 AS `NEIGHBORHOOD`,
 1 AS `CO_CLIENT`,
 1 AS `DESRIPTION_CO`,
 1 AS `ZONE_CLIENT`,
 1 AS `DESRIPTION_ZONE`,
 1 AS `LI_PRICES`,
 1 AS `LI_DISCOUNTS`,
 1 AS `STATE`,
 1 AS `IN_CLIENT`,
 1 AS `FICHA_TECNICA`,
 1 AS `ID_SUPERVISOR`,
 1 AS `NAME_SUPER`,
 1 AS `GR`,
 1 AS `MK05`,
 1 AS `MK11`,
 1 AS `MK15`,
 1 AS `MK18`,
 1 AS `MK45`,
 1 AS `TK15`,
 1 AS `TK15C`,
 1 AS `TK18`,
 1 AS `TK21`,
 1 AS `TK22`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `punto_ventas_basico`
--

DROP TABLE IF EXISTS `punto_ventas_basico`;
/*!50001 DROP VIEW IF EXISTS `punto_ventas_basico`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `punto_ventas_basico` AS SELECT 
 1 AS `code`,
 1 AS `branch_office`,
 1 AS `name`,
 1 AS `establishment`,
 1 AS `department_code`,
 1 AS `department_name`,
 1 AS `city_code`,
 1 AS `city_name`,
 1 AS `id_price_list`,
 1 AS `id_discount_list`,
 1 AS `address`,
 1 AS `phone`,
 1 AS `neighborhood`,
 1 AS `id_supervisor`,
 1 AS `id_co`,
 1 AS `cartera`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `supervisores`
--

DROP TABLE IF EXISTS `supervisores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `supervisores` (
  `ID` varchar(15) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `NOMBRE` varchar(45) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `ID_CO` varchar(5) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `EMAIL` varchar(45) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `adress` varchar(60) DEFAULT NULL,
  `id_city` int(10) unsigned DEFAULT NULL,
  `email` varchar(250) NOT NULL,
  `username` varchar(20) NOT NULL,
  `access` varchar(80) NOT NULL,
  `id_profile` int(10) unsigned NOT NULL,
  `id_supervisor` varchar(10) NOT NULL,
  `token` varchar(60) DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `accept_terms` tinyint(1) unsigned DEFAULT '0',
  `active` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vendedores`
--

DROP TABLE IF EXISTS `vendedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `vendedores` (
  `CODIGO` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CEDULA` char(13) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `DESCRIPCION` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_RUTA` char(70) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_CLASE` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_SUPERVISOR` char(4) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `CLASE_DESC_VEND` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  KEY `VENDEDORES_ix` (`CODIGO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `visit_reports`
--

DROP TABLE IF EXISTS `visit_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `visit_reports` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_supervisor` varchar(12) NOT NULL,
  `date` date NOT NULL,
  `code` varchar(12) NOT NULL,
  `branch_office` varchar(2) NOT NULL,
  `location` json NOT NULL,
  `authorization` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `need` json DEFAULT NULL,
  `inventory` json DEFAULT NULL,
  `commercial_behavior` json DEFAULT NULL,
  `observation` varchar(250) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `start_location` json DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `end_location` json DEFAULT NULL,
  `is_finished` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `active` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `zonas_subzona`
--

DROP TABLE IF EXISTS `zonas_subzona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `zonas_subzona` (
  `ID_CO` char(3) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_ZONA` char(9) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_ZONA2` char(9) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `ID_ZONA1` char(9) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `UNZONAS_DESCRIPCION` char(40) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_cs;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'gaz'
--
/*!50003 DROP PROCEDURE IF EXISTS `UPDATE_DATA` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `UPDATE_DATA`()
BEGIN
TRUNCATE `gaz`.`APP_STATISTICS`;
INSERT INTO APP_STATISTICS (PERIOD, YEAR, MONTH, ID_OC, NAME_OC, ID_ZONE, NAME_ZONE, CODIGO, SUCURSAL, ID_SUPERVISOR, ID_REFERENCIA, PESOS, KILOS)
SELECT 
	v.LAPSO_DOC AS PERIOD,
	LEFT(`v`.`LAPSO_DOC`, 4) AS `YEAR`,
	RIGHT(`v`.`LAPSO_DOC`, 2) AS `MONTH`,
    t.CLI_CO AS ID_OC,
    oc.NAME AS NAME_OC,
	z.ID AS ID_ZONE,
    z.NAME AS NAME_ZONE,
    t.CODIGO,
    t.SUCURSAL,
    f.ID_DESC_CAMPO AS ID_SUPERVISOR,
    i.ID_REFERENCIA,
    CONVERT(SUM(v.TOT_VENTA), DECIMAL(12,2)) AS PESOS,
    CONVERT(SUM((v.CANTIDAD * i.PESO)), DECIMAL(10,2)) AS KILOS
FROM CMMOVIMIENTO_VENTAS v
	LEFT JOIN TERCEROS t ON v.ID_TERC = t.CODIGO AND v.ID_SUC = t.SUCURSAL
	LEFT JOIN APP_OPERATION_CENTERS oc ON t.CLI_CO = oc.CODE
	LEFT JOIN APP_ZONES z ON oc.APP_ZONE_ID = z.ID
	LEFT JOIN FICHAS_TEC_CLI f ON f.ID_TERC = t.CODIGO AND f.ID_SUC = t.SUCURSAL
	LEFT JOIN ITEMS i ON v.ID_ITEM = i.ID_ITEM
WHERE v.ID_TIPDOC <> '' AND i.ID_TIPO = '1'
GROUP BY v.LAPSO_DOC, t.CLI_CO, oc.NAME, z.ID, t.CODIGO, t.SUCURSAL, f.ID_DESC_CAMPO, i.ID_REFERENCIA;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `APP_V_KILOS_REFERENCIA`
--

/*!50001 DROP VIEW IF EXISTS `APP_V_KILOS_REFERENCIA`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `APP_V_KILOS_REFERENCIA` AS select `APP_STATISTICS`.`YEAR` AS `YEAR`,`APP_STATISTICS`.`ID_REFERENCIA` AS `ID_REFERENCIA`,sum(`APP_STATISTICS`.`PESOS`) AS `PESOS`,sum(`APP_STATISTICS`.`KILOS`) AS `KILOS` from `APP_STATISTICS` group by `APP_STATISTICS`.`YEAR`,`APP_STATISTICS`.`ID_REFERENCIA` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `APP_V_POS_AVERAGE`
--

/*!50001 DROP VIEW IF EXISTS `APP_V_POS_AVERAGE`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `APP_V_POS_AVERAGE` AS select `APP_STATISTICS`.`YEAR` AS `YEAR`,`APP_STATISTICS`.`MONTH` AS `MONTH`,`APP_STATISTICS`.`CODIGO` AS `CODIGO`,sum(`APP_STATISTICS`.`PESOS`) AS `PESOS`,sum(`APP_STATISTICS`.`KILOS`) AS `KILOS`,round((sum(`APP_STATISTICS`.`PESOS`) / sum(`APP_STATISTICS`.`KILOS`)),0) AS `PRICE` from `APP_STATISTICS` group by `APP_STATISTICS`.`YEAR`,`APP_STATISTICS`.`MONTH`,`APP_STATISTICS`.`CODIGO` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `APP_V_PRECIOS_ZONAS`
--

/*!50001 DROP VIEW IF EXISTS `APP_V_PRECIOS_ZONAS`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `APP_V_PRECIOS_ZONAS` AS select `APP_STATISTICS`.`YEAR` AS `YEAR`,`APP_STATISTICS`.`MONTH` AS `MONTH`,ifnull(`APP_STATISTICS`.`NAME_ZONE`,'OTROS') AS `NAME_ZONE`,sum(`APP_STATISTICS`.`PESOS`) AS `PESOS`,sum(`APP_STATISTICS`.`KILOS`) AS `KILOS` from `APP_STATISTICS` group by `APP_STATISTICS`.`YEAR`,`APP_STATISTICS`.`MONTH`,`APP_STATISTICS`.`NAME_ZONE` order by `APP_STATISTICS`.`YEAR`,`APP_STATISTICS`.`MONTH`,`NAME_ZONE` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `APP_V_VENTAS_ZONAS`
--

/*!50001 DROP VIEW IF EXISTS `APP_V_VENTAS_ZONAS`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `APP_V_VENTAS_ZONAS` AS select `APP_STATISTICS`.`YEAR` AS `YEAR`,ifnull(`APP_STATISTICS`.`NAME_ZONE`,'OTROS') AS `NAME_ZONE`,sum(`APP_STATISTICS`.`PESOS`) AS `PESOS`,sum(`APP_STATISTICS`.`KILOS`) AS `KILOS` from `APP_STATISTICS` group by `APP_STATISTICS`.`YEAR`,`APP_STATISTICS`.`NAME_ZONE` order by `APP_STATISTICS`.`YEAR`,`NAME_ZONE` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `cartera`
--

/*!50001 DROP VIEW IF EXISTS `cartera`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `cartera` AS select `cxc`.`ID_CO` AS `ID_CO`,(case `cxc`.`ID_CO` when 'Y01' then 'VALLE' when 'DP1' then 'VALLE' when 'BT1' then 'VALLE' when 'M01' then 'EJE CAFETERO' when 'DA1' then 'EJE CAFETERO' when 'DR1' then 'EJE CAFETERO' when 'R01' then 'ANTIOQUIA' when 'DB1' then 'ANTIOQUIA' when 'DN1' then 'CENTRO' when 'DS1' then 'CENTRO' when 'V01' then 'CENTRO' when 'S01' then 'CENTRO' when 'G01' then 'CENTRO' when 'U01' then 'CENTRO' when 'D01' then 'CENTRO' end) AS `ZONA`,(case `cxc`.`ID_CO` when 'Y01' then 'YUMBO' when 'DP1' then 'POPAYAN' when 'BT1' then 'BUENAVENTURA' when 'M01' then 'MANIZALES' when 'DA1' then 'ARMENIA' when 'DR1' then 'RIOSUCIO' when 'R01' then 'RIONEGRO' when 'DB1' then 'COPACABANA' when 'DN1' then 'SUBA' when 'DS1' then 'SOACHA' when 'V01' then 'VILLETA' when 'S01' then 'SAN FRANCISCO' when 'G01' then 'GUATEQUE' when 'U01' then 'UBAQUE' when 'D01' then 'ADMON BOGOTA' end) AS `NOMBRE_CENTRO`,`cxc`.`ID_CUENTA` AS `ID_CUENTA`,`cue`.`DESCRIPCION` AS `DESCRIPCION`,`cxc`.`ID_TERC` AS `ID_TERC`,`cxc`.`ID_SUC` AS `ID_SUC`,`ter`.`DESCRIPCION` AS `NOMBRE`,`cxc`.`ID_TIPO_CRU` AS `TIPO_DOC`,`cxc`.`ID_NRO_CRU` AS `NUMERO`,`cxc`.`ID_CUOTA_CRU` AS `ID_CUOTA_CRU`,`cxc`.`ID_RANGO` AS `ID_RANGO`,`cxc`.`ID_DIAS_VCTO` AS `ID_DIAS_VCTO`,(case when ((`cxc`.`ID_DIAS_VCTO` >= 1) and (`cxc`.`ID_DIAS_VCTO` <= 30)) then '1.-001-030' when ((`cxc`.`ID_DIAS_VCTO` >= 30) and (`cxc`.`ID_DIAS_VCTO` <= 60)) then '2.-031-060' when ((`cxc`.`ID_DIAS_VCTO` >= 60) and (`cxc`.`ID_DIAS_VCTO` <= 90)) then '3.-061-090' when (`cxc`.`ID_DIAS_VCTO` <= 0) then '0.-CORRIENTE' else '4.- + DE 90' end) AS `EDAD`,`cxc`.`LAPSO_DOC` AS `LAPSO_DOC`,`cxc`.`ID_FECHA` AS `FECHA`,`cxc`.`ID_FECHA_VCTO` AS `FECHA_VENCE`,`cxc`.`SALDOS_TOT_CARTERA` AS `SALDOS_TOT_CARTERA`,`cxc`.`SALDOS_TOT_CARTERA_L2` AS `SALDOS_TOT_CARTERA_L2`,`ter`.`CLI_CUPO_CRE` AS `CUPO`,`ter`.`CLI_COND_PAGO` AS `PLAZO` from ((`cgresumen_cxc` `cxc` join `TERCEROS` `ter` on(((`ter`.`CODIGO` = `cxc`.`ID_TERC`) and (`ter`.`SUCURSAL` = `cxc`.`ID_SUC`)))) join `cuentas_contab` `cue` on((`cxc`.`ID_CUENTA` = `cue`.`CODIGO`))) where ((`cxc`.`LAPSO_DOC` >= '201801') and (`cxc`.`SALDOS_TOT_CARTERA_L2` <> 0) and (left(`cxc`.`ID_CUENTA`,6) = '140805')) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `lista_descuentos`
--

/*!50001 DROP VIEW IF EXISTS `lista_descuentos`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `lista_descuentos` AS select `d`.`ID_LIDES1` AS `discount_id`,`d`.`ID_REFERENCIA` AS `reference`,`d`.`FECHA_VIG` AS `effective_date`,`d`.`VLRS_DES1` AS `discount_vlr` from `cmlista_descuentos_d` `d` order by `d`.`ID_LIDES1`,`d`.`ID_REFERENCIA`,`d`.`FECHA_VIG` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `lista_precios`
--

/*!50001 DROP VIEW IF EXISTS `lista_precios`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `lista_precios` AS select `p`.`ID_LIPRE1` AS `price_id`,`p`.`ID_ITEM` AS `id_item`,`p`.`ID_REFERENCIA` AS `reference`,`p`.`FECHA_VIG` AS `effective_date`,`p`.`PRECIO_MIN_1` AS `price` from (`cmlista_precios_d` `p` join `ITEMS` `i` on((`i`.`ID_ITEM` = `p`.`ID_ITEM`))) where (`i`.`ID_TIPO` = '1') order by `p`.`ID_LIPRE1`,`p`.`ID_ITEM`,`p`.`FECHA_VIG` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `punto_ventas`
--

/*!50001 DROP VIEW IF EXISTS `punto_ventas`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `punto_ventas` AS select `p`.`ID_LIPRE1` AS `ID_LIPRE1`,`t`.`CODIGO` AS `CODE`,`t`.`SUCURSAL` AS `SUC`,`t`.`DESCRIPCION` AS `DESCRIPTION`,concat(`t`.`NOMBRES`,' ',`t`.`APELLIDO1`,' ',`t`.`APELLIDO2`) AS `NAME`,`t`.`ESTABLECIMIENTO` AS `ESTABLISHMENT`,`t`.`DPTO_CORRESP` AS `DEPARTMENT`,`d`.`UNDPTO_DESCRIPCION` AS `NAME_DEPARTMENT`,`t`.`CIUDAD_CORRESP` AS `CITY`,`t`.`CIUDAD_TERCERO` AS `NAME_CITY_T`,`c`.`UNCIUDAD_DESCRIPCION` AS `NAME_CITY`,concat(`t`.`DIRECCION_1`,`t`.`DIRECCION_2`,`t`.`DIRECCION_3`) AS `DIRECTION`,`t`.`BARRIO` AS `NEIGHBORHOOD`,`t`.`CLI_CO` AS `CO_CLIENT`,`co`.`DESCRIPCION` AS `DESRIPTION_CO`,`t`.`CLI_ZONA` AS `ZONE_CLIENT`,`z`.`UNZONAS_DESCRIPCION` AS `DESRIPTION_ZONE`,`t`.`CLI_LIPRE` AS `LI_PRICES`,`t`.`CLI_LIDES` AS `LI_DISCOUNTS`,`t`.`ESTADO` AS `STATE`,`t`.`IND_CLI` AS `IN_CLIENT`,`t`.`FICHA_TECNICA` AS `FICHA_TECNICA`,`ft`.`ID_DESC_CAMPO` AS `ID_SUPERVISOR`,`s`.`NOMBRE` AS `NAME_SUPER`,max((case when (`p`.`ID_REFERENCIA` = 'GR') then `p`.`PRECIO_MIN_1` else 0 end)) AS `GR`,max((case when (`p`.`ID_REFERENCIA` = 'MK05') then `p`.`PRECIO_MIN_1` else 0 end)) AS `MK05`,max((case when (`p`.`ID_REFERENCIA` = 'MK11') then `p`.`PRECIO_MIN_1` else 0 end)) AS `MK11`,max((case when (`p`.`ID_REFERENCIA` = 'MK15') then `p`.`PRECIO_MIN_1` else 0 end)) AS `MK15`,max((case when (`p`.`ID_REFERENCIA` = 'MK18') then `p`.`PRECIO_MIN_1` else 0 end)) AS `MK18`,max((case when (`p`.`ID_REFERENCIA` = 'MK45') then `p`.`PRECIO_MIN_1` else 0 end)) AS `MK45`,max((case when (`p`.`ID_REFERENCIA` = 'TK15') then `p`.`PRECIO_MIN_1` else 0 end)) AS `TK15`,max((case when (`p`.`ID_REFERENCIA` = 'TK15C') then `p`.`PRECIO_MIN_1` else 0 end)) AS `TK15C`,max((case when (`p`.`ID_REFERENCIA` = 'TK18') then `p`.`PRECIO_MIN_1` else 0 end)) AS `TK18`,max((case when (`p`.`ID_REFERENCIA` = 'TK21') then `p`.`PRECIO_MIN_1` else 0 end)) AS `TK21`,max((case when (`p`.`ID_REFERENCIA` = 'TK22') then `p`.`PRECIO_MIN_1` else 0 end)) AS `TK22` from (((((`zonas_subzona` `z` left join (((`TERCEROS` `t` left join `departamentos` `d` on((`d`.`ID_DPTO` = `t`.`DPTO_CORRESP`))) left join `ciudades` `c` on((`c`.`ID_CIUDAD` = `t`.`CIUDAD_CORRESP`))) left join `centro_operacion` `co` on((`co`.`CODIGO` = `t`.`CLI_CO`))) on((`z`.`ID_ZONA` = `t`.`CLI_ZONA`))) left join `FICHAS_TEC_CLI` `ft` on(((`ft`.`ID_TERC` = `t`.`CODIGO`) and (`ft`.`ID_SUC` = `t`.`SUCURSAL`)))) left join `supervisores` `s` on((`s`.`ID` = `ft`.`ID_DESC_CAMPO`))) left join `cmlista_precios_d` `p` on((`p`.`ID_LIPRE1` = `t`.`CLI_LIPRE`))) left join `cmlista_descuentos_d` `ld` on((`ld`.`ID_LIDES1` = `t`.`CLI_LIDES`))) where ((`t`.`IND_CLI` = '1') and (`t`.`ESTADO` <> 'X') and (`t`.`CLI_LIPRE` <> '002') and (`t`.`CLI_LIPRE` <> '999') and (`t`.`FICHA_TECNICA` = '03')) group by `t`.`CODIGO`,`t`.`SUCURSAL` order by `p`.`ID_LIPRE1`,`t`.`CODIGO`,`p`.`FECHA_VIG` desc,`ld`.`FECHA_VIG` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `punto_ventas_basico`
--

/*!50001 DROP VIEW IF EXISTS `punto_ventas_basico`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `punto_ventas_basico` AS select `t`.`CODIGO` AS `code`,`t`.`SUCURSAL` AS `branch_office`,`t`.`DESCRIPCION` AS `name`,`t`.`ESTABLECIMIENTO` AS `establishment`,`t`.`DPTO_CORRESP` AS `department_code`,`d`.`UNDPTO_DESCRIPCION` AS `department_name`,`t`.`CIUDAD_CORRESP` AS `city_code`,`t`.`CIUDAD_TERCERO` AS `city_name`,`t`.`CLI_LIPRE` AS `id_price_list`,`t`.`CLI_LIDES` AS `id_discount_list`,concat_ws(' ',`t`.`DIRECCION_1`,`t`.`DIRECCION_2`,`t`.`DIRECCION_3`) AS `address`,concat_ws(`t`.`TELEFONO_1`,`t`.`TELEFONO_2`) AS `phone`,`t`.`BARRIO` AS `neighborhood`,`f`.`ID_DESC_CAMPO` AS `id_supervisor`,`t`.`CLI_CO` AS `id_co`,(select if((count(`cartera`.`ID_TERC`) > 0),1,0) AS `cartera` from `cartera` where ((`cartera`.`ID_TERC` = `t`.`CODIGO`) and (`cartera`.`ID_SUC` = `t`.`SUCURSAL`))) AS `cartera` from ((`TERCEROS` `t` join `FICHAS_TEC_CLI` `f` on(((`t`.`CODIGO` = `f`.`ID_TERC`) and (`t`.`SUCURSAL` = `f`.`ID_SUC`)))) left join `departamentos` `d` on((`t`.`DPTO_CORRESP` = `d`.`ID_DPTO`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-07  0:06:35
