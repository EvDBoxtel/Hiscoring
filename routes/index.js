const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

//Welcome Page
router.get('/', (req, res) => res.render('welcome'));
//Dashboard
router.get('/dashboard', (req, res) => 
    res.render('dashboard', {
            name: req.user.name
        }
    )
);

router.get('/bewegenbeleven', (req, res) => 
    res.render('bewegenbeleven')
);

router.get('/bewegenverbeteren', (req, res) => 
    res.render('bewegenverbeteren')
);

router.get('/bewegenregelen', (req, res) => 
    res.render('bewegenregelen')
);

router.get('/gezondbewegen', (req, res) => 
    res.render('gezondbewegen')
);

router.get('/berichten', (req, res) => 
    res.render('berichten')
);

router.get('/werkboek', (req, res) => 
    res.render('werkboek')
);

router.get('/overzicht', (req, res) => 
    res.render('overzicht')
);

router.get('/weather', (req, res) => 
    res.render('weather')
);

// router.get('/Werkboek_Lichamelijke_Opvoeding_v1.pdf', (req, res) =>
//     res.render('Werkboek_Lichamelijke_Opvoeding_v1.pdf')
// );
module.exports = router;
