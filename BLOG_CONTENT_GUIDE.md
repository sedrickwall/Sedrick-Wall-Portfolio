# Blog Content Management Guide

This guide explains how to add, edit, and manage blog posts on your portfolio website.

## Current System Design

The blog uses a **bundled approach** for reliability on static deployments:
- **Content**: Written in Markdown files, bundled into JavaScript at build time
- **Metadata**: Registered in a TypeScript file for fast loading and type safety

This means adding a new post requires **three simple steps**:
1. Create your markdown content file in `client/src/content/blog/`
2. Import it in `client/src/pages/BlogPost.tsx`
3. Add metadata entry in `content/blog/metadata.ts`

This approach ensures your blog works perfectly on Vercel and other static hosting platforms by bundling the markdown content directly into your JavaScript bundle.

## Adding a New Blog Post

### Step 1: Create the Markdown File

1. Create a new `.md` file in `client/src/content/blog/` directory
2. Use a URL-friendly filename (lowercase, hyphens instead of spaces)
   - Example: `my-new-post.md` (not `My New Post.md`)

### Step 2: Add Frontmatter

At the top of your markdown file, add metadata in YAML format:

```markdown
---
title: "Your Post Title Here"
date: "2025-11-17"
excerpt: "A brief 1-2 sentence summary that appears on the blog listing page."
tags: ["Product Management", "Leadership"]
image: "project1"
author: "Sedrick Wall"
---

# Your Post Title

Your content starts here...
```

**Frontmatter Fields:**
- `title`: The blog post title (appears at top of post)
- `date`: Publication date in YYYY-MM-DD format
- `excerpt`: Short summary (150-200 characters max)
- `tags`: Array of categories (see available tags below)
- `image`: Reference to image file (see image options below)
- `author`: Your name

### Step 3: Write Your Content

After the frontmatter, write your post using Markdown:

```markdown
# Main Heading

Your introduction paragraph here.

## Section Heading

Regular paragraph text with **bold** and *italic* formatting.

### Subsection

- Bullet point 1
- Bullet point 2
- Bullet point 3

1. Numbered item
2. Another item

> This is a blockquote for highlighting important information.

**Links:** [Link text](https://example.com)

**Code blocks:**
\`\`\`javascript
const example = "code here";
console.log(example);
\`\`\`

**Tables:**
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

### Step 4: Register the Post (Important!)

You need to update **two code files**:

#### A. Add import in `client/src/pages/BlogPost.tsx`:

```typescript
// Add this with the other import statements at the top
import myNewPostRaw from "../content/blog/my-new-post.md?raw";

