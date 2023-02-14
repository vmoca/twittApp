const User = require('../models/user')

exports.get('/:id', (req, res, next) => {
    User
      .findById(req.params.id)
      .exec((err, User) => {
        if (err) { return res.status(500).json(err); }
        if (!User) { return res.status(404).json(err); }
  
        return res.status(200).json(User);
      });
  });