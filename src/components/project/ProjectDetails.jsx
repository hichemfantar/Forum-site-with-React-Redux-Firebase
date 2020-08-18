import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
            qui voluptatibus perspiciatis autem laborum ad at quibusdam atque
            eos in architecto dolores earum, doloremque velit quos obcaecati hic
            temporibus molestiae.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the homie</div>
          <div>30th dec 2020</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
