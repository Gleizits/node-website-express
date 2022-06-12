import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
  res.render("index", { title: "Web Node" });
});
router.get("/about", (req, res) => {
  res.render("about", { title: "About Node Website" });
});
router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});
export default router;