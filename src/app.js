/* ============================================================
   Silo — Local .silo File CRM & Network Mapper
   ============================================================ */

// === SVG Icons (inline for use in tables and vis.js) ===
const SVG_ICONS = {
  eye: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"/></svg>',
  pencil: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"/></svg>',
  trash: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"/></svg>',
};

// SVG data URIs for entity type icons in the map (grey, semi-transparent)
const ENTITY_TYPE_SVG_SOURCES = {
  person: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="rgba(255,255,255,0.55)" viewBox="-80 -80 416 416"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"/></svg>',
  organization: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="rgba(255,255,255,0.55)" viewBox="-80 -80 416 416"><path d="M232,224H208V32h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8V224H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM64,32H192V224H160V184a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v40H64Zm80,192H112V192h32ZM88,64a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,64ZM88,104a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,104Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,104ZM88,144a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,144Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,144Z"/></svg>',
  program: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="rgba(255,255,255,0.55)" viewBox="-80 -80 416 416"><path d="M215.52,213.26,164.51,73l9.09-25H184a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h4.58L32.48,213.26a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,40,224a8,8,0,0,0,7.52-5.27L57.24,192h47l-7.74,21.26a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,104,224a8,8,0,0,0,7.52-5.27L130,168H182l18.45,50.73A8,8,0,0,0,208,224a8.14,8.14,0,0,0,2.73-.48A8,8,0,0,0,215.52,213.26Zm-88-85.26h-47L92.15,96h47Zm29.09-80L144.94,80H98L109.6,48ZM63.06,176,74.7,144h47L110,176Zm72.72-24L156,96.41,176.21,152Z"/></svg>',
  investor: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="rgba(255,255,255,0.55)" viewBox="-80 -80 416 416"><path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"/></svg>',
  advisor: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="rgba(255,255,255,0.55)" viewBox="-80 -80 416 416"><path d="M188,88a27.75,27.75,0,0,0-12,2.71V60a28,28,0,0,0-41.36-24.6A28,28,0,0,0,80,44v6.71A27.75,27.75,0,0,0,68,48,28,28,0,0,0,40,76v76a88,88,0,0,0,176,0V116A28,28,0,0,0,188,88Zm12,64a72,72,0,0,1-144,0V76a12,12,0,0,1,24,0v44a8,8,0,0,0,16,0V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V60a12,12,0,0,1,24,0v68.67A48.08,48.08,0,0,0,120,176a8,8,0,0,0,16,0,32,32,0,0,1,32-32,8,8,0,0,0,8-8V116a12,12,0,0,1,24,0Z"/></svg>',
};

// Pre-compute data URIs for vis.js
const ENTITY_TYPE_ICONS = {};
for (const [type, svg] of Object.entries(ENTITY_TYPE_SVG_SOURCES)) {
  ENTITY_TYPE_ICONS[type] = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// === App State ===
const AppState = {
  filePath: null,
  fileName: '',
  entities: [],
  tasks: [],
  config: null,
  dirty: false,
  activeTab: 'entities',
  sort: { entities: { key: 'name', asc: true }, tasks: { key: 'title', asc: true } },
  filters: { entities: {}, tasks: {} },
};

const DEFAULT_CONFIG = {
  entityTypes: ['person', 'organization', 'program', 'investor', 'advisor'],
  taskTypes: ['funding_application', 'deadline', 'milestone', 'followup', 'deliverable'],
  entityStatuses: ['active', 'inactive', 'prospective'],
  taskStatuses: ['not_started', 'in_progress', 'blocked', 'completed', 'missed'],
  customerSegments: [],
};

// === Schemas ===
const SCHEMAS = {
  entity: {
    label: 'Entity',
    fields: [
      { key: 'name', label: 'Name', type: 'text', required: true },
      { key: 'type', label: 'Type', type: 'enum', enumKey: 'entityTypes' },
      { key: 'parent_id', label: 'Parent Entity', type: 'ref', refType: 'entities', refLabel: 'name' },
      { key: 'email', label: 'Email', type: 'email' },
      { key: 'phone', label: 'Phone', type: 'tel' },
      { key: 'role', label: 'Role / Title', type: 'text' },
      { key: 'url', label: 'URL', type: 'url' },
      { key: 'status', label: 'Status', type: 'enum', enumKey: 'entityStatuses' },
      { key: 'customer_segments', label: 'Customer Segments', type: 'segments' },
      { key: 'notes', label: 'Notes', type: 'textarea' },
      { key: 'tags', label: 'Tags', type: 'text', placeholder: 'comma-separated' },
    ],
    columns: ['name', 'type', 'role', 'status', 'customer_segments', 'email'],
    idPrefix: 'e',
  },
  task: {
    label: 'Task',
    fields: [
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'type', label: 'Type', type: 'enum', enumKey: 'taskTypes' },
      { key: 'entity_id', label: 'Linked Entity', type: 'ref', refType: 'entities', refLabel: 'name' },
      { key: 'status', label: 'Status', type: 'enum', enumKey: 'taskStatuses' },
      { key: 'deadline', label: 'Deadline', type: 'date' },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'url', label: 'URL', type: 'url' },
      { key: 'amount', label: 'Amount ($)', type: 'number' },
      { key: 'customer_segments', label: 'Customer Segments', type: 'segments' },
      { key: 'tags', label: 'Tags', type: 'text', placeholder: 'comma-separated' },
    ],
    columns: ['title', 'type', 'entity_id', 'status', 'customer_segments', 'deadline', 'amount'],
    idPrefix: 't',
  },
};

