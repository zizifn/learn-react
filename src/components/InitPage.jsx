import noProjectImg from "../assets/no-projects.png";
export function InitPage({ addingPorject }) {
  return (
    <>
      <img className="h-20 w-40 object-cover" src={noProjectImg} alt="" />
      <p> Select a project or get started with a new one</p>
      <button onClick={addingPorject}>Create new Project</button>
    </>
  );
}
