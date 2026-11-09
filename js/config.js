// Konfigurasi Tailwind Custom Theme
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: '#0F172A',
                    blue: '#2563EB',
                    orange: '#F97316',
                    purple: '#8B5CF6',
                    slateBg: '#F8FAFC'
                }
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            }
        }
    }
};

// Data Paslon & Visi Misi
const paslonDetails = {
    1: {
        number: "Kandidat 01",
        title: "Gading & Clara",
        tagline: "Digitalisasi & Kolaborasi Inovatif",
        desc: "Fokus pada modernisasi sistem kerja internal, efisiensi alur komunikasi berbasis teknologi, serta transparansi bagi seluruh anggota.",
        visi: "Mewujudkan kepemimpinan organisasi berbasis digitalisasi transparan dan efisiensi kerja tinggi.",
        misi: [
            "Transparansi Anggaran Realtime",
            "Platform Skill Hub & Workshop Anggota",
            "Digitalisasi alur persetujuan program kerja"
        ]
    },
    2: {
        number: "Kandidat 02",
        title: "Reyhan & Amanda",
        tagline: "Inklusivitas & Keberagaman Komunitas",
        desc: "Menghadirkan lingkungan organisasi yang ramah, mendukung apresiasi seni dan budaya, serta memperkuat jejaring antar-divisi.",
        visi: "Menjadikan organisasi sebagai ruang inklusif yang menghargai keberagaman seni, budaya, dan ide inovatif.",
        misi: [
            "Program Apresiasi Karya Anggota",
            "Forum Diskusi Terbuka Mingguan",
            "Penyelenggaraan festival seni dan budaya tahunan"
        ]
    },
    3: {
        number: "Kandidat 03",
        title: "Faris & Nabila",
        tagline: "Efisiensi Operasional & Akselerasi",
        desc: "Optimalisasi struktur kerja terukur, penyederhanaan birokrasi internal, serta eksekusi program prioritas yang tepat sasaran.",
        visi: "Akselerasi performa organisasi melalui penyederhanaan birokrasi dan program tepat sasaran.",
        misi: [
            "Penyederhanaan Alur Birokrasi Internal",
            "Evaluasi Kinerja Program Terukur Berkala",
            "Rasionalisasi anggaran operasional organisasi"
        ]
    }
};