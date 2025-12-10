# JobSeek

Tech Stack: React, Tailwind, Node.js, Express.js, Supabase, AWS (S3, Lambda, IAM), Gemini

Purpose: Autheniticate and allow users to track companies they are networking with/applying to in a Kanban style dashboard. Users then will have the option to use AI to generate an outreach message unique to each individual company based on company info, person within company (position, name, etc.)

Flow:
1. Authenticate the user
2. Redirect user to their dashboard
3. Display a kanban style board with 4 sections (cold, new, in progress, offer)
4. User can create a new card or edit an existing one
5. In the card modal, user can update or add information about the company, make notes, or ask AI to generate an outreach message
6. User can log out
