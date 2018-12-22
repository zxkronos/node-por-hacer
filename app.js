//const argv = require('yargs').argv;
const argv = require('./config/yargs.js').argv;
//console.log(argv);
const porHacer = require('./por-hacer/por-hacer.js');
const colors = require('colors');
let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        //console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        console.log('====== por hacer ======='.red);
        for (let tarea of listado) {
            if (tarea.completado == false) {
                console.log(`Tarea: ${tarea.descripcion}`);
                console.log(`Estado: ${tarea.completado}`);
            }
        }
        console.log('========================'.red);
        console.log('====== tareas hechas ======='.green);
        for (let tarea1 of listado) {

            if (tarea1.completado) {
                console.log(`Tarea: ${tarea1.descripcion}`);
                console.log(`Estado: ${tarea1.completado}`);
            }
        }
        console.log('========================'.green);
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('actualizado');
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log(`la tarea ${argv.descripcion} fue borrada correctamente`);
        } else {
            console.log(`la tarea ${argv.descripcion} no existe`);
        }

        break;

    default:
        console.log('comando no reconocido');
        break;
}