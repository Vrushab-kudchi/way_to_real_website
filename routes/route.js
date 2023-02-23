const express = require('express');
const router = express.Router();
const websiteController = require('../controllers/websiteController');


//website routes
router.get('/', websiteController.home)

router.get('/contact_us', websiteController.contact_us)

router.get('/daily_deposit', websiteController.daily_deposit)

router.get('/deposit_loan', websiteController.deposit_loan)

router.get('/dream_and_goal', websiteController.dream_and_goal)

router.get('/fixed_account', websiteController.fixed_account)

router.get('/gold_loan', websiteController.gold_loan)

router.get('/member', websiteController.member)

router.get('/mis_deposit', websiteController.mis_deposit)

router.get('/mortgage_loan', websiteController.mortage_loan)

router.get('/our_vision_and_mission', websiteController.our_vision_and_mission)

router.get('/recurring_deposit', websiteController.recurring_deposit)

router.get('/saving_account', websiteController.saving_account)

router.get('/about_us', websiteController.about_us)




module.exports = router;
