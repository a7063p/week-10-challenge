const Intern = require('../lib/Intern');

test('create intern object', ()=>{    
    const intern = new Intern('Intern',1,'Tom', '123@abc.com', 'UofA');
    console.log(intern);
    expect(intern.type).toBe('Intern');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.name).toBe('Tom');    
    expect(intern.email).toEqual(expect.stringContaining('@', '.'));
    expect(intern.school).toEqual(expect.anything('UofA'));
});