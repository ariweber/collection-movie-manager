const validName = (name) => typeof name === "string" && name.trim().length > 0;

const validYear = (year) => year > 1970 && year <= 2026 

const validGating =(gating) => gating > 0 && gating < 10

const a = validYear(202)
console.log(a);




