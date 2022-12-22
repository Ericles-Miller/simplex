import React from 'react'

const DeleayComponent = () => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 20000)

    return () => clearTimeout(timeout)

  }, [show])

  if (!show) {return null}

  else {
    return <>OK, Render</>
  }
  
}

export default DeleayComponent