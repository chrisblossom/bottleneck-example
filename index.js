'use strict';

const Bottleneck = require('bottleneck');

const limiter1 = new Bottleneck(
    2,
    2000,
    undefined,
    false
);

const limiter2 = new Bottleneck(
    2,
    2000,
    undefined,
    false
);

const limiter3 = new Bottleneck(
    2,
    2000,
    undefined,
    true
);

const limiter4 = new Bottleneck(
    2,
    2000,
    undefined,
    true
);

function status() {
    console.log('limiter1.nbQueued:', limiter1.nbQueued());
    console.log('limiter1.nbRunning:', limiter1.nbRunning());

    console.log('limiter2.nbQueued:', limiter2.nbQueued());
    console.log('limiter2.nbRunning:', limiter2.nbRunning());

    console.log('limiter3.nbQueued:', limiter3.nbQueued());
    console.log('limiter3.nbRunning:', limiter3.nbRunning());

    console.log('limiter4.nbQueued:', limiter4.nbQueued());
    console.log('limiter4.nbRunning:', limiter4.nbRunning());
}

function sleep(limiter, message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`limiter${limiter} **** ${message} ****`)
            resolve(message);
        }, 2000)
    });
}

let count = 1;
while (count <= 8) {
    limiter1.schedule(sleep, '1', count)
        .then((message) => {
            console.log(`limiter1 **${message} done`);
            // do stuff here
        })
        .catch(error => {
            console.log('limiter1 ** ERROR **');
            // do error stuff here
        });

    limiter2.schedule(sleep, '2', count)
        .then((message) => {
            console.log(`limiter2 **${message} done`);
            // do stuff here
        })
        .catch(error => {
            console.log('limiter2 ** ERROR **');
            // do error stuff here
        });

    limiter3.schedule(sleep, '3', count)
        .then((message) => {
            console.log(`limiter3 **${message} done`);
            // do stuff here
        })
        .catch(error => {
            console.log('limiter3 ** ERROR **');
            // do error stuff here
        });

    limiter4.schedule(sleep, '4', count)
        .then((message) => {
            console.log(`limiter4 **${message} done`);
            // do stuff here
        })
        .catch(error => {
            console.log('limiter4 ** ERROR **');
            // do error stuff here
        });
    count += 1;
}

status();
setInterval(() => {
    status();
    console.log('next status in 4 seconds');
}, 4000)

setTimeout(() => {
    console.log('**STOPPING ALL LIMITERS START**')
    status();
    console.log('**STOPPING ALL LIMITERS START**')
    limiter1.stopAll(false);
    limiter2.stopAll(true);
    limiter3.stopAll(false);
    limiter4.stopAll(true);
    console.log('**STOPPING ALL LIMITERS DONE**')
    status();
    console.log('**STOPPING ALL LIMITERS DONE**')
}, 4000);

