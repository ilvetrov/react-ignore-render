import React, { ReactNode, useRef } from 'react'

export default function IgnoreRender(props: { ignore: boolean; children: () => ReactNode }) {
  const value = useRef<ReactNode | undefined>()

  if (!props.ignore || value.current === undefined) {
    value.current = props.children()
  }

  return <>{value.current}</>
}
