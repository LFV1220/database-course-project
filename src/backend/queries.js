const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'my_database',
    password: 'Notch59#1',
    port: 5432
});

const getUsers = () => { // test query #1
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM users', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);

        })
    })
}
const getUsersDates = () => { // test query #2
    return new Promise(function (resolve, reject) {
        pool.query('SELECT Date_part(\'year\', signupdate) FROM users', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);

        })
    })
}
const getUserRoutes = (email, day) => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT BuildingPrefix, Order FROM classes WHERE UserEmail = $1 and Days = $2 ORDER BY Order', [email, day], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results);
        })
    })
}
const getMostVisitedBuildings = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT buildingprefix, COUNT(buildingprefix) AS numclasses FROM classes GROUP BY buildingprefix ORDER BY numclasses desc LIMIT 3', (error, results) => {
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
        pool.query('INSERT INTO users VALUES ($1, $2, CURRENT_DATE) RETURNING *', [email, password], (error, results) => {
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
        pool.query('INSERT INTO classes VALUES ($1, $2, $3, $4) RETURNING *', [day, email, building, order], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new class has been added added: ${results.rows[0]} at ${results.rows[2]}`)
        })
    })
}
const insertBuilding = (building, latitude, longitude) => {
    return new Promise(function (resolve, reject) {
        pool.query('INSERT INTO building VALUES ($1, $2, $3) ON CONFLICT DO NOTHING RETURNING *', [building, latitude, longitude], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new building has been added: ${building}`)
        })
    })
}
const insertFeedback = (body) => {
    return new Promise(function (resolve, reject) {
        const { email, feedbackText } = body
        pool.query('INSERT INTO Feedback VALUES ($1, $2) RETURNING *', [email, feedbackText], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`New feedback has been added at ${results.rows[0]}`)
        })
    })
}
const deleteClasses = (email) => {
    return new Promise(function (resolve, reject) {
        pool.query('DELETE FROM classes WHERE email = $1', [email], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Classes deleted with email: ${email}`)
        })
    })
}
const deleteBuildings = (prefix) => {
    return new Promise(function (resolve, reject) {
        pool.query('DELETE FROM buildings WHERE prefix = $1', [prefix], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Building deleted with prefix: ${prefix}`)
        })
    })
}
const deleteOldUsers = () => {
    return new Promise(function (resolve, reject) {
        pool.query('DELETE FROM users WHERE Date_part(\'year\', TIMESTAMP \'NOW()\') - Date_part(\'year\', signupdate) >= 2', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`All user accounts created 2 or more years ago purged.`)
        })
    })
}
module.exports = {
    getUserRoutes,
    insertUser,
    getMostVisitedBuildings,
    insertClasses,
    insertBuilding,
    insertFeedback,
    deleteClasses,
    deleteBuildings,
    deleteOldUsers,
    getUsers,
    getUsersDates,
}