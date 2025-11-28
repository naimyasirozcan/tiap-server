const enums = {

    EMPLOYEE_TITLES : ["operator", "coach", "team leader", "shift leader", "exception handler", "supervisor"],
    EMPLOYEE_ROLES : ["user", "admin", "superAdmin"],
    EMAIL_REGEX: [/^[a-z]+\.[a-z]+[0-9]{2}@[a-z]+\.com$/, "Email should be in this format: jane.smith01@company.com"],
    DEPARTMENTS : ["outbound"],

    RECEIEVED_AS : ["costumer complaint", "operation error"],
    EXCEPTION_STATUS : ["handled", "irrecoverable", "replaced", "backlog"],
    EXCEPTION_TYPES : ["missing", "damaged"],
    EXCEPTION_REGEX: /^[a-z]+\.[a-z]+[0-9]{2}@[a-z]+\.com$/,

    TASK_TYPES : ["picking", "packing"],
    ZONES : ["AR"],
    LOCATION_PURPOSES : ["picking", "packing", "exception"],

}

module.exports = enums