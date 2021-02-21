const Engineer = require('../lib/Engineer')

test('create Engineer object', ()=>{
    const engineer = new Engineer ('Engineer', 1, 'Tom', '123@abc.com', 'a7063p');
    expect(engineer.type).toBe('Engineer');
    expect(engineer.name).toBe('Tom');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@', '.'));    
    expect(engineer.github).toEqual(expect.anything('a7063'));
});