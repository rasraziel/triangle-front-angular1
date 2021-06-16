app.service("sidesHttpSvc", function ($http) {

    this.sendSides = (sideData) => {
        return $http.post("http://127.0.0.1:8020/sides", sideData).then(res => { return res });
    }
});