import { useState } from "react";
import { Card, CardContent } from "@/components/card";
import {
  BarChart2,
  Zap,
  FileText,
  Brain,
  BookOpen, // Icon for Python & Data Science
  Clock,
  ExternalLink,
  Bot, // Icon for AI & Chatboty
  Database, // Icon for Dane do analiz - general
  Code, // Icon for Python & Data Science (general)
  ClipboardCheck, // Icon for Produktywność
  AreaChart, // Icon for Wizualizacje danych
  LayoutPanelTop, // General icon for Power BI tools (example)
  Component, // Another icon for tools (example)
  Lightbulb, // Icon for Inspiracje
  Palette, // Icon for Style i szablony
  LineChart, // Icon for Wykresy
  Search, // Icon for Oferty pracy i zlecenia
  ScrollText, // Icon for CV
  CalendarCheck, // Icon for Organizacja pracy
  CodeXml, // Icon for AI do kodu
  SearchCheck, // Icon for Do researchu
  FileStack, // New icon for Otwarte dane (rządowe np.)
  FlaskConical, // New icon for Zbiory do ćwiczeń
  Globe, // New icon for global government data
  BookCopy, // New icon for curated datasets
  TestTube, // Dodano brakujący import dla ikony TestTube
  Hourglass, // New icon for time management (Pomodoro)
  Inspect, // New icon for Analiza danych i eksploracja
  Sparkles, // New icon for Uczenie maszynowe i predykcje
  ScatterChart, // New icon for Wizualizacja danych w Pythonie
} from "lucide-react";
import { motion } from "framer-motion";

/* ----------------------------------
   GLOBAL STYLE NOTE
   ----------------------------------
   Dodaj w _app.tsx lub index.css:

   @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
   html {
     font-family: 'Poppins', sans-serif;
   }
*/

const accent = "#7c3aed"; // fiolet / purple‑600

// Interface for a single link item
interface NinjaLink {
  title: string;
  href: string;
  description: string;
  icon?: React.ReactNode;
}

// Interface for a subsection, which contains its own links
interface NinjaSubsection {
  name: string;
  description: string;
  links: NinjaLink[];
}

// Interface for the main sections, now supporting subsections
interface NinjaSection {
  name: string;
  icon: React.ReactNode;
  description: string;
  links?: NinjaLink[]; // Optional, if subsections are present
  subsections?: NinjaSubsection[]; // New field for nesting
}

