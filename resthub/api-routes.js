let router = require('express').Router();

router.get('/', function (req, res) {
  res.json ({
    status : 'API is working',
    message : 'Welcome to Resthub crafted'
  });
});

var contactController = require('./siswaController');

router.route('/contacts')
.get(contactController.index)
.post(contactController.new);

router.route('/contacts/:contact_id')
.get(contactController.view)
.patch(contactController.update)
.put(contactController.update)
.delete(contactController.delete);

module.exports = router;
