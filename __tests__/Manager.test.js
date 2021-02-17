const Manager = require('../lib/Manager')

test('create manager object', ()=>{
    const manager = new Manager ('Tom' , '123@abc.com', 702-812-7989)

    expect(manager.name).toBe('Tom')
    expect(manager.email).toEqual(expect.stringContaining('@', '.'));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});