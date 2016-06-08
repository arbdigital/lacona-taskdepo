/** @jsx createElement */
import { createElement } from 'elliptical'
import { Command } from 'lacona-phrases'
import { openURL } from 'lacona-api'

export const MyNewCommand = {
  extends: [Command],

  execute (result) {
    openURL({url: result})
  },

  describe ({config}) {
    return (
      <literal
        text='visit my homepage'
        value={config.taskdepo.homepage} />
    )
  }
}

export default [MyNewCommand]