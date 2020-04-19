import React from 'react'

import { useMyHook } from 'use-paging'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
