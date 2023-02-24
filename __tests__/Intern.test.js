const Intern = require(`../lib/intern`)
const Employee = require(`../lib/employee`)

test(`can instantiate new employee and set properties of object using constructor`,()=> {
    const e = new Intern(`Bob`, 5, `bob@test.com`)
    expect(e.name).toBe(`Bob`)
    expect(e.id).toBe(5)
    expect(e.email).toBe(`bob@test.com`)
    expect(e).toBeInstanceOf(Employee);
})
test(`can get employee name using getName() method`,()=>{
    const e = new Intern(`Bob`, 5, `bob@test.com`)
    expect(e.getName()).toBe(`Bob`)
} )
test(`can get employee Id using getId() method`,()=>{
    const e = new Intern(`Bob`, 5, `bob@test.com`)
    expect(e.getId()).toBe(5)
} )
test(`can get employee email using getEmail() method`,()=>{
    const e = new Intern(`Bob`, 5, `bob@test.com`)
    expect(e.getEmail()).toBe(`bob@test.com`)
} )
test(`can get employee school using getSchool() method`,()=>{
    const e = new Intern(`Bob`, 5, `bob@test.com`,`Harvard`)
    expect(e.getSchool()).toBe(`Harvard`)
} )

test(`can get employee Role using getRole() method`,()=>{
    const e = new Intern(`Bob`, 5, `bob@test.com`)
    expect(e.getRole()).toBe(`Intern`)
} )
