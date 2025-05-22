
import { svg } from "./Icon";

const Icon = ({ name = "", className = "" }) => {
  return (
    <span className={className}>
      {svg[name]}
    </span>
  )
}

export { Icon };
