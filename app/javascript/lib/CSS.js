import classNames from 'classnames'

const CSSWithResponse = (base, loading, error, mod) => (
  classNames(
    base,
    { '-loading': loading },
    { '-error': error },
    { [mod]: mod && !loading && !error }
  )
)

const CSSAggregate = (base, ...types) => (
  classNames(types.map(type => `${base}-${type}`))
)

export { CSSWithResponse, CSSAggregate }
