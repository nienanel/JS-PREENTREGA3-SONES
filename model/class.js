class exoPlanetas {
    nombre
    masa
    distancia
    temperatura
    hClase
    duracionAno

    constructor(nombre,masa,distancia,temperatura,hClase,duracionAno) {
        this.nombre = nombre
        this.masa = masa
        this.distancia = distancia
        this.temperatura = temperatura
        this.hClase = hClase
        this.duracionAno = duracionAno
    }
}

///creacion de objetos con constructor y class "exoplanetas"
const exo1 = new exoPlanetas("Trappist", 0.41, 41, 14.85, "candidato", 6.1);
const exo2 = new exoPlanetas("ProximaCentaurib", 1.27, 4.2, -46.7, "Psicroplaneta", 11.2);
const exo3 = new exoPlanetas("Kepler442b", 2.36, 1115, -38.5, "Psicroplaneta", 112);
const exo4 = new exoPlanetas("KOI4878", 0.99, 1075, 14.85, "candidato", 449);
const exo5 = new exoPlanetas("Teegardenb", 1.55, 12, -6.15, "mesoplaneta", 4.91);
const exo6 = new exoPlanetas("Gliese667", 3.8, 22.8, 13.25, "mesoplaneta", 28.14);
const exo7 = new exoPlanetas("Ross128b", 25.93, 14, 38.55, "candidato", .82);
const exo8 = new exoPlanetas("Wolf1661b", 3.41, 14, 1.85, "mesoplaneta", 17.9)
const exo9 = new exoPlanetas("tierra", 1, 0, 14, "mesoplaneta", 365)