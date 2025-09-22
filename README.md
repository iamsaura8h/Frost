<!-- PRD -->
Tech Stack (Finalized)
Frontend: Next.js + TailwindCSS  
Backend: Node.js + Express  
Database: PostgreSQL + Prisma ORM  
Auth: JWT + Refresh Tokens  
Payments: Stripe  
Deployment: Vercel (frontend), Render (backend), Neon (Postgres)

Core Features (MVP)
- Authentication → Signup/Login with JWT (users + admins).
- Product Management → CRUD for products (admin only).
- Shopping Cart + Checkout → Add to cart, checkout via Stripe.
- Order Tracking → Order history for users.
- Admin Dashboard → View orders, sales summary.

Standout Features (Differentiators)
- AI Product Recommendations (OpenAI API)  
    Example: On a product page → “You may also like…”  
    Keeps it recruiter-catching.
- Real-Time Order Status (Socket.IO)  
    User sees live updates → “Packed → Shipped → Delivered.”
- Analytics Dashboard (Chart.js / Recharts)  
    Admin sees monthly sales, top products, revenue graph.

🛠 Step-by-Step Build Plan  
**Week 1 → Setup & Core Backend**
- Initialize backend with Express + Prisma + Postgres.
- Setup DB schema: Users, Products, Orders.
- Implement JWT auth (signup/login, middleware).
- Test CRUD for Products + Orders.

**Week 2 → Frontend MVP**
- Next.js app with Tailwind.
- Auth pages (login/register).
- Product listing + product detail page.
- Cart functionality (local state → backend sync).

**Week 3 → Payments + Advanced Features**
- Stripe integration (checkout, webhooks for order confirmation).
- AI recommendations (simple OpenAI API call).
- Realtime order tracking with Socket.IO.

**Week 4 → Admin & Polish**
- Admin dashboard with charts (sales, revenue).
- Role-based access (admin vs user).
- Deploy: Frontend → Vercel, Backend → Render, DB → Neon.
- Write a solid README (screenshots, architecture diagram, features list).

📌 Resume Line  
“Built FROST, a full-stack ecommerce platform using Next.js, Node.js, and PostgreSQL with Prisma ORM. Integrated Stripe payments, AI-driven product recommendations, and real-time order tracking with WebSockets. Designed an admin dashboard with sales analytics and deployed via Vercel/Render/Neon.”



<!-- DESIGN -->
🔠 Typography  
Primary Font (Logo + Headings):  
Serif Option: Cormorant Garamond, Playfair Display, or Canela → luxury, timeless feel.  
Sans-Serif Option: Neue Haas Grotesk, Helvetica Now, Söhne → sleek, modern minimalism.  
✅ Pick one — serif for elegance, sans-serif for urban streetwear.

Body Font:  
Inter, Work Sans, or Roboto Flex — clean, readable, neutral.

Styling:  
All caps for logo/headers → bold and iconic.  
Wide letter spacing (tracking) → gives breathing space and premium vibe.

🎨 Color Palette (Minimal + Frost Inspired)  
Think cool neutrals with a touch of icy personality:

Primary:  
Frost White #F9F9F9  
Charcoal Black #111111

Secondary (Accents):  
Frost Gray #E5E5E5  
Deep Slate #2E2E2E

Highlight (Subtle but distinct):  
Ice Blue #B6D0E2 (for hover states, tiny details)  
Silver Mist #C0C0C0 (metallic accent for luxury feel)

![alt text](image.png)

🖥️ Layout & Feel  
Minimal whitespace-heavy design → like Zara.  
Full-width hero images with sharp typography overlay.  
Monochrome product photography with slight blue/cold tint for brand identity.  
No clutter → navigation should be slim, almost invisible.

👉 So your site reads like:  
Logo: FROST (all caps, elegant serif OR modern sans).  
Colors: Black/White base + subtle frosty blue/gray.  
Design: Minimal, premium, urban — every element has breathing room.

Would you like me to mock up 3 ready-to-use color palettes (with hex codes) that match different vibes (luxury, streetwear, or eco-modern) so you can choose the exact mood for Frost?
