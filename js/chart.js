let voteCounts = [78, 64, 42];
let chartInstance = null;

// Inisialisasi Chart.js
function initAdminChart() {
    const ctx = document.getElementById('adminChart').getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01. Gading & Clara', '02. Reyhan & Amanda', '03. Faris & Nabila'],
            datasets: [{
                label: 'Jumlah Suara',
                data: voteCounts,
                backgroundColor: ['#2563EB', '#F97316', '#8B5CF6'],
                borderRadius: 10,
                barThickness: 48
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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
}

// Pembaruan Angka Statistik Realtime
function updateStats() {
    const total = voteCounts.reduce((a, b) => a + b, 0);
    document.getElementById('statTotalSuara').innerText = total;
    document.getElementById('statPercent').innerText = ((total / 300) * 100).toFixed(1) + '%';
}