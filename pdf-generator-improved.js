// Generador de PDFs Mejorado para CARICA
// Versión 2.0 - Enero 2024

// Función mejorada para generar PDF de Términos y Condiciones
function generateTermsPDF() {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Configuración inicial
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 25;
        const contentWidth = pageWidth - 2 * margin;
        let yPosition = margin;
        let pageNumber = 1;
        
        // Colores corporativos
        const colors = {
            primary: [26, 26, 46],
            accent: [244, 208, 63],
            text: [51, 51, 51],
            light: [128, 128, 128],
            background: [248, 249, 250]
        };
        
        // Función para agregar nueva página
        function addNewPage() {
            doc.addPage();
            pageNumber++;
            yPosition = margin;
            addHeader();
        }
        
        // Función para verificar espacio y agregar página si es necesario
        function checkPageBreak(neededSpace = 25) {
            if (yPosition + neededSpace > pageHeight - 40) {
                addNewPage();
            }
        }
        
        // Función para agregar encabezado profesional
        function addHeader() {
            // Línea superior decorativa
            doc.setDrawColor(...colors.accent);
            doc.setLineWidth(3);
            doc.line(margin, margin, pageWidth - margin, margin);
            
            // Cargar y agregar el logo real
            const logoUrl = 'https://res.cloudinary.com/drgs7xuag/image/upload/v1754002343/logoredsintexto_kkr7e8.png';
            
            // Crear imagen del logo
            const logo = new Image();
            logo.crossOrigin = 'anonymous';
            
            logo.onload = function() {
                // Agregar el logo al PDF
                doc.addImage(logo, 'PNG', margin + 5, margin + 5, 25, 25);
                
                // Título de la empresa
                doc.setTextColor(...colors.primary);
                doc.setFontSize(14);
                doc.setFont(undefined, 'bold');
                doc.text('CARICA', margin + 40, margin + 18);
                
                // Subtítulo del documento
                doc.setTextColor(...colors.light);
                doc.setFontSize(9);
                doc.setFont(undefined, 'normal');
                doc.text('Términos y Condiciones', pageWidth - margin, margin + 18, { align: 'right' });
                
                // Línea inferior
                doc.setDrawColor(...colors.light);
                doc.setLineWidth(0.5);
                doc.line(margin, margin + 30, pageWidth - margin, margin + 30);
                
                yPosition = margin + 40;
            };
            
            logo.onerror = function() {
                // Fallback si no se puede cargar el logo
                doc.setTextColor(...colors.primary);
                doc.setFontSize(14);
                doc.setFont(undefined, 'bold');
                doc.text('CARICA', margin + 10, margin + 18);
                
                doc.setTextColor(...colors.light);
                doc.setFontSize(9);
                doc.setFont(undefined, 'normal');
                doc.text('Términos y Condiciones', pageWidth - margin, margin + 18, { align: 'right' });
                
                doc.setDrawColor(...colors.light);
                doc.setLineWidth(0.5);
                doc.line(margin, margin + 25, pageWidth - margin, margin + 25);
                
                yPosition = margin + 35;
            };
            
            logo.src = logoUrl;
        }
        
        // Función para agregar texto con formato mejorado
        function addText(text, options = {}) {
            const {
                fontSize = 10,
                isBold = false,
                color = colors.text,
                indent = 0,
                spacing = 5,
                maxWidth = contentWidth - indent
            } = options;
            
            doc.setFontSize(fontSize);
            doc.setTextColor(...color);
            doc.setFont(undefined, isBold ? 'bold' : 'normal');
            
            const splitText = doc.splitTextToSize(text, maxWidth);
            const textHeight = splitText.length * (fontSize * 0.4);
            
            checkPageBreak(textHeight + spacing);
            doc.text(splitText, margin + indent, yPosition);
            yPosition += textHeight + spacing;
        }
        
        // Función para agregar título de sección con estilo
        function addSectionTitle(title) {
            checkPageBreak(35);
            
            // Fondo de la sección
            doc.setFillColor(...colors.background);
            doc.roundedRect(margin, yPosition - 5, contentWidth, 25, 3, 3, 'F');
            
            // Borde izquierdo amarillo
            doc.setFillColor(...colors.accent);
            doc.roundedRect(margin, yPosition - 5, 5, 25, 2, 2, 'F');
            
            // Texto del título
            addText(title, {
                fontSize: 12,
                isBold: true,
                color: colors.primary,
                indent: 15,
                spacing: 15
            });
        }
        
        // Función para agregar lista con viñetas
        function addBulletList(items, indent = 15) {
            items.forEach(item => {
                addText(`• ${item}`, {
                    fontSize: 9,
                    indent: indent,
                    spacing: 4
                });
            });
            yPosition += 5;
        }
        
        // Función para agregar pie de página
        function addFooter() {
            const currentDate = new Date().toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Línea superior del pie
            doc.setDrawColor(...colors.light);
            doc.setLineWidth(0.5);
            doc.line(margin, pageHeight - 25, pageWidth - margin, pageHeight - 25);
            
            // Información de descarga
            doc.setFontSize(8);
            doc.setTextColor(...colors.light);
            doc.text(`Documento descargado el ${currentDate} desde www.carica.com`, margin, pageHeight - 15);
            
            // Número de página
            doc.text(`Página ${pageNumber}`, pageWidth - margin, pageHeight - 15, { align: 'right' });
        }
        
        // Iniciar documento
        addHeader();
        
        // Título principal del documento
        checkPageBreak(50);
        doc.setFillColor(...colors.primary);
        doc.roundedRect(margin, yPosition, contentWidth, 35, 5, 5, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(18);
        doc.setFont(undefined, 'bold');
        doc.text('TÉRMINOS Y CONDICIONES', pageWidth / 2, yPosition + 15, { align: 'center' });
        
        doc.setFontSize(12);
        doc.setFont(undefined, 'normal');
        doc.text('Versión 1.2 - Vigente desde: Enero 2024', pageWidth / 2, yPosition + 28, { align: 'center' });
        
        yPosition += 50;
        
        // Contenido del documento
        const sections = [
            {
                title: "1. Aceptación de los Términos",
                content: "Al acceder y utilizar CARICA, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.",
                additional: "Estos términos constituyen un acuerdo legal entre usted y CARICA. Al utilizar nuestros servicios, confirma que ha leído, comprendido y aceptado estos términos en su totalidad."
            },
            {
                title: "2. Descripción del Servicio",
                content: "CARICA es una plataforma de logística que conecta transportistas con empresas que necesitan transportar cargas. Facilitamos la comunicación y coordinación entre las partes, pero no somos responsables del transporte físico de las mercancías.",
                subtitle: "Nuestros servicios incluyen:",
                list: [
                    "Plataforma de conexión entre transportistas y cargas",
                    "Herramientas de optimización de rutas",
                    "Gestión documental digital",
                    "Seguimiento en tiempo real",
                    "Soporte técnico y atención al cliente"
                ]
            },
            {
                title: "3. Registro y Cuenta de Usuario",
                content: "Para utilizar nuestros servicios, debe registrarse y crear una cuenta. Usted es responsable de mantener la confidencialidad de su información de acceso y de todas las actividades que ocurran bajo su cuenta.",
                subtitle: "Requisitos para el registro:",
                list: [
                    "Información personal válida y actualizada",
                    "Documentación legal vigente para operaciones de transporte",
                    "Seguros y permisos necesarios según la jurisdicción",
                    "Aceptación de estos términos y condiciones"
                ]
            },
            {
                title: "4. Uso Aceptable",
                content: "Usted se compromete a utilizar CARICA únicamente para fines legales y de acuerdo con estos términos. Está prohibido el uso del servicio para actividades ilegales, fraudulentas o que puedan dañar a otros usuarios.",
                subtitle: "Actividades prohibidas incluyen:",
                list: [
                    "Transporte de mercancías ilegales o prohibidas",
                    "Falsificación de documentos o información",
                    "Uso no autorizado de cuentas de otros usuarios",
                    "Interferencia con el funcionamiento de la plataforma",
                    "Violación de derechos de propiedad intelectual"
                ]
            },
            {
                title: "5. Responsabilidades del Usuario",
                content: "Los usuarios son responsables de la veracidad de la información proporcionada, el cumplimiento de las regulaciones de transporte aplicables y el mantenimiento de los seguros necesarios para sus operaciones.",
                subtitle: "Obligaciones específicas:",
                list: [
                    "Mantener información actualizada y precisa",
                    "Cumplir con todas las regulaciones de transporte",
                    "Mantener seguros y permisos vigentes",
                    "Respetar los acuerdos con otros usuarios",
                    "Reportar incidentes o problemas de seguridad"
                ]
            },
            {
                title: "6. Limitación de Responsabilidad y Exención de Garantías",
                content: "CARICA actúa únicamente como intermediario tecnológico entre transportistas y empresas que requieren servicios de transporte. En ningún caso CARICA será responsable por:",
                subsections: [
                    {
                        subtitle: "6.1 Responsabilidades Excluidas:",
                        list: [
                            "Ofertas y Publicaciones: La veracidad, exactitud o disponibilidad real de las ofertas de carga publicadas",
                            "Seguridad de Transportistas: La seguridad, confiabilidad, antecedentes penales o capacidad técnica",
                            "Daños Económicos: Pérdidas financieras, estafas, fraudes o cualquier tipo de daño económico",
                            "Legalidad de Cargas: La legalidad, procedencia, documentación o naturaleza de las cargas",
                            "Accidentes y Siniestros: Accidentes de tránsito, daños a mercancías, robos, hurtos o incidentes",
                            "Cumplimiento de Contratos: El cumplimiento de acuerdos comerciales entre usuarios",
                            "Delitos: Cualquier actividad delictiva realizada por usuarios de la plataforma"
                        ]
                    },
                    {
                        subtitle: "6.2 Responsabilidad Limitada de CARICA:",
                        list: [
                            "El funcionamiento técnico de la plataforma",
                            "La seguridad de los datos almacenados",
                            "El soporte técnico proporcionado",
                            "La disponibilidad del servicio según nuestros SLA"
                        ]
                    },
                    {
                        subtitle: "6.3 Recomendaciones de Seguridad:",
                        list: [
                            "Para Empresas Dadoras de Carga: Solicitar y verificar documentación legal, seguros, permisos de transporte y antecedentes de los transportistas",
                            "Para Transportistas: Verificar la legalidad de las cargas, solicitar documentación completa, y asegurarse de que las mercancías cumplan con todas las regulaciones",
                            "Para Todos los Usuarios: Realizar verificaciones adicionales de identidad, referencias comerciales y solvencia económica según consideren necesario"
                        ]
                    }
                ],
                important: "IMPORTANTE: El usuario acepta que utiliza CARICA bajo su propio riesgo y responsabilidad, eximiendo completamente a CARICA de cualquier reclamo, demanda o acción legal derivada del uso de la plataforma."
            }
        ];
        
        // Generar contenido
        sections.forEach(section => {
            addSectionTitle(section.title);
            addText(section.content);
            
            if (section.additional) {
                addText(section.additional, { spacing: 8 });
            }
            
            if (section.subtitle && section.list) {
                addText(section.subtitle, { isBold: true, spacing: 8 });
                addBulletList(section.list);
            }
            
            if (section.subsections) {
                section.subsections.forEach(subsection => {
                    addText(subsection.subtitle, { 
                        isBold: true, 
                        color: colors.primary,
                        spacing: 8 
                    });
                    addBulletList(subsection.list);
                });
            }
            
            if (section.important) {
                checkPageBreak(30);
                doc.setFillColor(255, 245, 245);
                doc.roundedRect(margin, yPosition - 5, contentWidth, 25, 3, 3, 'F');
                addText(section.important, {
                    isBold: true,
                    color: [220, 53, 69],
                    spacing: 15
                });
            }
            
            yPosition += 10;
        });
        
        // Agregar pie de página a todas las páginas
        const totalPages = doc.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            pageNumber = i;
            addFooter();
        }
        
        // Guardar el PDF
        doc.save('CARICA-Terminos-y-Condiciones-v1.2.pdf');
        
        // Mostrar notificación de éxito
        showNotification('PDF de Términos y Condiciones descargado exitosamente', 'success');
        
    } catch (error) {
        console.error('Error generando PDF:', error);
        showNotification('Error al generar el PDF. Por favor, intente nuevamente.', 'error');
    }
}

