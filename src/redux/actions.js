export const addCar = (car) => {
  return {
    type: 'ADD_CAR',
    value: car
  }
}

export const removeCar = (car) => {
  return {
    type: 'REMOVE_CAR',
    value: car
  }
}