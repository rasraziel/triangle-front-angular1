app.controller("sidesEntry", SidesEntry);

function SidesEntry(sidesHttpSvc, $rootScope) {

    this.calculate = () => {

        const data = {
            "ab": this.ab,
            "bc": this.bc,
            "ca": this.ca
        }

        sidesHttpSvc.sendSides(data).then(res => {
            // 3rd point x,y coordinates calculations
            const x3 = (Math.pow(data.ca, 2) - Math.pow(data.bc, 2) + Math.pow(data.ab, 2)) / (2 * data.ab);
            const y3 = Math.sqrt(Math.pow(data.ca, 2) - Math.pow(x3, 2));
            const dataPoints = {
                "a": { "x": 0, "y": 0 },
                "b": { "x": data.ab, "y": 0 },
                "c": { "x": x3, "y": y3 }
            }
            $rootScope.answer = "Triangle: " + res.data;
            $rootScope.axis = dataPoints;
            $rootScope.konva();
        }).catch(error => {
            $rootScope.answer = "This is not a triangle!";
        }).finally(() => {
            this.ab = '';
            this.bc = '';
            this.ca = '';
        });

    };



    this.onABChange = () => {
        if (this.ab > 300)
            this.ab = 300;
        else
            this.ab = Math.abs(this.ab);
    }

    this.onBCChange = () => {
        if (this.bc > 300)
            this.bc = 300;
        else
            this.bc = Math.abs(this.bc);
    }

    this.onCAChange = () => {
        if (this.ca > 300)
            this.ca = 300;
        else
            this.ca = Math.abs(this.ca);
    }

}