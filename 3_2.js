function bind (f, context) {

    return function() {
        return f.apply(context, arguments);
    };

}

function f () {
    console.log( this );
}

f = bind(f, 'test');

f();