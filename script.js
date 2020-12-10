function adding() {
    let x = Number(document.getElementById('add1').value);
    let y = Number(document.getElementById('add2').value);

    document.getElementById('addRes').value = x + y;
}
document.getElementById('add2').addEventListener('keyup', adding);
document.getElementById('add1').addEventListener('keyup', adding)

function subtracting() {
    let x = Number(document.getElementById('sub1').value);
    let y = Number(document.getElementById('sub2').value);

    document.getElementById('subRes').value = x - y;
}
document.getElementById('sub2').addEventListener('keyup', subtracting);
document.getElementById('sub1').addEventListener('keyup', subtracting);

function multiplying() {
    let x = Number(document.getElementById('multi1').value);
    let y = Number(document.getElementById('multi2').value);

    document.getElementById('multiRes').value = x * y;
}
document.getElementById('multi2').addEventListener('keyup', multiplying);
document.getElementById('multi1').addEventListener('keyup', multiplying);

function dividing() {
    let x = Number(document.getElementById('divide1').value);
    let y = Number(document.getElementById('divide2').value);

    document.getElementById('divideRes').value = x / y;
}
document.getElementById('divide2').addEventListener('keyup', dividing);
document.getElementById('divide1').addEventListener('keyup', dividing);

function remainder() {
    let x = Number(document.getElementById('modulo1').value);
    let y = Number(document.getElementById('modulo2').value);

    document.getElementById('moduloRes').value = x % y;
}
document.getElementById('modulo2').addEventListener('keyup', remainder);
document.getElementById('modulo1').addEventListener('keyup', remainder);

