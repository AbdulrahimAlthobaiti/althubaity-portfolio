import React, { useState } from 'react';
import { Menu, X, Linkedin, Mail, FileText, ChevronRight, BookOpen, Briefcase, Award, Database, Users, TrendingUp, Shield } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const expertiseAreas = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Digital Maturity Assessment",
      desc: "تقييم الجاهزية الرقمية للمنصات الحكومية ومواءمتها مع المعايير الوطنية والعالمية"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Digital Transformation & Governance",
      desc: "قيادة مبادرات التحول الرقمي والحوكمة الرقمية للمؤسسات الحكومية"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "UX & Digital Experience Quality",
      desc: "تحسين جودة تجربة المستخدم وتقييم المنصات الرقمية"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Analysis & KPIs",
      desc: "تحليل البيانات والمؤشرات الرقمية وتحويلها إلى قرارات استراتيجية"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Project & Operations Management",
      desc: "إدارة المشاريع والعمليات بمنهجيات Agile و Waterfall"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Events & Risk Management",
      desc: "إدارة الفعاليات الكبرى وخطط الطوارئ وإدارة المخاطر"
    }
  ];

  const experiences = [
    {
      title: "Digital Maturity Specialist",
      company: "Digital Government Authority",
      location: "الرياض، السعودية",
      period: "نوفمبر 2023 - حتى الآن",
      highlights: [
        "قيادة تقييمات النضج الرقمي للمنصات الحكومية",
        "إجراء ورش عمل لأكثر من 50 جهة حكومية",
        "تحليل المؤشرات المحلية والدولية لمشروع كفاءة المواقع الحكومية"
      ]
    },
    {
      title: "Freelancer - Event & Project Management",
      company: "مستقل",
      location: "السعودية",
      period: "ديسمبر 2022 - أكتوبر 2023",
      highlights: [
        "إدارة ضيافة VIP لفعاليات فورمولا 1",
        "قيادة استقبال الوفود الإعلامية للقمة العربية بجدة 2023",
        "الإشراف الميداني لجناح MBC في معرض إقناع 2023"
      ]
    },
    {
      title: "Senior Project Manager",
      company: "AWE Research KSA",
      location: "السعودية",
      period: "يونيو 2019 - يوليو 2022",
      highlights: [
        "إدارة موردي العمل الميداني المستقلين",
        "تحقيق زيادة 25% في الاحتفاظ بالعملاء",
        "تطبيق إجراءات ضمان الجودة الصارمة"
      ]
    }
  ];

  const certifications = [
    "Customer Experience Professional (CX) - 2025",
    "Certified Business Professional (CBP) - 2025",
    "Project Management Professional (PMP) - 35 Hours - 2018",
    "Emergency Plans & Crisis Management - OSHA",
    "Event Management Fellowship - University of Central Florida - 2022",
    "Event Management Diploma - International Career Institute - 2022"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                عبدالرحيم الثبيتي
              </span>
            </div>
            
            <div className="hidden md:flex space-x-reverse space-x-8">
              <a href="#home" className="text-slate-300 hover:text-blue-400 transition">الرئيسية</a>
              <a href="#about" className="text-slate-300 hover:text-blue-400 transition">نبذة عني</a>
              <a href="#experience" className="text-slate-300 hover:text-blue-400 transition">الخبرات</a>
              <a href="#contact" className="text-slate-300 hover:text-blue-400 transition">تواصل معي</a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block text-slate-300 hover:text-blue-400 py-2">الرئيسية</a>
              <a href="#about" className="block text-slate-300 hover:text-blue-400 py-2">نبذة عني</a>
              <a href="#experience" className="block text-slate-300 hover:text-blue-400 py-2">الخبرات</a>
              <a href="#contact" className="block text-slate-300 hover:text-blue-400 py-2">تواصل معي</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-right space-y-6">
              <div className="space-y-2">
                <p className="text-blue-400 text-sm font-semibold tracking-wide">
                  SENIOR DIGITAL MATURITY ANALYST
                </p>
                <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                  عبدالرحيم الثبيتي
                </h1>
                <p className="text-xl text-slate-400">
                  Digital Maturity & Transformation Specialist
                </p>
              </div>

              <div className="pt-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 leading-relaxed">
                  Driving Digital Maturity, Experience Quality, and Operational Excellence
                </h2>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed">
                محلل نضج رقمي أول وخبير في التحول الرقمي، بخبرة تتجاوز 12 عامًا في تقييم المنصات الحكومية، تحسين تجربة المستخدم، ورفع جودة الخدمات الرقمية، إلى جانب خبرة عملية في إدارة العمليات والفعاليات الكبرى.
              </p>

              <div className="flex gap-4 pt-4">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  تواصل معي
                </a>
                <a href="mailto:althobaiti.sa@gmail.com" className="border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  السيرة الذاتية
                </a>
              </div>

              <div className="flex gap-4 pt-2">
                <a href="https://www.linkedin.com/in/abdulrahimalthobaiti/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:althobaiti.sa@gmail.com" className="text-slate-400 hover:text-blue-400 transition">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl bg-slate-800">
                    <img 
                      src="https://i.postimg.cc/bv3JNTqq/A5.jpg" 
                      alt="عبدالرحيم الثبيتي" 
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">مجالات الخبرة</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              خبرة متكاملة في التحول الرقمي، تقييم النضج، وتحسين تجربة المستخدم
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition">
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">نبذة عني</h2>
          </div>

          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed text-right">
              عبدالرحيم الثبيتي محلل نضج رقمي أول وخبير في التحول الرقمي، يمتلك خبرة مهنية تتجاوز 12 عامًا في العمل مع الجهات الحكومية، المنصات الرقمية، والمبادرات الوطنية. يركز عمله على تقييم الجاهزية الرقمية، تحسين جودة تجربة المستخدم، ورفع كفاءة الخدمات الرقمية وفق أفضل الممارسات العالمية.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed text-right">
              إلى جانب ذلك، يتمتع بخبرة قوية في إدارة المشاريع والعمليات، وتحليل البيانات والمؤشرات، إضافة إلى سجل عملي في إدارة وتنظيم الفعاليات والمؤتمرات. هذا التكامل بين العمل الرقمي والتنفيذي مكّنه من الربط بين الاستراتيجية والتنفيذ، وتحقيق أثر ملموس يدعم مستهدفات رؤية السعودية 2030.
            </p>

            <div className="pt-6 border-t border-slate-700">
              <p className="text-xl text-blue-400 font-semibold text-center italic">
                "التحول الرقمي الحقيقي لا يبدأ بالتقنية، بل بالحوكمة، التجربة، وجودة القرار"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">الخبرات العملية</h2>
            <p className="text-slate-400">أبرز المحطات المهنية في مسيرتي</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="text-right mb-2 md:mb-0">
                    <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                    <p className="text-lg text-slate-300">{exp.company}</p>
                  </div>
                  <div className="text-right md:text-left">
                    <p className="text-slate-400 text-sm">{exp.period}</p>
                    <p className="text-slate-500 text-sm">{exp.location}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 text-right">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-slate-300 flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">الشهادات المهنية</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/30 border border-slate-700 rounded-lg p-4 hover:border-blue-500 transition text-right"
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <p className="text-slate-300">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            دعنا نتعاون
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            هل تبحث عن خبير في النضج الرقمي والتحول الرقمي؟ دعنا نتعاون لتحويل البيانات والمؤشرات الرقمية إلى قرارات استراتيجية تدعم الكفاءة والاستدامة المؤسسية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="mailto:althobaiti.sa@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition flex items-center gap-2">
              <Mail className="w-5 h-5" />
              althobaiti.sa@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/abdulrahimalthobaiti/" target="_blank" rel="noopener noreferrer" className="border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg transition flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
          </div>

          <div className="text-slate-400">
            <p className="mb-2">📍 الرياض، المملكة العربية السعودية</p>
            <p>📞 +966 582-230-111</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-right">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                عبدالرحيم الثبيتي
              </h3>
              <p className="text-slate-400 leading-relaxed">
                محلل نضج رقمي أول وخبير في التحول الرقمي
              </p>
              <p className="text-slate-500 text-sm mt-2">
                Digital Maturity & Transformation Specialist
              </p>
            </div>

            <div className="text-right">
              <h4 className="font-semibold mb-4">روابط سريعة</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-slate-400 hover:text-blue-400 transition">الرئيسية</a>
                <a href="#about" className="block text-slate-400 hover:text-blue-400 transition">نبذة عني</a>
                <a href="#experience" className="block text-slate-400 hover:text-blue-400 transition">الخبرات</a>
              </div>
            </div>

            <div className="text-right">
              <h4 className="font-semibold mb-4">تواصل معي</h4>
              <div className="space-y-2">
                <p className="text-slate-400">الرياض، المملكة العربية السعودية</p>
                <a href="mailto:althobaiti.sa@gmail.com" className="block text-slate-400 hover:text-blue-400 transition">
                  althobaiti.sa@gmail.com
                </a>
                <a href="tel:+966582230111" className="block text-slate-400 hover:text-blue-400 transition">
                  +966 582-230-111
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400">
              جميع الحقوق محفوظة ٢٠٢٥ © عبدالرحيم الثبيتي
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
