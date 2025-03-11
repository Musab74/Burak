
import moment from "moment";

const currentTime = moment().format("YYY MM DD")
console.log(currentTime)

const ism: string = "Musab";
const yosh: number = 24;

console.log(ism)
console.log(yosh)

interface Bank {
    name: string,
    started: number,
    branch: number,
    employees: number,
    motto: string[],
    logo: string,
    ravenue: number,
}

const aloqa: Bank = {
    name: "aloqa",
    started: 2010,
    branch: 27,
    employees: 997,
    motto: ['shu bankda'],
    logo: "https/hechhechkech",
    ravenue: 4.3
}

console.log(`bu bank ${aloqa.name}, established in ${aloqa.started}. currently it has ${aloqa.branch} branches, ${aloqa.employees} workers, with ravenue of ${aloqa.ravenue}`)