const sections: NinjaSection[] = [
  {
    name: "Power BI & DAX",
    icon: <BarChart2 className="w-4 h-4 mr-2" />,
    description: "", // Description removed
    subsections: [
      {
        name: "DAX",
        description: "", // Description removed
        links: [
          {
            title: "Microsoft DAX Guide",
            href: "https://learn.microsoft.com/en-us/dax/",
            description: "Oficjalna dokumentacja Microsoft z opisem funkcji DAX, przykładami i wskazówkami użycia.",
            icon: <ExternalLink />,
          },
          {
            title: "DAX Formatter by SQLBI",
            href: "https://www.daxformatter.com/",
            description: "Formatuje kod DAX zgodnie z najlepszymi praktykami.",
            icon: <ExternalLink />,
          },
          {
            title: "DAX Patterns",
            href: "https://www.daxpatterns.com/",
            description: "Zbiór gotowych wzorców DAX do typowych problemów analitycznych.",
            icon: <ExternalLink />,
          },
          {
            title: "DAX.do",
            href: "https://dax.do/",
            description: "Interaktywny edytor DAX – pisz, testuj i udostępniaj kod bezpośrednio w przeglądarce.",
            icon: <ExternalLink />,
          },
          {
            title: "DAX Optimizer",
            href: "https://www.daxoptimizer.com/",
            description:
              "Zautomatyzowana analiza modeli DAX – wykrywa wąskie gardła i wskazuje priorytety optymalizacji.",
            icon: <ExternalLink />,
          },
        ],
      },
      {
        name: "Power BI",
        description: "", // Description removed
        links: [
          {
            title: "Power BI Blog",
            href: "https://powerbi.microsoft.com/en-us/blog/",
            description:
                  "Oficjalny blog Power BI z newsami, aktualizacjami funkcji.",
            icon: <ExternalLink />,
          },
          {
            title: "Power BI Community",
            href: "https://community.powerbi.com/",
            description:
              "Aktywne forum społeczności – pytania, inspiracje i rozwiązania od użytkowników.",
            icon: <ExternalLink />,
          },
          {
            title: "PowerBI.Tips",
            href: "https://powerbi.tips",
            description:
              "Generator motywów i layoutów, tutoriale, helpery wizualne i narzędzia przyspieszające raportowanie.",
            icon: <ExternalLink />,
          },
          {
            title: "PowerBI Weekly",
            href: "https://powerbiweekly.info/",
            description:
               "Cotygodniowy newsletter z wyselekcjonowanymi nowościami, poradami i narzędziami ze świata Power BI.",
            icon: <ExternalLink />,
          },
        ],
      },
      {
        name: "Narzędzia do Power BI",
        description: "", // Description removed
        links: [
          {
            title: "VertiPaq Analyzer",
            href: "https://www.sqlbi.com/tools/vertipaq-analyzer/",
            description: "Analiza pamięci modelu DAX (VertiPaq) w Power BI.",
            icon: <LayoutPanelTop className="w-5 h-5" />,
          },
          {
            title: "Tabular Editor",
            href: "https://tabulareditor.com/",
            description:
              "Zaawansowane narzędzie do edycji modeli Power BI i SSAS.",
            icon: <Component className="w-5 h-5" />,
          },
          {
            title: "Bravo for Power BI",
            href: "https://www.sqlbi.com/tools/bravo-for-power-bi",
            description:
              "Otwarte narzędzie do analizy modelu, czyszczenia miar DAX i eksportu danych.", 
            icon: <Component className="w-5 h-5" />,
          },
          {
            title: "DAX Studio",
            href: "https://daxstudio.org/",
            description:
              "Narzędzie do pisania, wykonywania i analizowania zapytań DAX.",
            icon: <Component className="w-5 h-5" />,
          },
          {
            title: "ALM Toolkit",
            href: "https://alm-toolkit.com/",
            description:
              "Porównuje i synchronizuje modele Tabular – przydatny przy wersjonowaniu miar i zmianach w modelu.",
            icon: <ExternalLink />,
          },
        ],
      },
    ],
  },
  {
    name: "Wizualizacja danych",
    icon: <AreaChart className="w-4 h-4 mr-2" />,
    description: "", // Description removed
    subsections: [
      {
        name: "Inspiracje",
        description: "", // Description removed
        links: [
          {
            title: "PBI Community  Data Stories Gallery",
            href: "https://community.fabric.microsoft.com/t5/Data-Stories-Gallery/bd-p/DataStoriesGallery",
            description:
              "Setki dashboardów od społeczności Power BI, realne przykłady i różne branże.",
            icon: <Lightbulb className="w-5 h-5" />,
          },
          {
            title: "Core Visual Vision Board Power BI",
            href: "https://msit.powerbi.com/view?r=eyJrIjoiYmQ5ODYzYmQtOWU5MS00M2VmLWE5MmMtNjE3YzY2ZjRjZTY2IiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9",
            description:
              "Raport w Power BI, w którym można przeglądać, komentować i głosować na wizualizacje.",
            icon: <Lightbulb className="w-5 h-5" />,
          },
          {
            title: "FlowingData",
            href: "https://flowingdata.com/",
            description: "Blog o wizualizacji danych, statystykach i designie.",
            icon: <Lightbulb className="w-5 h-5" />,
          },
          {
            title: "Dribbble",
            href: "https://dribbble.com/tags/powerbi",
            description:
              "Projektanci UX wrzucają tu mockupy dashboardów, dobry punkt wyjścia do layoutów.",
            icon: <Lightbulb className="w-5 h-5" />,
          },
          {
            title: "Pinterest",
            href: "https://pl.pinterest.com/search/pins/?q=power%20bi%20dashboard",
            description:
              "Niekodowe inspiracje wizualne i układy, które można odtworzyć w Power BI.",
            icon: <Lightbulb className="w-5 h-5" />,
          },
          {
            title: "NovyPro",
            href: "https://www.novypro.com/project",
            description:
              "Ogromna kolekcja darmowych dashboardów od użytkowników z całego świata.",
            icon: <Lightbulb className="w-5 h-5" />,
          },
        ],
      },
      {
        name: "Motywy",
        description: "", // Description removed
        links: [
          {
            title: "Coolors",
            href: "https://coolors.co/",
            description:
              "Szybkie generowanie pasujących kolorów, do eksportu jako motyw.",
            icon: <Palette className="w-5 h-5" />,
          },
          {
            title: "PowerBI.Tips Theme Generator",
            href: "https://themes.powerbi.tips/",
            description:
              "Dedykowany generator motywów do Power BI – kolory, typografia, styl wizualizacji.",
            icon: <Palette className="w-5 h-5" />,
          },
        ],
      },
      {
        name: "Encyklopedia wykresów",
        description: "", // Description removed
        links: [
          {
            title: "The Data Visualisation Catalogue",
            href: "https://datavizcatalogue.com/",
            description: "Katalog typów wykresów z opisami, przykładami i zastosowaniami.",
            icon: <LineChart className="w-5 h-5" />,
          },
          {
            title: "From Data to Viz",
            href: "https://www.data-to-viz.com/",
            description:
                "Przewodnik krok po kroku – jak wybrać najlepszy wykres dla konkretnego zestawu danych.",
            icon: <LineChart className="w-5 h-5" />,
          },
          {
            title: "DataViz Project",
            href: "https://datavizproject.com/",
            description:
              "Interaktywny katalog typów wykresów z przykładami – idealny przy doborze wizualizacji.",
            icon: <LineChart className="w-5 h-5" />,
          },
        ],
      },
      {
        name: "Narzędzia do wizualizacji danych",
        description: "", // Description removed
        links: [
          {
            title: "Deneb",
            href: "https://deneb-viz.github.io/",
            description:
                  "Power BI plugin do budowania niestandardowych wizualizacji w Vega/Vega‑Lite – certyfikowany.", 
            icon: <Palette className="w-5 h-5" />,
          },
          {
            title: "ECharts + Streamlit",
            href: "https://echarts.streamlit.app/",
            description:
              "Interaktywna galeria wykresów zbudowana w Pythonie przy użyciu ECharts i Streamlit.",
            icon: <Palette className="w-5 h-5" />,
          },
          {
            title: "Material Design - Data tables",
            href: "https://m2.material.io/components/data-tables",
            description: "Wytyczne dotyczące projektowania tabel danych.",
            icon: <Palette className="w-5 h-5" />,
          },
          {
            title: "Chart.js Documentation",
            href: "https://www.chartjs.org/docs/latest/",
            description:
              "Dokumentacja popularnej biblioteki do wykresów JavaScript.",
            icon: <ExternalLink />,
          },
          {
            title: "D3.js Gallery",
            href: "https://d3js.org/",
            description: "Galeria przykładów wizualizacji stworzonych w D3.js.",
            icon: <LineChart className="w-5 h-5" />,
          },
          {
            title: "SVG Templates by Kerry Kolosko",
            href: "kerrykolosko.com/category/dataviz/svg/",
            description:
              "Zbiór szablonów SVG (microcharts, infografiki, filtry, animacje) używanych w Power BI.",
            icon: <LineChart className="w-5 h-5" />,
          },
          {
            title: "PBI‑David Deneb Showcase",
            href: "https://github.com/PBI-David/Deneb-Showcase",
            description:
              "Kolekcja zaawansowanych przykładów Vega/Vega‑Lite w Power BI – bubble charts, sankey, gantt, waffle i inne.",
            icon: <Palette className="w-5 h-5" />,
          },
        ],
      },
    ],
  },
  {
    name: "Freelancer & Kariera",
    icon: <Zap className="w-4 h-4 mr-2" />,
    description: "", // Description removed
    subsections: [
      {
        name: "Oferty pracy i zlecenia",
        description: "", // Description removed
        links: [
          {
            title: "Upwork",
            href: "https://www.upwork.com/",
            description: "Największy globalny marketplace projektów dla freelancerów – IT, design, analiza danych.",
            icon: <Search className="w-5 h-5" />,
          },
          {
            title: "Fiverr",
            href: "https://www.fiverr.com/",
            description: "Miejsce do oferowania usług cyfrowych.",
            icon: <Search className="w-5 h-5" />,
          },
          {
            title: "UseMe",
            href: "https://useme.com/pl/",
            description:
              "Platforma dla freelancerów, do jednorazowych zleceń i współpracy B2B.",
            icon: <Search className="w-5 h-5" />,
          },
          {
            title: "LinkedIn Jobs",
            href: "https://www.linkedin.com/jobs/",
            description: "Oferty pracy z całego świata.",
            icon: <Search className="w-5 h-5" />,
          },
          {
            title: "Pracuj.pl",
            href: "https://www.pracuj.pl/",
            description: "Największy polski portal z ofertami pracy.",
            icon: <Search className="w-5 h-5" />,
          },
        ],
      },
      {
        name: "CV",
        description: "", // Description removed
        links: [
          {
            title: "Canva - Kreator CV",
            href: "https://www.canva.com/resumes/",
            description:
              "Narzędzie do tworzenia profesjonalnego CV i portfolio.",
            icon: <ScrollText className="w-5 h-5" />,
          },
          {
            title: "Resume.io",
            href: "https://resume.io/",
            description: "Online'owy kreator CV z szablonami.",
            icon: <ScrollText className="w-5 h-5" />,
          },
        ],
      },
    ],
  },
  {
    name: "AI & Chatboty",
    icon: <Brain className="w-4 h-4 mr-2" />,
    description: "", // Description removed
    subsections: [
      {
        name: "AI do kodu",
        description: "",
        links: [
          {
            title: "GitHub Copilot",
            href: "https://github.com/features/copilot/",
            description: "Asystent AI od GitHub – uzupełnianie i generowanie kodu, obsługujący wiele języków.",
            icon: <CodeXml className="w-5 h-5" />,
          },
          {
            title: "Google Gemini Code Assist",
            href: "https://ai.google.dev",
            description:
                      "Asystent od Google – generowanie i analiza kodu, z sugestiami opartymi o model Gemini.",
            icon: <CodeXml className="w-5 h-5" />,
          },
        ],
      },
      {
        name: "AI do treści",
        description: "",
        links: [
          {
            title: "ChatGPT",
            href: "https://chat.openai.com/",
            description:
              "Jeden z najpopularniejszych modeli językowych do generowania tekstu.",
            icon: <Bot className="w-5 h-5" />,
          },
          {
            title: "Gemini",
            href: "https://gemini.google.com/app",
            description: "Model konwersacyjny AI od Google.",
            icon: <Bot className="w-5 h-5" />,
          },
          {
            title: "Midjourney",
            href: "https://www.midjourney.com/",
            description: "Narzędzie do generowania obrazów z tekstu.",
            icon: <ExternalLink />,
          },
        ],
      },
      {
        name: "Do researchu",
        description: "",
        links: [
          {
            title: "Hugging Face",
            href: "https://huggingface.co/",
            description: "Platforma z modelami AI i datasetami do badań.",
            icon: <SearchCheck className="w-5 h-5" />,
          },
          {
            title: "Perplexity AI",
            href: "https://www.perplexity.ai/",
            description:
              "Wyszukiwarka oparta na AI, która odpowiada na pytania z podaniem źródeł.",
            icon: <SearchCheck className="w-5 h-5" />,
          },
          {
            title: "DeepSeek",
            href: "https://github.com/deepseek-ai",
            description: "Rodzina dużych modeli językowych typu open-source.",
            icon: <SearchCheck className="w-5 h-5" />,
          },
          {
          title: "Chatbot Arena",
          href: "https://lmarena.ai/",
          description:
            "Platforma do porównywania chatbotów – ranking 170+ modeli (OpenAI, Gemini, Claude itp.).",
          icon: <SearchCheck className="w-5 h-5" />,
        },
        ],
      },
    ],
  },
  {
    name: "Dane do analiz",
    icon: <FileText className="w-4 h-4 mr-2" />,
    description: "", // Description removed
    subsections: [
      {
        name: "Otwarte dane",
        description: "",
        links: [
          {
            title: "Kaggle",
            href: "https://www.kaggle.com/datasets",
            description:  "Bogata baza danych do ML i eksploracji – zarówno community datasets, jak i konkursowe zestawy.",
            icon: <Database className="w-5 h-5" />,
          },
          {
            title: "Google Public Datasets",
            href: "https://cloud.google.com/bigquery/public-data",
            description:
                          "Publiczne zbiory danych dostępne przez BigQuery – od genomiki po ekonomię.",
            icon: <Database className="w-5 h-5" />,
          },
          {
            title: "Dane.gov.pl",
            href: "https://dane.gov.pl/",
            description: "Portal otwartych danych publicznych w Polsce.",
            icon: <FileStack className="w-5 h-5" />,
          },
          {
            title: "Eurostat",
            href: "https://ec.europa.eu/eurostat/data/database",
            description: "Oficjalne statystyki Unii Europejskiej.",
            icon: <Globe className="w-5 h-5" />,
          },
          {
          title: "data.europa.eu",
          href: "https://data.europa.eu/en",
          description:
            "Meta-katalog ponad 1,6 mln datasetów z UE i państw członkowskich.",
          icon: <Globe className="w-5 h-5" />,
        },
        {
            title: "UCI Machine Learning Repository",
            href: "https://archive.ics.uci.edu/datasets",
            description: "Kolekcja baz danych do analizy maszynowej.",
            icon: <FlaskConical className="w-5 h-5" />,
          },
          {
            title: "Data.gov",
            href: "https://data.gov/",
            description: "Otwarte dane rządu USA, idealne do ćwiczeń.",
            icon: <TestTube className="w-5 h-5" />,
          },
          {
            title: "Awesome Public Datasets",
            href: "https://github.com/awesomedata/awesome-public-datasets",
            description: "Wyselekcjonowana lista publicznych zbiorów danych.",
            icon: <BookCopy className="w-5 h-5" />,
          },
        ],
      },
    ],
  },
  {
    name: "Python & Data Science",
    icon: <BookOpen className="w-4 h-4 mr-2" />,
    description: "", // Description removed
    subsections: [
      {
        name: "Analiza danych i eksploracja",
        description: "",
        links: [
          {
            title: "Pandas Documentation",
            href: "https://pandas.pydata.org/docs/",
            description:
              "Oficjalna dokumentacja biblioteki Pandas, kluczowej do analizy danych.",
            icon: <Inspect className="w-5 h-5" />,
          },
          {
            title: "NumPy Documentation",
            href: "https://numpy.org/doc/stable/",
            description:
              "Podstawowa biblioteka do obliczeń numerycznych w Pythonie.",
            icon: <Inspect className="w-5 h-5" />,
          },
          {
            title: "Jupyter Notebook",
            href: "https://jupyter.org/",
            description:
              "Interaktywne środowisko programistyczne idealne do eksploracji danych.",
            icon: <Code className="w-5 h-5" />,
          },
          {
            title: "Anaconda Distribution",
            href: "https://www.anaconda.com/",
            description:
              "Platforma do zarządzania środowiskami Pythona i pakietami do data science.",
            icon: <Code className="w-5 h-5" />,
          },
        ],
      },
      {
        name: "Uczenie maszynowe i predykcje",
        description: "",
        links: [
          {
            title: "Scikit-learn",
            href: "https://scikit-learn.org/stable/",
            description: "Biblioteka do uczenia maszynowego w Pythonie.",
            icon: <Sparkles className="w-5 h-5" />,
          },
          {
            title: "TensorFlow",
            href: "https://www.tensorflow.org/",
            description:
              "Otwarta biblioteka do uczenia maszynowego i głębokiego uczenia.",
            icon: <Sparkles className="w-5 h-5" />,
          },
          {
            title: "Keras",
            href: "https://keras.io/",
            description:
              "Biblioteka do tworzenia i trenowania sieci neuronowych, działająca na TensorFlow.",
            icon: <Sparkles className="w-5 h-5" />,
          },
        ],
      },
      {
        name: "Wizualizacja danych w Pythonie",
        description: "",
        links: [
          {
            title: "Matplotlib Documentation",
            href: "https://matplotlib.org/stable/contents.html",
            description:
              "Kompleksowa biblioteka do tworzenia statycznych, animowanych i interaktywnych wizualizacji.",
            icon: <ScatterChart className="w-5 h-5" />,
          },
          {
            title: "Seaborn Documentation",
            href: "https://seaborn.pydata.org/",
            description:
              "Biblioteka do tworzenia atrakcyjnych wizualizacji statystycznych, oparta na Matplotlib.",
            icon: <ScatterChart className="w-5 h-5" />,
          },
          {
            title: "Plotly Python Open Source Graphing Library",
            href: "https://plotly.com/python/",
            description:
              "Interaktywne wykresy i dashboardy, które można uruchamiać w przeglądarce.",
            icon: <ScatterChart className="w-5 h-5" />,
          },
        ],
      },
    ],
  },
  {
    name: "Produktywność",
    icon: <Clock className="w-4 h-4 mr-2" />,
    description: "", // Description removed
    subsections: [
      {
        name: "Zarządzanie czasem",
        description: "",
        links: [
          {
            title: "Ninja Pomodoro",
            href: "https://pomodoro.ninjadata.pl/",
            description:
              "Minimalistyczny timer oparty na technice Pomodoro, zaprojektowany z myślą o analitykach danych.",
            icon: <Clock className="w-5 h-5" />,
          },
          {
            title: "Toggl Track",
            href: "https://toggl.com/track/freelance-time-tracking/",
            description:
              "Ułatwia fakturowanie, przekształca godziny w przejrzyste raporty",
            icon: <Hourglass className="w-5 h-5" />,
          },
        ],
      },
      {
        name: "Zarządzanie zadaniami", // Renamed
        description: "",
        links: [
          {
            title: "Notion",
            href: "https://www.notion.so/",
            description:
              "Wielofunkcyjne narzędzie do zarządzania projektami i notatkami.",
            icon: <CalendarCheck className="w-5 h-5" />,
          },
          {
            title: "Trello",
            href: "https://trello.com/",
            description:
              "Narzędzie do zarządzania zadaniami w formie tablic kanban.",
            icon: <CalendarCheck className="w-5 h-5" />,
          },
          {
            title: "Asana",
            href: "https://asana.com/",
            description: "Platforma do zarządzania projektami i zespołami.",
            icon: <CalendarCheck className="w-5 h-5" />,
          },
        ],
      },
      {
        name: "Organizacja wiedzy",
        description: "",
        links: [
          {
            title: "Obsidian",
            href: "https://obsidian.md/",
            description:
              "Potężne narzędzie do organizacji notatek w formie grafu.",
            icon: <ClipboardCheck className="w-5 h-5" />,
          },
        ],
      },
    ],
  },
];

