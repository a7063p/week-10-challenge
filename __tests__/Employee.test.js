
const Employee = require('../lib/Employee');


test('create an employee object', () => {
    const employee = new Employee ('Employee', 1, 'Tom', '123@abc.com');
    console.log(employee);

    expect(employee.name).toBe('Tom');
    expect(employee.type).toBe('Employee');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@', '.'));      
});

