app.controller("pointsEntry", PointsEntry);

function PointsEntry(pointsHttpSvc, $rootScope) {


    this.calculate = () => {

        const data = {
            "a": { "x": this.aX, "y": this.aY },
            "b": { "x": this.bX, "y": this.bY },
            "c": { "x": this.cX, "y": this.cY }
        }

        pointsHttpSvc.sendPoints(data).then(res => {
            $rootScope.answer = "Triangle: " + res.data;
            $rootScope.axis = data;
            $rootScope.konva();
        }).catch(error => {
            $rootScope.answer = "This is not a triangle!";
        }).finally(() => {
            this.aX = '';
            this.bX = '';
            this.cX = '';
            this.aY = '';
            this.bY = '';
            this.cY = '';
        });
    }


    this.onAXChange = () => {
        if (this.aX > 300)
            this.aX = 300;
        else
            this.aX = Math.abs(this.aX);
    }
    this.onAYChange = () => {
        if (this.aY > 300)
            this.aY = 300;
        else
            this.aY = Math.abs(this.aY);
    }
    this.onBXChange = () => {
        if (this.bX > 300)
            this.bX = 300;
        else
            this.bX = Math.abs(this.bX);
    }
    this.onBYChange = () => {
        if (this.bY > 300)
            this.bY = 300;
        else
            this.bY = Math.abs(this.bY);
    }
    this.onCXChange = () => {
        if (this.cX > 300)
            this.cX = 300;
        else
            this.cX = Math.abs(this.cX);
    }
    this.onCYChange = () => {
        if (this.cY > 300)
            this.cY = 300;
        else
            this.cY = Math.abs(this.cY);
    }





}