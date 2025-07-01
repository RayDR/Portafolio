## `README.md`

# Domoforge Portfolio

**Bilingual Personal Portfolio Website**  
Portafolio Raymundo Dominguez (🇺🇸 English / 🇲🇽 Español)

---

## URL
https://domoforge.com

---

## Tech Stack

- **Frontend**: React + TypeScript + TailwindCSS + Vite
- **Backend**: Node.js + Express + TypeScript
- **Multilingual Support**: i18next (EN / ES)
- **Server**: Ubuntu VPS with NGINX and Certbot (HTTPS)

---

## Sections

- 🕹️ **Home** – Welcome screen styled as a video game
- 👤 **About** – Info about Raymundo Domínguez: Software Developer III, game & finance enthusiast
- 🛠️ **Projects** – Dynamic project cards loaded from backend
- 📬 **Contact** – Personal contact info (phone, email, location)
- 🌐 **Language Selector** – Switch between English and Spanish

---

## Folder Structure

```

/frontend        # React app with modular views
/backend         # Express API serving project data

````

---

## Setup Instructions

### Backend

```bash
cd backend
npm install
npm run dev
````

### Frontend

```bash
cd frontend
npm install
npm run build   # For production
```

---

## NGINX Integration

Frontend served from `/forge/portafolio/frontend/dist`
API proxied from `/api` to backend on port `3001`

---

## Author

**Raymundo Domínguez**
Software Developer III
📧 [raymundo.dominguez@domoforge.com](mailto:raymundo.dominguez@domoforge.com)
🔗 [GitHub](https://github.com/RayDR) | [LinkedIn](https://linkedin.com/in/drdevray)
