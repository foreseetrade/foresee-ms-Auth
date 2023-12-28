import express, { Request, Response } from "express";
const router = express.Router();
console.log("Profile routes loaded");

router.get('/profile', (req: Request, res: Response) => {
    const user = req;
})

export default router;