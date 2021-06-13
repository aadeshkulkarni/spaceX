import React, { useEffect, useState } from "react"
import Filters from "./components/Filters"
import MissionList from "./components/MissionList"
import {
  getAllData,
  getDataByAll,
  getDataByLaunchAndLandSuccess,
  getDataByLaunchSuccess,
} from "./network/index"
import "./App.css"

function App() {
  const [launch_year, setYear] = useState()
  const [success_launch, setLaunch] = useState()
  const [success_land, setLand] = useState()

  const [spaceXData, setData] = useState([])

  useEffect(async () => {
    const APIResult = await getAllData()
    setData(APIResult)
  }, [])

  useEffect(async () => {
    if (
      launch_year !== undefined &&
      success_launch !== undefined &&
      success_land !== undefined
    ) {
      const APIResult = await getDataByAll(
        launch_year,
        success_launch,
        success_land
      )
      setData(APIResult)
    } else if (launch_year !== undefined && success_launch !== undefined) {
      const APIResult = await getDataByLaunchAndLandSuccess(
        launch_year,
        success_launch
      )
      setData(APIResult)
    } else if (launch_year !== undefined) {
      const APIResult = await getDataByLaunchSuccess(
        launch_year,
        success_launch
      )
      setData(APIResult)
    }
  }, [launch_year, success_launch, success_land])

  return (
    <div className="App">
      <h1>SpaceX Launch Programs</h1>
      <div className="container">
        <div className="card">
          <Filters
            launch_year={launch_year}
            success_launch={success_launch}
            success_land={success_land}
            setYear={setYear}
            setLand={setLand}
            setLaunch={setLaunch}
          />
        </div>
        <MissionList spaceXData={spaceXData} />
      </div>
      <span className="footer">Developed by Aadesh Kulkarni</span>
    </div>
  )
}

export default App
