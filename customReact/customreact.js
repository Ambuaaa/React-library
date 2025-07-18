
function customRender(reactElement , mainContainer){
  /*
  const domElement = document.createElement
  (reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href' , reactElement.props.href)
  domElement.setAttribute('target' , reactElement.props.target)

  mainContainer.appendChild(domElement) ;
  */
 
  const domElement = document.createElement(reactElement.type) ;
  domElement.innerHTML = reactElement.children ;
  for(const p in reactElement.props){
    if(p === "children") continue ;
    domElement.setAttribute( p , reactElement.props[p])

  }
  mainContainer.appendChild(domElement) ; 
}

// we get this from react 
const reactElement = {
  type: 'a' , 
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'

}

const mainContainer = document.querySelector('#root')

// method to render (to add this reactElement into root )
customRender(reactElement, mainContainer)