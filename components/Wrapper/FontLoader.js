import React from 'react'

class FontLoader extends React.Component {
  componentDidMount() {
    if (!document.documentElement.classList.contains('wf-active')) {
      import('webfontloader').then(WebFont =>
        WebFont.load({
          google: {
            families: ['Dosis'],
          },
        }),
      )
    }
  }

  render() {
    return (
      <style jsx global>{`
        html {
          font-family: Arial, Helvetica, sans-serif;
        }

        html.wf-active {
          font-family: Dosis, Arial, Helvetica, sans-serif;
        }
      `}</style>
    )
  }
}

export default FontLoader
