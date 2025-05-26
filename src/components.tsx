export const getComponents = () => {
  const components = {
    em(properties) {
      return <i style={{fontWeight: "bold", color: "red", ...(properties.style ?? {})}} {...properties} />
    }
  }
  return components;
}