const CSV_FIELDS = {
  entities: ['id', 'name', 'type', 'parent_id', 'email', 'phone', 'role', 'url', 'status', 'customer_segments', 'notes', 'tags', 'created_at', 'updated_at'],
  tasks: ['id', 'title', 'type', 'entity_id', 'status', 'deadline', 'description', 'url', 'amount', 'customer_segments', 'tags', 'created_at', 'updated_at'],
};

// === File I/O ===
function buildSiloData() {
  return {
    _silo: true,
    name: AppState.fileName,
    entities: AppState.entities,
    tasks: AppState.tasks,
    config: AppState.config,
  };
}

function loadSiloData(data) {
  if (!data._silo) throw new Error('Not a valid .silo file');
  AppState.entities = data.entities || [];
  AppState.tasks = data.tasks || [];
  AppState.config = data.config || structuredClone(DEFAULT_CONFIG);
  for (const key of Object.keys(DEFAULT_CONFIG)) {
    if (!AppState.config[key]) {
      AppState.config[key] = Array.isArray(DEFAULT_CONFIG[key])
        ? [...DEFAULT_CONFIG[key]]
        : structuredClone(DEFAULT_CONFIG[key]);
    }
  }
  AppState.dirty = false;
  updateUI();
}

function resetProject() {
  AppState.entities = [];
  AppState.tasks = [];
  AppState.config = structuredClone(DEFAULT_CONFIG);
  AppState.dirty = false;
  updateUI();
}

function updateUI() {
  updateTitle();
  updateDirtyIndicator();
  populateFilters();
  renderCurrentTable();
}

function updateTitle() {
  const label = document.getElementById('project-name');
  label.textContent = AppState.fileName || '';
  const dirty = AppState.dirty ? ' *' : '';
  document.title = AppState.fileName ? `Silo — ${AppState.fileName}${dirty}` : 'Silo — Network & Task Tracker';
}

async function doNew() {
  if (AppState.dirty && !confirm('You have unsaved changes. Create a new project anyway?')) return;
  try {
    const result = await window.silo.newFile();
    if (result.cancelled) return;
    if (result.error) throw new Error(result.error);

    AppState.filePath = result.path;
    AppState.fileName = result.path.split('/').pop().replace(/\.silo$/i, '');
    AppState.entities = [];
    AppState.tasks = [];
    AppState.config = structuredClone(DEFAULT_CONFIG);
    AppState.dirty = false;

    const saveResult = await window.silo.saveFile({ filePath: AppState.filePath, data: buildSiloData() });
    if (saveResult.error) throw new Error(saveResult.error);
    updateUI();
  } catch (err) {
    alert('Error: ' + err.message);
  }
}

async function doOpen() {
  if (AppState.dirty && !confirm('You have unsaved changes. Open a different project?')) return;
  try {
    const result = await window.silo.openFile();
    if (result.cancelled) return;
    if (result.error) throw new Error(result.error);

    AppState.filePath = result.path;
    AppState.fileName = result.path.split('/').pop().replace(/\.silo$/i, '');
    loadSiloData(result.content);
  } catch (err) {
    alert('Error: ' + err.message);
  }
}

async function doSave() {
  if (!AppState.filePath) return doSaveAs();
  try {
    const result = await window.silo.saveFile({ filePath: AppState.filePath, data: buildSiloData() });
    if (result.error) throw new Error(result.error);
    AppState.dirty = false;
    updateDirtyIndicator();
  } catch (err) {
    alert('Save failed: ' + err.message);
  }
}

async function doSaveAs() {
  try {
    const result = await window.silo.saveAsFile({
      suggestedName: (AppState.fileName || 'Untitled') + '.silo',
      data: buildSiloData(),
    });
    if (result.cancelled) return;
    if (result.error) throw new Error(result.error);

    AppState.filePath = result.path;
    AppState.fileName = result.path.split('/').pop().replace(/\.silo$/i, '');
    AppState.dirty = false;
    updateDirtyIndicator();
    updateTitle();
  } catch (err) {
    alert('Error: ' + err.message);
  }
}

