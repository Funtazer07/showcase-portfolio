import axe from 'axe-core'
import { expect } from 'vitest'

export async function expectNoA11yViolations(container: Element) {
  const results = await axe.run(container, {
    rules: {
      'color-contrast': { enabled: false },
    },
  })

  if (results.violations.length > 0) {
    const summary = results.violations
      .map(
        (violation) =>
          `${violation.id} (${violation.impact}): ${violation.description}\n  ${violation.nodes
            .map((node) => node.target.join(' '))
            .join('\n  ')}`
      )
      .join('\n\n')
    expect.fail(`Accessibility violations found:\n\n${summary}`)
  }
}
