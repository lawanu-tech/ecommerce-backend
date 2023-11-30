module.exports = {
    development: {
        HOST: 'mysql://f7co0mpjnzhcfdl1xrdb:************@aws.connect.psdb.cloud/ecomm_db?ssl={"rejectUnauthorized":true}',
        USER: "f7co0mpjnzhcfdl1xrdb",
        PASSWORD: "pscale_pw_cZP48yXBN37MfR0rZsGYhFUMJbG7NQppTlqOEYUQq1e",
        DB:"ecomm_db",
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