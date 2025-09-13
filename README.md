<div align="center">
  <img src="Tirshta-removebg-preview.png" alt="Trishta Logo" width="150"/>
  <h1>Trishta</h1>
  <p><strong>Your trusted companion for safe and informed travel throughout Northeast India.</strong></p>
  
  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#project-structure">Project Structure</a> •
    <a href="#contributing">Contributing</a>
  </p>
</div>

---

## 🌟 About The Project

Trishta is a comprehensive web application designed to enhance the safety and travel experience of tourists visiting the beautiful "Seven Sisters" states of Northeast India. It provides essential safety features, detailed information on attractions, and a platform for community interaction, ensuring a secure and memorable journey.

### ✨ Features

- **🗺️ Interactive Safety Map:** View real-time safety information, reported incidents, and safe zones on an interactive map.
- **🚨 Incident Reporting:** Quickly report safety concerns or incidents to alert authorities and fellow travelers.
- **🆔 Digital Tourist ID:** A secure and verifiable digital identification system for tourists.
- **👭 Community Forum:** Connect with other travelers, share experiences, and get local tips.
- **🏞️ State-wise Attractions:** Discover popular tourist spots, cultural sites, and attractions for each state.
- **📱 Responsive Design:** A seamless experience across desktop and mobile devices.

---

## 🛠️ Tech Stack

This project is built with a modern and robust tech stack:

| Category       | Technology                                                                                                                   |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**   | [**React**](https://reactjs.org/), [**Vite**](https://vitejs.dev/), [**TypeScript**](https://www.typescriptlang.org/)        |
| **Styling**    | [**Tailwind CSS**](https://tailwindcss.com/), [**shadcn/ui**](https://ui.shadcn.com/)                                        |
| **Backend**    | [**Node.js**](https://nodejs.org/), [**Express**](https://expressjs.com/), [**TypeScript**](https://www.typescriptlang.org/) |
| **Database**   | _<ins>(Specify your database, e.g., MongoDB, PostgreSQL)</ins>_                                                              |
| **Deployment** | _<ins>(Specify your deployment platform, e.g., Vercel, Netlify, AWS)</ins>_                                                  |

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Shweta311204/Trishta.git
   cd Trishta
   ```

2. **Set up the Backend:**

   ```sh
   cd backend
   npm install
   ```

   Create a `.env` file in the `backend` directory and add your environment variables (e.g., database connection string, JWT secret).

   ```sh
   npm run dev
   ```

3. **Set up the Frontend:**
   ```sh
   cd ../frontend
   npm install
   ```
   Create a `.env.local` file in the `frontend` directory if you need to add environment variables, such as the backend API URL.
   ```sh
   VITE_API_BASE_URL=http://localhost:3000
   ```
   ```sh
   npm run dev
   ```

Your application should now be running! Open your browser and navigate to the local URL provided by Vite.

---

## 📁 Project Structure

The project is organized into two main parts: `frontend` and `backend`.

```
Trishta/
├── backend/
│   ├── src/
│   │   ├── index.ts        # Main server entry point
│   │   └── routes/         # API routes
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── assets/         # Static assets (images, svgs)
    │   ├── components/     # Reusable UI components
    │   ├── pages/          # Application pages
    │   ├── lib/            # Utility functions
    │   ├── App.tsx         # Main App component
    │   └── main.tsx        # Frontend entry point
    ├── public/
    ├── package.json
    └── vite.config.ts
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Made with ❤️ for a safer India</p>
</div>
