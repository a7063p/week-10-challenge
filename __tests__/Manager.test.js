
const Manager = require('../lib/Manager');

test('create manager object', ()=>{
    const manager = new Manager ('Manager', 1 , 'Tom', '123@abc.com', 702-812-7989);
    expect(manager.type).toBe('Manager');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.name).toBe('Tom') ;   
    expect(manager.email).toEqual(expect.stringContaining('@', '.'));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});