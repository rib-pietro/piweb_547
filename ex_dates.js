const readlineSync = require('readline-sync');

const employee = {
    name: 'Pietro',
    email: 'pietro@email.com',
    attendanceInfo: []
};

let opt = 1;

while (opt !== 0) {
    let resp = parseInt(readlineSync.question(`O que deseja fazer?
1 - Entrada
2 - Saída
0 - Logout
`));
    const currentDate = new Date().toString();
    if (resp === 1) {
        employee.attendanceInfo.push({
            date: currentDate,
            type: 'in'
        });
    }
    if (resp === 2) {
        employee.attendanceInfo.push({
            date: currentDate,
            type: 'out'
        });
    }
    opt = resp === 0 ? resp : opt;
}

const attendanceInfo = employee.attendanceInfo.map(a => {
    const date = new Date(a.date);
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${a.type === 'in' ? 'Entrada' : 'Saída'}: ${day}/${month}/${year} às ${hours}:${minutes}`;
}).join('\n');

console.log(attendanceInfo);