# Recipe Box

A digital recipe collection app that allows users to store, organize, and manage their personal recipes.

## Features

- **Manual Recipe Entry**: Add recipes with ingredients and step-by-step instructions
- **Recipe Organization**: Categorize recipes by cuisine, meal type, or custom tags
- **Powerful Search**: Find recipes by title, ingredients, or instructions
- **Photo Upload**: Add images to make your recipe collection visually appealing
- **Recipe Sharing**: Share recipes via links or export functionality

## Tech Stack

- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Backend**: Supabase (Authentication, Database, Storage)
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: Supabase Auth

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd recipe-box
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Fill in your Supabase project credentials:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
     ```

4. **Run database migrations**
   - In your Supabase dashboard, go to the SQL editor
   - Run the migration script from `supabase/migrations/001_initial.sql`

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:3000`
   - Create an account and start building your recipe collection!

## Database Schema

The app uses a simple but effective schema:

- **recipes**: Stores recipe information including title, ingredients, instructions, categorization, and metadata
- Row Level Security (RLS) ensures users can only access their own recipes

## Project Structure

```
recipe-box/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # Protected dashboard
│   └── layout.tsx         # Root layout
├── lib/
│   └── supabase/          # Supabase client configuration
├── supabase/
│   └── migrations/        # Database migrations
└── ...
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details