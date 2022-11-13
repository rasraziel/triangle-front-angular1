app.service("pointsHttpSvc", function ($http) {

    const url ='https://triangle-back.onrender.com'
    // const url = 'http://127.0.0.1:8080';

    this.sendPoints = (pointData) => {
        return $http.post(`${url}/points`, pointData).then(res => { return res });
    }
});