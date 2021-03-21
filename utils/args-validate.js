const dash = require('dashargs');
var _ = require('lodash/core');

// kick off validation checks compared to model
const validateArguments = async (command, argumentsModel) => {
    let commandArguments = dash.parse(command);

    if ( checkAllowed(commandArguments, argumentsModel) === 'failed' || checkRequired(commandArguments, argumentsModel) === 'failed' ) {
        let status = { 'status': 'failed', 'reason': validationFailures };
        validationFailures = [];
        return status;
    } else {
        let status = { 'status': 'passed' };
        return status;
    }

    // await Promise.allSettled([checkAllowed(commandArguments, argumentsModel), checkRequired(commandArguments, argumentsModel)])
    //     .then((res) => {
    //         if (!_.isEmpty(validationFailures)) {
    //             return { 'status': 'failed', 'reason': validationFailures }
    //         } else {
    //             return { 'status': 'passed' }
    //         }
    //     });
};

// store any validation failures
// from checkAllowed or checkRequired
let validationFailures = [];

// check that all supplied arguments are defined in model
const checkAllowed = (args, argsModel) => {
    let unallowed = [];
    _.forEach(args, function(value, key) {
        if (!argsModel.some(item => item.name === key)) {
            unallowed.push(key);
        } 
    });
    if (!_.isEmpty(unallowed)) {
        validationFailures.push('The command contains unknown arguments: ' + unallowed.toString());
        return 'failed';
    }
};

// check that any required parameters are present
const checkRequired = (args, argsModel) => {
    let arguments = args;
    let missing = [];
    let required = argsModel
        .filter((def) => def.required)
        .map((def) => def.name);

    if (!_.isEmpty(required)) {
        _.forEach(required, function(field) {
            if (!_.has(arguments, field)) {
                missing.push(field);
            } 
        });
        if (!_.isEmpty(missing)) {
            validationFailures.push('The command is missing required argument(s): ' + missing.toString());
            return 'failed';
        }
    }
};

module.exports = { validateArguments };