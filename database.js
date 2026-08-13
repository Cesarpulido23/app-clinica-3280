// ==========================================
// BASE DE DATOS NORMATIVA - RESOLUCIÓN 3280
// ==========================================
const baseDatos3280 = [
    // --- PRIMERA INFANCIA (0 a 5 años / 0 a 71 meses) ---
    {
        id: "PI_01",
        cursoVida: "Primera Infancia",
        minMeses: 0, maxMeses: 0.2, // Recién nacido
        sexo: "A", // Ambos
        nombre: "Valoración integral por Medicina General / Pediatría (Recién Nacido)",
        frecuencia: "Recién nacido (Primeros 7 días)",
        cups: "890201",
        finalidad: "04 - Alteraciones del Crecimiento y Desarrollo",
        cie10: "Z001",
        talento: "Médico General / Especialista en Pediatría"
    },
    {
        id: "PI_02",
        cursoVida: "Primera Infancia",
        minMeses: 1, maxMeses: 71,
        sexo: "A",
        nombre: "Atención en salud por profesional de enfermería (Control Crecimiento y Desarrollo)",
        frecuencia: "Seguimiento periódico según esquema de la norma (1M, 2-3M, 4-5M, 6-8M, 9-11M, 12-18M, 24M, 3A, 4A, 5A)",
        cups: "890205",
        finalidad: "04 - Alteraciones del Crecimiento y Desarrollo",
        cie10: "Z001",
        talento: "Profesional en Enfermería"
    },
    {
        id: "PI_03",
        cursoVida: "Primera Infancia",
        minMeses: 6, maxMeses: 71,
        sexo: "A",
        nombre: "Atención en salud bucal por profesional de odontología",
        frecuencia: "Una vez al año a partir de los 6 meses",
        cups: "890203",
        finalidad: "04 - Alteraciones del Crecimiento y Desarrollo",
        cie10: "Z012",
        talento: "Profesional en Odontología"
    },
    {
        id: "PI_04",
        cursoVida: "Primera Infancia",
        minMeses: 1, maxMeses: 23,
        sexo: "A",
        nombre: "Administración de Micronutrientes en Polvo / Hierro",
        frecuencia: "Según esquema nutricional preventivo y antecedentes de bajo peso",
        cups: "B03AA0701",
        finalidad: "04 - Alteraciones del Crecimiento y Desarrollo",
        cie10: "Z713",
        talento: "Enfermería / Medicina General"
    },
    {
        id: "PI_05",
        cursoVida: "Primera Infancia",
        minMeses: 12, maxMeses: 71,
        sexo: "A",
        nombre: "Desparasitación intestinal profiláctica (Albendazol / Mebendazol)",
        frecuencia: "Semestral a partir del año de edad",
        cups: "P02CA0301",
        finalidad: "04 - Alteraciones del Crecimiento y Desarrollo",
        cie10: "Z298",
        talento: "Medicina General / Enfermería"
    },

    // --- INFANCIA (6 a 11 años / 72 a 143 meses) ---
    {
        id: "INF_01",
        cursoVida: "Infancia",
        minMeses: 72, maxMeses: 143,
        sexo: "A",
        nombre: "Atención en salud por medicina general, pediatría o medicina familiar",
        frecuencia: "Anual",
        cups: "890201",
        finalidad: "04 - Alteraciones del Crecimiento y Desarrollo",
        cie10: "Z002",
        talento: "Médico General / Familiar / Pediatra"
    },
    {
        id: "INF_02",
        cursoVida: "Infancia",
        minMeses: 72, maxMeses: 143,
        sexo: "A",
        nombre: "Atención en salud bucal por odontología",
        frecuencia: "Dos veces al año",
        cups: "890203",
        finalidad: "04 - Alteraciones del Crecimiento y Desarrollo",
        cie10: "Z012",
        talento: "Profesional en Odontología"
    },
    {
        id: "INF_03",
        cursoVida: "Infancia",
        minMeses: 120, maxMeses: 167,
        sexo: "F",
        nombre: "Tamizaje para anemia - Hemoglobina y hematocrito",
        frecuencia: "Una vez entre los 10 y 13 años",
        cups: "902213",
        finalidad: "04 - Alteraciones del Crecimiento y Desarrollo",
        cie10: "Z017",
        talento: "Enfermería / Bacteriología"
    },

    // --- ADOLESCENCIA (12 a 17 años / 144 a 215 meses) ---
    {
        id: "ADO_01",
        cursoVida: "Adolescencia",
        minMeses: 144, maxMeses: 215,
        sexo: "A",
        nombre: "Atención en salud por medicina general o familiar (Valoración integral)",
        frecuencia: "Anual",
        cups: "890201",
        finalidad: "05 - Alteración del Desarrollo Joven",
        cie10: "Z003",
        talento: "Médico General / Familiar"
    },
    {
        id: "ADO_02",
        cursoVida: "Adolescencia",
        minMeses: 144, maxMeses: 215,
        sexo: "A",
        nombre: "Prueba rápida treponémica para sífilis y Prueba rápida para VIH",
        frecuencia: "Según exposición al riesgo / inicio de vida sexual activa",
        cups: "906039 (Treponémica) / 906249 (VIH)",
        finalidad: "05 - Alteración del Desarrollo Joven",
        cie10: "Z113",
        talento: "Medicina General / Enfermería"
    },
    {
        id: "ADO_03",
        cursoVida: "Adolescencia",
        minMeses: 168, maxMeses: 215,
        sexo: "F",
        nombre: "Tamizaje para anemia (Hemoglobina y hematocrito)",
        frecuencia: "Una vez entre los 14 y 17 años",
        cups: "902213",
        finalidad: "05 - Alteración del Desarrollo Joven",
        cie10: "Z017",
        talento: "Enfermería / Bacteriología"
    },

    // --- JUVENTUD (18 a 28 años / 216 a 347 meses) ---
    {
        id: "JUV_01",
        cursoVida: "Juventud",
        minMeses: 216, maxMeses: 347,
        sexo: "A",
        nombre: "Atención en salud por medicina general o familiar",
        frecuencia: "Cada 2 años",
        cups: "890201",
        finalidad: "05 - Alteración del Desarrollo Joven",
        cie10: "Z000",
        talento: "Médico General / Familiar"
    },
    {
        id: "JUV_02",
        cursoVida: "Juventud",
        minMeses: 216, maxMeses: 347,
        sexo: "A",
        nombre: "Tamizaje de riesgo cardiovascular (Glicemia basal, Perfil lipídico, Creatinina, Uroanálisis)",
        frecuencia: "Cada 5 años o según clasificación del riesgo",
        cups: "903841 (Glicemia) / 903856 (Perfil Lipídico) / 903825 (Creatinina) / 907106 (Uroanálisis)",
        finalidad: "05 - Alteración del Desarrollo Joven",
        cie10: "Z017",
        talento: "Médico General / Enfermería"
    },

    // --- ADULTEZ (29 a 59 años / 348 a 719 meses) ---
    {
        id: "ADU_01",
        cursoVida: "Adultez",
        minMeses: 348, maxMeses: 719,
        sexo: "A",
        nombre: "Atención en salud por medicina general o familiar",
        frecuencia: "Cada 3 años",
        cups: "890201",
        finalidad: "07 - Alteraciones del Adulto",
        cie10: "Z000",
        talento: "Médico General / Familiar"
    },
    {
        id: "ADU_02",
        cursoVida: "Adultez",
        minMeses: 348, maxMeses: 719,
        sexo: "A",
        nombre: "Tamizaje de riesgo cardiovascular (Glicemia, Perfil lipídico, Creatinina, Uroanálisis)",
        frecuencia: "Quinquenal",
        cups: "903841 / 903856 / 903825 / 907106",
        finalidad: "07 - Alteraciones del Adulto",
        cie10: "Z017",
        talento: "Médico General / Enfermería"
    },
    {
        id: "ADU_03",
        cursoVida: "Adultez",
        minMeses: 300, maxMeses: 780,
        sexo: "F",
        nombre: "Tamizaje de cáncer de cuello uterino (Citología cervicouterina o ADN-VPH)",
        frecuencia: "Citología cada 3 años (o ADN-VPH cada 5 años según edad y lineamiento)",
        cups: "892901 (Citología) / 908436 (ADN-VPH)",
        finalidad: "13 - Detección temprana de cáncer de cuello uterino",
        cie10: "Z124",
        talento: "Medicina / Enfermería / Bacteriología / Citotecnología"
    },
    {
        id: "ADU_04",
        cursoVida: "Adultez",
        minMeses: 600, maxMeses: 719,
        sexo: "F",
        nombre: "Mamografía bilateral de tamizaje",
        frecuencia: "Cada 2 años a partir de los 50 años",
        cups: "876802",
        finalidad: "14 - Detección temprana de cáncer de mama",
        cie10: "Z123",
        talento: "Especialista en Radiología e Imágenes Diagnósticas"
    },
    {
        id: "ADU_05",
        cursoVida: "Adultez",
        minMeses: 600, maxMeses: 719,
        sexo: "M",
        nombre: "Tamizaje para cáncer de próstata (Antígeno específico - PSA)",
        frecuencia: "Cada 5 años a partir de los 50 años",
        cups: "906610",
        finalidad: "15 - Detección temprana de cáncer de próstata",
        cie10: "Z125",
        talento: "Medicina General / Urología"
    },
    {
        id: "ADU_06",
        cursoVida: "Adultez",
        minMeses: 600, maxMeses: 719,
        sexo: "A",
        nombre: "Tamizaje para cáncer de colon y recto (Sangre oculta en materia fecal por inmunoquímica)",
        frecuencia: "Cada 2 años a partir de los 50 años",
        cups: "907009",
        finalidad: "16 - Detección temprana de cáncer de colon y recto",
        cie10: "Z121",
        talento: "Medicina General / Enfermería"
    },

    // --- VEJEZ (60 años y más / 720 meses en adelante) ---
    {
        id: "VEJ_01",
        cursoVida: "Vejez",
        minMeses: 720, maxMeses: 1440,
        sexo: "A",
        nombre: "Atención en salud en la vejez por medicina general o familiar",
        frecuencia: "Cada 3 años",
        cups: "890201",
        finalidad: "07 - Alteraciones del Adulto",
        cie10: "Z000",
        talento: "Médico General / Familiar"
    },
    {
        id: "VEJ_02",
        cursoVida: "Vejez",
        minMeses: 720, maxMeses: 839,
        sexo: "F",
        nombre: "Mamografía bilateral de tamizaje",
        frecuencia: "Cada 2 años hasta los 69 años",
        cups: "876802",
        finalidad: "14 - Detección temprana de cáncer de mama",
        cie10: "Z123",
        talento: "Especialista en Radiología e Imágenes Diagnósticas"
    },
    {
        id: "VEJ_03",
        cursoVida: "Vejez",
        minMeses: 720, maxMeses: 900,
        sexo: "M",
        nombre: "Tamizaje para cáncer de próstata (PSA)",
        frecuencia: "Cada 5 años hasta los 75 años",
        cups: "906610",
        finalidad: "15 - Detección temprana de cáncer de próstata",
        cie10: "Z125",
        talento: "Médico General / Urología"
    },
    {
        id: "VEJ_04",
        cursoVida: "Vejez",
        minMeses: 720, maxMeses: 1440,
        sexo: "A",
        nombre: "Tamizaje cáncer de colon (Sangre oculta en materia fecal)",
        frecuencia: "Cada 2 años hasta los 75 años",
        cups: "907009",
        finalidad: "16 - Detección temprana de cáncer de colon y recto",
        cie10: "Z121",
        talento: "Médico General / Enfermería"
    }
];
