app.service("sidesHttpSvc", function ($http) {

    const url ='https://triangle-back.onrender.com'
    // const url = 'http://127.0.0.1:8080';

    this.sendSides = (sideData) => {
        return $http.post(`${url}/sides`, sideData).then(res => { return res });
    }
});