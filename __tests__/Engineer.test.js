const Engineer = require('../lib/Engineer')

test('create Engineer object', ()=>{
    const engineer = new Engineer ('Tom' , '123@abc.com', 'a7063p')

    expect(engineer.name).toBe('Tom')
    expect(engineer.email).toEqual(expect.stringContaining('@', '.'));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.github).toEqual(expect.anything());
});