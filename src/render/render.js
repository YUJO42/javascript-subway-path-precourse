const renderRouteTable = (route) => {
  const $routeTable = document.querySelector('#route-table');
  $routeTable.innerHTML = route;
};

const renderDistanceTable = (distance) => {
  const $distanceTable = document.querySelector('#distance-table');
  $distanceTable.innerHTML = `${distance}km`;
};

const renderResultTable = () => {
  const $resultContainer = document.querySelector('#result-container');
  $resultContainer.removeAttribute('hidden');
};

export const render = (route, distance, time) => {
  if (route === undefined) {
    return alert('연결되지 않은 역은 입력할 수 없습니다.');
  }
  console.log(route, distance, time);
  renderResultTable();
  renderRouteTable(route.join('➡'));
  renderDistanceTable(distance);
};