// Then add to the blogPostContent object
const blogPostContent: Record<string, string> = {
  "my-new-post": myNewPostRaw,  // slug: variable name
  // ... existing posts
};
```

#### B. Add metadata in `content/blog/metadata.ts`:

```typescript
export const blogPosts: BlogPostMetadata[] = [
  // Add your new post at the top (most recent first)
  {
    slug: "my-new-post",  // Must match your filename (without .md)
    title: "Your Post Title",
    excerpt: "Your excerpt here...",
    date: "November 17, 2025",  // Formatted nicely
    tags: ["Product Management", "Leadership"],
    image: project1,  // Choose project1, project2, project3, or project4
    author: "Sedrick Wall",
  },
  // ... existing posts below
];
```

## Available Tags

Current tag options (you can add more in `metadata.ts`):
- Product Management
- Real Estate
- Faith
- Community
- Leadership
- Growth
- Investing
- Strategy
- Team Building
- Productivity
- Life Balance
- Business

## Image Options

Available featured images:
- `project1` - Product/tech themed
- `project2` - Real estate themed
- `project3` - Community/people themed
- `project4` - Growth/strategy themed

To add custom images:
1. Add image to `attached_assets/generated_images/`
2. Import in `metadata.ts`: `import myImage from "@assets/generated_images/my-image.png"`
3. Use `image: myImage` in your post metadata

## Markdown Formatting Tips

### Text Formatting
- **Bold**: `**text**`
- *Italic*: `*text*`
- ***Bold + Italic***: `***text***`
- `Code`: `` `code` ``

### Links
- Internal: `[About Me](/)`
- External: `[Google](https://google.com)`

### Images
```markdown
![Alt text](image-url.jpg)
```

### Lists
**Unordered:**
```markdown
- Item 1
- Item 2
  - Nested item
```

**Ordered:**
```markdown
1. First
2. Second
3. Third
```

### Code Blocks

Inline: `` `code here` ``

Block with syntax highlighting:
````markdown
```javascript
function example() {
  return "hello";
}
```
````

Supported languages: javascript, typescript, python, bash, css, html, json, markdown

### Blockquotes
```markdown
> Important quote or callout text
```

### Horizontal Rules
```markdown
---
```
**Note:** Horizontal rules (`---`) work correctly in your blog posts and won't interfere with frontmatter parsing.

### Tables
```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

## Example Complete Post

Here's a complete example:

**File:** `client/public/content/blog/example-post.md`

```markdown
---
title: "How I Built a Successful Product Team"
date: "2025-11-17"
excerpt: "Five key principles that transformed our product organization from chaos to high-performing team."
tags: ["Product Management", "Leadership", "Team Building"]
image: "project1"
author: "Sedrick Wall"
---

# How I Built a Successful Product Team

Two years ago, our product team was struggling. We had the talent, we had the resources, but we couldn't ship.

Here's what changed everything.

## 1. Clear Decision-Making Framework

Instead of endless debates, we created a simple matrix:

| Impact | Confidence | Action |
|--------|-----------|--------|
| High | High | Execute now |
| High | Low | Run experiment |
| Low | High | Delegate |
| Low | Low | Deprioritize |

This eliminated 80% of unnecessary meetings.

## 2. Transparent Communication

We implemented weekly async updates:
- 3 Wins
- 3 Challenges
- 3 Learnings

**Result:** Everyone stayed aligned without status meetings.

> "The best teams communicate constantly without needing to meet constantly."

## 3. Empowerment Over Control

I stopped making every decision. Instead, I:
- Defined clear principles
- Gave teams autonomy
- Held them accountable to outcomes

**Code example of our decision log:**
```javascript
{
  decision: "Add user authentication",
  reasoning: "Customer obsession - users want security",
  owner: "Jane (PM)",
  date: "2025-10-15"
}
```

## The Results

Within 6 months:
- ✅ Shipping velocity up 3x
- ✅ Team satisfaction increased
- ✅ Cross-functional collaboration improved

---

**What frameworks have worked for your team? Share your experiences below.**
```

**Then add to `metadata.ts`:**

```typescript
{
  slug: "example-post",
  title: "How I Built a Successful Product Team",
  excerpt: "Five key principles that transformed our product organization from chaos to high-performing team.",
  date: "November 17, 2025",
  tags: ["Product Management", "Leadership", "Team Building"],
  image: project1,
  author: "Sedrick Wall",
}
```

## Publishing Workflow

1. ✅ Create markdown file in `client/public/content/blog/`
2. ✅ Write content with frontmatter
3. ✅ Add post metadata to `content/blog/metadata.ts` (required - this tells the app about your new post)
4. ✅ Test locally (navigate to `/blog` and click your post)
5. ✅ Deploy to Vercel (changes auto-deploy on git push)

**Note:** While you only edit markdown files for content, you must also add an entry to `metadata.ts` for each new post. This is a simple copy-paste operation that registers your post with the system.

## Editing Existing Posts

To edit an existing post:

1. Find the markdown file in `client/public/content/blog/`
2. Edit the content
3. If you changed the title or excerpt, update `metadata.ts` too
4. Save and deploy

## Deleting a Post

1. Remove the markdown file from `client/public/content/blog/`
2. Remove the entry from `metadata.ts`
3. Save and deploy

## Tips for Great Content

### Hook Readers Early
Start with a compelling story, problem, or surprising fact.

### Use Subheadings
Break up text with descriptive H2 and H3 headings.

### Add Visual Elements
- Tables for comparisons
- Code blocks for examples
- Blockquotes for key takeaways
- Lists for easy scanning

### Keep Paragraphs Short
2-3 sentences max. Mobile readers will thank you.

### End with a Call to Action
- Ask a question
- Invite comments
- Link to related content

## SEO Best Practices

- Use your main keyword in the title
- Include keyword variations in H2 headings
- Write descriptive, compelling excerpts
- Use relevant tags
- Internal linking to other posts (coming soon)

## Troubleshooting

### Post not showing up?
- Check that filename matches slug in `metadata.ts`
- Verify frontmatter is valid YAML (check indentation)
- Make sure file is in `client/public/content/blog/`

### Images not loading?
- Verify image path in frontmatter
- Check that image is imported in `metadata.ts`
- Ensure image file exists in `attached_assets/generated_images/`

### Formatting looks wrong?
- Check markdown syntax
- Ensure code blocks have proper ` ``` ` delimiters
- Verify table syntax (pipes aligned)

## Future Enhancements

Coming soon:
- Related posts suggestions
- Reading time estimates
- Social sharing buttons
- Comments section
- Search functionality
- RSS feed

---

**Questions?** Reach out or check the [Markdown Guide](https://www.markdownguide.org/).
