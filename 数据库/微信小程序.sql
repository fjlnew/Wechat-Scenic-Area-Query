/*
SQLyog Ultimate v11.24 (32 bit)
MySQL - 5.1.49-community : Database - weixinxiaocx
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`weixinxiaocx` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `weixinxiaocx`;

/*Table structure for table `introduction` */

DROP TABLE IF EXISTS `introduction`;

CREATE TABLE `introduction` (
  `place` char(10) NOT NULL,
  `xxname` char(10) NOT NULL,
  `xxjieshao` varchar(20000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `introduction` */

insert  into `introduction`(`place`,`xxname`,`xxjieshao`) values ('四川','剑门关','剑门关风景区是国家AAAAA级旅游景区，国家级风景名胜区，全国重点文物保护单位，国家森林公园，国家自然与文化双遗产，全国100个红色经典旅游景区之一。\r\n中国知名旅游目的地，国家文化产业示范基地，全国爱国主义教育基地，四川省自然保护区，四川省地质公园，《中国国家地理》四川最美100个拍摄点之一，已被列入中国世界文化遗产预备名单。剑门关风景区地处四川省广元市剑阁县城南15公里处。\r\n剑门关风景区由剑门关、翠云廊两个紧邻景区组成，总规划面积84平方公里，核心区面积6平方公里，有观赏景点（区）300余个，主要景点有剑门关、剑阁道、七十二峰、小剑山、姜公祠、姜维墓、邓艾墓、钟会故垒、金牛道、后关门、石笋峰、梁山寺、雷霆峡、翠屏峰、仙峰观、古剑溪桥、志公寺、4D影院、鸟道、玻璃景观平台等，是四川大九寨环线的重要节点和蜀道三国文化精品旅游线路的支撑中心。'),('四川','都江堰','剑门关风景区是国家AAAAA级旅游景区，国家级风景名胜区，全国重点文物保护单位，国家森林公园，国家自然与文化双遗产，全国100个红色经典旅游景区之一。\r\n中国知名旅游目的地，国家文化产业示范基地，全国爱国主义教育基地，四川省自然保护区，四川省地质公园，《中国国家地理》四川最美100个拍摄点之一，已被列入中国世界文化遗产预备名单。剑门关风景区地处四川省广元市剑阁县城南15公里处。\r\n剑门关风景区由剑门关、翠云廊两个紧邻景区组成，总规划面积84平方公里，核心区面积6平方公里，有观赏景点（区）300余个，主要景点有剑门关、剑阁道、七十二峰、小剑山、姜公祠、姜维墓、邓艾墓、钟会故垒、金牛道、后关门、石笋峰、梁山寺、雷霆峡、翠屏峰、仙峰观、古剑溪桥、志公寺、4D影院、鸟道、玻璃景观平台等，是四川大九寨环线的重要节点和蜀道三国文化精品旅游线路的支撑中心。'),('北京','天安门','天安门，坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800平方米，以杰出的建筑艺术和特殊的政治地位为世人所瞩目。\r\n天安门是明清两代北京皇城的正门，始建于明朝永乐十五年（1417年），最初名“承天门”，寓“承天启运、受命于天”之意。设计者为明代御用建筑匠师蒯祥。清朝顺治八年（1651年）更名为天安门。由城台和城楼两部分组成，有汉白玉石的须弥座，总高34.7米。天安门城楼长66米、宽37米。城台下有券门五阙，中间的券门最大，位于北京皇城中轴线上，过去只有皇帝才可以由此出入。正中门洞上方悬挂着毛泽东画像，两边分别是“中华人民共和国万岁”和“世界人民大团结万岁”的大幅标语。'),('北京','紫禁城','北京故宫是中国明清两代的皇家宫殿，旧称为紫禁城，位于北京中轴线的中心，是中国古代宫廷建筑之精华。北京故宫以三大殿为中心，占地面积72万平方米，建筑面积约15万平方米，有大小宫殿七十多座，房屋九千余间。是世界上现存规模最大、保存最为完整的木质结构古建筑之一。\r\n北京故宫于明成祖永乐四年（1406年）开始建设，以南京故宫为蓝本营建，到永乐十八年（1420年）建成。它是一座长方形城池，南北长961米，东西宽753米，四面围有高10米的城墙，城外有宽52米的护城河。紫禁城内的建筑分为外朝和内廷两部分。外朝的中心为太和殿、中和殿、保和殿，统称三大殿，是国家举行大典礼的地方。内廷的中心是乾清宫、交泰殿、坤宁宫，统称后三宫，是皇帝和皇后居住的正宫。'),('北京','雍和宫','雍和宫（The Lama Temple）位于北京市区东北角，清康熙三十三年（1694年），康熙帝在此建造府邸、赐予四子雍亲王，称雍亲王府。雍正三年（1725年），改王府为行宫，称雍和宫。雍正十三年（1735年），雍正帝驾崩，曾于此停放灵柩，因此，雍和宫主要殿堂原绿色琉璃瓦改为黄色琉璃瓦。又因乾隆皇帝诞生于此，雍和宫出了两位皇帝，成了“龙潜福地”，所以殿宇为黄瓦红墙，与紫禁城皇宫一样规格。乾隆九年（1744年），雍和宫改为喇嘛庙，特派总理事务王大臣管理本宫事务，无定员。可以说，雍和宫是清朝中后期全国规格最高的一座佛教寺院。\r\n1983年被国务院确定为汉族地区佛教全国重点寺院。该寺院主要由三座精致的牌坊和五进宏伟的大殿组成。从飞檐斗拱的东西牌坊到古色古香东、西顺山楼共占地面积66400平方米，有殿宇千余间。'),('北京','王府井','王府井大街（Wangfujing Street）全长1818米，从南至北共分为4段，东长安街至东单三条段，长度为280米；东单三条至金鱼胡同段，长度为548米；金鱼胡同至灯市口大街段，长度为344米；灯市口大街至五四大街段，长度为646米。其中，东单三条至金鱼胡同段是北京知名的商业步行街“王府井步行街” 。王府井大街是一条具有数百年悠久历史的商业街，在北京享有“金街”美誉。');

/*Table structure for table `login` */

DROP TABLE IF EXISTS `login`;

CREATE TABLE `login` (
  `peoplename` char(20) NOT NULL,
  `passworld` char(12) NOT NULL,
  PRIMARY KEY (`peoplename`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `login` */

insert  into `login`(`peoplename`,`passworld`) values ('001','123'),('002','123'),('1','2'),('2','123'),('6','1');

/*Table structure for table `placepic` */

DROP TABLE IF EXISTS `placepic`;

CREATE TABLE `placepic` (
  `place` char(5) NOT NULL,
  `pictrue` char(20) NOT NULL,
  `loca` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `placepic` */

insert  into `placepic`(`place`,`pictrue`,`loca`) values ('四川','康定.jpg','康定'),('四川','无须海.jpg','无须海'),('四川','稻城.jpg','稻城'),('四川','黄龙.jpg','黄龙'),('四川','阿坝.jpg','阿坝'),('四川','千佛崖.jpg','千佛崖'),('北京','北海.jpg','北海'),('北京','恭王府.jpg','恭王府'),('北京','故宫.jpg','故宫'),('北京','南锣鼓巷.jpg','南锣鼓巷'),('北京','鸟巢.jpg','鸟巢');

/*Table structure for table `showbox` */

DROP TABLE IF EXISTS `showbox`;

CREATE TABLE `showbox` (
  `place` char(10) NOT NULL,
  `smallplace` char(10) NOT NULL,
  `url` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `showbox` */

insert  into `showbox`(`place`,`smallplace`,`url`) values ('四川','成都','成都.jpg'),('四川','都江堰','都江堰.jpg'),('四川','青城山','青城山.jpg'),('四川','峨眉山','峨眉山.jpg'),('四川','阆中','阆中.jpg'),('四川','乐山','乐山.jpg'),('四川','九寨沟','九寨沟.jpg'),('四川','剑门关','剑门关.jpg'),('四川','三星堆','三星堆.jpg'),('四川','武侯祠','武侯祠.jpg'),('北京','三里屯','三里屯.jpg'),('北京','石花洞','石花洞.jpg'),('北京','水立方','水立方.jpg'),('北京','天安门','天安门.jpg'),('北京','王府井','王府井.jpg'),('北京','颐和园','颐和园.jpg'),('北京','雍和宫','雍和宫.jpg'),('北京','圆明园','圆明园.jpg'),('北京','长城','长城.jpg'),('北京','紫禁城','紫禁城.jpg');

/*Table structure for table `showpic` */

DROP TABLE IF EXISTS `showpic`;

CREATE TABLE `showpic` (
  `place` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `showpic` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
