const Intern = require('../lib/Intern')

test('create intern object', ()=>{
    const intern = new Intern ('Tom' , '123@abc.com', 'UofA')

    expect(intern.name).toBe('Tom')
    expect(intern.email).toEqual(expect.stringContaining('@', '.'));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.school).toEqual(expect.anything());
});