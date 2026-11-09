let voteCounts = [78, 64, 42];
let chartInstance = null;

// Inisialisasi Chart.js (Pie Chart — Pixel Theme)
function initAdminChart() {
    const ctx = document.getElementById('adminChart').getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['01. Gading & Clara', '02. Reyhan & Amanda', '03. Faris & Nabila'],
            datasets: [{
                label: 'Jumlah Suara',
                data: voteCounts,
                backgroundColor: ['#38BAFF', '#FF8C1A', '#9B59EF'],
                borderColor: '#1A1A4E',
                borderWidth: 4,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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
}

// Pembaruan Angka Statistik Realtime
function updateStats() {
    const total = voteCounts.reduce((a, b) => a + b, 0);
    const el1 = document.getElementById('statTotalSuara');
    const el2 = document.getElementById('statPercent');
    if (el1) el1.textContent = total;
    if (el2) el2.textContent = ((total / 300) * 100).toFixed(1) + '%';
}
