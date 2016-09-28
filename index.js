'use strict'

const path = require('path')
const fs = require('fs')
const os = require('os')
const ini = require('ini')

function parsePath(options) {
  let configPath

  if (typeof options === 'undefined') {
    configPath = path.join(process.cwd(), '.git/config')
  } else if(options === 'global') {
    configPath = path.join(os.homedir(), '.gitconfig')
  } else {
    configPath = path.join(options.cwd, options.path)
  }

  return configPath
}

/**
 * fetch git config
 * @param {string|object} options
 * when options not set, will fetch `.git/config` in current working directory
 * when options is `global`, will fetch `.gitconfig` in `home` directory
 * @param {string} options.cwd
 * @param {string} options.path
 * @returns {Promise}
 */
function fetch(options) {
  return new Promise((resolve, reject) => {
    let configPath = parsePath(options)

    fs.readFile(configPath, 'utf8', (err, data) => {
      if (err) reject('Please check git config path')

      resolve(ini.parse(data))
    })
  })
}

/**
 * fetch git config sync
 * @param {string|object} options
 * @returns {object}
 */
fetch.sync = (options) => {
  let configPath = parsePath(options)

  return ini.parse(fs.readFileSync(configPath, 'utf-8'))
}

module.exports = fetch
