function equal() {

    let exp = document.form.display.value

    if (exp) {

        document.form.display.value = eval(exp)

    }    

}

function clear_display() {

    var exp = document.form.display.value

    if (exp) {

        document.form.display.value = exp.substring(0, exp.length-1)

    }
    
}

function clear_all_display() {

    let input = document.getElementById('display')

    input.value = ''

}

function insert(num) {

    document.form.display.value = document.form.display.value + num

}
