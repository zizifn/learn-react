function CoreConcept({img, title, description}) {
  console.log("CoreConcept");
  return (
  <li>
    <img src={img}/>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>)
}

export { CoreConcept };
