interface IContainerAppProps {
    children: any
}
const ContainerApp = ({children}: IContainerAppProps) => {
  return (
    <>
      <div className="container-fluid">
        <h1>
          ToDo <small className="text-muted">List</small>
        </h1>
        <div className="row">
          <p className="lead">
            This App is used to <mark>organize</mark> a <del>todo</del> ToDo
            List.
          </p>
          <figure>
            <blockquote className="blockquote">
              <p>Developed with ReactJS.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Powered By <cite title="Sabre Software">Sabre Software</cite>
            </figcaption>
          </figure>
          <div className="col">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerApp;
