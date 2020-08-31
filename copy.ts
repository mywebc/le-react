const fs = require('fs');
const fse = require('fs-extra')
const path = require('path');
const util = require('util');
const del = require('del');
const copy = require('directory-copy');


const curr_dir = __dirname; 
const source_path = path.join(curr_dir, '.docz', 'dist');
const dest_dir = path.join(curr_dir, 'docs');

const mkdir_promi = util.promisify(fs.mkdir);
const copy_promi = util.promisify(copy);

async function delFun() {
  console.log('del begin');
  const result = await del([dest_dir + '/**'], {
    force: true
  });
  console.log('del ok: ', result);
}

async function mkdirFun() {
  console.log('mkdir begin');
  await mkdir_promi(dest_dir);
  console.log('mkdir ok');
}

async function copyFun() {
  await copy_promi({
    src: source_path,
    dest: dest_dir
  });
  console.log('copy done!');
}

async function foo() {
  await  delFun();
  await mkdirFun();
  await copyFun();
}

foo();