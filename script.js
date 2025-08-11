const malla = [
  { ciclo: 1, cursos: [
    { codigo: "AN78", nombre: "Introducción a los Negocios Internacionales", creditos: 3 },
    { codigo: "HU160", nombre: "Mundo Contemporáneo", creditos: 3 },
    { codigo: "HU543", nombre: "Comprensión y Producción de Lenguaje I", creditos: 4 },
    { codigo: "HU548", nombre: "Ética y Ciudadanía", creditos: 2 },
    { codigo: "MA384", nombre: "Fundamentos para el Cálculo", creditos: 5 }
  ]},
  { ciclo: 2, cursos: [
    { codigo: "AF103", nombre: "Fundamentos de las Finanzas", creditos: 3 },
    { codigo: "AH117", nombre: "Desarrollo de Competencia Personal (Electivo)", creditos: 3 },
    { codigo: "AN173", nombre: "International Management", creditos: 3 },
    { codigo: "MA459", nombre: "Cálculo", creditos: 5 },
    { codigo: "AN97", nombre: "Inteligencia Comercial Internacional", creditos: 3 },
    { codigo: "HU626", nombre: "Comprensión y Producción de Lenguaje II", creditos: 4 },
    { codigo: "AN175", nombre: "International Business", creditos: 3 }
  ]},
  { ciclo: 3, cursos: [
    { codigo: "AD170", nombre: "Diseño Organizacional y Procesos", creditos: 3 },
    { codigo: "MA460", nombre: "Estadística Descriptiva", creditos: 4 },
    { codigo: "PU165", nombre: "ISC MKT en Redes Sociales: Facebook (Electivo)", creditos: 3 },
    { codigo: "HU318", nombre: "Fundamentos de la Investigación Académica", creditos: 4 },
    { codigo: "AF141", nombre: "Matemática Financiera", creditos: 4 },
    { codigo: "AF133", nombre: "Macroeconomía", creditos: 3 },
    { codigo: "CA142", nombre: "Introducción a la Contabilidad Financiera", creditos: 4 },
    { codigo: "AN174", nombre: "Mundo Empresarial y Realidad Socioeconómica", creditos: 2 }
  ]},
  { ciclo: 4, cursos: [
    { codigo: "AF140", nombre: "Finanzas Corporativas", creditos: 4 },
    { codigo: "MA461", nombre: "Estadística Inferencial", creditos: 4 },
    { codigo: "MA368", nombre: "Métodos Cuantitativos", creditos: 3 },
    { codigo: "AN176", nombre: "International Economy", creditos: 2 },
    { codigo: "AH87", nombre: "Gestión del Capital Humano Global", creditos: 3 },
    { codigo: "CA143", nombre: "Introducción a la Contabilidad Gerencial", creditos: 4 },
    { codigo: "AF142", nombre: "Teoría Microeconómica", creditos: 3 }
  ]},
  { ciclo: 5, cursos: [
    { codigo: "AD213", nombre: "Administración de Operaciones", creditos: 3 },
    { codigo: "AD1859", nombre: "Data Science Foundations (Electivo)", creditos: 3 },
    { codigo: "AD2508", nombre: "Comunicación para el Liderazgo", creditos: 3 },
    { codigo: "AF176", nombre: "Evaluación de Proyectos de Inversión Privada", creditos: 3 },
    { codigo: "AM75", nombre: "Marketing", creditos: 3 },
    { codigo: "AN22", nombre: "Comercio Internacional", creditos: 3 },
    { codigo: "AO21", nombre: "ISC AI Foundations for Everyone (Electivo)", creditos: 3 },
    { codigo: "EG37", nombre: "ISC MATLAB Básico (Electivo)", creditos: 3 }
  ]},
  { ciclo: 6, cursos: [
    { codigo: "AN20", nombre: "Aduanas", creditos: 3 },
    { codigo: "CA177", nombre: "Análisis e Interpretación de EE.FF.", creditos: 4 },
    { codigo: "AH14", nombre: "Comportamiento Organizacional", creditos: 3 },
    { codigo: "AN157", nombre: "Estrategia y Diseño de Negocios Digitales (Mención Digital 1/5)", creditos: 3 },
    { codigo: "AN137", nombre: "Gestión de Logística Portuaria (Mención Logística 1/5)", creditos: 3 },
    { codigo: "AD180", nombre: "Grandes Ideas en Gerencia", creditos: 3 },
    { codigo: "AM233", nombre: "Investigación de Mercado Aplicada a los Negocios", creditos: 3 },
    { codigo: "AN79", nombre: "Plan Comercial Internacional", creditos: 3 }
  ]},
  { ciclo: 7, cursos: [
    { codigo: "AN96", nombre: "Costos y Cotizaciones Internacionales", creditos: 3 },
    { codigo: "AN168", nombre: "Lean Product Management para Negocios Digitales (Mención Digital 2/5)", creditos: 3 },
    { codigo: "AN169", nombre: "Negocios Escalables y Exponenciales", creditos: 3 },
    { codigo: "AN58", nombre: "E-Commerce", creditos: 3 },
    { codigo: "AN138", nombre: "Supply Relationship Management (Mención Logística 2/5)", creditos: 3 },
    { codigo: "AN81", nombre: "Transporte Global", creditos: 3 },
    { codigo: "AD2454", nombre: "Gestión de Proyectos", creditos: 3 },
    { codigo: "DE965", nombre: "Derecho Empresarial y de Comercio Internacional", creditos: 4 }
  ]},
  { ciclo: 8, cursos: [
    { codigo: "AN139", nombre: "International Supply Chain Intelligence (Mención Logística 3/5)", creditos: 3 },
    { codigo: "AN80", nombre: "Integración Económica Internacional", creditos: 3 },
    { codigo: "AN48", nombre: "Operaciones Financieras Internacionales", creditos: 3 },
    { codigo: "AN170", nombre: "Tecnologías Emergentes para Potenciar Negocios", creditos: 3 },
    { codigo: "AN171", nombre: "Herramientas de Growth Hacking y DATA", creditos: 3 },
    { codigo: "AN85", nombre: "International Supply Chain Management", creditos: 3 },
    { codigo: "AD2507", nombre: "Metodología de la Investigación", creditos: 3 },
    { codigo: "AN140", nombre: "International Supply Chain Innovation (Mención Logística 4/5)", creditos: 3 }
  ]},
  { ciclo: 9, cursos: [
    { codigo: "AN84", nombre: "Desarrollo de Proyectos Internacionales", creditos: 4 },
    { codigo: "AN82", nombre: "Gerencia Comercial Multinacional", creditos: 3 },
    { codigo: "AD2509", nombre: "Gerencia Estratégica en Organizaciones Conscientes", creditos: 4 },
    { codigo: "AN141", nombre: "Modelo de Gestión de Suministros en el Mundo (Mención Logística 5/5)", creditos: 3 },
    { codigo: "AN178", nombre: "Coyuntura Internacional", creditos: 3 },
    { codigo: "AN86", nombre: "Dirección Multinacional", creditos: 3 },
    { codigo: "AH45", nombre: "Ética y Responsabilidad Social Empresarial", creditos: 3 },
    { codigo: "AN177", nombre: "Seminario de Tesis", creditos: 3 }
  ]}
];

