const fs = require('fs')
const path = require('path')
const ADD_DIR = path.join(__dirname, './app')
const BUILD_DIR = path.join(__dirname, './build')

module.exports = {
    layout: path.join(ADD_DIR, 'layout/main.html'),
    appDir: ADD_DIR,
    pre: [{
        re: /{{ navigation }}/,
        replacement: String(fs.readFileSync(path.join(ADD_DIR, 'layout/navigation.html'))),
    },
    {
        re: /{{ company }}/g,
        replacement: '[Splendid](https://splendid.sh)',
    },
    ],
    pages: [{
        title: 'Main Page',
        url: 'index.html',
        file: path.join(ADD_DIR, 'index.md'),
    },
    {
        title: 'Markdown',
        url: 'markdown.html',
        file: path.join(ADD_DIR, 'markdown.md'),
    },
    {
        title: 'HighlightJS',
        url: 'highlightjs.html',
        file: path.join(ADD_DIR, 'highlightjs.md'),
    },
    ],
    postProcess: [
        {
            re: /{{ year }}/g,
            replacement: `${new Date().getFullYear()}`,
        },
    ],
    output: BUILD_DIR,
}

