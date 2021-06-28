app.controller("Main", Main);

function Main($rootScope) {

    this.selectionInfoVisible = true;
    this.pointsWindowVisible = false;
    this.sidesWindowVisible = false;
    $rootScope.axis = null;
    $rootScope.answer = 'triangle type...';

    this.hideContentSides = () => {
        if (!this.sidesWindowVisible) {
            this.sidesWindowVisible = true;
            this.pointsWindowVisible = false;
            this.selectionInfoVisible = false;
        } else {
            this.sidesWindowVisible = false;
            this.pointsWindowVisible = false;
            this.selectionInfoVisible = true;
        }
    }

    this.hideContentPoints = () => {
        if (!this.pointsWindowVisible) {
            this.sidesWindowVisible = false;
            this.pointsWindowVisible = true;
            this.selectionInfoVisible = false;
        } else {
            this.sidesWindowVisible = false;
            this.pointsWindowVisible = false;
            this.selectionInfoVisible = true;
        }
    }

    this.changeAnswer = (result, coordinates) => {
        this.answer = result;
        this.coordinates = coordinates;
    }


    $rootScope.konva = () => {
        let stage = new Konva.Stage({
            container: 'container',
            width: 400,
            height: 300,
        });
        var layer = new Konva.Layer();
        var poly = new Konva.Line({
            points: [$rootScope.axis.a.x, 300 - $rootScope.axis.a.y, $rootScope.axis.b.x, 300 - $rootScope.axis.b.y, $rootScope.axis.c.x, 300 - $rootScope.axis.c.y],
            stroke: 'black',
            strokeWidth: 1,
            closed: true,
            draggable: true,
            fillLinearGradientStartPoint: { x: $rootScope.axis.a.x, y: 300 - $rootScope.axis.a.y },
            fillLinearGradientEndPoint: { x: $rootScope.axis.c.x, y: 300 - $rootScope.axis.c.y },
            fillLinearGradientColorStops: [0, "#" + Math.floor(Math.random() * 16777215).toString(16), 1, "#" + Math.floor(Math.random() * 16777215).toString(16)]
        });
        // add the shape to the layer
        layer.add(poly);
        // add the layer to the stage
        stage.add(layer);
    }
}