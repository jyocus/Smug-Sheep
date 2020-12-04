//  Connect to db
// const db = require('../models');
const db = 'hello';
const blogModel = require('../models')
// Export Controller Methods
// module.exports = {
//     genericTest: function(req, res) {
//         res.json(db);
//     }
// };

module.exports = {
    findAll: function(req, res) {
      blogModel.Post.find(req.query) // .sort({ timestampKEY: -1/1?})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // findById: function(req, res) {
    //   db.Post.findById(req.params.id)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    create: function(req, res) {
      console.log("This is us hitting the create route!!!", req.body)
        blogModel.Post.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        blogModel.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    // remove: function(req, res) {
    //   db.Post.findById({ _id: req.params.id })
    //     .then(dbModel => dbModel.remove())
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }
  };