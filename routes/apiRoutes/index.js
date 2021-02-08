const router = require("express").Router();
const animalRoutes = require("./animalRoutes");
const zookeeperRoutes = require("./zookeeprerRoutes");

router.use(animalRoutes);
router.use(zookeeperRoutes);

module.exports = router;
