const RE = /{([\d,-]+)}/

export default (md: any) => {
  const fence = md.renderer.rules.fence

  md.renderer.rules.fence = (...args: any) => {
    const [tokens, idx, options, , self] = args
    const token = tokens[idx]

    if (!token.info || !RE.test(token.info)) {
      return fence(...args)
    }

    const lineNumbers = RE.exec(token.info)?.[1]
      .split(',')
      .map(v => v.split('-').map(v => parseInt(v, 10)))
    const langName = token.info.replace(RE, '').trim()

    const code = options.highlight
      ? options.highlight(token.content, langName)
      : token.content

    const codeSplits = code.split('\n').map((split: any, index: any) => {
      const lineNumber = index + 1

      const inRange = lineNumbers?.some(([start, end]) => {
        if (start && end) {
          return lineNumber >= start && lineNumber <= end
        }
        return lineNumber === start
      })

      if (inRange) {
        return {
          code: `<span class="highlighted-line">${split}</span>`,
          highlighted: true
        }
      }

      return {
        code: split
      }
    })

    let highlightedCode = ''

    codeSplits.forEach((split: any) => {
      if (split.highlighted) {
        highlightedCode += split.code
      } else {
        highlightedCode += `${split.code}\n`
      }
    })

    // If custom highlighter wraps code with starting <pre..., don't wrap code

    if (highlightedCode.startsWith('<pre')) {
      return highlightedCode
    }

    const tmpToken = {
      attrs: [['class', langName ? `language-${langName}` : '']]
    }
    const attrs = self.renderAttrs(tmpToken)
    return `<pre${attrs}><code${attrs}>${highlightedCode.trim()}</code></pre>`
  }
}