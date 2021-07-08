const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
}

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
}

function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`
    console.log(text)
}

function print2(hero) {
    const { alias, name, actor } = hero
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`
    console.log(text)
}

print(ironMan)
print2(captainAmerica)

const dog = {
    name: '멍멍이',
    sound: '멍멍',
    say: function () {
        console.log(this.sound)
    }
}

dog.say()

const number = {
    _a: 1,
    _b: 2,
    _sum: 3,
    calculate() {
        console.log('calculate')
        this._sum = this._a + this._b
    },
    get a() {
        return this._a
    },
    get b() {
        return this._b
    },
    get sum() {
        return this._sum
    },
    set a(value) {
        console.log('a')
        this._a = value
        this.calculate()
    },
    set b(value) {
        console.log('b')
        this._b = value
        this.calculate()
    }
}

number.a = 1
number.b = 2
console.log(number.a)
console.log(number.b)
console.log(number.sum)