const cont = document.getElementById('malla');
const totalCred = document.getElementById('totalCreditos');
const buscador = document.getElementById('buscador');

function renderMalla(query = '') {
  cont.innerHTML = '';
  const q = query.trim().toLowerCase();
  let visibleTotal = 0;

  malla.forEach(c => {
    const cursosVisibles = c.cursos.filter(cur =>
      !q || (cur.codigo + ' ' + cur.nombre).toLowerCase().includes(q)
    );
    if (cursosVisibles.length === 0) return;

    const cicloDiv = document.createElement('div');
    cicloDiv.className = 'ciclo';

    const titulo = document.createElement('h2');
    titulo.innerHTML = `<span>Ciclo ${c.ciclo}</span><span class="meta">${cursosVisibles.reduce((s, x) => s + Number(x.creditos||0), 0)} créditos</span>`;
    titulo.addEventListener('click', () => cicloDiv.classList.toggle('open'));

    const detalles = document.createElement('div');
    detalles.className = 'detalles';

    cursosVisibles.forEach(cur => {
      const cursoDiv = document.createElement('div');
      cursoDiv.className = 'curso';
      cursoDiv.innerHTML = `<div class="left">${cur.codigo} — ${cur.nombre}</div><div class="right">${cur.creditos} cr</div>`;
      detalles.appendChild(cursoDiv);
      visibleTotal += Number(cur.creditos||0);
    });

    cicloDiv.appendChild(titulo);
    cicloDiv.appendChild(detalles);
    cont.appendChild(cicloDiv);
  });

  totalCred.textContent = visibleTotal;
}

buscador.addEventListener('input', e => renderMalla(e.target.value));

renderMalla();
