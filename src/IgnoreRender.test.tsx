import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import IgnoreRender from './IgnoreRender'

describe('IgnoreRender', () => {
  it('disables the following renders when true', () => {
    function Component() {
      const [second, setSecond] = useState(1)

      useEffect(() => {
        setSecond(2)
      }, [])

      return <IgnoreRender ignore>{() => <h1>{second}</h1>}</IgnoreRender>
    }

    render(<Component></Component>)

    expect(screen.queryByRole('heading')?.innerHTML).toBe('1')
  })

  it('does not disables the following renders when false', () => {
    function Component() {
      const [second, setSecond] = useState(1)

      useEffect(() => {
        setSecond(2)
      }, [])

      return <IgnoreRender ignore={false}>{() => <h1>{second}</h1>}</IgnoreRender>
    }

    render(<Component></Component>)

    expect(screen.queryByRole('heading')?.innerHTML).toBe('2')
  })

  it('shows actual data after changing from false to true', () => {
    function Component() {
      const [second, setSecond] = useState(1)

      return (
        <>
          <IgnoreRender ignore={second < 3}>{() => <h1>{second}</h1>}</IgnoreRender>
          <button type="button" onClick={() => setSecond((oldSecond) => oldSecond + 1)}>
            Increase
          </button>
        </>
      )
    }

    render(<Component></Component>)

    expect(screen.queryByRole('heading')?.innerHTML).toBe('1')

    act(() => {
      screen.queryByRole('button')?.click()
    })

    expect(screen.queryByRole('heading')?.innerHTML).toBe('1')

    act(() => {
      screen.queryByRole('button')?.click()
    })

    expect(screen.queryByRole('heading')?.innerHTML).toBe('3')
  })
})
