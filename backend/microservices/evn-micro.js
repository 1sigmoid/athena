var mongoose = require('mongoose')

var event = require('./../models/event')


module.exports = {
    cityspecific: async function(city) {
        var callback = new Promise((res, rej) => {
            event.find({evnLocation: city}, async function(err, OBJ) {
                if(err) {
                    console.log(err)
                }
                else {
                    res(OBJ)
                }
            })
        })

        let r = await callback;
        return r

    },
    all: async function() {
        var callback = new Promise((res, rej) => {
            event.find({}, async function(err, OBJ) {
                if(err) {
                    console.log(err)
                }
                else {
                    res(OBJ)
                }
            })
        })
        let r = await callback;
        return r
    }, 
    search_normal: async function() {
        var callback = new Promise((res, rej)=> {
            event.find({}, async function(err, OBJ) {
                if (err) {
                    console.log(err)
                } else {
                    res(OBJ)
                }
            })
            let r = await callback;
            return r
        })
    },
    search_deep: async function() {
        var callback = new Promise((res, rej)=> {
            event.find({}, async function(err, OBJ) {
                if (err) {
                    console.log(err)
                } else {
                    res(OBJ)
                }
            })
            let r = await callback;
            return r
        })
    }, 
    search_archive: async function() {
        var callback = new Promise((res, rej)=> {
            event.find({}, async function(err, OBJ) {
                if (err) {
                    console.log(err)
                } else {
                    res(OBJ)
                }
            })
            let r = await callback;
            return r
        })
    }, 
}

