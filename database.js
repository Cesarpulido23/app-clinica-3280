// ==========================================
// BASE DE DATOS NORMATIVA - RESOLUCIÓN 3280 (CORREGIDA Y PRECISA)
// ==========================================
const baseDatos3280 = [
    // --- PRIMERA INFANCIA (0 a 5 años / 0 a 71 meses) ---
    {
        cursoVida: "Primera Infancia",
        minMeses: 0, maxMeses: 0.2, sexo: "A",
        nombre: "VALORACIÓN INTEGRAL POR MEDICINA GENERAL / PEDIATRÍA (RECIÉN NACIDO)",
        frecuencia: "Recién nacido",
        cups: "890201", finalidad: "04 - Alteraciones Crecimiento y Desarrollo", cie10: "Z001", talento: "Médico / Pediatra"
    },
    {
        cursoVida: "Primera Infancia",
        minMeses: 1, maxMeses: 71, sexo: "A",
        nombre: "CONTROL DE CRECIMIENTO Y DESARROLLO POR ENFERMERÍA",
        frecuencia: "Periódico según esquema de la norma",
        cups: "890205", finalidad: "04 - Alteraciones Crecimiento y Desarrollo", cie10: "Z001", talento: "Enfermería"
    },
    {
        cursoVida: "Primera Infancia",
        minMeses: 6, maxMeses: 71, sexo: "A",
        nombre: "ATENCIÓN EN SALUD BUCAL POR ODONTOLOGÍA",
        frecuencia: "Anual",
        cups: "890203", finalidad: "04 - Alteraciones Crecimiento y Desarrollo", cie10: "Z012", talento: "Odontología"
    },
    {
        cursoVida: "Protección Específica",
        minMeses: 12, maxMeses: 71, sexo: "A",
        nombre: "DESPARASITACIÓN INTESTINAL (ALBENDAZOL / MEBENDAZOL)",
        frecuencia: "Semestral",
        cups: "P02CA0301", finalidad: "04 - Alteraciones Crecimiento y Desarrollo", cie10: "Z298", talento: "Medicina / Enfermería"
    },

    // --- INFANCIA (6 a 11 años / 72 a 143 meses) ---
    {
        cursoVida: "Infancia",
        minMeses: 72, maxMeses: 143, sexo: "A",
        nombre: "ATENCIÓN EN SALUD POR MEDICINA GENERAL O FAMILIAR",
        frecuencia: "Anual",
        cups: "890201", finalidad: "04 - Alteraciones Crecimiento y Desarrollo", cie10: "Z002", talento: "Médico General / Familiar"
    },
    {
        cursoVida: "Infancia",
        minMeses: 72, maxMeses: 143, sexo: "A",
        nombre: "ATENCIÓN EN SALUD BUCAL POR ODONTOLOGÍA",
        frecuencia: "Anual",
        cups: "890203", finalidad: "04 - Alteraciones Crecimiento y Desarrollo", cie10: "Z012", talento: "Odontología"
    },
    {
        cursoVida: "Detección Temprana",
        minMeses: 120, maxMeses: 167, sexo: "F",
        nombre: "HEMOGRAMA (TAMIZAJE PARA ANEMIA - HB Y HTO)",
        frecuencia: "Una vez entre 10 y 13 años",
        cups: "902213", finalidad: "04 - Alteraciones Crecimiento y Desarrollo", cie10: "Z017", talento: "Bacteriología / Enfermería"
    },

    // --- ADOLESCENCIA (12 a 17 años / 144 a 215 meses) ---
    {
        cursoVida: "Adolescencia",
        minMeses: 144, maxMeses: 215, sexo: "A",
        nombre: "ATENCIÓN EN SALUD POR MEDICINA GENERAL O FAMILIAR",
        frecuencia: "Anual",
        cups: "890201", finalidad: "05 - Alteración del Desarrollo Joven", cie10: "Z003", talento: "Médico General / Familiar"
    },
    {
        cursoVida: "Adolescencia",
        minMeses: 168, maxMeses: 215, sexo: "F",
        nombre: "HEMOGRAMA (TAMIZAJE PARA ANEMIA - HB Y HTO)",
        frecuencia: "Una vez entre 14 y 17 años",
        cups: "902213", finalidad: "05 - Alteración del Desarrollo Joven", cie10: "Z017", talento: "Bacteriología / Enfermería"
    },

    // --- JUVENTUD (18 a 28 años / 216 a 347 meses) ---
    {
        cursoVida: "Juventud",
        minMeses: 216, maxMeses: 347, sexo: "A",
        nombre: "ATENCIÓN EN SALUD POR MEDICINA GENERAL O FAMILIAR",
        frecuencia: "Cada 2 años",
        cups: "890201", finalidad: "05 - Alteración del Desarrollo Joven", cie10: "Z000", talento: "Médico General / Familiar"
    },
    {
        cursoVida: "Tamizaje Cardiovascular",
        minMeses: 216, maxMeses: 347, sexo: "A",
        nombre: "GLICEMIA BASAL",
        frecuencia: "Quinquenal",
        cups: "903841", finalidad: "05 - Alteración del Desarrollo Joven", cie10: "Z017", talento: "Medicina / Enfermería"
    },
    {
        cursoVida: "Tamizaje Cardiovascular",
        minMeses: 216, maxMeses: 347, sexo: "A",
        nombre: "PERFIL LIPÍDICO (COLESTEROL TOTAL, HDL, LDL, TRIGLICÉRIDOS)",
        frecuencia: "Quinquenal",
        cups: "903856", finalidad: "05 - Alteración del Desarrollo Joven", cie10: "Z017", talento: "Medicina / Enfermería"
    },
    {
        cursoVida: "Tamizaje Cardiovascular",
        minMeses: 216, maxMeses: 347, sexo: "A",
        nombre: "CREATININA SÉRICA",
        frecuencia: "Quinquenal",
        cups: "903825", finalidad: "05 - Alteración del Desarrollo Joven", cie10: "Z017", talento: "Medicina / Enfermería"
    },
    {
        cursoVida: "Tamizaje Cardiovascular",
        minMeses: 216, maxMeses: 347, sexo: "A",
        nombre: "PARCIAL DE ORINA (UROANÁLISIS)",
        frecuencia: "Quinquenal",
        cups: "907106", finalidad: "05 - Alteración del Desarrollo Joven", cie10: "Z017", talento: "Medicina / Enfermería"
    },

    // --- ADULTEZ (29 a 59 años / 348 a 719 meses) ---
    {
        cursoVida: "Adultez",
        minMeses: 348, maxMeses: 719, sexo: "A",
        nombre: "ATENCIÓN EN SALUD POR MEDICINA GENERAL O FAMILIAR",
        frecuencia: "Cada 3 años",
        cups: "890201", finalidad: "07 - Alteraciones del Adulto", cie10: "Z000", talento: "Médico General / Familiar"
    },
    {
        cursoVida: "Tamizaje Cardiovascular",
        minMeses: 348, maxMeses: 719, sexo: "A",
        nombre: "GLICEMIA BASAL",
        frecuencia: "Quinquenal",
        cups: "903841", finalidad: "07 - Alteraciones del Adulto", cie10: "Z017", talento: "Medicina / Enfermería"
    },
    {
        cursoVida: "Tamizaje Cardiovascular",
        minMeses: 348, maxMeses: 719, sexo: "A",
        nombre: "PERFIL LIPÍDICO (COLESTEROL TOTAL, HDL, LDL, TRIGLICÉRIDOS)",
        frecuencia: "Quinquenal",
        cups: "903856", finalidad: "07 - Alteraciones del Adulto", cie10: "Z017", talento: "Medicina / Enfermería"
    },
    {
        cursoVida: "Tamizaje Cardiovascular",
        minMeses: 348, maxMeses: 719, sexo: "A",
        nombre: "CREATININA SÉRICA",
        frecuencia: "Quinquenal",
        cups: "903825", finalidad: "07 - Alteraciones del Adulto", cie10: "Z017", talento: "Medicina / Enfermería"
    },
    {
        cursoVida: "Tamizaje Cardiovascular",
        minMeses: 348, maxMeses: 719, sexo: "A",
        nombre: "PARCIAL DE ORINA (UROANÁLISIS)",
        frecuencia: "Quinquenal",
        cups: "907106", finalidad: "07 - Alteraciones del Adulto", cie10: "Z017", talento: "Medicina / Enfermería"
    },
    {
        cursoVida: "Tamizaje Oncológico",
        minMeses: 300, maxMeses: 359, sexo: "F",
        nombre: "CITOLOGÍA CERVICOUTERINA (CONVENCIONAL O EN BASE LÍQUIDA)",
        frecuencia: "Esquema 1-3 en este rango",
        cups: "892901", finalidad: "13 - Detección temprana de cáncer de cuello uterino", cie10: "Z124", talento: "Medicina / Enfermería / Bacteriología"
    },
    {
        cursoVida: "Tamizaje Oncológico",
        minMeses: 360, maxMeses: 780, sexo: "F",
        nombre: "PRUEBA DE ADN-VPH (DETECCIÓN DE ADN DE VIRUS PAPILOMA HUMANO)",
        frecuencia: "Cada 5 años",
        cups: "908436", finalidad: "13 - Detección temprana de cáncer de cuello uterino", cie10: "Z124", talento: "Medicina / Enfermería / Bacteriología"
    },
    {
        cursoVida: "Tamizaje Oncológico",
        minMeses: 600, maxMeses: 719, sexo: "F",
        nombre: "MAMOGRAFÍA BILATERAL DE TAMIZAJE",
        frecuencia: "Cada 2 años a partir de los 50 años",
        cups: "876802", finalidad: "14 - Detección temprana de cáncer de mama", cie10: "Z123", talento: "Radiología e Imágenes Diagnósticas"
    },
    {
        cursoVida: "Tamizaje Oncológico",
        minMeses: 600, maxMeses: 719, sexo: "M",
        nombre: "ANTÍGENO ESPECÍFICO DE PRÓSTATA (PSA)",
        frecuencia: "Cada 5 años a partir de los 50 años",
        cups: "906610", finalidad: "15 - Detección temprana de cáncer de próstata", cie10: "Z125", talento: "Medicina General / Urología"
    },
    {
        cursoVida: "Tamizaje Oncológico",
        minMeses: 600, maxMeses: 719, sexo: "A",
        nombre: "SANGRE OCULTA EN MATERIA FECAL POR INMUNOQUÍMICA (SOMF)",
        frecuencia: "Cada 2 años a partir de los 50 años",
        cups: "907009", finalidad: "16 - Detección temprana de cáncer de colon y recto", cie10: "Z121", talento: "Medicina General / Enfermería"
    },

    // --- VEJEZ (60 años y más / 720 meses en adelante) ---
    {
        cursoVida: "Vejez",
        minMeses: 720, maxMeses: 1440, sexo: "A",
        nombre: "ATENCIÓN EN SALUD EN LA VEJEZ POR MEDICINA GENERAL O FAMILIAR",
        frecuencia: "Cada 3 años",
        cups: "890201", finalidad: "07 - Alteraciones del Adulto", cie10: "Z000", talento: "Médico General / Familiar"
    },
    {
        cursoVida: "Tamizaje Oncológico",
        minMeses: 720, maxMeses: 839, sexo: "F",
        nombre: "MAMOGRAFÍA BILATERAL DE TAMIZAJE",
        frecuencia: "Cada 2 años hasta los 69 años",
        cups: "876802", finalidad: "14 - Detección temprana de cáncer de mama", cie10: "Z123", talento: "Radiología e Imágenes Diagnósticas"
    },
    {
        cursoVida: "Tamizaje Oncológico",
        minMeses: 720, maxMeses: 900, sexo: "M",
        nombre: "ANTÍGENO ESPECÍFICO DE PRÓSTATA (PSA)",
        frecuencia: "Cada 5 años hasta los 75 años",
        cups: "906610", finalidad: "15 - Detección temprana de cáncer de próstata", cie10: "Z125", talento: "Medicina General / Urología"
    },
    {
        cursoVida: "Tamizaje Oncológico",
        minMeses: 720, maxMeses: 900, sexo: "A",
        nombre: "SANGRE OCULTA EN MATERIA FECAL POR INMUNOQUÍMICA (SOMF)",
        frecuencia: "Cada 2 años hasta los 75 años",
        cups: "907009", finalidad: "16 - Detección temprana de cáncer de colon y recto", cie10: "Z121", talento: "Medicina General / Enfermería"
    }
];
