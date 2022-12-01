const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'my_database',
    password: 'Notch59#1',
    port: 5432
});

const getUsers = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM Users', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);

        })
    })
}
const getUserRoutes = (email, day) => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT BuildingPrefix, Order FROM Classes WHERE UserEmail = $1, Days = $2 ORDER BY Order;', [email, day], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);

        })
    })
}
const insertUser = (body) => {
    return new Promise(function (resolve, reject) {
        const { email, password } = body
        pool.query('INSERT INTO Users VALUES ($1, $2, CURRENT_DATE()) RETURNING *', [email, password], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new user has been added added: ${results.rows[0]}`)
        })
    })
}
const insertClasses = (body) => {
    return new Promise(function (resolve, reject) {
        const { day, email, building, order } = body
        pool.query('INSERT INTO Classes VALUES ($1, $2, $3, $4) RETURNING *', [day, email, building, order], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new class has been added added: ${results.rows[0]} at ${results.rows[2]}`)
        })
    })
}
const insertBuilding = (body) => {
    return new Promise(function (resolve, reject) {
        const { building, latitude, longitude } = body
        pool.query('INSERT INTO Building VALUES ($1, $2, $3) RETURNING *', [building, latitude, longitude], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new user has been added added: ${results.rows[0]}`)
        })
    })
}
const deleteClasses = () => {
    return new Promise(function (resolve, reject) {
        const email = parseInt(request.params.email)
        pool.query('DELETE FROM classes WHERE email = $1', [email], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Classes deleted with email: ${email}`)
        })
    })
}
const deleteOldUsers = () => { /*  Not Finished on any file  */
    return new Promise(function (resolve, reject) {
        const email = parseInt(request.params.email)
        pool.query('DELETE FROM Users WHERE Age(SignUpDate) >= 5', [email], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`All user accounts older than 5 years old purged.`)
        })
    })
}
module.exports = {
    getUserRoutes,
    insertUser,
    insertClasses,
    insertBuilding,
    deleteClasses,
    getUsers,
}