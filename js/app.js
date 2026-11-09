<<<<<<< HEAD
// =====================================================
//  APP.JS — Pixel Edition Logic
// =====================================================

// State: sudah voted atau belum (per session)
let hasVoted = false;
let votedPaslonId = null;

// ── Init ──────────────────────────────────────────────
=======
// Listener saat dokumen HTML selesai dimuat
>>>>>>> 028fe83395daad8ea19a3be4e2229b6f9c25f712
document.addEventListener('DOMContentLoaded', () => {
    initAdminChart();
});

<<<<<<< HEAD
// ── Tab Switcher ──────────────────────────────────────
function switchView(view) {
    const vVoting = document.getElementById('viewVoting');
    const vAdmin  = document.getElementById('viewAdmin');
    const tabVoting = document.getElementById('tabVoting');
    const tabAdmin  = document.getElementById('tabAdmin');
=======
// Switch Tab Antara Bilik Voting & Admin Dashboard
function switchView(view) {
    const vVoting = document.getElementById('viewVoting');
    const vAdmin = document.getElementById('viewAdmin');
    const tabVoting = document.getElementById('tabVoting');
    const tabAdmin = document.getElementById('tabAdmin');
>>>>>>> 028fe83395daad8ea19a3be4e2229b6f9c25f712

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
<<<<<<< HEAD
        if (chartInstance) {
            chartInstance.resize();
            chartInstance.update();
        }
    }
}

// ── MODAL VISI MISI ───────────────────────────────────
function openVisiModal(id) {
    const data = paslonDetails[id];
    if (!data) return;

    // Isi konten modal
    document.getElementById('modalNumber').textContent  = data.number;
    document.getElementById('modalTitle').textContent   = data.title;
    document.getElementById('modalTagline').textContent = `"${data.tagline}"`;
    document.getElementById('modalEmoji').textContent   = data.emoji;
    document.getElementById('modalDesc').textContent    = data.desc;
    document.getElementById('modalVisi').textContent    = data.visi;

    // Misi list
    const misiUl = document.getElementById('modalMisi');
    misiUl.innerHTML = data.misi.map((m, i) =>
        `<li style="display:flex;align-items:flex-start;gap:10px;padding:6px 0;border-bottom:2px dashed rgba(255,255,255,0.15)">
            <span style="font-family:'Press Start 2P',cursive;font-size:8px;color:#FFE033;min-width:20px;padding-top:2px">${String(i+1).padStart(2,'0')}</span>
            <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;color:rgba(255,255,255,0.9);line-height:1.5">${m}</span>
        </li>`
    ).join('');

    // Warna aksen sesuai paslon
    const accentEl = document.getElementById('modalAccentBar');
    if (accentEl) accentEl.style.background = `repeating-linear-gradient(90deg, ${data.color} 0px 8px, #FFE033 8px 16px)`;

    // Tombol vote di dalam modal
    const voteBtn = document.getElementById('modalVoteBtn');
    if (voteBtn) {
        voteBtn.setAttribute('data-paslon', id);
        if (hasVoted && votedPaslonId === id) {
            voteBtn.textContent = '✅ SUDAH DIPILIH';
            voteBtn.disabled = true;
            voteBtn.style.opacity = '0.6';
            voteBtn.style.cursor = 'not-allowed';
        } else if (hasVoted) {
            voteBtn.textContent = '🔒 SUDAH MEMILIH';
            voteBtn.disabled = true;
            voteBtn.style.opacity = '0.5';
            voteBtn.style.cursor = 'not-allowed';
        } else {
            voteBtn.textContent = `🗳️ VOTE ${data.number}`;
            voteBtn.disabled = false;
            voteBtn.style.opacity = '1';
            voteBtn.style.cursor = 'pointer';
        }
    }

    // Tampilkan modal
    const modal = document.getElementById('visiModal');
    const container = document.getElementById('modalContainer');
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
        container.classList.remove('scale-95');
    });
=======
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
>>>>>>> 028fe83395daad8ea19a3be4e2229b6f9c25f712
}

function closeVisiModal() {
    const modal = document.getElementById('visiModal');
    const container = document.getElementById('modalContainer');
    container.classList.add('scale-95');
    modal.classList.add('opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

<<<<<<< HEAD
// Klik overlay backdrop → tutup modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('visiModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeVisiModal();
        });
    }
    // Juga untuk modal konfirmasi vote
    const confirmModal = document.getElementById('voteConfirmModal');
    if (confirmModal) {
        confirmModal.addEventListener('click', (e) => {
            if (e.target === confirmModal) closeVoteConfirm();
        });
    }
});

