'use strict'

const fetch = require('./')
const assert = require('assert')

describe('fetch git config test suite', () => {

  it('fetch current working directory git config', () => {
    return fetch().then((data) => {
      assert.equal(data['remote "origin"'].url, 'git@github.com:huang-x-h/fetch-git-config.git')
    })
  })

  it('fetch global git config', () => {
    return fetch('global').then((data) => {
      assert.equal(data.user.name, 'huang.xinghui')
    })
  })

  it('fech git config', () => {
    return fetch({ cwd: 'F:/github/jquery.async', path: '.git/config' }).then((data) => {
      assert.equal(data['remote "origin"'].url, 'git@github.com:huang-x-h/jquery.async.git')
    })
  })

})