async function doExportExcel() {
  try {
    const result = await window.silo.exportExcel({
      suggestedName: (AppState.fileName || 'Silo-Export') + '.xlsx',
      entities: AppState.entities,
      tasks: AppState.tasks,
    });
    if (result.cancelled) return;
    if (result.error) throw new Error(result.error);
  } catch (err) {
    alert('Export error: ' + err.message);
  }
}

// === Helpers ===
function generateId(prefix) {
  return `${prefix}_${Date.now()}`;
}

function markDirty() {
  AppState.dirty = true;
  updateDirtyIndicator();
}

function updateDirtyIndicator() {
  updateTitle();
}

function formatLabel(str) {
  return str.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function lookupName(collection, id, labelField) {
  const item = AppState[collection]?.find(r => r.id === id);
  return item ? item[labelField] : id || '';
}

function getEntityName(id) { return lookupName('entities', id, 'name'); }

function getSegmentById(id) {
  return (AppState.config.customerSegments || []).find(s => s.id === id);
}

function resolveDisplayValue(field, value, record) {
  if (!value) return '';
  if (field.type === 'enum' || field.type === 'select') return formatLabel(value);
  if (field.type === 'ref') return lookupName(field.refType, value, field.refLabel);
  if (field.type === 'segments') {
    const ids = Array.isArray(value) ? value : [];
    return ids.map(id => {
      const seg = getSegmentById(id);
      return seg ? seg.name : id;
    }).join(', ');
  }
  return value;
}

// === Tab Switching ===
function switchTab(tab) {
  AppState.activeTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.id === `panel-${tab}`));

  if (tab === 'entities' || tab === 'tasks') {
    renderCurrentTable();
  } else if (tab === 'map') {
    renderMap();
  } else if (tab === 'timeline') {
    renderTimeline();
  }
}

// === Filter Population ===
function populateFilters() {
  const cfg = AppState.config;
  if (!cfg) return;
  fillFilterSelect('[data-filter="entities-type"]', cfg.entityTypes);
  fillFilterSelect('[data-filter="entities-status"]', cfg.entityStatuses);
  fillFilterSelect('[data-filter="tasks-type"]', cfg.taskTypes);
  fillFilterSelect('[data-filter="tasks-status"]', cfg.taskStatuses);
}

function fillFilterSelect(selector, options) {
  const el = document.querySelector(selector);
  if (!el) return;
  const firstOpt = el.options[0].textContent;
  el.innerHTML = `<option value="">${firstOpt}</option>`;
  (options || []).forEach(opt => {
    const o = document.createElement('option');
    o.value = opt;
    o.textContent = formatLabel(opt);
    el.appendChild(o);
  });
}

// === Table Rendering ===
function renderCurrentTable() {
  const tab = AppState.activeTab;
  if (tab === 'entities') renderTable('entities', 'entity', 'table-entities');
  else if (tab === 'tasks') renderTable('tasks', 'task', 'table-tasks');
}

function renderSegmentBadges(segmentIds) {
  if (!segmentIds || !Array.isArray(segmentIds) || segmentIds.length === 0) {
    return '<span class="badge segment-badge" style="background:#e2e8f0;color:#475569;">None</span>';
  }
  return segmentIds.map(id => {
    const seg = getSegmentById(id);
    if (!seg) return '';
    const textColor = getContrastColor(seg.color);
    return `<span class="badge segment-badge" style="background:${seg.color};color:${textColor};">${seg.name}</span>`;
  }).join(' ');
}

function getContrastColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.5 ? '#1e293b' : '#ffffff';
}

