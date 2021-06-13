export async function getAllData() {
  let response = await fetch("https://api.spacexdata.com/v3/launches?limit=100")
  response = await response.json()
  return response
}

export async function getDataByLaunchSuccess(launch_success) {
  let response = await fetch(
    `https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${launch_success}`
  )
  response = await response.json()
  return response
}

export async function getDataByLaunchAndLandSuccess(
  launch_success,
  land_success
) {
  let response = await fetch(
    `https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${launch_success}&amp;land_success=${land_success}`
  )
  response = await response.json()
  return response
}
export async function getDataByAll(launch_success, land_success, launch_year) {
  let response = await fetch(
    `https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${launch_success}&amp;land_success=${land_success}&amp;launch_year=${launch_year}`
  )
  response = await response.json()
  return response
}
