import { Router } from "express";

import mainController from "../controllers/main.ts";

const router = Router();

router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get(/^\/(api|rest)\/.+$/, mainController.api);
router.get("/usr/:name", mainController.user);
router.get("/search", mainController.search);
router.get("/redirect", mainController.redirect);
router.get("/json", mainController.json);
router.get("/download", mainController.download);
router.get("/lorem/:n", mainController.lorem);
router.get("/hb1", mainController.hb1);
router.get("/hb2", mainController.hb2);
router.get("/hb3", mainController.hb3);
router.get("/hb4", mainController.hb4);

export default router;
