
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Online en 24 Horas." subheadline="Digitaliza tus ventas sin complicaciones con nuestro soporte 24/7 y sitio web listo en un día." cta1="Comienza Hoy" />
<How step1Title="Solicita Tu Web" step1Desc="Contáctanos y comparte tu visión." step2Title="Creamos Tu Sitio" step2Desc="Desarrollamos tu web de ventas en 24 horas." step3Title="Soporte Constante" step3Desc="Asistencia 24/7 para gestionar ventas online." />
<Aboutus headline="WebGo: Digitaliza y crece rápido" subheadline="Transformamos tu negocio en online, sin esfuerzo y con resultados garantizados." beneficiotitulo1="Gestión Total" beneficio1="Gestionamos tu web sin complicaciones." beneficiotitulo2="Ventas Online" beneficio2="Aumenta tus ventas con estrategias efectivas." />
<Services heading="Digitaliza y Expande Tu Negocio" description="Transformamos tu presencia online para aumentar ventas sin complicarte." services={[{"name":"Desarrollo Express","icon":"lightning","description":"Webs en 24 horas, listas para vender."},{"name":"SEO Optimización","icon":"search","description":"Aumenta tu visibilidad en Google con WebGo."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Gestión de Contenidos","icon":"edit","description":"Contenido atractivo que convierte visitantes en clientes."},{"name":"Analítica Web","icon":"chart-bar","description":"Datos claros para decisiones informadas."},{"name":"Integración Social","icon":"share-alt","description":"Conecta tus redes sociales fácilmente."}]} />
<BeforeAndAfter subheadline="Fotos de algunos de nuestros trabajos para nuestros clientes." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas rápidamente?","respuesta":"WebGo ofrece soluciones integrales para trasladar tus ventas al mundo online. Nos encargamos de todo, desde la creación de un sitio web atractivo hasta la gestión de tus ventas digitales, para que puedas enfocarte en lo que mejor sabes hacer. Así, puedes empezar a vender online sin complicaciones ni pérdida de tiempo."},{"pregunta":"¿Qué beneficios obtengo al usar los servicios de WebGo para mi negocio?","respuesta":"Con WebGo, obtienes un sitio web profesional que atrae clientes, con estrategias de marketing digital personalizadas que aumentan tus ventas. También te liberamos de la carga de gestionar un sitio web, permitiéndote dedicar más tiempo a tu negocio mientras nosotros nos ocupamos de todo lo digital."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo me ayuda WebGo con eso?","respuesta":"WebGo se encarga de la gestión completa de tu sitio web, desde su diseño hasta el mantenimiento. Esto significa que no necesitas invertir tiempo ni esfuerzo adicional. Nosotros nos aseguramos de que tu presencia online funcione de manera eficiente, para que puedas concentrarte en dirigir tu negocio."},{"pregunta":"¿Qué diferencia a WebGo de otras empresas de diseño web?","respuesta":"WebGo no solo crea sitios web, sino que también ofrece una estrategia completa para impulsar tus ventas online. Nos especializamos en convertir visitantes en clientes, con un enfoque personalizado que se adapta a las necesidades únicas de tu negocio. Además, nuestro servicio es integral, permitiéndote despreocuparte de la gestión digital."},{"pregunta":"¿Cómo sé si mi negocio realmente necesita digitalizar sus ventas?","respuesta":"Si sientes que dependes demasiado de las recomendaciones y quieres expandir tu alcance, digitalizar tus ventas es clave. WebGo te ayuda a llegar a un público más amplio online y a aumentar tus ingresos, permitiéndote crecer más allá de tu red actual de clientes."}]} />
<BookAppointment 
                      heading="Emprende el Cambio Digital" 
                      description="Descubre cómo WebGo puede transformar tu negocio al crear una presencia online sin complicaciones. Soluciones rápidas y efectivas para vender más allá de las recomendaciones."
                      formPostUrl="api/contact-us"
                      projectId="ScM4c8bo4Sg6yWPzkRDhLeyMVMu1"
                    />
<Footer />
    </main>
  );
}
