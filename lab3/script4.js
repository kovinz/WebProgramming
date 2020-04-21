function User(name) {
	this.name = name;
}

function getName() {
    return this.name
}

User.prototype.getName = getName
// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат

const me = new User('Rex');

console.log(me.getName()); // Rex