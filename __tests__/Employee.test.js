const Employee = require(`../lib/employee`)

test(`can instantiate new employee and set properties of object using constructor`,()=> {
    const e = new Employee(`Bob`, 5, `bob@test.com`)
    expect(e.name).toBe(`Bob`)
    expect(e.id).toBe(5)
    expect(e.email).toBe(`bob@test.com`)
    expect(e instanceof Employee).toBe(true)
})
test(`can get employee name using getName() method`,()=>{
    const e = new Employee(`Bob`, 5, `bob@test.com`)
    expect(e.getName()).toBe(`Bob`)
} )
test(`can get employee Id using getId() method`,()=>{
    const e = new Employee(`Bob`, 5, `bob@test.com`)
    expect(e.getId()).toBe(5)
} )
test(`can get employee email using getEmail() method`,()=>{
    const e = new Employee(`Bob`, 5, `bob@test.com`)
    expect(e.getEmail()).toBe(`bob@test.com`)
} )
test(`can get employee Role using getRole() method`,()=>{
    const e = new Employee(`Bob`, 5, `bob@test.com`)
    expect(e.getRole()).toBe(`Employee`)
} )
