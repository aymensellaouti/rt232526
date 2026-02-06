var scope;
scope = "globale";
function f() {
	var scope;
    console.log(scope); 	
	scope = "locale"; 
	console.log(scope); 	
}
f();
const user = {
    email: 'test@gmail.com'
}
user.email = 'newEmail@gmail.com';
console.log(user.email);
let esm = `aymen
    ${user.email}
`;
esm = 'test';
console.log(esm);