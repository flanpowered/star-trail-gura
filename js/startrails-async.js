const { random, PI, max } = Math

const size = max(window.innerWidth, window.innerHeight) * window.devicePixelRatio * 2

const center = {
    x: size / 2 | 0,
    y: size / 2 | 0
}

function CreatStarTrails(x, y) {

    var canvasDiv = document.getElementById("canvas-div")

    for (let canvasIndex = 1; canvasIndex <= 10; canvasIndex++)
    {
        var newCanvas = document.createElement("canvas")
        newCanvas.classList.add("activated-async-canvas")
        newCanvas.style = "--i: " + canvasIndex

        newCanvas.width = size
        newCanvas.height = size

        var ctx = newCanvas.getContext('2d')
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio)


        // Longitud de líneas (1 == 360º, 0.5 == 180º..., SIN CONTAR EL GRADINTE)
        let amt = random() * 0.1 + 0.1

        for (let i = 0; i < 50; i++) {

            //Offset horizontal de las líneas, de 0 a 1
            let offset = random()

            // Tamaño del agujero central
            let innerRadius = 50
            let outerRadius = .35
            let radius = random() * size * outerRadius + innerRadius

            // Transparencia de las líneas
            ctx.globalAlpha = 0.5 * random()

            ctx.beginPath();

            // Rastros de las estrellas
            ctx.arc(
                x,
                y,
                radius,
                offset * 2 * PI,
                amt * 2 * PI + offset * 2 * PI,
                false
            );
            
            // Crear el gradiente que va desde donde acaba el startrail hasta donde empieza
            var gradient = ctx.createLinearGradient(x, y, x + Math.cos((amt * 2 * PI + offset * 2 * PI)) * radius, y + Math.sin((amt * 2 * PI + offset * 2 * PI)) * radius);
            gradient.addColorStop(1, "white")
            gradient.addColorStop(0.7, "transparent")
            ctx.strokeStyle = gradient

            // Puntos de las estrellas
            // ctx.arc(x + Math.cos((amt * 2 * PI + offset * 2 * PI)) * radius,
            //         y + Math.sin((amt * 2 * PI + offset * 2 * PI)) * radius, 
            //         1, 
            //         0, 
            //         2 * PI);

            ctx.stroke();
        }

        canvasDiv.appendChild(newCanvas)
    }

    
}

CreatStarTrails(center.x, center.y)
