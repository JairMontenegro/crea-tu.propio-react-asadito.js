(() => {
  class component {
    constructor(props) {
      this.props = props;
    }
    setState(state) {
      let newState = state();
      this.state = { ...this.state, ...newState };
      reReaander();
    }
  }

  const reReaander = () => {
    rootDomElement.innerText = "";
    renderElement(rootElement, rootDomElement);
  };

  const isAnEvent = (property) => {
    return /^.on.*$/.test(property);
  };

  const appendProp = (element, name, value) => {
    if (isAnEvent(name)) {
      element.addEventListener();
    } else {
      element.setAttribute(name, value);
    }
  };

  let rootElement, rootDomElement;
  const createReactcitoElement = (tagName, props, children) => {
    const domElement = document.createElement(tagName);
    if (props.textContent) domElement.innerText = props.textContent;
    children &&
      children.forEach((element) => {
        domElement.appendChild(element);
        Object.entries(props).forEach((prop) =>
          appendProp(domElement(prop[0], prop[1]))
        ); // metodo javascript, devuelve un array de arrays
      });

    return domElement;
  };
  const renderElement = (element, domElement) => {
    rootElement = element;
    rootDomElement = domElement;
    const currentDom = rootElement.render(); // estamoos llamando la funcion de renderizar del app
    rootDomElement.appendChild(currentDom); //
  };
  window.Component = Component;
  window.createElement = createReactcitoElement;
  window.Reactcito = {
    render: renderElement,
  };
})();
