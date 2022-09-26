
const func = {}
const ageCal =(name,year) =>{
    let age = new Date().getFullYear() - year;
    return `Hi ${name}, Your ${age} years Old`;
}

const info = (name,skill) => {
    return `Hi ${name},you are ${skill} Developer `
}

const stuedent = [
    {
        id : 1,
        name : 'Joy Sarker',
        age : 27,
        skill : 'Javascript'
    },
    {
        id : 2,
        name : 'Morche Sarker',
        age : 27,
        skill : 'Javascript'
    },
    {
        id : 2,
        name : 'Cill Sarker',
        age : 27,
        skill : 'Paython'
    }
]

// func.ageCal = ageCal
// func.info = info
// func.stuedent = stuedent

module.exports = {
    age : ageCal,
    info : info,
    students :stuedent
}