'use strict'

const path = require('path')
const fs = require('fs')
const os = require('os')
const ini = require('ini')

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
    let configPath

    if (typeof options === 'undefined') {
      configPath = path.join(process.cwd(), '.git/config')
    } else if(options === 'global') {
      configPath = path.join(os.homedir(), '.gitconfig')
    } else {
      configPath = path.join(options.cwd, options.path)
    }

    fs.readFile(configPath, 'utf8', (err, data) => {
      if (err) reject('Please check git config path')

      resolve(ini.parse(data))
    })
  })
}

module.exports = fetch
