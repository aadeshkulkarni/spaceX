import React from "react"

const Filters = (props) => {
  const years = [2006, 2007, 2008, 2009, 2010, 2011]
  const successLaunch = ["True", "False"]
  const succcessLanding = ["True", "False"]

  return (
    <>
      <div>
        <h2 style={{ paddingTop: "1rem", paddingLeft: "1rem" }}>Filters</h2>
        <h3>Launch Year</h3>
        <div className="filter-container">
          {years.map((year) => (
            <div
              className={`filter-badge ${
                props.launch_year === year && "active"
              }`}
              onClick={() => props.setYear(year)}
            >
              {year}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Successful Launch</h3>
        <div className="filter-container">
          {successLaunch.map((launch) => {
            const sLaunch = launch.toLowerCase() === "true"
            return (
              <div
                className={`filter-badge ${
                  props.success_launch === sLaunch && "active"
                }`}
                onClick={() =>
                  props.setLaunch(launch === "True" ? true : false)
                }
              >
                {launch}
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <h3>Successful Landing</h3>
        <div className="filter-container">
          {succcessLanding.map((land) => {
            const sLand = land.toLowerCase() === "true"
            return (
              <div
                className={`filter-badge ${
                  props.success_land === sLand && "active"
                }`}
                onClick={() => props.setLand(land === "True" ? true : false)}
              >
                {land}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Filters
