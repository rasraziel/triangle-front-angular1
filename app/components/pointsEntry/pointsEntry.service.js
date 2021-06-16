app.service("pointsHttpSvc", function ($http) {

    this.sendPoints = (pointData) => {
        return $http.post("http://127.0.0.1:8020/points", pointData).then(res => { return res });
    }
});