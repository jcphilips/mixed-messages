const { diogenes } = require('./messages/diogenes')
const { epictetus } = require('./messages/epictetus')
const { marcusAurelius } = require('./messages/marcus-aurelius')
const { musoniusRufus } = require('./messages/musonius-rufus')
const { seneca } = require('./messages/seneca')
const { zeno } = require('./messages/zeno')

authors = {
    'Diogenes': diogenes, 
    'Epictetus': epictetus, 
    'Marcus Aurelius': marcusAurelius, 
    'Musonius Rufus': musoniusRufus, 
    'Seneca': seneca, 
    'Zeno': zeno
};

authorKeys = Object.keys(authors)
const selectedAuthor = authorKeys[Math.floor(Math.random() * authorKeys.length)];
quote = authors[selectedAuthor][Math.floor(Math.random() * authors[selectedAuthor].length)]
console.log(quote)
console.log(`- ${selectedAuthor}`)
