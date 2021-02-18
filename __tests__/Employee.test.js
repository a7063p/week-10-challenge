const Employee = require('../lib/Employee');
//jest.mock('../lib/Employee')

test('create an employee object', () => {
    const employee = new Employee ('Tom', '123@abc.com', 702-812-7989)

    expect(employee.name).toBe('Tom')
    expect(employee.email).toEqual(expect.stringContaining('@', '.'));
    expect(employee.id).toEqual(expect.any(Number));  
}) 

