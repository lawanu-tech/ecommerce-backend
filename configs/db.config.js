module.exports = {
    development: {
        HOST: "bzytrlvbbdwaw7lxewki-mysql.services.clever-cloud.com",
        USER: "uzdvvnpvxqizosug",
        PASSWORD: "aOAz6VWdYgtNZMzK8vfE",
        DB: "bzytrlvbbdwaw7lxewki",
        PORT:3306,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acuire: 30000, //max time in ms that a pool will try to get connection before throwing error
            idle: 10000  // maximum time in ms that a connection can be idle before being released
        }
    },
    test: {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "lawanu@91",
        DB: "ecom_test_db",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acuire: 30000, //max time in ms that a pool will try to get connection before throwing error
            idle: 10000  // maximum time in ms that a connection can be idle before being released
        }
    },
}