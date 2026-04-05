// Guide Page - JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Load API mapping and render tables
    loadApiMapping().then(() => {
        initApiCategoryToggle();
        initApiSearch();
    });
});

/**
 * Load of-mapping.json and render API tables dynamically
 */
async function loadApiMapping() {
    const container = document.getElementById('api-tables');
    if (!container) return;

    // Detect language from URL path
    const path = window.location.pathname;
    const lang = path.includes('/ja/') ? 'ja' : path.includes('/ko/') ? 'ko' : 'en';
    const jsonPath = lang !== 'en' ? '../of-mapping.json' : 'of-mapping.json';

    try {
        const response = await fetch(jsonPath);
        const data = await response.json();
        renderApiTables(data, lang, container);
    } catch (error) {
        console.error('Failed to load of-mapping.json:', error);
        container.innerHTML = '<p>Failed to load API mapping data.</p>';
    }
}

/**
 * Render a list of categories as collapsible API tables
 */
function renderCategoryTables(categories, lang, colHeaders) {
    const notesLabel = { en: 'Notes', ja: '備考', ko: '비고' };
    return categories.map(cat => {
        const categoryName = lang === 'ja' ? cat.name_ja : lang === 'ko' ? (cat.name_ko || cat.name) : cat.name;
        const rows = cat.mappings.map(m => {
            const notes = lang === 'ja' ? (m.notes_ja || m.notes) : lang === 'ko' ? (m.notes_ko || m.notes) : m.notes;
            return `<tr><td><code>${escapeHtml(m.of)}</code></td><td><code>${escapeHtml(m.tc)}</code></td><td>${escapeHtml(notes)}</td></tr>`;
        }).join('\n');

        return `
            <div class="api-category">
                <h3 class="api-category-title" data-toggle="${cat.id}">
                    <span>${escapeHtml(categoryName)}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                </h3>
                <div class="api-table-wrapper" id="${cat.id}">
                    <table class="api-table">
                        <thead>
                            <tr>
                                <th>${colHeaders[0]}</th>
                                <th>${colHeaders[1]}</th>
                                <th>${notesLabel[lang] || 'Notes'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }).join('\n');
}

/**
 * Render API tables from JSON data
 */
function renderApiTables(data, lang, container) {
    const sectionLabels = {
        en: ['Functions', 'Types'],
        ja: ['関数', '型'],
        ko: ['함수', '타입']
    };
    const labels = sectionLabels[lang] || sectionLabels.en;

    let html = '';

    // Functions section
    if (data.functions && data.functions.length > 0) {
        html += `<h3 class="api-section-heading">${labels[0]}</h3>`;
        html += renderCategoryTables(data.functions, lang, ['openFrameworks', 'TrussC']);
    }

    // Types section
    if (data.types && data.types.length > 0) {
        html += `<h3 class="api-section-heading">${labels[1]}</h3>`;
        html += renderCategoryTables(data.types, lang, ['openFrameworks', 'TrussC']);
    }

    container.innerHTML = html;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/**
 * APIカテゴリの折りたたみ
 */
function initApiCategoryToggle() {
    const titles = document.querySelectorAll('.api-category-title');

    titles.forEach(title => {
        title.addEventListener('click', () => {
            const category = title.closest('.api-category');
            category.classList.toggle('collapsed');
        });
    });
}

/**
 * API検索機能
 */
function initApiSearch() {
    const searchInput = document.getElementById('api-search');
    if (!searchInput) return;

    const tables = document.querySelectorAll('.api-table');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();

        tables.forEach(table => {
            const rows = table.querySelectorAll('tbody tr');
            const category = table.closest('.api-category');
            let hasVisible = false;

            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                const matches = query === '' || text.includes(query);

                row.classList.toggle('hidden', !matches);
                row.classList.toggle('highlight', query !== '' && matches);

                if (matches) hasVisible = true;
            });

            // 検索中はカテゴリを展開
            if (query !== '') {
                category.classList.remove('collapsed');
            }

            // マッチがないカテゴリは非表示にしない（折りたたまれた状態で表示）
        });
    });

    // Escキーで検索クリア
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.blur();
        }
    });
}
