const fs = require('fs');
const path = require('path');

const makeDir = (dir) => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};
console.log('starting move');
try {
makeDir('src/assets');
makeDir('src/components/layout');
makeDir('src/components/ui');
makeDir('src/services');

// Rename/move files
try { fs.renameSync('src/util/assets.js', 'src/assets/index.js'); console.log('moved assets.js'); } catch(e) { console.error('assets.js error', e) }

// Move elements to ui
try{
const elements = fs.readdirSync('src/elements');
elements.forEach(f => {
    fs.renameSync(path.join('src/elements', f), path.join('src/components/ui', f));
});
fs.rmdirSync('src/elements');
console.log('moved elements');
} catch(e) { console.error('elements error', e) }

// Move components to layout
try{
const components = fs.readdirSync('src/components');
components.forEach(f => {
    if (f.endsWith('.jsx')) {
        fs.renameSync(path.join('src/components', f), path.join('src/components/layout', f));
    }
});
console.log('moved components');
} catch(e) { console.error('components error', e) }

// Delete util
try { fs.unlinkSync('src/util/constant.js'); console.log('deleted constant.js')} catch(e) { console.error('constant.js error', e) }
try { fs.rmdirSync('src/util'); console.log('deleted util dir')} catch(e) { console.error('util dir error', e) }
console.log('Done!');
} catch (e) { console.error('main error', e)}
