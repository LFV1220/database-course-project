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
        pool.query('SELECT * FROM users', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);

        })
    })
}
const getUserRoutes = (email, day) => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT BuildingPrefix, Order FROM classes WHERE UserEmail = $1, Days = $2 ORDER BY Order', [email, day], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results);
        })
    })
}
const getMostVisitedBuildings = (buildings) => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT BuildingPrefix, COUNT(Prefix) AS NumClasses FROM classes WHERE Prefix = $1 GROUP BY BuildingPrefix ORDER BY NumClasses desc LIMIT 3', [buildings], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results);
        })
    })
}
const insertUser = (body) => {
    return new Promise(function (resolve, reject) {
        const { email, password } = body
        pool.query('INSERT INTO users VALUES ($1, $2, CURRENT_DATE()) RETURNING *', [email, password], (error, results) => {
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
const deleteOldUsers = () => { /*  Not Finished on any file  */
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
    insertClasses,
    insertBuilding,
    insertFeedback,
    deleteClasses,
    deleteBuildings,
    deleteOldUsers,
    getUsers,
}