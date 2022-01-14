const moment = require("moment");
const axios = require("axios");

/**
 * @param {array<number>} numbers - an array of numbers
 * @constraint implement this using built in Array functions; no for or while loops;
 * @return {array<number>} the original input array with negative numbers removed
 **/

function filter_out_negative_values(numbers) {
    const answer = numbers.filter((number) => number > 0)
    return answer;
}

/**
 * @param {array<number>} numbers - an array of numbers
 * @constraint implement this using built in Array functions; no for or while loops
 * @return {number} sum of all the negative numbers
 **/

function add_all_negative_values(numbers) {
    const neganswer = numbers.filter((number) => number < 0)
    const sum = neganswer.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    });
    return sum;
}

/**
 * @param {date_one} Date - a random date
 * @param {date_two} Date - a random date
 * @constraint implement this using the MomentJS module
 * @return {string} text representation of how many days are between the two given dates
 **/

function days_between(date_one, date_two) {

    const day1 = moment(date_one);
    const day2 = moment(date_two);

    return day2.diff(day1, 'days');

}

/**
 * @param {string} uuid - a string that may or may not be a valid uuid
 * @return {boolean} whether the string is a valid uuid or not
 **/

function validate_uuid(uuid) {

    const {default: axios} = require("axios");
    const {resourceLimits} = require("worker_threads");
    const {validate} = require("uuid");

    return validate(uuid);
}

/**
 * @param {string} name - someone's first name
 * @constraint use the https module and the api here: https://agify.io/
 * @return {number} the predicted age of that person
 **/

async function predict_age_by_name(name) {


    let data = 0;
    await axios.get(`https://api.agify.io?name=${name}`).then((api_response) => {
        data = api_response.data.age;
    })

    return data;
}

/**
 * @param {string} artist - the name of a musician
 * @constraint use the axios module and the api here: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
 * @return {array<string>} an array of song titles by the given artist
 **/

async function list_songs_by(artist) {

    let song_array = [];
    await axios.get(`https://itunes.apple.com/search?term=${artist}&entity=musicVideo`).then(function (response) {
        data = response.data.results;

        data.forEach((element) => {
            song_array.push(element.trackName);
        });
    });

    return song_array; // replace with yours
}

/**
 * ----------------
   ----------------
   DON'T CHANGE ANYTHING BELOW THIS LINE
   ----------------
   ----------------
 *
 **/

const commands = [
    'days_between(new Date("June 14, 1989"), new Date("October 26, 2005"))',
    'validate_uuid("710b962e-041c-11e1-9234-0123456789ab")',
    'filter_out_negative_values([-84, 99, 42, -71, 54, -94, -26, 91, 13, 100, 17, -21])',
    'add_all_negative_values([-84, 99, 42, -71, 54, -94, -26, 91, 13, 100, 17, -21])'
];

for (const command of commands) {
    console.log(`${command} = ${eval(command)}`);
}

async function run_async_functions() {
    console.log('predict_age_by_name("Christina") = ' + await predict_age_by_name("Christina"));
    console.log('list_songs_by("Beastie Boys") = ' + (await list_songs_by('Beastie Boys')).join(', '));
}

run_async_functions();