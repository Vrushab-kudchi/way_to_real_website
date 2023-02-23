const website = {
    home: (req, res) => {
        res.render('website/home');
    },
    contact_us: (req, res) => {
        res.render('website/contact_us');
    },
    daily_deposit: (req, res) => {
        res.render('website/daily_deposit');
    },
    deposit_loan: (req, res) => {
        res.render('website/deposit_loan');
    },
    dream_and_goal: (req, res) => {
        res.render('website/dream_and_goal');
    },
    fixed_account: (req, res) => {
        res.render('website/fixed_account');
    },
    gold_loan: (req, res) => {
        res.render('website/gold_loan');
    },
    member: (req, res) => {
        res.render('website/member');
    },
    mis_deposit: (req, res) => {
        res.render('website/mis_deposit');
    },
    mortage_loan: (req, res) => {
        res.render('website/mortage_loan');
    },
    our_vision_and_mission: (req, res) => {
        res.render('website/our_vision_and_mission');
    },
    recurring_deposit: (req, res) => {
        res.render('website/recurring_deposit');
    },
    saving_account: (req, res) => {
        res.render('website/saving_account');
    },
    about_us: (req, res) => {
        res.render('website/about_us');
    }

}


module.exports = website
