var Journal = require('../models/journalModel.js');

module.exports = {
  CreateJournal: function(req, res, next){
    var newJournal = new Journal(req.body);
    newJournal.save(function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
        }
    })
  },

  // GetJournal: function(req, res, next){
  //   Journal.find(req.query)
  //   .populate('author', 'relationToBaby')
  //   .exec(function(err, response){
  //     if(err){
  //       res.status(500).json(err);
  //     } else {
  //       res.status(200).json(response);
  //       }
  //   })
  // },


  GetJournal: function(req, res, next){
    Journal.find(req.query, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
        }
    })
  },


  // GetJournalById: function(req, res, next){
  //   Journal.findById(req.params.id)
  //   .populate({path: 'author.relationToBaby'})
  //   .exec(function(err, response){
  //     if(err){
  //       res.status(500).json(err);
  //     } else {
  //       res.status(200).json(response);
  //       }
  //   })
  // },


  UpdateJournal: function(req, res, next){
    Journal.findByIdAndUpdate(req.params.id, req.body, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
        }
    })
  },


  DeleteJournal: function(req, res, next){
    Journal.findByIdAndRemove(req.params.id, function(err, response){
      console.log(err, response);
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
        }
    })
  }

}; //end of module.exports
