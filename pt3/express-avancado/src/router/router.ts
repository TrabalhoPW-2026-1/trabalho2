import { Router } from "express";

import mainController from "../controllers/main.ts";
import majorController from "../controllers/major.ts";
import authController from "../controllers/auth.ts"
import gameController from "../controllers/game.ts"

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

router.get("/major", majorController.index);
router.all("/major/create", majorController.create);
router.get("/major/read/:id", majorController.read);
router.all("/major/update/:id", majorController.update);
router.post("/major/delete/:id", majorController.delete_);

router.get("/cookie", mainController.testCookie);
router.all("/signup", authController.signup);
router.all("/login", authController.login);
router.get("/logout", authController.logout);

router.get("/game/play", gameController.play)

export default router;
