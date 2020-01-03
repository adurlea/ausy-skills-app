'use strict';

var sqlite3 = require('sqlite3').verbose();
const DBSOURCE = "db.users.sqlite";

exports.list_all_users = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log('GET all users');

  let db = new sqlite3.Database(DBSOURCE);
  var params = [];
  db.all("SELECT * FROM user", params, (err, rows) => {
    if (err) {
      console.error('SQL ERROR');
      res.json({});
    } else {
      console.log('ROWS : ' + rows.length);
      console.log("GET LIST OF USERS: " + JSON.stringify(rows));
      res.json(rows);
    }
  });
};

exports.read_a_user = function (req, res) {
  res.setHeader("Content-Type", "application/json");

  var userId = req.params.userId;
  let db = new sqlite3.Database(DBSOURCE);
  let nbUsers = 0;
  var params = [];

  db.all("SELECT COUNT(*) AS usersCount FROM user", params, (err, rows) => {
    if (err) {
      console.error('SQL ERROR COUNT USERS');
      res.json({});
    } else {
      nbUsers = rows[0].usersCount;
      console.log('COUNT ROWS : ' + nbUsers);
    }
  });

  setTimeout(function () {
    if (isNaN(userId) || userId < 1 || userId > nbUsers) {
      console.error('UserId ' + userId + ' is not in the database, max ID is ' + nbUsers);
      res.json({});
    } else {
      var params = [];
      db.all("SELECT * FROM user WHERE userId=" + userId, params, (err, rows) => {
        if (err) {
          console.error('SQL ERROR GETTING USER');
          res.json({});
        } else {
          console.log('ROWS : ' + rows.length);
          rows.forEach(function (row) {
            console.log("GET USER: " + JSON.stringify(row));
            res.json(row);
          });
        }
      });
    }
  }, 500);
};

exports.create_a_user = function (req, res) {
  console.log('POST new user:' + req.body.name);

  // Insert user in the DB
  let db = new sqlite3.Database(DBSOURCE);
  var insert = 'INSERT INTO user (userName, userAge, userJob, userSkills, userRating, userImage) VALUES (?,?,?,?,?,?)';

  // Transcripte Job title
  var job = "";
  switch (req.body.job) {
    case "CDP":
      job = "Chef de projet";
      break;
    case "ARC":
      job = "Architecte";
      break;
    case "DEV":
      job = "Développeur";
      break;
    case "REC":
      job = "Testeur";
      break;
    default:
      job = "Inconnu";
      break;
  }

  // Transcript all the skills
  var skills = "";
  let empty = true;

  if (req.body.jee) {
    skills = "JEE";
    empty = false;
  }

  if (req.body.java) {
    if (!empty) {
      skills += ","
    }
    skills += "Java";
    empty = false;
  }

  if (req.body.soa) {
    if (!empty) {
      skills += ","
    }
    skills += "SOA";
    empty = false;
  }

  if (req.body.javascript) {
    if (!empty) {
      skills += ","
    }
    skills += "JavaScript";
    empty = false;
  }

  if (req.body.angular) {
    if (!empty) {
      skills += ","
    }
    skills += "Angular";
    empty = false;
  }

  if (req.body.junit) {
    if (!empty) {
      skills += ","
    }
    skills += "Junit";
    empty = false;
  }

  if (req.body.selenium) {
    if (!empty) {
      skills += ","
    }
    skills += "Selenium";
    empty = false;
  }

  if (req.body.squash) {
    if (!empty) {
      skills += ","
    }
    skills += "Squash";
    empty = false;
  }

  if (req.body.robot) {
    if (!empty) {
      skills += ","
    }
    skills += "Robot Framework";
    empty = false;
  }

  if (req.body.cpp) {
    if (!empty) {
      skills += ","
    }
    skills += "C++";
    empty = false;
  }

  if (req.body.net) {
    if (!empty) {
      skills += ","
    }
    skills += ".Net";
    empty = false;
  }

  if (req.body.scrum) {
    if (!empty) {
      skills += ","
    }
    skills += "SCRUM";
    empty = false;
  }

  if (req.body.kanban) {
    if (!empty) {
      skills += ","
    }
    skills += "KANBAN";
    empty = false;
  }

  db.run(insert, [req.body.name, req.body.age, job, skills, req.body.rating, "assets/images/bob.jpg"]);

  var result = res.json({ userName: req.body.name, userAge: req.body.age, userJob: job, userRating: req.body.rating });

  return result;
};
