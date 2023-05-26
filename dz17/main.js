let man = {
    name : 'Andrey' ,
    surname : 'Sokolov',
    height : 177,
    mail : 'sokol22',
    password : '1111',
    balance : 2500
}

man.adress = 'grozny'

console.log(man)

let pass = '1111'

function passcheck(){
    if (man.password === pass){
        console.log(`Добро пожаловать,${man.name}`+`${ man.surname} ваш логин :`+ `${man.mail}`)
    }
    else{
        console.log(`Указанный пароль :` + `${pass} не верен.Попробуйте еще раз`)
    }
}
console.log(passcheck())