// ── VOTE CONFIRM MODAL ────────────────────────────────
let pendingVoteId = null;

function handleVote(paslonId) {
    if (hasVoted) {
        showToast(`⚠️ ANDA SUDAH MEMILIH PASLON 0${votedPaslonId}!`);
        return;
    }
    openVoteConfirm(paslonId);
}

function openVoteConfirm(paslonId) {
    const data = paslonDetails[paslonId];
    if (!data) return;
    pendingVoteId = paslonId;

    // Isi konten modal konfirmasi
    document.getElementById('confirmPaslonName').textContent  = data.title;
    document.getElementById('confirmPaslonNum').textContent   = data.number;
    document.getElementById('confirmPaslonEmoji').textContent = data.emoji;
    document.getElementById('confirmTagline').textContent     = `"${data.tagline}"`;

    const bar = document.getElementById('confirmAccentBar');
    if (bar) bar.style.background = `repeating-linear-gradient(90deg, ${data.color} 0px 8px, #FFE033 8px 16px)`;

    const modal = document.getElementById('voteConfirmModal');
    const box   = document.getElementById('voteConfirmBox');
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
        box.classList.remove('scale-95');
    });
}

function closeVoteConfirm() {
    const modal = document.getElementById('voteConfirmModal');
    const box   = document.getElementById('voteConfirmBox');
    box.classList.add('scale-95');
    modal.classList.add('opacity-0');
    pendingVoteId = null;
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function confirmVote() {
    if (!pendingVoteId) return;
    const paslonId = pendingVoteId;
    const data = paslonDetails[paslonId];

    // Rekam vote
    hasVoted = true;
    votedPaslonId = paslonId;
    voteCounts[paslonId - 1]++;
    updateStats();

    if (chartInstance) {
        chartInstance.data.datasets[0].data = [...voteCounts];
        chartInstance.update();
    }

    // Update semua tombol vote di card
    updateVoteButtons();

    closeVoteConfirm();
    // Tutup juga visi modal kalau terbuka
    closeVisiModal();

    showToast(`🎉 SUARA UNTUK ${data.number} (${data.title}) TERSIMPAN!`);
}

// Update semua tombol vote visual
function updateVoteButtons() {
    document.querySelectorAll('.btn-vote').forEach((btn, idx) => {
        const pid = idx + 1;
        if (hasVoted && votedPaslonId === pid) {
            btn.textContent = '✅ DIPILIH';
            btn.style.background = '#4FC955';
            btn.style.cursor = 'default';
            btn.style.opacity = '1';
            btn.onclick = null;
        } else if (hasVoted) {
            btn.textContent = '🔒 TERKUNCI';
            btn.style.opacity = '0.45';
            btn.style.cursor = 'not-allowed';
            btn.onclick = null;
        }
    });
}

// Vote dari dalam modal visi misi
function voteFromModal() {
    const voteBtn = document.getElementById('modalVoteBtn');
    const paslonId = parseInt(voteBtn.getAttribute('data-paslon'));
    closeVisiModal();
    setTimeout(() => openVoteConfirm(paslonId), 350);
}

// ── SIMULASI VOTE (Admin) ─────────────────────────────
function simulateNewVote() {
    const rnd = Math.floor(Math.random() * 3);
    voteCounts[rnd]++;
    updateStats();
    if (chartInstance) {
        chartInstance.data.datasets[0].data = [...voteCounts];
        chartInstance.update();
    }
    showToast(`📊 SIMULASI: +1 SUARA MASUK UNTUK PASLON 0${rnd + 1}!`);
}

// ── TOAST ─────────────────────────────────────────────
function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    toast.classList.remove('translate-y-16', 'opacity-0');
    setTimeout(() => toast.classList.add('translate-y-16', 'opacity-0'), 3800);
}
=======
// Toast Notification
function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').innerText = msg;
    toast.classList.remove('translate-y-16', 'opacity-0');
    setTimeout(() => toast.classList.add('translate-y-16', 'opacity-0'), 3500);
}
>>>>>>> 028fe83395daad8ea19a3be4e2229b6f9c25f712
