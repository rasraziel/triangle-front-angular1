app.service("sidesHttpSvc", function ($http) {

    const url = 'https://triangle-back.herokuapp.com';
    // const url = 'http://127.0.0.1:8020';

    this.sendSides = (sideData) => {
        return $http.post(`${url}/sides`, sideData).then(res => { return res });
    }
});