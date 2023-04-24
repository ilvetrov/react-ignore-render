<p>
  <img src="https://raw.githubusercontent.com/ilvetrov/react-ignore-render/main/logo.svg" width="295" height="120" />
</p>

IgnoreRender is a React component to ignore renders.

- ::sunrise:: There is a **first** render regardless of the `ignore` value.
- :large_blue_circle: If `ignore` is `false`, it works as usual.
- :red_circle: If `ignore` is `true`, everything inside IgnoreRender will **NOT** be rendered with the current data.
- :recycle: If `ignore` changes from `false` to `true`, everything inside IgnoreRender will be rendered with the current data. Even if you called the `setState` at a time when the value of `ignore` was equal to `true`.

## Example

`<div>1</div>` will always be there as long as `ignore={true}`

```tsx
import IgnoreRender from 'react-ignore-render'

export default function MyComponent() {
  const [second, setSecond] = useState(1)

  useEffect(() => {
    setSecond(2)
  }, [])

  return (
    <IgnoreRender ignore={true}>
      {() => (
        <div>
          {second}
        </div>
      )}
    </IgnoreRender>
  )
}
```
