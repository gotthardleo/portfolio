
const Section = ({ children, className = "", ...props }) => {
  return (
    <section {...props} className={"w-screen h-screen " + className}>
      { children }
    </section>
  )
}

export { Section };
