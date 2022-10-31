type User = {
    name: string,
    age: number
}

const obj = {
    name: 'Oleh',
    age: 18,
}

type sayHi = (obj: User)=>void
const sayHi:sayHi = (obj)=>{
    console.log(`Hi ${obj.name}`);
    
}

console.log('kw');
