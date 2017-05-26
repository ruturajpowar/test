console.log('\'Allo \'Allo!');
requirejs.config({
    baseUrl: 'scripts/modules',
    path: {
        //The libraries we use
        jquery: [
            'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js',
            //if cdn location fails load from this location
            'lib/jquery-3.2.1.min'
        ],
        underscore: 'lib/underscore',
        bootstrap: 'lib/bootstrap.min'
    }
});