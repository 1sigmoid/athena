var sr = require('./evn-micro')




module.exports = {
    explore: async function(student) {
        //Have to return all events in that particular city
        //So here
        
    }, 
    testexplore: async function(student) {
        var callback = new Promise((res, rej) => {
            var PRCSEvns = await sr.cityspecific(student.Location)
            //These are the events to process



            
        })

        let r = await callback; 
        return r;
    }, 
}