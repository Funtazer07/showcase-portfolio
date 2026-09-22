import { render as rtlRender, type RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'

export function render(ui: ReactElement, options?: RenderOptions & { route?: string }) {
  const { route = '/', ...renderOptions } = options ?? {}
  return rtlRender(ui, {
    wrapper: ({ children }) => <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>,
    ...renderOptions,
  })
}

export * from '@testing-library/react'
