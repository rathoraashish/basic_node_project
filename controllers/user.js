const con = require('../db/dbconfig')

// -----------------Insert new user to table--------------

exports.addUser = async (req) => {
    const userData = JSON.parse(req.body)
    console.log("saveUser controller::)", userData)
    const query = `insert into users(name,email,technology) values(${userData.name},'${userData.email}','${userData.technology}')`;
    const data = await con.query(query).then(obj => {
        console.log("1 record inserted", obj[0]);
        return obj[0]
    }).catch(err => {
        console.log("error", err);
        return err
    })
    // console.log("datataaaa", data);
    return data
}