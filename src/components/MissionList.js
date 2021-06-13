const MissionList = ({ spaceXData }) => (
  <div className="flights">
    {spaceXData &&
      spaceXData.map((flight) => (
        <div className="card flight-container" key={flight?.rocket_id}>
          <div className="img-container">
            <img src={flight?.links?.mission_patch_small} />
          </div>
          <h2>{flight?.mission_name}</h2>
          <div className="flight-info">
            <div>
              <span className="label">Mission Ids: </span>
              <span>{flight?.mission_id.toString()}</span>
            </div>
            <div>
              <span className="label">Launch Year: </span>
              <span>{flight.launch_year && flight.launch_year}</span>
            </div>
            <div>
              <span className="label">Successful Launch: </span>
              <span>{flight?.launch_success === true ? "True" : "False"}</span>
            </div>
            <div>
              <span className="label">Successful Landing: </span>
              <span>{flight?.launch_landing === true ? "True" : "False"}</span>
            </div>
          </div>
        </div>
      ))}
  </div>
)

export default MissionList
