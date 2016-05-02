// Update
db.kicker.update( {vip: 3004}, {
  $set: {
    'profile.rankin.no': 1
  }
})

db.kicker.update( {vip: 3004}, {
  $set: {
    'profile.votes': [1,2,3,4]
  }
})

// $addToSet
db.kicker.update( {}, {
  $addToSet: {
    'profile.votes': 5
  }
}, {multi:true})

db.kicker.update({}, {
  $pull: {
    'profile.votes': { $in: [2,3,4] }
  }
})

db.kicker.remove({'profile.hairColor': '#FFF'}, {justOne: true})
