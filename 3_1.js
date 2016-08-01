var summa = sum(5)(6)(5)(7);

console.log(summa.toString());

function sum(a){
    var c = a;
    function f(b){
        c+=b;
        return f;
    }

    f.toString = function(){
        return c;
    };

    return f;
}