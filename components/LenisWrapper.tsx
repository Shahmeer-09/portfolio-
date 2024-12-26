"use client"

import { useLenis,ReactLenis} from "lenis/react"
import { ReactNode } from "react"

function LenisWrapper({children}:{children:ReactNode}) {
  

  return (
    <ReactLenis root options={{lerp:0.09}}>
      {children}
    </ReactLenis>
  )
}

export default LenisWrapper