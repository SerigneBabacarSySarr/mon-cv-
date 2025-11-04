:root{
  --primary: #1a4b8c; /* bleu professionnel */
  --bg: #f5f7fa;
  --card: #ffffff;
  --text: #2c3e50;
  --muted: #718096;
  --max-width: 1100px;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  background:var(--bg);
  color:var(--text);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}

.page{max-width:var(--max-width);margin:24px auto;padding:16px}

.page-header{margin-bottom:12px}
.header-inner{display:flex;justify-content:space-between;align-items:center}
.name-block h1{margin:0;font-size:1.6rem}
.muted{color:var(--muted);margin:4px 0 0}

.btn{background:var(--primary);color:#fff;border:none;padding:8px 12px;border-radius:8px;cursor:pointer}
.btn:hover{opacity:0.95}
.btn-ghost{background:transparent;color:var(--primary);border:1px solid var(--primary)}

.cv-container{display:flex;gap:20px;background:var(--card);border-radius:10px;overflow:hidden;box-shadow:0 10px 30px rgba(12,15,20,0.06)}

.sidebar{background:#f8fafb;padding:28px;width:320px}
.profile{display:flex;flex-direction:column;align-items:center;text-align:center}
.photo{width:140px;height:140px;border-radius:50%;object-fit:cover;border:4px solid rgba(11,94,111,0.06)}
.profile-name{margin:12px 0 4px;font-size:1.1rem}
.profile-title{margin:0;color:var(--muted);font-size:0.95rem}

.sidebar h3{margin-top:20px;margin-bottom:8px;color:var(--primary)}
.sidebar p, .sidebar li{color:var(--text);margin:6px 0;font-size:0.95rem}
.sidebar ul{padding-left:16px;margin:6px 0}

.content{padding:28px;flex:1}
.content h2{margin-top:0;color:var(--primary)}
.content section{margin-bottom:18px}

.experience-item, .edu-item, .project-item{margin-bottom:12px}
.meta{color:var(--muted);font-size:0.9rem}

.page-footer{text-align:center;padding:14px;color:var(--muted);font-size:0.9rem}

/* Mode sombre léger */
body.dark-mode{background:#1a202c;color:#ffffff}
body.dark-mode .cv-container{background:#2d3748}
body.dark-mode .sidebar{background:#283141}
body.dark-mode .btn-ghost{color:#90cdf4}
body.dark-mode .content h2,
body.dark-mode .sidebar h3{color:#90cdf4}
body.dark-mode .muted{color:#cbd5e0}
body.dark-mode .sidebar p,
body.dark-mode .sidebar li,
body.dark-mode .content p,
body.dark-mode .content li{color:#e2e8f0}
body.dark-mode .meta{color:#a0aec0}
body.dark-mode .profile-title{color:#a0aec0}

/* Réactivité */
@media (max-width:900px){
  .cv-container{flex-direction:column}
  .sidebar{width:100%}
}

/* Impression (PDF) */
@media print{
  body{background:#fff;color:#000}
  .btn, .btn-ghost{display:none}
  .page{max-width:800px;margin:0}
  .cv-container{box-shadow:none;border-radius:0}
}
