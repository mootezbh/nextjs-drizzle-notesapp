# NotesApp

A modern, retro-inspired notes and todo app built with Next.js, Tailwind CSS, and Clerk authentication.

---

## ✨ Features

- **Retro Dark UI:** Blue/purple gradient backgrounds, neon glow, and glassmorphism for a nostalgic yet modern look.
- **Authentication:** Secure sign-in/sign-up with Clerk.
- **Todos:** Add, edit, complete, and delete todos.
- **Responsive:** Works great on desktop and mobile.
- **Fast & Simple:** Minimal, focused, and easy to use.

---


## 🚀 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/mootezbh/nextjs-drizzle-notesapp.git
   cd notesapp
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Set up environment:**
   - Copy `.env.example` to `.env.local` and fill in your Clerk and database credentials.
4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. **Open in your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.com/) (Authentication)
- [Drizzle ORM](https://orm.drizzle.team/) (Database)
- [React Icons](https://react-icons.github.io/react-icons/) (UI Icons)

---

## 📦 Project Structure

- `app/` — Next.js app directory (pages, layout, API routes)
- `components/` — UI components (Navbar, Todos, AddTodo, etc.)
- `actions/` — Server actions for todos and users
- `db/` — Database config and schema
- `public/` — Static assets (icons, images)
- `types/` — TypeScript types

---

## 💡 Customization

- **Colors & Theme:** Easily change the retro palette in `app/globals.css`.
- **UI:** All components use Tailwind for rapid styling.
