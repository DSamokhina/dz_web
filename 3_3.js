'use strict'

function f () {
    console.log(this === undefined);
}

f();