function renderTable(collection, schemaKey, containerId) {
  const schema = SCHEMAS[schemaKey];
  const container = document.getElementById(containerId);
  let data = [...AppState[collection]];

  // Apply search filter
  const searchEl = document.querySelector(`[data-search="${collection}"]`);
  const searchTerm = searchEl ? searchEl.value.toLowerCase() : '';
  if (searchTerm) {
    data = data.filter(row =>
      Object.values(row).some(v => v && String(v).toLowerCase().includes(searchTerm))
    );
  }

  // Apply dropdown filters
  document.querySelectorAll(`.filter-select[data-filter^="${collection}-"]`).forEach(sel => {
    if (sel.value) {
      const field = sel.dataset.filter.replace(`${collection}-`, '');
      data = data.filter(row => row[field] === sel.value);
    }
  });

  // Sort
  const sortInfo = AppState.sort[collection];
  if (sortInfo && sortInfo.key) {
    data.sort((a, b) => {
      const va = String(a[sortInfo.key] || '').toLowerCase();
      const vb = String(b[sortInfo.key] || '').toLowerCase();
      return sortInfo.asc ? va.localeCompare(vb) : vb.localeCompare(va);
    });
  }

  if (data.length === 0) {
    container.innerHTML = `<div class="empty-state">No ${schema.label.toLowerCase()}s yet. Click "Add ${schema.label}" to get started.</div>`;
    return;
  }

  const cols = schema.columns;
  let html = '<table class="data-table"><thead><tr>';
  html += '<th class="col-actions"></th>';
  cols.forEach(col => {
    const arrow = sortInfo && sortInfo.key === col ? (sortInfo.asc ? ' ▲' : ' ▼') : '';
    const label = col === 'customer_segments' ? 'Segments' : formatLabel(col);
    html += `<th data-sort="${col}">${label}<span class="sort-arrow">${arrow}</span></th>`;
  });
  html += '</tr></thead><tbody>';

  data.forEach(row => {
    const url = row.url || '';
    const clickable = url ? 'data-url="' + url.replace(/"/g, '&quot;') + '"' : '';
    html += `<tr class="data-row ${url ? 'has-url' : ''}" data-schema="${schemaKey}" data-id="${row.id}" ${clickable}>`;
    html += `<td class="col-actions"><div class="row-actions">
      <button class="btn-icon" title="View" onclick="event.stopPropagation(); openViewForm('${schemaKey}', '${row.id}')">${SVG_ICONS.eye}</button>
      <button class="btn-icon" title="Edit" onclick="event.stopPropagation(); openEditForm('${schemaKey}', '${row.id}')">${SVG_ICONS.pencil}</button>
      <button class="btn-icon" title="Delete" onclick="event.stopPropagation(); confirmDelete('${collection}', '${row.id}')">${SVG_ICONS.trash}</button>
    </div></td>`;
    cols.forEach(col => {
      let val = row[col] || '';
      if ((col === 'entity_id' || col === 'parent_id') && row[col]) {
        val = getEntityName(row[col]);
      }
      if (col === 'customer_segments') {
        val = renderSegmentBadges(row.customer_segments);
      } else if (col === 'status') {
        val = `<span class="badge badge-status-${row[col]}">${formatLabel(row[col] || '')}</span>`;
      } else if (col === 'type') {
        val = formatLabel(val || '');
      } else if (col === 'amount' && row[col]) {
        val = `$${Number(row[col]).toLocaleString()}`;
      }
      html += `<td>${val || '—'}</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody></table>';
  container.innerHTML = html;

  // Row click → open URL in Firefox
  container.querySelectorAll('.data-row').forEach(tr => {
    tr.addEventListener('click', (e) => {
      if (e.target.closest('.row-actions')) return;
      const url = tr.dataset.url;
      if (url) {
        window.silo.openExternal(url);
      }
    });
  });

  // Sort click handlers
  container.querySelectorAll('th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const key = th.dataset.sort;
      if (sortInfo.key === key) sortInfo.asc = !sortInfo.asc;
      else { sortInfo.key = key; sortInfo.asc = true; }
      renderTable(collection, schemaKey, containerId);
    });
  });
}

// === View Form (read-only) ===
let currentViewContext = null;

function openViewForm(schemaKey, id) {
  const collectionMap = { entity: 'entities', task: 'tasks' };
  const collection = collectionMap[schemaKey];
  const record = AppState[collection].find(r => r.id === id);
  if (!record) return;

  currentViewContext = { schemaKey, id };
  const schema = SCHEMAS[schemaKey];
  document.getElementById('view-title').textContent = `${schema.label}: ${record.name || record.title || ''}`;
  document.querySelector('#modal-view .modal-header').dataset.theme = schemaKey;

  const container = document.getElementById('view-fields');
  container.innerHTML = '';

  schema.fields.forEach(field => {
    const value = record[field.key];
    if (!value || (Array.isArray(value) && value.length === 0)) return;
    const display = resolveDisplayValue(field, value, record);
    if (!display) return;

    const row = document.createElement('div');
    row.className = 'view-row';
    row.innerHTML = `<span class="view-label">${field.label}</span><span class="view-value">${display}</span>`;
    container.appendChild(row);
  });

  if (record.created_at) {
    const row = document.createElement('div');
    row.className = 'view-row view-row-meta';
    row.innerHTML = `<span class="view-label">Created</span><span class="view-value">${new Date(record.created_at).toLocaleString()}</span>`;
    container.appendChild(row);
  }
  if (record.updated_at) {
    const row = document.createElement('div');
    row.className = 'view-row view-row-meta';
    row.innerHTML = `<span class="view-label">Updated</span><span class="view-value">${new Date(record.updated_at).toLocaleString()}</span>`;
    container.appendChild(row);
  }

  document.getElementById('modal-view').showModal();
}

function viewToEdit() {
  if (!currentViewContext) return;
  document.getElementById('modal-view').close();
  openEditForm(currentViewContext.schemaKey, currentViewContext.id);
}

// === Form Rendering (edit/add) ===
let currentFormContext = null;

function openAddForm(schemaKey) {
  currentFormContext = { schemaKey, record: null, mode: 'add' };
  const schema = SCHEMAS[schemaKey];
  document.getElementById('modal-title').textContent = `Add ${schema.label}`;
  document.getElementById('form-actions').style.display = '';
  document.querySelector('#modal-form .modal-header').dataset.theme = schemaKey;
  renderFormFields(schema, {});
  document.getElementById('modal-form').showModal();
}

function openEditForm(schemaKey, id) {
  const collectionMap = { entity: 'entities', task: 'tasks' };
  const collection = collectionMap[schemaKey];
  const record = AppState[collection].find(r => r.id === id);
  if (!record) return;

  currentFormContext = { schemaKey, record, mode: 'edit' };
  const schema = SCHEMAS[schemaKey];
  document.getElementById('modal-title').textContent = `Edit ${schema.label}`;
  document.getElementById('form-actions').style.display = '';
  document.querySelector('#modal-form .modal-header').dataset.theme = schemaKey;
  renderFormFields(schema, record);
  document.getElementById('modal-form').showModal();
}

function renderFormFields(schema, record) {
  const container = document.getElementById('form-fields');
  container.innerHTML = '';

  schema.fields.forEach(field => {
    const group = document.createElement('div');
    group.className = 'form-group';

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', `field-${field.key}`);
    group.appendChild(label);

    const value = record[field.key] || '';

    if (field.type === 'enum') {
      renderEnumField(group, field, value);
    } else if (field.type === 'ref') {
      renderRefField(group, field, value);
    } else if (field.type === 'segments') {
      renderSegmentsField(group, field, value);
    } else if (field.type === 'textarea') {
      const ta = document.createElement('textarea');
      ta.id = `field-${field.key}`;
      ta.name = field.key;
      ta.value = value;
      group.appendChild(ta);
    } else {
      const input = document.createElement('input');
      input.type = field.type || 'text';
      input.id = `field-${field.key}`;
      input.name = field.key;
      input.value = value;
      if (field.required) input.required = true;
      if (field.placeholder) input.placeholder = field.placeholder;
      group.appendChild(input);
    }

    container.appendChild(group);
  });
}

function renderEnumField(group, field, value) {
  const wrapper = document.createElement('div');
  wrapper.className = 'enum-wrapper';

  const sel = document.createElement('select');
  sel.id = `field-${field.key}`;
  sel.name = field.key;

  const options = AppState.config[field.enumKey] || [];
  sel.innerHTML = `<option value="">— Select —</option>`;
  options.forEach(opt => {
    sel.innerHTML += `<option value="${opt}" ${value === opt ? 'selected' : ''}>${formatLabel(opt)}</option>`;
  });
  sel.innerHTML += `<option value="__add_new__">+ Add new...</option>`;

  wrapper.appendChild(sel);
  group.appendChild(wrapper);

  const addRow = document.createElement('div');
  addRow.className = 'enum-add-input';
  addRow.style.display = 'none';
  addRow.innerHTML = `<input type="text" placeholder="New option..."><button type="button" class="btn btn-small btn-primary">Add</button><button type="button" class="btn btn-small btn-secondary">Cancel</button>`;
  group.appendChild(addRow);

  sel.addEventListener('change', () => {
    if (sel.value === '__add_new__') {
      addRow.style.display = 'flex';
      addRow.querySelector('input').focus();
      sel.value = value || '';
    }
  });

  const addBtn = addRow.querySelector('.btn-primary');
  const cancelBtn = addRow.querySelector('.btn-secondary');
  const addInput = addRow.querySelector('input');

  addBtn.addEventListener('click', () => {
    const newVal = addInput.value.trim().toLowerCase().replace(/\s+/g, '_');
    if (newVal && !options.includes(newVal)) {
      AppState.config[field.enumKey].push(newVal);
      markDirty();
    }
    if (newVal) {
      const opt = document.createElement('option');
      opt.value = newVal;
      opt.textContent = formatLabel(newVal);
      opt.selected = true;
      sel.insertBefore(opt, sel.lastElementChild);
    }
    addRow.style.display = 'none';
    addInput.value = '';
  });

  cancelBtn.addEventListener('click', () => {
    addRow.style.display = 'none';
    addInput.value = '';
  });

  addInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); addBtn.click(); }
    if (e.key === 'Escape') cancelBtn.click();
  });
}

function renderRefField(group, field, value) {
  const sel = document.createElement('select');
  sel.id = `field-${field.key}`;
  sel.name = field.key;
  sel.innerHTML = `<option value="">— None —</option>`;

  const items = AppState[field.refType] || [];
  items.forEach(item => {
    sel.innerHTML += `<option value="${item.id}" ${value === item.id ? 'selected' : ''}>${item[field.refLabel]}</option>`;
  });
  group.appendChild(sel);
}

function renderSegmentsField(group, field, value) {
  const selectedIds = Array.isArray(value) ? [...value] : [];
  const segments = AppState.config.customerSegments || [];

  const wrapper = document.createElement('div');
  wrapper.className = 'segments-field-wrapper';
  wrapper.id = `field-${field.key}`;

  // Render checkboxes for each segment
  if (segments.length === 0) {
    wrapper.innerHTML = '<span class="text-muted">No segments defined. </span>';
  } else {
    segments.forEach(seg => {
      const checkbox = document.createElement('label');
      checkbox.className = 'segment-checkbox';
      const swatch = `<span class="segment-swatch" style="background:${seg.color};"></span>`;
      checkbox.innerHTML = `<input type="checkbox" value="${seg.id}" ${selectedIds.includes(seg.id) ? 'checked' : ''}> ${swatch} ${seg.name}`;
      wrapper.appendChild(checkbox);
    });
  }

  // Manage segments button
  const manageBtn = document.createElement('button');
  manageBtn.type = 'button';
  manageBtn.className = 'btn btn-secondary btn-add';
  manageBtn.textContent = 'Manage Segments';
  manageBtn.addEventListener('click', () => openSegmentManager());
  wrapper.appendChild(manageBtn);

  group.appendChild(wrapper);
}

function collectFormData(schemaKey) {
  const schema = SCHEMAS[schemaKey];
  const data = {};
  schema.fields.forEach(field => {
    if (field.type === 'segments') {
      const wrapper = document.getElementById(`field-${field.key}`);
      if (wrapper) {
        const checked = wrapper.querySelectorAll('input[type="checkbox"]:checked');
        data[field.key] = Array.from(checked).map(cb => cb.value);
      } else {
        data[field.key] = [];
      }
    } else {
      const el = document.getElementById(`field-${field.key}`);
      if (el) data[field.key] = el.value.trim();
    }
  });
  return data;
}

function handleFormSubmit(e) {
  e.preventDefault();
  if (!currentFormContext) return;

  const { schemaKey, record, mode } = currentFormContext;
  const collectionMap = { entity: 'entities', task: 'tasks' };
  const collection = collectionMap[schemaKey];
  const schema = SCHEMAS[schemaKey];
  const data = collectFormData(schemaKey);
  const now = new Date().toISOString();

  if (mode === 'add') {
    data.id = generateId(schema.idPrefix);
    data.created_at = now;
    if (CSV_FIELDS[collection].includes('updated_at')) data.updated_at = now;
    AppState[collection].push(data);
  } else {
    const idx = AppState[collection].findIndex(r => r.id === record.id);
    if (idx !== -1) {
      data.id = record.id;
      data.created_at = record.created_at;
      if (CSV_FIELDS[collection].includes('updated_at')) data.updated_at = now;
      AppState[collection][idx] = data;
    }
  }

  markDirty();
  document.getElementById('modal-form').close();
  currentFormContext = null;
  renderCurrentTable();
  populateFilters();
}

// === Customer Segment Manager ===
function openSegmentManager() {
  renderSegmentsList();
  document.getElementById('modal-segments').showModal();
}

function renderSegmentsList() {
  const container = document.getElementById('segments-list');
  const segments = AppState.config.customerSegments || [];

  if (segments.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:16px;">No customer segments defined yet.</div>';
    return;
  }

  let html = '';
  segments.forEach(seg => {
    html += `<div class="segment-row">
      <span class="segment-swatch" style="background:${seg.color};"></span>
      <span class="segment-name">${seg.name}</span>
      <button class="btn-icon" title="Delete" onclick="deleteSegment('${seg.id}')">${SVG_ICONS.trash}</button>
    </div>`;
  });
  container.innerHTML = html;
}

function addSegment() {
  const nameInput = document.getElementById('segment-new-name');
  const colorInput = document.getElementById('segment-new-color');
  const name = nameInput.value.trim();
  if (!name) return;

  if (!AppState.config.customerSegments) AppState.config.customerSegments = [];
  AppState.config.customerSegments.push({
    id: 'seg_' + Date.now(),
    name: name,
    color: colorInput.value,
  });

  nameInput.value = '';
  markDirty();
  renderSegmentsList();
}

function deleteSegment(segId) {
  AppState.config.customerSegments = (AppState.config.customerSegments || []).filter(s => s.id !== segId);
  // Remove from all entities and tasks
  AppState.entities.forEach(e => {
    if (Array.isArray(e.customer_segments)) {
      e.customer_segments = e.customer_segments.filter(id => id !== segId);
    }
  });
  AppState.tasks.forEach(t => {
    if (Array.isArray(t.customer_segments)) {
      t.customer_segments = t.customer_segments.filter(id => id !== segId);
    }
  });
  markDirty();
  renderSegmentsList();
}

// === Delete ===
let pendingDelete = null;

function confirmDelete(collection, id) {
  pendingDelete = { collection, id };
  document.getElementById('modal-confirm').showModal();
}

function executeDelete() {
  if (!pendingDelete) return;
  const { collection, id } = pendingDelete;
  AppState[collection] = AppState[collection].filter(r => r.id !== id);

  if (collection === 'entities') {
    AppState.tasks.forEach(t => { if (t.entity_id === id) t.entity_id = ''; });
    AppState.entities.forEach(e => { if (e.parent_id === id) e.parent_id = ''; });
  }

  markDirty();
  pendingDelete = null;
  document.getElementById('modal-confirm').close();
  renderCurrentTable();
}

// === Map (merged Network + Task Map) ===
function renderMap() {
  const container = document.getElementById('map-container');
  if (AppState.entities.length === 0 && AppState.tasks.length === 0) {
    container.innerHTML = '<div class="empty-state">Add entities and tasks to see the map.</div>';
    return;
  }

  const now = new Date();
  const sevenDays = 7 * 24 * 60 * 60 * 1000;

  // Entity nodes — circles with SVG images
  const entityNodes = AppState.entities.map(e => {
    // Color from first customer segment, or grey
    let color = '#94a3b8';
    const segs = Array.isArray(e.customer_segments) ? e.customer_segments : [];
    if (segs.length > 0) {
      const seg = getSegmentById(segs[0]);
      if (seg) color = seg.color;
    }

    const icon = ENTITY_TYPE_ICONS[e.type];

    return {
      id: e.id,
      label: e.name,
      shape: icon ? 'circularImage' : 'dot',
      image: icon || undefined,
      color: { background: color, border: color, highlight: { background: color, border: '#252627' } },
      font: { color: '#252627', size: 12 },
      size: 18,
      title: `${formatLabel(e.type || 'entity')} — ${formatLabel(e.status || 'unknown')}`,
    };
  });

  // Task nodes — boxes with deadline-based coloring
  const taskStatusColors = {
    not_started: '#64748b', in_progress: '#f59e0b', blocked: '#ef4444',
    completed: '#16a34a', missed: '#991b1b',
  };

  const taskNodes = AppState.tasks.map(t => {
    let color = taskStatusColors[t.status] || '#8b5cf6';
    if (t.deadline) {
      const dl = new Date(t.deadline);
      if (dl < now && t.status !== 'completed') color = '#991b1b';
      else if (dl - now < sevenDays && t.status !== 'completed') color = '#ef4444';
    }
    return {
      id: t.id,
      label: t.title + (t.deadline ? `\n${t.deadline}` : ''),
      shape: 'box',
      color: { background: color, border: color },
      font: { color: '#fff', size: 12, multi: true },
      title: `${formatLabel(t.type || 'task')} — ${formatLabel(t.status || 'unknown')}`,
    };
  });

  // Edges: entity parent relationships + task-entity links
  const edges = [];

  AppState.entities
    .filter(e => e.parent_id)
    .forEach(e => {
      edges.push({ from: e.parent_id, to: e.id, arrows: 'to', color: { color: '#94a3b8' } });
    });

  AppState.tasks
    .filter(t => t.entity_id)
    .forEach(t => {
      edges.push({ from: t.entity_id, to: t.id, color: { color: '#c4b5fd' }, arrows: 'to', dashes: true });
    });

  const data = {
    nodes: new vis.DataSet([...entityNodes, ...taskNodes]),
    edges: new vis.DataSet(edges),
  };

  const options = {
    physics: { stabilization: { iterations: 100 }, barnesHut: { gravitationalConstant: -3000 } },
    interaction: { hover: true, tooltipDelay: 200 },
    layout: { improvedLayout: true },
  };

  const network = new vis.Network(container, data, options);
  network.on('click', params => {
    if (params.nodes.length > 0) {
      const nodeId = params.nodes[0];
      if (nodeId.startsWith('e_')) openViewForm('entity', nodeId);
      else if (nodeId.startsWith('t_')) openViewForm('task', nodeId);
    }
  });
}

// === Timeline (task deadlines only) ===
function renderTimeline() {
  const container = document.getElementById('timeline-container');

  const items = [];

  AppState.tasks.forEach(t => {
    if (!t.deadline) return;
    const entityLabel = t.entity_id ? getEntityName(t.entity_id) : '';
    items.push({
      date: t.deadline,
      time: '',
      title: t.title,
      type: 'deadline',
      meta: `${formatLabel(t.type || 'task')}${entityLabel ? ' — ' + entityLabel : ''} — ${formatLabel(t.status || '')}`,
      notes: t.description || '',
    });
  });

  if (items.length === 0) {
    container.innerHTML = '<div class="empty-state">Add tasks with deadlines to see the timeline.</div>';
    return;
  }

  items.sort((a, b) => a.date.localeCompare(b.date));

  const months = {};
  const todayStr = new Date().toISOString().split('T')[0];
  let todayInserted = false;

  items.forEach(item => {
    const monthKey = item.date.substring(0, 7);
    if (!months[monthKey]) months[monthKey] = [];
    months[monthKey].push(item);
  });

  let html = '';
  for (const [monthKey, monthItems] of Object.entries(months)) {
    const monthDate = new Date(monthKey + '-01');
    const monthLabel = monthDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    html += `<div class="timeline-month"><div class="timeline-month-label">${monthLabel}</div>`;

    monthItems.forEach(item => {
      if (!todayInserted && item.date >= todayStr) {
        html += `<div class="timeline-today-marker" id="timeline-today">Today — ${todayStr}</div>`;
        todayInserted = true;
      }

      const day = new Date(item.date).getDate();
      html += `<div class="timeline-item">
        <div class="timeline-date">${day}</div>
        <div class="timeline-dot dot-deadline"></div>
        <div class="timeline-content">
          <div class="title">${item.title}</div>
          <div class="meta">${item.meta}</div>
          ${item.notes ? `<div class="notes">${item.notes}</div>` : ''}
        </div>
      </div>`;
    });

    html += '</div>';
  }

  if (!todayInserted) {
    html += `<div class="timeline-today-marker" id="timeline-today">Today — ${todayStr}</div>`;
  }

  container.innerHTML = html;
}

function scrollTimelineToToday() {
  const marker = document.getElementById('timeline-today');
  if (marker) marker.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// === Initialization ===
function init() {
  // Electron menu actions
  window.silo.onMenuAction((action) => {
    if (action === 'new') doNew();
    else if (action === 'open') doOpen();
    else if (action === 'save') doSave();
    else if (action === 'save-as') doSaveAs();
    else if (action === 'export-excel') doExportExcel();
  });

  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Add buttons
  document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', () => openAddForm(btn.dataset.add));
  });

  // Form submit
  document.getElementById('record-form').addEventListener('submit', handleFormSubmit);

  // Modal close/cancel
  document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal-form').close();
  });
  document.getElementById('btn-cancel').addEventListener('click', () => {
    document.getElementById('modal-form').close();
  });

  // View modal
  document.getElementById('view-close').addEventListener('click', () => {
    document.getElementById('modal-view').close();
  });
  document.getElementById('btn-view-close').addEventListener('click', () => {
    document.getElementById('modal-view').close();
  });
  document.getElementById('btn-view-edit').addEventListener('click', viewToEdit);

  // Confirm delete
  document.getElementById('btn-confirm-yes').addEventListener('click', executeDelete);
  document.getElementById('btn-confirm-no').addEventListener('click', () => {
    document.getElementById('modal-confirm').close();
    pendingDelete = null;
  });

  // Segment manager
  document.getElementById('segments-close').addEventListener('click', () => {
    document.getElementById('modal-segments').close();
    // Re-render the form if it's open to show updated segments
    if (currentFormContext) {
      const schema = SCHEMAS[currentFormContext.schemaKey];
      const record = currentFormContext.record || {};
      // Collect current form data before re-render
      const currentData = collectFormData(currentFormContext.schemaKey);
      Object.assign(record, currentData);
      renderFormFields(schema, record);
    }
  });
  document.getElementById('btn-segments-done').addEventListener('click', () => {
    document.getElementById('modal-segments').close();
    if (currentFormContext) {
      const schema = SCHEMAS[currentFormContext.schemaKey];
      const record = currentFormContext.record || {};
      const currentData = collectFormData(currentFormContext.schemaKey);
      Object.assign(record, currentData);
      renderFormFields(schema, record);
    }
  });
  document.getElementById('btn-segment-add').addEventListener('click', addSegment);
  document.getElementById('segment-new-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); addSegment(); }
  });

  // Search inputs
  document.querySelectorAll('.search-input').forEach(input => {
    input.addEventListener('input', () => renderCurrentTable());
  });

  // Filter dropdowns
  document.querySelectorAll('.filter-select').forEach(sel => {
    sel.addEventListener('change', () => renderCurrentTable());
  });

  // Timeline jump to today
  document.getElementById('btn-timeline-today')?.addEventListener('click', scrollTimelineToToday);

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('modal-form').close();
      document.getElementById('modal-view').close();
      document.getElementById('modal-confirm').close();
      document.getElementById('modal-segments').close();
    }
  });

  // Unsaved changes warning
  window.addEventListener('beforeunload', e => {
    if (AppState.dirty) {
      e.preventDefault();
      e.returnValue = '';
    }
  });

  // Initialize empty state
  AppState.config = structuredClone(DEFAULT_CONFIG);
  populateFilters();
  renderCurrentTable();
}

document.addEventListener('DOMContentLoaded', init);
