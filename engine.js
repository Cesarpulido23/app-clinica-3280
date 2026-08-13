// ==========================================
// MOTOR CLÍNICO Y ALGORÍTMICO - RESOLUCIÓN 3280
// ==========================================

function ejecutarMotorClinico(edadValor, tipoEdad, sexo, estadoControl, gestante) {
    // Convertir la edad ingresada a meses para estandarizar con la base de datos
    let edadEnMeses = (tipoEdad === 'anios') ? (edadValor * 12) : edadValor;

    let intervencionesAplicables = [];
    let cupsSet = new Set();
    let finalidadesSet = new Set();
    let cie10Set = new Set();
    let textoHistoriaClinica = "PLAN Y MANEJO - RUTA INTEGRAL DE ATENCIÓN (RES. 3280):\n";

    // 1. Evaluación analítica del intervalo de control
    let alertaIntervaloHTML = "";
    if (estadoControl === 'prematuro') {
        alertaIntervaloHTML = `<div class="alerta prematuro">⚠️ ALERTA CLÍNICA: Control reciente reportado. Verifique justificación clínica para evitar órdenes prematuras y posibles glosas administrativas.</div>`;
        textoHistoriaClinica += "[ALERTA: Control previo reciente menor al intervalo reglamentario]\n";
    } else if (estadoControl === 'tardio') {
        alertaIntervaloHTML = `<div class="alerta tardio">🚨 ALERTA CLÍNICA: Control tardío o vencido frente a la periodicidad de la Resolución 3280. Brecha de cohorte detectada; canalizar y ordenar prioritariamente.</div>`;
        textoHistoriaClinica += "[ALERTA: Control tardío / Brecha en cohorte PyP]\n";
    } else if (estadoControl === 'en_rango') {
        alertaIntervaloHTML = `<div class="alerta adecuado">✅ Intervalo adecuado según cohorte normativa vigente.</div>`;
        textoHistoriaClinica += "[Intervalo de control PyP adecuado a la norma]\n";
    }

    // 2. Procesamiento y cruce de variables contra la base normativa
    baseDatos3280.forEach(item => {
        let cumpleEdad = (edadEnMeses >= item.minMeses && edadEnMeses <= item.maxMeses);
        let cumpleSexo = (item.sexo === 'A' || item.sexo === sexo);

        if (cumpleEdad && cumpleSexo) {
            intervencionesAplicables.push(item);
            cupsSet.add(`${item.cups} : ${item.nombre}`);
            finalidadesSet.add(item.finalidad);
            cie10Set.add(item.cie10);
            textoHistoriaClinica += `• Intervención: ${item.nombre} | Frecuencia: ${item.frecuencia} | CUPS: ${item.cups}\n`;
        }
    });

    return {
        alertaIntervaloHTML,
        intervencionesAplicables,
        cupsAislados: Array.from(cupsSet),
        finalidadesRips: Array.from(finalidadesSet),
        cie10Sugerido: Array.from(cie10Set),
        textoHC: textoHistoriaClinica
    };
}
