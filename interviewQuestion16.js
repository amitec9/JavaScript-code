const people = [
    { name: 'Ravi', age: 19 },
    { name: 'Sohit', age: 35 },
    { name: 'Mohit', age: 68 },
    { name: 'Martin', age: 22 },
    { name: 'Judith', age: 45 },
    { name: 'Gunner', age: 8 },
  ];
  let filters = people.filter(a => a.age >30 ).sort((a,b)=>a.name < b.name) 

  console.log(filters)
