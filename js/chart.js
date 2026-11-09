let voteCounts = [78, 64, 42];
let chartInstance = null;

<<<<<<< HEAD
// Inisialisasi Chart.js (Pie Chart — Pixel Theme)
function initAdminChart() {
    const ctx = document.getElementById('adminChart').getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'pie',
=======
// Inisialisasi Chart.js
function initAdminChart() {
    const ctx = document.getElementById('adminChart').getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'bar',
>>>>>>> 028fe83395daad8ea19a3be4e2229b6f9c25f712
        data: {
            labels: ['01. Gading & Clara', '02. Reyhan & Amanda', '03. Faris & Nabila'],
            datasets: [{
                label: 'Jumlah Suara',
                data: voteCounts,
<<<<<<< HEAD
                backgroundColor: ['#38BAFF', '#FF8C1A', '#9B59EF'],
                borderColor: '#1A1A4E',
                borderWidth: 4,
                hoverOffset: 10
=======
                backgroundColor: ['#2563EB', '#F97316', '#8B5CF6'],
                borderRadius: 10,
                barThickness: 48
>>>>>>> 028fe83395daad8ea19a3be4e2229b6f9c25f712
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
<<<<<<< HEAD
            animation: { duration: 800, easing: 'easeOutQuart' },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        color: '#1A1A4E',
                        padding: 16,
                        usePointStyle: true,
                        pointStyle: 'rect',
                        font: {
                            family: "'Press Start 2P', cursive",
                            size: 7
                        }
                    }
                },
                tooltip: {
                    padding: 12,
                    cornerRadius: 0,
                    bodyFont: { family: "'Press Start 2P', cursive", size: 9 },
                    titleFont: { family: "'Press Start 2P', cursive", size: 8 },
                    backgroundColor: '#1A1A4E',
                    borderColor: '#FFE033',
                    borderWidth: 2,
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const val = context.parsed;
                            const pct = total > 0 ? ((val / total) * 100).toFixed(1) : 0;
                            return ` ${val} SUARA (${pct}%)`;
                        }
                    }
                }
            }
        }
    });
    updateStats();
=======
            animation: { duration: 1200, easing: 'easeOutQuart' },
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, ticks: { color: '#64748B' }, grid: { color: '#F1F5F9' } },
                x: { ticks: { color: '#0F172A', font: { weight: '600' } }, grid: { display: false } }
            }
        }
    });
}

// Simulasi penambahan suara baru dari Admin Dashboard
function simulateNewVote() {
    const rnd = Math.floor(Math.random() * 3);
    voteCounts[rnd]++;
    updateStats();

    if (chartInstance) {
        chartInstance.data.datasets[0].data = voteCounts;
        chartInstance.update();
    }
    showToast(`Simulasi: 1 Suara baru masuk untuk Paslon 0${rnd + 1}!`);
>>>>>>> 028fe83395daad8ea19a3be4e2229b6f9c25f712
}

// Pembaruan Angka Statistik Realtime
function updateStats() {
    const total = voteCounts.reduce((a, b) => a + b, 0);
<<<<<<< HEAD
    const el1 = document.getElementById('statTotalSuara');
    const el2 = document.getElementById('statPercent');
    if (el1) el1.textContent = total;
    if (el2) el2.textContent = ((total / 300) * 100).toFixed(1) + '%';
}
=======
    document.getElementById('statTotalSuara').innerText = total;
    document.getElementById('statPercent').innerText = ((total / 300) * 100).toFixed(1) + '%';
}
>>>>>>> 028fe83395daad8ea19a3be4e2229b6f9c25f712
