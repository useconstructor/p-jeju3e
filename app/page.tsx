"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Menu,
  X,
  Clock,
  Truck,
  Sparkles,
  ShieldCheck,
  Package,
  Shirt,
  CheckCircle,
  Star,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Send,
  Leaf,
  Timer,
  Award,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Planes", href: "#planes" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Preguntas", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ];

  const services = [
    {
      icon: Shirt,
      title: "Lavado y Planchado",
      description:
        "Cuidado experto para tus prendas del día a día. Camisas, pantalones, vestidos y más, devueltos impecables.",
      features: ["Tratamiento de manchas", "Planchado profesional", "Doblado perfecto"],
    },
    {
      icon: Sparkles,
      title: "Lavado en Seco",
      description:
        "Para telas delicadas y prendas especiales que requieren atención experta y productos premium.",
      features: ["Sedas y lanas", "Trajes y sacos", "Vestidos de gala"],
    },
    {
      icon: Package,
      title: "Ropa de Cama",
      description:
        "Sábanas, fundas, edredones y cobijas. El descanso perfecto comienza con ropa de cama impecable.",
      features: ["Edredones grandes", "Almohadas", "Blancos relucientes"],
    },
    {
      icon: Award,
      title: "Prendas Delicadas",
      description:
        "Tratamiento especializado para tus piezas más valiosas. Lencería, cashmere y tejidos finos.",
      features: ["Lavado a mano", "Secado controlado", "Empaque especial"],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Agenda tu Recolección",
      description:
        "Selecciona el día y horario que mejor te convenga. Recogemos en tu puerta sin costo adicional.",
    },
    {
      number: "02",
      title: "Cuidamos tus Prendas",
      description:
        "Clasificamos, tratamos manchas y procesamos cada prenda con productos de primera calidad.",
    },
    {
      number: "03",
      title: "Planchado Experto",
      description:
        "Cada pieza es planchada a mano por nuestro equipo especializado, cuidando cada detalle.",
    },
    {
      number: "04",
      title: "Entrega en 24 Horas",
      description:
        "Recibe tu ropa perfectamente doblada y empacada en nuestras elegantes bolsas de tela.",
    },
  ];

  const pricingPlans = [
    {
      name: "Esencial",
      description: "Para quienes buscan calidad ocasional",
      priceNote: "Por prenda",
      features: [
        "Lavado y planchado estándar",
        "Entrega en 24 horas",
        "Bolsa de tela reutilizable",
        "Seguimiento por WhatsApp",
      ],
      popular: false,
    },
    {
      name: "Premium",
      description: "Nuestro plan más popular",
      priceNote: "Suscripción mensual",
      features: [
        "Recolecciones ilimitadas",
        "Prioridad en entrega",
        "Tratamiento de manchas incluido",
        "Bolsas de tela premium",
        "Descuento del 20%",
        "Atención preferente",
      ],
      popular: true,
    },
    {
      name: "Corporativo",
      description: "Para empresas y hoteles",
      priceNote: "Cotización personalizada",
      features: [
        "Volumen ilimitado",
        "Facturación mensual",
        "Recolección diaria",
        "Gestor de cuenta dedicado",
        "Precios especiales",
        "Reportes mensuales",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "María G.",
      role: "Cliente desde 2023",
      content:
        "El servicio es impecable, literalmente. Mis camisas de seda nunca habían quedado tan bien. La comodidad de la recolección a domicilio no tiene precio.",
      rating: 5,
    },
    {
      name: "Carlos R.",
      role: "Suscriptor Premium",
      content:
        "Como ejecutivo, necesito que mi ropa esté siempre perfecta. Lavanderia Blanche entiende eso. El planchado es profesional y las entregas siempre puntuales.",
      rating: 5,
    },
    {
      name: "Ana L.",
      role: "Cliente frecuente",
      content:
        "Las bolsas de tela son un detalle hermoso. Me encanta que se preocupen por el medio ambiente sin sacrificar la calidad del servicio.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "¿Cuál es el tiempo de entrega estándar?",
      answer:
        "Nuestro compromiso es devolver tus prendas en menos de 24 horas desde la recolección. Para servicios de lavado en seco o prendas delicadas, el tiempo puede extenderse a 48 horas para garantizar el mejor resultado.",
    },
    {
      question: "¿Qué zonas cubren para recolección y entrega?",
      answer:
        "Operamos en las principales zonas metropolitanas. Al registrarte, verificaremos si tu dirección está dentro de nuestra área de cobertura. Continuamente estamos expandiendo nuestro servicio.",
    },
    {
      question: "¿Cómo puedo rastrear mi pedido?",
      answer:
        "Recibirás actualizaciones automáticas por WhatsApp o SMS en cada etapa del proceso: cuando recogemos tu ropa, cuando está en proceso, y cuando está lista para entrega.",
    },
    {
      question: "¿Qué pasa si una prenda se daña?",
      answer:
        "Contamos con seguro que cubre hasta el valor de reposición de tus prendas. Cada pieza es inspeccionada antes del proceso y cualquier condición preexistente es documentada.",
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer:
        "Sí, nuestras suscripciones son flexibles. Puedes pausar, modificar o cancelar tu plan en cualquier momento sin penalidades ni compromisos a largo plazo.",
    },
    {
      question: "¿Utilizan productos ecológicos?",
      answer:
        "Utilizamos detergentes biodegradables y libres de fosfatos. Nuestras bolsas de tela son reutilizables y parte de nuestro compromiso con la sustentabilidad.",
    },
  ];

  return (
    <main className="min-h-screen bg-ivory">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="text-xl lg:text-2xl font-semibold tracking-tight text-charcoal">
              Lavanderia Blanche
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-dark hover:text-charcoal transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-charcoal hover:bg-dark text-ivory">
                <a href="#contacto">Reservar Ahora</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-charcoal" />
              ) : (
                <Menu className="w-6 h-6 text-charcoal" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-ivory border-b border-cream transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-lg text-dark hover:text-charcoal transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 60}ms` : "0ms" }}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className={`w-full bg-charcoal hover:bg-dark text-ivory transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${navLinks.length * 60}ms` : "0ms",
              }}
            >
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>
                Reservar Ahora
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Split */}
      <section className="pt-20 lg:pt-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1">
              <Badge className="mb-6 bg-cream text-dark border-0 px-4 py-2">
                <Timer className="w-4 h-4 mr-2" />
                Entrega en 24 horas garantizada
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight mb-6">
                El arte del cuidado de tus prendas
              </h1>
              <p className="text-lg lg:text-xl text-muted-taupe mb-8 max-w-lg">
                Servicio premium de lavado y planchado a domicilio. Recogemos, cuidamos
                y entregamos tu ropa perfectamente doblada en elegantes bolsas de tela.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-charcoal hover:bg-dark text-ivory px-8"
                >
                  <a href="#contacto">Agendar Recolección</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory px-8"
                >
                  <a href="#proceso">Conocer el Proceso</a>
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-muted-taupe">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4" />
                  <span>Productos ecológicos</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Prendas aseguradas</span>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero.png"
                  alt="Ropa perfectamente doblada y empacada en bolsas de tela premium"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-xl shadow-lg p-4 lg:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-charcoal">24h</p>
                    <p className="text-sm text-muted-taupe">Turnaround</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-charcoal py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "10K+", label: "Prendas cuidadas" },
              { value: "98%", label: "Clientes satisfechos" },
              { value: "24h", label: "Tiempo de entrega" },
              { value: "5+", label: "Años de experiencia" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl lg:text-4xl font-semibold text-ivory mb-2">
                  {stat.value}
                </p>
                <p className="text-sm lg:text-base text-ivory/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section id="servicios" className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-charcoal mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-muted-taupe max-w-2xl mx-auto">
              Cada prenda recibe el tratamiento que merece, con productos premium y
              técnicas especializadas para cada tipo de tela.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-charcoal" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-taupe mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-2 text-sm text-dark"
                      >
                        <CheckCircle className="w-4 h-4 text-muted-taupe" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="proceso" className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-charcoal mb-4">
              Cómo Funciona
            </h2>
            <p className="text-lg text-muted-taupe max-w-2xl mx-auto">
              Un proceso simple diseñado para tu comodidad. Nosotros nos encargamos de
              todo mientras tú disfrutas de tu tiempo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl lg:text-7xl font-semibold text-cream mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-taupe text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-cream" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="planes" className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-charcoal mb-4">
              Planes y Suscripciones
            </h2>
            <p className="text-lg text-muted-taupe max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades. Todos incluyen
              recolección y entrega a domicilio.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-sm hover:shadow-md transition-shadow ${
                  plan.popular ? "bg-charcoal text-ivory" : "bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-ivory text-charcoal border-0">
                      Más Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6 lg:p-8">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      plan.popular ? "text-ivory" : "text-charcoal"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      plan.popular ? "text-ivory/70" : "text-muted-taupe"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <p
                    className={`text-sm font-medium mb-6 ${
                      plan.popular ? "text-ivory/90" : "text-dark"
                    }`}
                  >
                    {plan.priceNote}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className={`flex items-center gap-2 text-sm ${
                          plan.popular ? "text-ivory/90" : "text-dark"
                        }`}
                      >
                        <CheckCircle
                          className={`w-4 h-4 flex-shrink-0 ${
                            plan.popular ? "text-ivory/70" : "text-muted-taupe"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-ivory text-charcoal hover:bg-cream"
                        : "bg-charcoal text-ivory hover:bg-dark"
                    }`}
                  >
                    <a href="#contacto">Consultar</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Centered */}
      <section id="nosotros" className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/feature.png"
                alt="Nuestro proceso de cuidado de prendas"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-charcoal mb-6">
                Dedicación en cada pliegue
              </h2>
              <p className="text-lg text-muted-taupe mb-6">
                Lavanderia Blanche nació de una idea simple: que el cuidado de tu ropa
                debería ser una experiencia de lujo, no una tarea más. Combinamos
                técnicas artesanales con tecnología de punta para ofrecer resultados
                impecables.
              </p>
              <p className="text-lg text-muted-taupe mb-8">
                Nuestro equipo de especialistas trata cada prenda como si fuera propia,
                utilizando productos ecológicos que cuidan tanto tus telas como el
                medio ambiente. El resultado: ropa que se ve, se siente y huele a
                nuevo.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center mb-3">
                    <Leaf className="w-6 h-6 text-charcoal" />
                  </div>
                  <h4 className="font-semibold text-charcoal mb-1">Eco Friendly</h4>
                  <p className="text-sm text-muted-taupe">
                    Detergentes biodegradables y bolsas reutilizables
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center mb-3">
                    <ShieldCheck className="w-6 h-6 text-charcoal" />
                  </div>
                  <h4 className="font-semibold text-charcoal mb-1">Garantía Total</h4>
                  <p className="text-sm text-muted-taupe">
                    Seguro que protege el valor de tus prendas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 lg:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-ivory mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-ivory/70 max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestro mejor indicador de
              calidad.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-dark border-0">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-ivory/80 text-ivory/80"
                      />
                    ))}
                  </div>
                  <p className="text-ivory/90 mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                      <span className="text-sm font-semibold text-charcoal">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-ivory">{testimonial.name}</p>
                      <p className="text-sm text-ivory/60">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-charcoal mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-taupe">
              Resolvemos tus dudas para que tu experiencia sea perfecta.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-charcoal pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-taupe flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "pb-5 max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-muted-taupe">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Full */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-charcoal/10 text-charcoal border-0 px-4 py-2">
            <Truck className="w-4 h-4 mr-2" />
            Recolección gratuita a domicilio
          </Badge>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-charcoal mb-6">
            ¿Listo para liberar tu tiempo?
          </h2>
          <p className="text-lg lg:text-xl text-muted-taupe mb-8 max-w-2xl mx-auto">
            Deja que nosotros nos ocupemos del lavado y planchado mientras tú te
            enfocas en lo que realmente importa. Tu primera recolección incluye un
            descuento especial.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-charcoal hover:bg-dark text-ivory px-10"
          >
            <a href="#contacto">Comenzar Ahora</a>
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-charcoal mb-6">
                Agenda tu Recolección
              </h2>
              <p className="text-lg text-muted-taupe mb-8">
                Completa el formulario y nos pondremos en contacto contigo para
                confirmar la fecha y horario de recolección. También puedes
                escribirnos directamente por WhatsApp.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Horario de Recolección</p>
                    <p className="text-muted-taupe">
                      Lunes a Sábado, horarios flexibles
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">WhatsApp</p>
                    <p className="text-muted-taupe">Respuesta en menos de 1 hora</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Área de Cobertura</p>
                    <p className="text-muted-taupe">
                      Verificaremos tu zona al registrarte
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6 lg:p-8">
                  <form className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="nombre"
                          className="block text-sm font-medium text-charcoal mb-2"
                        >
                          Nombre
                        </label>
                        <Input
                          id="nombre"
                          type="text"
                          placeholder="Tu nombre"
                          className="bg-ivory border-cream focus:border-charcoal"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="telefono"
                          className="block text-sm font-medium text-charcoal mb-2"
                        >
                          Teléfono
                        </label>
                        <Input
                          id="telefono"
                          type="tel"
                          placeholder="Tu teléfono"
                          className="bg-ivory border-cream focus:border-charcoal"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="bg-ivory border-cream focus:border-charcoal"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="direccion"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Dirección de Recolección
                      </label>
                      <Input
                        id="direccion"
                        type="text"
                        placeholder="Calle, número, colonia"
                        className="bg-ivory border-cream focus:border-charcoal"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="servicio"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Servicio de Interés
                      </label>
                      <select
                        id="servicio"
                        className="w-full h-10 px-3 rounded-md bg-ivory border border-cream text-charcoal focus:border-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="lavado">Lavado y Planchado</option>
                        <option value="seco">Lavado en Seco</option>
                        <option value="cama">Ropa de Cama</option>
                        <option value="delicadas">Prendas Delicadas</option>
                        <option value="suscripcion">Plan de Suscripción</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="mensaje"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Mensaje (opcional)
                      </label>
                      <Textarea
                        id="mensaje"
                        placeholder="Cuéntanos sobre tus prendas o requerimientos especiales"
                        rows={4}
                        className="bg-ivory border-cream focus:border-charcoal resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-charcoal hover:bg-dark text-ivory"
                    >
                      Solicitar Recolección
                    </Button>
                    <p className="text-xs text-center text-muted-taupe">
                      Te contactaremos en menos de 2 horas para confirmar tu cita.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Full */}
      <footer className="bg-charcoal py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-ivory mb-4">
                Lavanderia Blanche
              </h3>
              <p className="text-ivory/70 mb-6 max-w-md">
                Servicio premium de lavado y planchado a domicilio. Cuidamos tus
                prendas con la dedicación y atención que merecen.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark rounded-full flex items-center justify-center hover:bg-ivory/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-ivory" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark rounded-full flex items-center justify-center hover:bg-ivory/10 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-ivory" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-ivory mb-4">Servicios</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#servicios"
                    className="text-ivory/70 hover:text-ivory transition-colors"
                  >
                    Lavado y Planchado
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="text-ivory/70 hover:text-ivory transition-colors"
                  >
                    Lavado en Seco
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="text-ivory/70 hover:text-ivory transition-colors"
                  >
                    Ropa de Cama
                  </a>
                </li>
                <li>
                  <a
                    href="#planes"
                    className="text-ivory/70 hover:text-ivory transition-colors"
                  >
                    Suscripciones
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-ivory mb-4">Información</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#proceso"
                    className="text-ivory/70 hover:text-ivory transition-colors"
                  >
                    Cómo Funciona
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-ivory/70 hover:text-ivory transition-colors"
                  >
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotros"
                    className="text-ivory/70 hover:text-ivory transition-colors"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-ivory/70 hover:text-ivory transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ivory/50 text-sm">
              © {new Date().getFullYear()} Lavanderia Blanche. Todos los derechos
              reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#faq"
                className="text-ivory/50 hover:text-ivory transition-colors"
              >
                Términos
              </a>
              <a
                href="#faq"
                className="text-ivory/50 hover:text-ivory transition-colors"
              >
                Privacidad
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