// Función mejorada para generar PDF de Política de Privacidad
function generatePrivacyPDF() {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Configuración inicial (misma que términos)
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 25;
        const contentWidth = pageWidth - 2 * margin;
        let yPosition = margin;
        let pageNumber = 1;
        
        // Colores corporativos
        const colors = {
            primary: [26, 26, 46],
            accent: [244, 208, 63],
            text: [51, 51, 51],
            light: [128, 128, 128],
            background: [248, 249, 250]
        };
        
        // Reutilizar funciones de términos (misma implementación)
        function addNewPage() {
            doc.addPage();
            pageNumber++;
            yPosition = margin;
            addHeader();
        }
        
        function checkPageBreak(neededSpace = 25) {
            if (yPosition + neededSpace > pageHeight - 40) {
                addNewPage();
            }
        }
        
        function addHeader() {
            doc.setDrawColor(...colors.accent);
            doc.setLineWidth(3);
            doc.line(margin, margin, pageWidth - margin, margin);
            
            // Cargar y agregar el logo real
            const logoUrl = 'https://res.cloudinary.com/drgs7xuag/image/upload/v1754002343/logoredsintexto_kkr7e8.png';
            
            // Crear imagen del logo
            const logo = new Image();
            logo.crossOrigin = 'anonymous';
            
            logo.onload = function() {
                // Agregar el logo al PDF
                doc.addImage(logo, 'PNG', margin + 5, margin + 5, 25, 25);
                
                // Título de la empresa
                doc.setTextColor(...colors.primary);
                doc.setFontSize(14);
                doc.setFont(undefined, 'bold');
                doc.text('CARICA', margin + 40, margin + 18);
                
                // Subtítulo del documento
                doc.setTextColor(...colors.light);
                doc.setFontSize(9);
                doc.setFont(undefined, 'normal');
                doc.text('Política de Privacidad', pageWidth - margin, margin + 18, { align: 'right' });
                
                // Línea inferior
                doc.setDrawColor(...colors.light);
                doc.setLineWidth(0.5);
                doc.line(margin, margin + 30, pageWidth - margin, margin + 30);
                
                yPosition = margin + 40;
            };
            
            logo.onerror = function() {
                // Fallback si no se puede cargar el logo
                doc.setTextColor(...colors.primary);
                doc.setFontSize(14);
                doc.setFont(undefined, 'bold');
                doc.text('CARICA', margin + 10, margin + 18);
                
                doc.setTextColor(...colors.light);
                doc.setFontSize(9);
                doc.setFont(undefined, 'normal');
                doc.text('Política de Privacidad', pageWidth - margin, margin + 18, { align: 'right' });
                
                doc.setDrawColor(...colors.light);
                doc.setLineWidth(0.5);
                doc.line(margin, margin + 25, pageWidth - margin, margin + 25);
                
                yPosition = margin + 35;
            };
            
            logo.src = logoUrl;
        }
        
        function addText(text, options = {}) {
            const {
                fontSize = 10,
                isBold = false,
                color = colors.text,
                indent = 0,
                spacing = 5,
                maxWidth = contentWidth - indent
            } = options;
            
            doc.setFontSize(fontSize);
            doc.setTextColor(...color);
            doc.setFont(undefined, isBold ? 'bold' : 'normal');
            
            const splitText = doc.splitTextToSize(text, maxWidth);
            const textHeight = splitText.length * (fontSize * 0.4);
            
            checkPageBreak(textHeight + spacing);
            doc.text(splitText, margin + indent, yPosition);
            yPosition += textHeight + spacing;
        }
        
        function addSectionTitle(title) {
            checkPageBreak(35);
            
            doc.setFillColor(...colors.background);
            doc.roundedRect(margin, yPosition - 5, contentWidth, 25, 3, 3, 'F');
            
            doc.setFillColor(...colors.accent);
            doc.roundedRect(margin, yPosition - 5, 5, 25, 2, 2, 'F');
            
            addText(title, {
                fontSize: 12,
                isBold: true,
                color: colors.primary,
                indent: 15,
                spacing: 15
            });
        }
        
        function addBulletList(items, indent = 15) {
            items.forEach(item => {
                addText(`• ${item}`, {
                    fontSize: 9,
                    indent: indent,
                    spacing: 4
                });
            });
            yPosition += 5;
        }
        
        function addFooter() {
            const currentDate = new Date().toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            doc.setDrawColor(...colors.light);
            doc.setLineWidth(0.5);
            doc.line(margin, pageHeight - 25, pageWidth - margin, pageHeight - 25);
            
            doc.setFontSize(8);
            doc.setTextColor(...colors.light);
            doc.text(`Documento descargado el ${currentDate} desde www.carica.com`, margin, pageHeight - 15);
            doc.text(`Página ${pageNumber}`, pageWidth - margin, pageHeight - 15, { align: 'right' });
        }
        
        // Iniciar documento
        addHeader();
        
        // Título principal
        checkPageBreak(50);
        doc.setFillColor(...colors.primary);
        doc.roundedRect(margin, yPosition, contentWidth, 35, 5, 5, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(18);
        doc.setFont(undefined, 'bold');
        doc.text('POLÍTICA DE PRIVACIDAD', pageWidth / 2, yPosition + 15, { align: 'center' });
        
        doc.setFontSize(12);
        doc.setFont(undefined, 'normal');
        doc.text('Versión 1.1 - Vigente desde: Agosto 2025', pageWidth / 2, yPosition + 28, { align: 'center' });
        
        yPosition += 50;
        
        // Contenido de privacidad
        const sections = [
            {
                title: "1. Información que Recopilamos",
                content: "Recopilamos información que usted nos proporciona directamente, como datos de registro, información de contacto, detalles de vehículos y cargas, así como información que se genera automáticamente durante el uso de nuestra plataforma.",
                subtitle: "Información personal que recopilamos:",
                list: [
                    "Nombre completo y datos de identificación",
                    "Información de contacto (email, teléfono, dirección)",
                    "Datos de vehículos y flota",
                    "Información de cargas y rutas",
                    "Documentación legal y permisos",
                    "Datos de facturación y pagos"
                ]
            },
            {
                title: "2. Uso de la Información",
                content: "Utilizamos su información para proporcionar nuestros servicios, mejorar la plataforma, comunicarnos con usted, cumplir con obligaciones legales y proteger nuestros derechos y los de nuestros usuarios.",
                subtitle: "Propósitos específicos del uso:",
                list: [
                    "Facilitar conexiones entre transportistas y cargas",
                    "Optimizar rutas y mejorar la eficiencia",
                    "Gestionar documentación y cumplimiento legal",
                    "Proporcionar soporte técnico y atención al cliente",
                    "Analizar y mejorar nuestros servicios",
                    "Cumplir con obligaciones regulatorias"
                ]
            },
            {
                title: "3. Compartir Información",
                content: "Podemos compartir su información con otros usuarios de la plataforma para facilitar las conexiones de transporte, así como con proveedores de servicios que nos ayudan a operar CARICA. No vendemos su información personal a terceros.",
                subtitle: "Cuándo compartimos información:",
                list: [
                    "Con otros usuarios para facilitar conexiones de transporte",
                    "Con proveedores de servicios técnicos y de infraestructura",
                    "Con autoridades cuando sea requerido por ley",
                    "Con aseguradoras para verificación de cobertura",
                    "Con socios comerciales autorizados"
                ]
            },
            {
                title: "4. Seguridad de Datos",
                content: "Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.",
                subtitle: "Medidas de seguridad implementadas:",
                list: [
                    "Encriptación de datos en tránsito y en reposo",
                    "Acceso restringido a información personal",
                    "Monitoreo continuo de seguridad",
                    "Copias de seguridad regulares",
                    "Capacitación del personal en seguridad",
                    "Auditorías regulares de seguridad"
                ]
            },
            {
                title: "5. Sus Derechos",
                content: "Usted tiene derecho a acceder, corregir, eliminar y portar su información personal, así como a oponerse al procesamiento de sus datos en ciertas circunstancias.",
                subtitle: "Sus derechos incluyen:",
                list: [
                    "Acceso a su información personal",
                    "Corrección de datos inexactos",
                    "Eliminación de datos (derecho al olvido)",
                    "Portabilidad de datos",
                    "Oposición al procesamiento",
                    "Limitación del procesamiento",
                    "Retiro del consentimiento"
                ]
            },
            {
                title: "6. Contacto",
                content: "Si tiene preguntas sobre esta política de privacidad o nuestras prácticas de datos, puede contactarnos a través de:",
                list: [
                    "Email: privacidad@carica.com",
                    "Teléfono: +54 11 1234-5678",
                    "Dirección: Buenos Aires, Argentina",
                    "Oficial de Protección de Datos: dpo@carica.com"
                ],
                additional: "También puede ejercer sus derechos enviando un email a derechos@carica.com"
            }
        ];
        
        // Generar contenido
        sections.forEach(section => {
            addSectionTitle(section.title);
            addText(section.content);
            
            if (section.subtitle && section.list) {
                addText(section.subtitle, { isBold: true, spacing: 8 });
                addBulletList(section.list);
            } else if (section.list) {
                addBulletList(section.list);
            }
            
            if (section.additional) {
                addText(section.additional, { spacing: 8 });
            }
            
            yPosition += 10;
        });
        
        // Agregar pie de página a todas las páginas
        const totalPages = doc.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            pageNumber = i;
            addFooter();
        }
        
        // Guardar el PDF
        doc.save('CARICA-Politica-de-Privacidad-v1.1.pdf');
        
        // Mostrar notificación de éxito
        showNotification('PDF de Política de Privacidad descargado exitosamente', 'success');
        
    } catch (error) {
        console.error('Error generando PDF:', error);
        showNotification('Error al generar el PDF. Por favor, intente nuevamente.', 'error');
    }
}

// Función para mostrar notificaciones (mejorada)
function showNotification(message, type = 'info') {
    // Si la función ya existe en script.js, la usamos
    if (typeof window.showNotification === 'function') {
        window.showNotification(message, type);
        return;
    }
    
    // Crear notificación mejorada
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';
    notification.innerHTML = `${icon} ${message}`;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-remover
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}
