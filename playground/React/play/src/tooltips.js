import React from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const RegularTooltip = () => (
  <Tippy content="Hello">
    <button>My button</button>
  </Tippy>
)

const TooltipWithJSX = () => (
  <Tippy content={<span>Tooltip</span>}>
    <button>My button</button>
  </Tippy>
)

const TooltipWithProps = () => (
  <Tippy content="Hi" arrow={true} duration={500} delay={[100, 50]}>
    <button>My button</button>
  </Tippy>
)

// Special `onCreate` callback prop that passes the tippy instance
class TooltipWithOnCreate extends React.Component {
  render() {
    return (
      <Tippy content="Hi" onCreate={tip => (this.tip = tip)}>
        <button>My button</button>
      </Tippy>
    )
  }
}

export const Tooltips = () => (
  <div>
    <RegularTooltip />
    <TooltipWithJSX />
    <TooltipWithProps />
    <TooltipWithOnCreate />
  </div>
);