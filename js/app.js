// Listener saat dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    initAdminChart();
});

// Switch Tab Antara Bilik Voting & Admin Dashboard
function switchView(view) {
    const vVoting = document.getElementById('viewVoting');
    const vAdmin = document.getElementById('viewAdmin');
    const tabVoting = document.getElementById('tabVoting');
    const tabAdmin = document.getElementById('tabAdmin');

    if (view === 'voting') {
        vVoting.classList.remove('hidden');
        vAdmin.classList.add('hidden');
        tabVoting.classList.add('active');
        tabAdmin.classList.remove('active');
    } else {
        vVoting.classList.add('hidden');
        vAdmin.classList.remove('hidden');
        tabAdmin.classList.add('active');
        tabVoting.classList.remove('active');
        if (chartInstance) chartInstance.update();
    }
}

// Handling Pemilihan Suara (Voting)
function handleVote(paslonId) {
    const p = paslonDetails[paslonId];
    if (confirm(`Konfirmasi Pilihan:\nApakah Anda yakin ingin memilih Paslon 0${paslonId} (${p.title})?`)) {
        voteCounts[paslonId - 1]++;
        updateStats();
        showToast(`Suara Anda untuk Paslon 0${paslonId} (${p.title}) berhasil tersimpan!`);
    }
}

// Modal Visi & Misi Detail
function openVisiModal(id) {
    const data = paslonDetails[id];
    document.getElementById('modalNumber').innerText = data.number;
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalTagline').innerText = `"${data.tagline}"`;
    document.getElementById('modalDesc').innerText = data.desc;
    document.getElementById('modalVisi').innerText = data.visi;

    const misiUl = document.getElementById('modalMisi');
    misiUl.innerHTML = data.misi.map(m => `<li>${m}</li>`).join('');

    const modal = document.getElementById('visiModal');
    const container = document.getElementById('modalContainer');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        container.classList.remove('scale-95');
    }, 10);
}

function closeVisiModal() {
    const modal = document.getElementById('visiModal');
    const container = document.getElementById('modalContainer');
    container.classList.add('scale-95');
    modal.classList.add('opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

// Toast Notification
function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').innerText = msg;
    toast.classList.remove('translate-y-16', 'opacity-0');
    setTimeout(() => toast.classList.add('translate-y-16', 'opacity-0'), 3500);
}