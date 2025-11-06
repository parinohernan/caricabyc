// Generador de PDFs para CARICA
// Versión 1.0 - Enero 2024

// Función para generar PDF de Términos y Condiciones
function generateTermsPDF() {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Configuración inicial
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 25;
        const lineHeight = 6;
        let yPosition = margin;
        
        // Función para agregar nueva página si es necesario
        function checkPageBreak(neededSpace = 20) {
            if (yPosition + neededSpace > pageHeight - margin) {
                doc.addPage();
                yPosition = margin;
                addHeader();
            }
        }
        
        // Función para agregar encabezado
        function addHeader() {
            // Línea superior
            doc.setDrawColor(244, 208, 63);
            doc.setLineWidth(2);
            doc.line(margin, margin, pageWidth - margin, margin);
            
            // Logo y título del encabezado
            doc.setFontSize(10);
            doc.setTextColor(26, 26, 46);
            doc.setFont(undefined, 'bold');
            doc.text('CARICA', margin, margin + 12);
            
            doc.setFontSize(8);
            doc.setFont(undefined, 'normal');
            doc.setTextColor(100, 100, 100);
            doc.text('Términos y Condiciones', pageWidth - margin, margin + 12, { align: 'right' });
            
            yPosition = margin + 25;
        }
        
        // Función para agregar texto con salto de línea automático
        function addText(text, fontSize = 10, isBold = false, color = [51, 51, 51]) {
            doc.setFontSize(fontSize);
            doc.setTextColor(color[0], color[1], color[2]);
            doc.setFont(undefined, isBold ? 'bold' : 'normal');
            
            const splitText = doc.splitTextToSize(text, pageWidth - 2 * margin);
            const textHeight = splitText.length * lineHeight;
            
            checkPageBreak(textHeight);
            doc.text(splitText, margin, yPosition);
            yPosition += textHeight + 5;
        }
        
        // Encabezado principal
        addHeader();
        
        // Título principal
        doc.setFontSize(20);
        doc.setTextColor(26, 26, 46);
        doc.setFont(undefined, 'bold');
        doc.text('TÉRMINOS Y CONDICIONES', pageWidth / 2, yPosition, { align: 'center' });
        yPosition += 15;
        
        // Información de versión
        doc.setFontSize(12);
        doc.setTextColor(244, 208, 63);
        doc.text('Versión 1.2 - Vigente desde: Enero 2024', pageWidth / 2, yPosition, { align: 'center' });
        yPosition += 20;
        
        // Contenido de términos y condiciones
        const termsContent = [
            {
                title: "1. Aceptación de los Términos",
                content: "Al acceder y utilizar CARICA, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.\n\nEstos términos constituyen un acuerdo legal entre usted y CARICA. Al utilizar nuestros servicios, confirma que ha leído, comprendido y aceptado estos términos en su totalidad."
            },
            {
                title: "2. Descripción del Servicio",
                content: "CARICA es una plataforma de logística que conecta transportistas con empresas que necesitan transportar cargas. Facilitamos la comunicación y coordinación entre las partes, pero no somos responsables del transporte físico de las mercancías.\n\nNuestros servicios incluyen:\n• Plataforma de conexión entre transportistas y cargas\n• Herramientas de optimización de rutas\n• Gestión documental digital\n• Seguimiento en tiempo real\n• Soporte técnico y atención al cliente"
            },
            {
                title: "3. Registro y Cuenta de Usuario",
                content: "Para utilizar nuestros servicios, debe registrarse y crear una cuenta. Usted es responsable de mantener la confidencialidad de su información de acceso y de todas las actividades que ocurran bajo su cuenta.\n\nRequisitos para el registro:\n• Información personal válida y actualizada\n• Documentación legal vigente para operaciones de transporte\n• Seguros y permisos necesarios según la jurisdicción\n• Aceptación de estos términos y condiciones"
            },
            {
                title: "4. Uso Aceptable",
                content: "Usted se compromete a utilizar CARICA únicamente para fines legales y de acuerdo con estos términos. Está prohibido el uso del servicio para actividades ilegales, fraudulentas o que puedan dañar a otros usuarios.\n\nActividades prohibidas incluyen:\n• Transporte de mercancías ilegales o prohibidas\n• Falsificación de documentos o información\n• Uso no autorizado de cuentas de otros usuarios\n• Interferencia con el funcionamiento de la plataforma\n• Violación de derechos de propiedad intelectual"
            },
            {
                title: "5. Responsabilidades del Usuario",
                content: "Los usuarios son responsables de la veracidad de la información proporcionada, el cumplimiento de las regulaciones de transporte aplicables y el mantenimiento de los seguros necesarios para sus operaciones.\n\nObligaciones específicas:\n• Mantener información actualizada y precisa\n• Cumplir con todas las regulaciones de transporte\n• Mantener seguros y permisos vigentes\n• Respetar los acuerdos con otros usuarios\n• Reportar incidentes o problemas de seguridad"
            },
            {
                title: "6. Limitación de Responsabilidad y Exención de Garantías",
                content: "CARICA actúa únicamente como intermediario tecnológico entre transportistas y empresas que requieren servicios de transporte. En ningún caso CARICA será responsable por:\n\n6.1 Responsabilidades Excluidas:\n• Ofertas y Publicaciones: La veracidad, exactitud o disponibilidad real de las ofertas de carga publicadas\n• Seguridad de Transportistas: La seguridad, confiabilidad, antecedentes penales o capacidad técnica de los transportistas\n• Daños Económicos: Pérdidas financieras, estafas, fraudes o cualquier tipo de daño económico\n• Legalidad de Cargas: La legalidad, procedencia, documentación o naturaleza de las cargas transportadas\n• Accidentes y Siniestros: Accidentes de tránsito, daños a mercancías, robos, hurtos o cualquier incidente durante el transporte\n• Cumplimiento de Contratos: El cumplimiento de acuerdos comerciales entre usuarios\n• Delitos: Cualquier actividad delictiva realizada por usuarios de la plataforma\n\n6.2 Responsabilidad Limitada de CARICA:\n• El funcionamiento técnico de la plataforma\n• La seguridad de los datos almacenados\n• El soporte técnico proporcionado\n• La disponibilidad del servicio según nuestros SLA\n\n6.3 Recomendaciones de Seguridad:\n• Para Empresas Dadoras de Carga: Solicitar y verificar documentación legal, seguros, permisos de transporte y antecedentes de los transportistas\n• Para Transportistas: Verificar la legalidad de las cargas, solicitar documentación completa, y asegurarse de que las mercancías cumplan con todas las regulaciones\n• Para Todos los Usuarios: Realizar verificaciones adicionales de identidad, referencias comerciales y solvencia económica según consideren necesario\n\nIMPORTANTE: El usuario acepta que utiliza CARICA bajo su propio riesgo y responsabilidad, eximiendo completamente a CARICA de cualquier reclamo, demanda o acción legal derivada del uso de la plataforma."
            }
        ];
        
        // Agregar contenido
        termsContent.forEach(section => {
            checkPageBreak(30);
            addText(section.title, 14, true, [26, 26, 46]);
            addText(section.content, 10, false, [51, 51, 51]);
        });
        
        // Pie de página con información de descarga
        const currentDate = new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Ir a la última página para agregar pie de página
        const pageCount = doc.internal.getNumberOfPages();
        doc.setPage(pageCount);
        
        doc.setFontSize(8);
        doc.setTextColor(128, 128, 128);
        doc.text(`Documento descargado el ${currentDate} desde www.carica.com`, margin, pageHeight - 10);
        doc.text(`Página ${pageCount} de ${pageCount}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
        
        // Guardar el PDF
        doc.save('CARICA-Terminos-y-Condiciones-v1.2.pdf');
        
        // Mostrar notificación de éxito
        showNotification('PDF de Términos y Condiciones descargado exitosamente', 'success');
        
    } catch (error) {
        console.error('Error generando PDF:', error);
        showNotification('Error al generar el PDF. Por favor, intente nuevamente.', 'error');
    }
}

// Función para generar PDF de Política de Privacidad
function generatePrivacyPDF() {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Configuración inicial
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 20;
        const lineHeight = 7;
        let yPosition = margin;
        
        // Función para agregar nueva página si es necesario
        function checkPageBreak(neededSpace = 20) {
            if (yPosition + neededSpace > pageHeight - margin) {
                doc.addPage();
                yPosition = margin;
                addHeader();
            }
        }
        
        // Función para agregar encabezado
        function addHeader() {
            doc.setFontSize(12);
            doc.setTextColor(26, 26, 46);
            doc.text('CARICA - Política de Privacidad', pageWidth - margin, margin, { align: 'right' });
            yPosition += 15;
        }
        
        // Función para agregar texto con salto de línea automático
        function addText(text, fontSize = 10, isBold = false, color = [51, 51, 51]) {
            doc.setFontSize(fontSize);
            doc.setTextColor(color[0], color[1], color[2]);
            doc.setFont(undefined, isBold ? 'bold' : 'normal');
            
            const splitText = doc.splitTextToSize(text, pageWidth - 2 * margin);
            const textHeight = splitText.length * lineHeight;
            
            checkPageBreak(textHeight);
            doc.text(splitText, margin, yPosition);
            yPosition += textHeight + 5;
        }
        
        // Encabezado principal
        addHeader();
        
        // Título principal
        doc.setFontSize(20);
        doc.setTextColor(26, 26, 46);
        doc.setFont(undefined, 'bold');
        doc.text('POLÍTICA DE PRIVACIDAD', pageWidth / 2, yPosition, { align: 'center' });
        yPosition += 15;
        
        // Información de versión
        doc.setFontSize(12);
        doc.setTextColor(244, 208, 63);
        doc.text('Versión 1.1 - Vigente desde: Enero 2024', pageWidth / 2, yPosition, { align: 'center' });
        yPosition += 20;
        
        // Contenido de política de privacidad
        const privacyContent = [
            {
                title: "1. Información que Recopilamos",
                content: "Recopilamos información que usted nos proporciona directamente, como datos de registro, información de contacto, detalles de vehículos y cargas, así como información que se genera automáticamente durante el uso de nuestra plataforma.\n\nInformación personal que recopilamos:\n• Nombre completo y datos de identificación\n• Información de contacto (email, teléfono, dirección)\n• Datos de vehículos y flota\n• Información de cargas y rutas\n• Documentación legal y permisos\n• Datos de facturación y pagos"
            },
            {
                title: "2. Uso de la Información",
                content: "Utilizamos su información para proporcionar nuestros servicios, mejorar la plataforma, comunicarnos con usted, cumplir con obligaciones legales y proteger nuestros derechos y los de nuestros usuarios.\n\nPropósitos específicos del uso:\n• Facilitar conexiones entre transportistas y cargas\n• Optimizar rutas y mejorar la eficiencia\n• Gestionar documentación y cumplimiento legal\n• Proporcionar soporte técnico y atención al cliente\n• Analizar y mejorar nuestros servicios\n• Cumplir con obligaciones regulatorias"
            },
            {
                title: "3. Compartir Información",
                content: "Podemos compartir su información con otros usuarios de la plataforma para facilitar las conexiones de transporte, así como con proveedores de servicios que nos ayudan a operar CARICA. No vendemos su información personal a terceros.\n\nCuándo compartimos información:\n• Con otros usuarios para facilitar conexiones de transporte\n• Con proveedores de servicios técnicos y de infraestructura\n• Con autoridades cuando sea requerido por ley\n• Con aseguradoras para verificación de cobertura\n• Con socios comerciales autorizados"
            },
            {
                title: "4. Seguridad de Datos",
                content: "Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.\n\nMedidas de seguridad implementadas:\n• Encriptación de datos en tránsito y en reposo\n• Acceso restringido a información personal\n• Monitoreo continuo de seguridad\n• Copias de seguridad regulares\n• Capacitación del personal en seguridad\n• Auditorías regulares de seguridad"
            },
            {
                title: "5. Sus Derechos",
                content: "Usted tiene derecho a acceder, corregir, eliminar y portar su información personal, así como a oponerse al procesamiento de sus datos en ciertas circunstancias.\n\nSus derechos incluyen:\n• Acceso a su información personal\n• Corrección de datos inexactos\n• Eliminación de datos (derecho al olvido)\n• Portabilidad de datos\n• Oposición al procesamiento\n• Limitación del procesamiento\n• Retiro del consentimiento"
            },
            {
                title: "6. Contacto",
                content: "Si tiene preguntas sobre esta política de privacidad o nuestras prácticas de datos, puede contactarnos a través de:\n\n• Email: contacto@carica.com.ar\n• Teléfono: +54 11 1234-5678\n• Dirección: Buenos Aires, Argentina\n• Oficial de Protección de Datos: contacto@carica.com.ar\n\nTambién puede ejercer sus derechos enviando un email a contacto@carica.com.ar"
            }
        ];
        
        // Agregar contenido
        privacyContent.forEach(section => {
            checkPageBreak(30);
            addText(section.title, 14, true, [26, 26, 46]);
            addText(section.content, 10, false, [51, 51, 51]);
        });
        
        // Pie de página con información de descarga
        const currentDate = new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Ir a la última página para agregar pie de página
        const pageCount = doc.internal.getNumberOfPages();
        doc.setPage(pageCount);
        
        doc.setFontSize(8);
        doc.setTextColor(128, 128, 128);
        doc.text(`Documento descargado el ${currentDate} desde www.carica.com`, margin, pageHeight - 10);
        doc.text(`Página ${pageCount} de ${pageCount}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
        
        // Guardar el PDF
        doc.save('CARICA-Politica-de-Privacidad-v1.1.pdf');
        
        // Mostrar notificación de éxito
        showNotification('PDF de Política de Privacidad descargado exitosamente', 'success');
        
    } catch (error) {
        console.error('Error generando PDF:', error);
        showNotification('Error al generar el PDF. Por favor, intente nuevamente.', 'error');
    }
}

// Función para mostrar notificaciones (reutiliza la función existente)
function showNotification(message, type = 'info') {
    // Si la función ya existe en script.js, la usamos
    if (typeof window.showNotification === 'function') {
        window.showNotification(message, type);
        return;
    }
    
    // Si no existe, creamos una versión simple
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        font-family: 'Inter', sans-serif;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}
