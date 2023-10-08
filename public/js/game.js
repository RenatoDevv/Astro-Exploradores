//primera parte
function initCanvas() {
    var canvas = document.getElementById("my_canvas");
    var ctx = canvas.getContext("2d");
    var naveImage = new Image();
    var tierra = new Image();
    var saturno = new Image();
    var marte = new Image();
    var jupiter = new Image();
    var venus = new Image();
    var neptuno = new Image();
    var mercurio = new Image();

    //backgroundImage.src = ""; // Agrega la URL de tu imagen de fondo aquí
    naveImage.src = "./public/img/astro.png";
    tierra.src = "./public/img/planets/tierra.png"; // Agrega la URL de tu imagen de planeta aquí
    saturno.src = "./public/img/planets/saturno.png";
    marte.src = "./public/img/planets/marte.png";
    jupiter.src = "./public/img/planets/jupiter.png";
    venus.src = "./public/img/planets/venus.png";
    neptuno.src = "./public/img/planets/neptuno.png";
    mercurio.src = "./public/img/planets/mercurio.png";

    var cW = canvas.width;
    var cH = canvas.height;

    function Planet(options) {
        return {
            name: options.name || "",
            x: options.x || 0,
            y: options.y || 0,
            radius: options.radius || 30,
            color: options.color || "red",
            description: options.description || "",
            image: options.image || null,
            visited: false,
        };
    }

    var planets = [];

    // Agrega planetas con la misma imagen en diferentes posiciones
    setTimeout(function () {
        planets.push(
            new Planet({
                name: "Tierra",
                x: 100,
                y: -30,
                radius: 30,
                color: "blue",
                description: `
                    <p>¡Bienvenido a la Tierra, nuestro hogar azul! Prepárate para explorar la diversidad única de nuestro planeta, repleto de vida, paisajes asombrosos y maravillas naturales.</p>
                    <p><strong>Maravillas Naturales:</strong> Descubre la belleza de los océanos, montañas imponentes, desiertos expansivos y selvas exuberantes. La Tierra ofrece una variedad asombrosa de paisajes que te dejarán sin aliento.</p>
                    <p><strong>Encuentro con la Vida:</strong> Explora la rica biodiversidad de la Tierra. Desde la fauna en la selva amazónica hasta la vida marina en los arrecifes de coral, cada rincón del planeta alberga formas únicas de vida.</p>
                    <p><strong>Aventuras Eco-Friendly:</strong> Participa en actividades sostenibles y eco-friendly. Experimenta la conexión única que tenemos con nuestro planeta y descubre cómo podemos proteger y preservar nuestro hogar común.</p>
                    <p><strong>Vistas desde el Espacio:</strong> Observa la Tierra desde la órbita y contempla la fragilidad y la belleza de nuestro planeta. Reflexiona sobre la importancia de cuidar nuestro hogar en el vasto cosmos.</p>
                `,
                image: tierra,
            })
        );
    }, 3000);
    

    setTimeout(function () {
        planets.push(
            new Planet({
                name: "Marte",
                x: 500,
                y: -300,
                radius: 30,
                color: "red",
                description: `
                    <p>¡Bienvenido a Marte, el planeta rojo! Prepárate para explorar el cuarto planeta del sistema solar, conocido por su distintivo color y fascinantes características.</p>
                    <p><strong>Terreno Marciano:</strong> Descubre la diversidad de paisajes marcianos, desde vastas llanuras hasta cañones gigantes. Explora la superficie rocosa y busca signos de antiguos ríos y lagos.</p>
                    <p><strong>Aventuras Marcianas:</strong> Participa en emocionantes expediciones marcianas. Conduce rovers y realiza investigaciones científicas para desentrañar los misterios de este planeta fascinante.</p>
                    <p><strong>Vistas Panorámicas:</strong> Disfruta de impresionantes vistas del amanecer y el atardecer marciano. Observa las lunas Fobos y Deimos mientras se elevan sobre el horizonte marciano.</p>
                    <p><strong>Exploración Marciana:</strong> Únete a la exploración de cráteres marcianos y busca posibles señales de vida antigua. Marte te espera con secretos que solo podrás descubrir en este viaje único.</p>
                `,
                image: marte,
            })
        );
    }, 3000);
    
    setTimeout(function () {
        planets.push(
            new Planet({
                name: "Saturno",
                x: 500,
                y: -100,
                radius: 30,
                color: "yellow",
                description: `
                    <p>¡Bienvenido a Saturno, el señor de los anillos! Embárcate en una expedición a este increíble planeta, conocido por sus impresionantes anillos y su belleza cósmica.</p>
                    <p><strong>Anillos Asombrosos:</strong> Maravíllate con la vista de los deslumbrantes anillos de Saturno. Observa la complejidad de sus anillos y captura imágenes únicas de este fenómeno astronómico.</p>
                    <p><strong>Exploración Cósmica:</strong> Adéntrate en la atmósfera de Saturno y descubre sus características únicas. Experimenta la gravedad baja mientras te sumerges en la atmósfera de gas y nubes.</p>
                    <p><strong>Lunas Fascinantes:</strong> Saturno alberga una variedad de lunas intrigantes. Explora las lunas más grandes, como Titán, que tiene su propia atmósfera densa y lagos de metano y etano.</p>
                    <p><strong>Aventuras Estelares:</strong> Participa en observaciones estelares desde la órbita de Saturno. Con telescopios avanzados, podrás estudiar fenómenos astronómicos únicos desde este increíble punto de vista.</p>
                `,
                image: saturno,
            })
        );
    }, 3000);

    setTimeout(function () {
        planets.push(
            new Planet({
                name: "Júpiter",
                x: 200,
                y: -150,
                radius: 30,
                color: "orange",
                description: `
                    <p>¡Bienvenido a Júpiter, el rey majestuoso de nuestro sistema solar! Prepárate para una aventura interplanetaria que te llevará a explorar los misterios de este gigante gaseoso.</p>
                    <p><strong>Explora la Grandeza:</strong> Júpiter te recibe con sus enormes franjas de nubes y la enigmática Gran Mancha Roja. Sumérgete en la grandeza de sus tormentas y descubre la belleza única de este planeta colosal.</p>
                    <p><strong>Increíbles Vistas Panorámicas:</strong> Desde tu nave espacial, disfruta de vistas panorámicas impresionantes de los cinturones de nubes de Júpiter. Observa las auroras danzar en los polos, creando un espectáculo celestial inolvidable.</p>
                    <p><strong>Aventuras Atmosféricas:</strong> Experimenta la intensidad de la atmósfera joviana con vientos huracanados y tormentas eléctricas. Navega a través de sus capas superiores con tecnología de punta diseñada para resistir las condiciones más extremas.</p>
                    <p><strong>Consejo de Lonely Planet:</strong> No te pierdas la oportunidad de explorar las lunas galileanas de Júpiter, como Ío y Europa, cada una con sus propias maravillas y secretos por descubrir.</p>
                `,
                image: jupiter,
            })
        );
    }, 3000);
    
    setTimeout(function () {
        planets.push(
            new Planet({
                name: "neptuno",
                x: 800,
                y: -100,
                radius: 30,
                color: "blue",
                description: `
                    <p>¡Bienvenido a neptuno, el rey majestuoso de nuestro sistema solar! Prepárate para una aventura interplanetaria que te llevará a explorar los misterios de este gigante gaseoso.</p>
                    <p><strong>Explora la Grandeza:</strong> Júpiter te recibe con sus enormes franjas de nubes y la enigmática Gran Mancha Roja. Sumérgete en la grandeza de sus tormentas y descubre la belleza única de este planeta colosal.</p>
                    <p><strong>Increíbles Vistas Panorámicas:</strong> Desde tu nave espacial, disfruta de vistas panorámicas impresionantes de los cinturones de nubes de Júpiter. Observa las auroras danzar en los polos, creando un espectáculo celestial inolvidable.</p>
                    <p><strong>Aventuras Atmosféricas:</strong> Experimenta la intensidad de la atmósfera joviana con vientos huracanados y tormentas eléctricas. Navega a través de sus capas superiores con tecnología de punta diseñada para resistir las condiciones más extremas.</p>
                    <p><strong>Consejo de Lonely Planet:</strong> No te pierdas la oportunidad de explorar las lunas galileanas de Júpiter, como Ío y Europa, cada una con sus propias maravillas y secretos por descubrir.</p>
                `,
                image: neptuno,
            })
        );
    }, 3000);

    var launcher = {
        y: cH - 100,
        x: cW * 0.5 - 25,
        w: 80,
        h: 100,
        direccion: "",
        bg: "white",
    };

    function renderPlanets() {
        planets.forEach(function (planet) {
            if (!planet.visited) {
                if (planet.image) {
                    ctx.drawImage(
                        planet.image,
                        planet.x - planet.radius,
                        planet.y - planet.radius,
                        planet.radius * 2,
                        planet.radius * 2
                    );
                } else {
                    ctx.beginPath();
                    ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
                    ctx.fillStyle = planet.color;
                    ctx.fill();
                    ctx.closePath();
                }

                // Puedes agregar el nombre del planeta en el centro
                ctx.fillStyle = "white";
                ctx.font = "bold 20px Arial";
                ctx.fillText(planet.name, planet.x - planet.radius, planet.y + planet.radius + 20);
            }
        });
    }

    function renderLauncher() {
        ctx.fillStyle = launcher.bg;
        //ctx.drawImage(backgroundImage, 0, 0);
        ctx.drawImage(naveImage, launcher.x, launcher.y, launcher.w, launcher.h);
    }

    var collisionMode = false;

    function animate() {
        ctx.clearRect(0, 0, cW, cH);
        renderLauncher();
        renderPlanets();

        // Mueve los planetas hacia abajo solo si no estamos en modo de colisión
        if (!collisionMode) {
            planets.forEach(function (planet) {
                planet.y += 1;

                if (!planet.visited && isColliding(launcher, planet)) {
                    planet.visited = true;
                    collisionMode = true; // Entramos en modo de colisión
                    showPlanetInfo(planet);
                }

                // Verifica si el planeta ha salido de la pantalla solo si no ha sido visitado
                if (planet.y > cH + planet.radius && !planet.visited) {
                    planet.y = -50; // Reinicia la posición del planeta arriba
                }

                if (planet.visited) {
                    setTimeout(() => {
                        planet.visited = false; // Marca el planeta como no visitado
                        planet.y = -50; // Reinicia la posición del planeta arriba
                    }, 1000); // Espera 1 segundo antes de reiniciar la posición
                }
            });
        }
    }

    var animateInterval = setInterval(animate, 16);

    document.addEventListener("keydown", function (event) {
        switch (event.keyCode) {
            case 37: // Izquierda
                launcher.x -= 5;
                break;
            case 39: // Derecha
                launcher.x += 5;
                break;
            case 38: // Arriba
                launcher.y -= 5;
                break;
            case 40: // Abajo
                launcher.y += 5;
                break;
            case 80: // P para recargar
                location.reload();
                break;
            // Puedes agregar más casos según sea necesario
        }

        // Evitar que la nave salga de la pantalla
        launcher.x = Math.max(0, Math.min(launcher.x, cW - launcher.w));
        launcher.y = Math.max(0, Math.min(launcher.y, cH - launcher.h));
    });

    function showPlanetInfo(planet) {
        // Crear un contenedor principal
        var container = document.createElement("div");
        // container.classList.add("div", "bg-danger");
        container.classList.add("div", "rounded");
        // Crear un elemento de tabla
        var table = document.createElement("table");
        table.classList.add("table", "table-bordered");
        table.classList.add("table", "rounded");// Clases de Bootstrap
        table.style.width = "";
        table.style.backgroundColor = "transparent";

        // Crear la fila superior con las imágenes
        var imageRow = table.insertRow(0);
        var imageCell1 = imageRow.insertCell(0);
        var imageCell2 = imageRow.insertCell(1);

        // Agregar las imágenes al row superior
        imageCell1.innerHTML = `<img src="${planet.image.src}" alt="${planet.name}" style="width: 50%;">`;
        imageCell2.innerHTML = `<img src="${planet.image.src}" alt="${planet.name}" style="width: 50%;">`;

        // Crear la fila inferior con el itinerario y la descripción
        var infoRow = table.insertRow(1);
        var itineraryCell = infoRow.insertCell(0);
        var descripCell = infoRow.insertCell(1);

        // Agregar el itinerario y la descripción a la fila inferior
        itineraryCell.innerHTML = `<strong>Itinerario:</strong> ${planet.name}`;
        descripCell.innerHTML = `<strong>Descripción:</strong> ${planet.name}`;

        // Agregar el formulario en la celda de itinerarios
        var formRow = table.insertRow(2);
        var formCell = formRow.insertCell(0);
        var descriptionCell = formRow.insertCell(1);
        formCell.colSpan = 1; // Para ocupar el ancho completo de la tabla

        // Agregar el formulario con estilos de Bootstrap
        formCell.innerHTML = `
            <form class="p-3" id="explorationForm">
                <div class="mb-2">
                    <label for="fechaHora" class="form-label"><strong>Fecha y Hora</strong></label>
                    <input type="datetime-local" class="form-control" id="fechaHora" name="fechaHora" required>
                </div>
                <div class="mb-2 d-flex">
                    <label for="destino" class="form-label w-25"><strong>Destino:</strong></label>
                    <p class"text-start fw-bold">${planet.name}</p>
                </div>
                <div class="mb-2">
                    <label for="actividades" class="form-label"><strong>Actividades o Eventos</strong></label>
                    <textarea class="form-control" id="actividades" name="actividades"  placeholder="Actividades o Eventos"></textarea>
                </div>
                <div class="mb-2">
                    <label for="duracionEstimada" class="form-label"><strong>Duración Estimada</strong></label>
                    <input type="text" class="form-control" id="duracionEstimada" name="duracionEstimada" placeholder="Duracion Estimada">
                </div>
                <div class="mb-2">
                    <label for="notasEspeciales" class="form-label"><strong>Notas Especiales</strong></label>
                    <textarea class="form-control" id="notasEspeciales" name="notasEspeciales" rows="3" placeholder="Notas Especiales"></textarea>
                </div>
                <div class="mb-2">
                    <label for="tiempoDescanso" class="form-label"><strong>Tiempo de Descanso</strong></label>
                    <input type="text" class="form-control" id="tiempoDescanso" name="tiempoDescanso" placeholder="Tiempo de Descanso">
                </div>
                <div class="mb-2">
                    <label for="eventosEspeciales" class="form-label"><strong>Eventos Especiales</strong></label>
                    <textarea class="form-control" id="eventosEspeciales" name="eventosEspeciales" rows="3" placeholder="Eventos Especiales"></textarea>
                </div>
                <div class="mb-2">
                    <label for="comunicaciones" class="form-label"><strong>Comunicaciones</strong></label>
                    <textarea class="form-control" id="comunicaciones" name="comunicaciones" rows="3" placeholder="Comunicaciones"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Separar Viaje</button>
            </form>
        `;

        descriptionCell.colSpan = 2; // Para ocupar el ancho completo de la tabla
        // Agregar la descripción estilo Lonely Planet
        descriptionCell.innerHTML += `${planet.description}`;

        // Crear botones
        var returnToEarthButton = document.createElement("button");
        returnToEarthButton.innerHTML = "<strong>Regresar a Tierra</strong>";
        returnToEarthButton.classList.add("btn", "btn-primary");
        returnToEarthButton.classList.add("btn", "fs-5");
        returnToEarthButton.addEventListener("click", returnToEarth);

        var resumeGameButton = document.createElement("button");
        resumeGameButton.innerHTML = "<strong>Despegar</strong>";
        resumeGameButton.classList.add("btn", "btn-success");
        resumeGameButton.classList.add("btn", "m-2");
        resumeGameButton.classList.add("btn", "fs-5");
        resumeGameButton.addEventListener("click", resumeGame);

        // Agregar la tabla y los botones al contenedor
        container.appendChild(table);
        container.appendChild(returnToEarthButton);
        container.appendChild(resumeGameButton);

        container.style.position = "absolute";
        container.style.top = "0";
        container.style.right = "0";
        container.style.padding = "20px"; // Ajusta según sea necesario
        container.style.backgroundColor = "#98a8fc";
        
        //Estilo adicional para la descripción
        descriptionCell.style.padding = "20px"; // Ajusta según sea necesario
        descriptionCell.style.color = "#000"; // Color del texto para contrastar
        formCell.style.backgroundColor = "transparent";
        imageCell1.style.backgroundColor = "transparent";
        imageCell2.style.backgroundColor = "transparent";
        descriptionCell.style.backgroundColor = "transparent";
        itineraryCell.style.backgroundColor = "transparent";
        descripCell.style.backgroundColor = "transparent";

        // Agregar estilos al contenedor para que se muestre al lado derecho
        var labelStyles = document.createElement("style");
        labelStyles.innerHTML = `
            .form-label {
                text-align: left;
                display: inline-block;
                width: 100%;
                padding:0;
                margin:0;
            }
        `;
        document.head.appendChild(labelStyles);
        // Limpiar el contenido del contenedor de la ventana modal
        document.getElementById("modal-content").innerHTML = ""

        // Agregar el contenedor al cuerpo del documento
        document.getElementById("modal-content").appendChild(container);

        // Obtener el formulario después de agregarlo al DOM
        var explorationForm = document.getElementById("explorationForm");

        // Evento submit para el formulario
        explorationForm.addEventListener("submit", function (event) {
            event.preventDefault();
            // Resto del código del evento submit...
            swal("¡Exito!", "Has realizado con éxito tu formulario!", "success");
        });
    }


    function returnToEarth() {
        // Realizar otras acciones necesarias al regresar a la Tierra

        // Restablecer el modo de colisión
        collisionMode = false;

        // Reiniciar el juego
        location.reload();
    }

    function resumeGame() {
        // Detener el intervalo anterior si existe
        clearInterval(animateInterval);

        // Realizar otras acciones necesarias al despegar

        // Restablecer el modo de colisión
        collisionMode = false;

        // Limpiar el contenido del contenedor de la ventana modal
        document.getElementById("modal-content").innerHTML = "";

        // Iniciar un nuevo intervalo
        animateInterval = setInterval(animate, 16);
    }

    function isColliding(obj1, obj2) {
        return (
            obj1.x < obj2.x + obj2.radius &&
            obj1.x + obj1.w > obj2.x - obj2.radius &&
            obj1.y < obj2.y + obj2.radius &&
            obj1.y + obj1.h > obj2.y - obj2.radius
        );
    }
}

// Segunda parte
function Launcher() {
    var canvas = document.getElementById("my_canvas");
    var ctx = canvas.getContext("2d");

    var cW = canvas.width;
    var cH = canvas.height;

    this.y = cH - 100;
    this.x = cW * 0.5 - 25;
    this.w = 50;
    this.h = 90;
    this.direccion = "";
    this.bg = "white";
    this.gameStatus = {
        over: false,
        message: "",
        fillStyle: "red",
        font: "italic bold 36px Arial, sans-serif",
    };

    this.render = function () {
        renderLauncher();
        checkPlanetCollision();
        checkGameStatus();
    };

    function checkPlanetCollision() {
        planets.forEach(function (planet) {
            if (!planet.visited && isColliding(launcher, planet)) {
                planet.visited = true;
                showPlanetInfo(planet);
            }
        });
    }
}

// Resto del código

var launcher = new Launcher();

window.addEventListener("load", function (event) {
    initCanvas();
});
