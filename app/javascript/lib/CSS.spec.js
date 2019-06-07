import { CSSWithResponse, CSSAggregate } from './CSS'

describe('CSSWithResponse', () => {
  it('returns the base class when no other params included', () => {
    const css = CSSWithResponse('base-class')
    expect(css).toEqual('base-class')
  })

  it('returns "base-class -loading" when loading', () => {
    const css = CSSWithResponse('base-class', true, null)
    expect(css).toEqual('base-class -loading')
  })

  it('returns "base-class -error" when error is true', () => {
    const css = CSSWithResponse('base-class', null, true)
    expect(css).toEqual('base-class -error')
  })

  it('returns default if not loading or error', () => {
    const css = CSSWithResponse('base-class', null, null, 'default-class')
    expect(css).toEqual('base-class default-class')
  })
})

describe('CSSAggregate', () => {
  it('returns nothing with only a base class', () => {
    const css = CSSAggregate('base-class')
    expect(css).toEqual('')
  })

  it('takes additional type and append each to base class', () => {
    const css = CSSAggregate('base-class', 'one', 'two')
    expect(css).toEqual('base-class-one base-class-two')
  })
})
