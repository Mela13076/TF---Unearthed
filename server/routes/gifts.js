import express from "express";
import GiftController from '../controllers/gifts.js'


// create a express router
const router = express.Router();

router.get('/', GiftController.getGifts)
router.get('/:giftId', GiftController.getGiftById)

export default router;
