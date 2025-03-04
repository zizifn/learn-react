export function SideBar({ projects, addingPorject, selectProject }) {
  return (
    <section className="flex-1/3 bg-black">
      <h1 className="text-white">Your Porjects</h1>
      <button className="bg-gray-400 text-gray-50" onClick={addingPorject}>
        +Add Project
      </button>

      <ol>
        {projects.map((project, index) => {
          return (
            <li
              className="text-white"
              key={index}
              onClick={() => {
                selectProject(index);
              }}
            >
              {project.title}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
