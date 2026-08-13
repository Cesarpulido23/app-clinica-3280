const baseDatos3280 = [
    // --- ADULTEZ (29 a 59 años) ---
    {
        min: 29, max: 59, sexo: 'A', gestante: 'TODOS',
        categoria: "Valoración Integral",
        nombre: "Atención en salud por medicina general o medicina familiar",
        frecuencia: "Cada 3 años",
        cups: "890201",
        finalidad: "07 - Alteraciones del Adulto",
        cie10: "Z000",
        talento: "Profesional en medicina general o especialista en medicina familiar"
    },
    {
        min: 29, max: 59, sexo: 'A', gestante: 'TODOS',
        categoria: "Valoración Integral",
        nombre: "Atención en salud bucal por profesional de odontología",
        frecuencia: "Una vez cada dos años",
        cups: "890203",
        finalidad: "07 - Alteraciones del Adulto",
        cie10: "Z000",
        talento: "Profesional en odontología"
    },
    {
        min: 29, max: 59, sexo: 'A', gestante: 'TODOS',
        categoria: "Tamizaje Cardiovascular",
        nombre: "Tamizaje de riesgo cardiovascular (Glicemia basal, Perfil lipídico, Creatinina, Uroanálisis)",
        frecuencia: "Quinquenal / Según factor de riesgo",
        cups: "903841 (Glicemia) / 903856 (Perfil lipídico) / 903825 (Creatinina) / 907106 (Uroanálisis)",
        finalidad: "07 - Alteraciones del Adulto",
        cie10: "Z017",
        talento: "Profesional en medicina general o enfermería"
    },
    {
        min: 25, max: 65, sexo: 'F', gestante: 'TODOS',
        categoria: "Tamizaje Oncológico",
        nombre: "Tamizaje de cáncer de cuello uterino (Citología cervicouterina o ADN-VPH)",
        frecuencia: "Esquema 1-3-3 o ADN-VPH cada 5 años según edad",
        cups: "892901 (Citología) / 908436 (ADN-VPH)",
        finalidad: "13 - Detección temprana de cáncer de cuello uterino",
        cie10: "Z124",
        talento: "Profesional en medicina general, enfermería o bacteriología"
    },
    {
        min: 50, max: 59, sexo: 'F', gestante: 'TODOS',
        categoria: "Tamizaje Oncológico",
        nombre: "Mamografía bilateral de tamizaje",
        frecuencia: "Cada 2 años a partir de los 50 años",
        cups: "876802",
        finalidad: "14 - Detección temprana de cáncer de mama",
        cie10: "Z123",
        talento: "Especialista en radiología o imágenes diagnósticas"
    },
    {
        min: 50, max: 59, sexo: 'M', gestante: 'TODOS',
        categoria: "Tamizaje Oncológico",
        nombre: "Tamizaje para cáncer de próstata (Antígeno específico - PSA)",
        frecuencia: "Cada 5 años a partir de los 50 años",
        cups: "906610",
        finalidad: "15 - Detección temprana de cáncer de próstata",
        cie10: "Z125",
        talento: "Profesional en medicina general o urología"
    },
    {
        min: 50, max: 59, sexo: 'A', gestante: 'TODOS',
        categoria: "Tamizaje Oncológico",
        nombre: "Tamizaje para cáncer de colon y recto (Sangre oculta en materia fecal por inmunoquímica)",
        frecuencia: "Cada 2 años a partir de los 50 años",
        cups: "907009",
        finalidad: "16 - Detección temprana de cáncer de colon y recto",
        cie10: "Z121",
        talento: "Profesional en medicina general o enfermería"
    },

    // --- VEJEZ (60 años y más) ---
    {
        min: 60, max: 120, sexo: 'A', gestante: 'TODOS',
        categoria: "Valoración Integral",
        nombre: "Atención en salud en el vejez por medicina general o familiar",
        frecuencia: "Cada 3 años",
        cups: "890201",
        finalidad: "07 - Alteraciones del Adulto",
        cie10: "Z000",
        talento: "Médico general o familiar"
    },
    {
        min: 60, max: 69, sexo: 'F', gestante: 'TODOS',
        categoria: "Tamizaje Oncológico",
        nombre: "Mamografía bilateral de tamizaje",
        frecuencia: "Cada 2 años hasta los 69 años",
        cups: "876802",
        finalidad: "14 - Detección temprana de cáncer de mama",
        cie10: "Z123",
        talento: "Especialista en radiología"
    },
    {
        min: 60, max: 75, sexo: 'M', gestante: 'TODOS',
        categoria: "Tamizaje Oncológico",
        nombre: "Tamizaje para cáncer de próstata (PSA)",
        frecuencia: "Cada 5 años hasta los 75 años",
        cups: "906610",
        finalidad: "15 - Detección temprana de cáncer de próstata",
        cie10: "Z125",
        talento: "Médico general o urología"
    }
];
