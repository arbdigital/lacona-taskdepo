/** @jsx createElement */
import { createElement } from 'elliptical'
import { URL } from 'lacona-phrases'

export const MyNewExtension = {
  extends: [URL],

  describe ({config}) {
    return (
      <literal
        text='my homepage'
        value={config.taskdepo.homepage} />
    )
  }
}

export default [MyNewExtension]