export default function NinjaLinksPage() {
  const [activeSection, setActiveSection] = useState("Power BI & DAX");
  const current = sections.find((s) => s.name === activeSection);

  /* ---------- Zakładki ---------- */
  const Tabs = () => (
    <div className="flex flex-wrap justify-center gap-6 mb-14 border-b border-white/10">
      {sections.map((s) => (
        <button
          key={s.name}
          onClick={() => setActiveSection(s.name)}
          className={`inline-flex items-center px-3 py-2 text-sm sm:text-base transition-all border-b-2 ${
            activeSection === s.name
              ? `border-[${accent}] text-white font-semibold`
              : `border-transparent text-neutral-400 hover:text-white hover:border-white/20`
          }`}
        >
          {s.icon}
          {s.name}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-16 px-4 sm:px-10">
      {/* ---- HERO ---- */}
      <div className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row md:items-start gap-8 md:gap-14">
        {/* Logo dodane obok tytułu */}
        <a href="https://ninjadata.pl/">
          <img
            src="logo_napis_bialy-01.png" // Ścieżka do przesłanego logo
            alt="Ninja Data Logo"
            className="h-16 w-auto mb-4 md:mb-0" // Dostosuj rozmiar w zależności od potrzeb
            loading="eager" // Szybkie ładowanie logo
          />
        </a>
        <h1 className="flex-1 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
          Ninja Tools Hub
        </h1>
        <p className="flex-1 text-neutral-400 text-lg md:text-xl max-w-xl">
          Ninja Tools Hub to przegląd wyselekcjonowanych narzędzi dla osób pracujących z danymi.
          Zawiera sprawdzone linki do źródeł, które przyspieszają analizę, ułatwiają wizualizację i wspierają naukę – wszystko zebrane w jednym miejscu.
        </p>
      </div>

      <Tabs />

      {/* ---- Sekcja główna ---- */}
      <div className="max-w-6xl mx-auto mb-20">
        {/* Opis sekcji - warunkowe renderowanie */}
        {current?.description && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <h2 className="text-3xl font-bold font-[Poppins] text-white">
              {current?.name}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
              {current?.description}
            </p>
          </div>
        )}

        {/* Dynamiczne renderowanie linków lub podsekcji */}
        {current?.subsections ? (
          // Render subsections if they exist
          current.subsections.map((subsection) => (
            <div key={subsection.name} className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-6">
                {subsection.name}
              </h3>
              {/* Opis podsekcji - warunkowe renderowanie */}
              {subsection.description && (
                <p className="text-neutral-400 text-sm sm:text-base mb-6">
                  {subsection.description}
                </p>
              )}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {subsection.links.map((link) => (
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={link.title}
                    whileHover={{ translateY: -4 }}
                    className="group"
                  >
                    <Card className="aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl transition shadow-none group-hover:shadow-[0_8px_24px_-4px_rgba(124,60,237,0.4)]">
                      <CardContent className="p-6 flex flex-col h-full justify-start">
                        {/* Ikona w kółku */}
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white"
                          style={{ backgroundColor: accent }}
                        >
                          {link.icon ?? <ExternalLink className="w-5 h-5" />}
                        </div>

                        <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                          {link.title}
                        </h3>
                        <p className="text-sm text-neutral-300 leading-snug line-clamp-4">
                          {link.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>
          ))
        ) : (
          // Render flat links if no subsections
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {current?.links?.map((link) => (
              <motion.a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                key={link.title}
                whileHover={{ translateY: -4 }}
                className="group"
              >
                <Card className="aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl transition shadow-none group-hover:shadow-[0_8px_24px_-4px_rgba(124,60,237,0.4)]">
                  <CardContent className="p-6 flex flex-col h-full justify-start">
                    {/* Ikona w kółku */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white"
                      style={{ backgroundColor: accent }}
                    >
                      {link.icon ?? <ExternalLink className="w-5 h-5" />}
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                      {link.title}
                    </h3>
                    <p className="text-sm text-neutral-300 leading-snug line-clamp-4">
                      {link.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
