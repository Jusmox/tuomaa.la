# Projects Folder Structure

This folder contains all project assets (images, thumbnails, etc.).

## Folder Structure

Each project should have its own folder named after the project `id` (e.g., `project-1`, `project-2`).

```
public/projects/
├── project-1/
│   ├── thumbnail.jpg          # Main thumbnail image (required)
│   └── images/                # Optional: Additional images for gallery
│       ├── screenshot-1.jpg
│       └── screenshot-2.jpg
├── project-2/
│   ├── thumbnail.jpg
│   └── images/
└── ...
```

## Adding a New Project

1. **Create a folder** with the project ID:
   ```
   public/projects/your-project-id/
   ```

2. **Add thumbnail image**:
   - Place it in the project folder: `your-project-id/thumbnail.jpg`
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Recommended size: 1200x600px (aspect ratio 2:1)
   - Name must match `thumbnail` field in the project data

3. **Add gallery images** (optional):
   - Create an `images/` subfolder
   - Add images: `your-project-id/images/screenshot-1.jpg`
   - Reference them in the project data file: `images: ['screenshot-1.jpg', 'screenshot-2.jpg']`

4. **Update project data**:
   - Edit `data/projects.ts`
   - Set `thumbnail: 'thumbnail.jpg'` (or your filename)
   - Set `images: ['image1.jpg', 'image2.jpg']` if you have gallery images

## Example Project Setup

For a project with ID `my-web-app`:

1. Create folder: `public/projects/my-web-app/`
2. Add thumbnail: `public/projects/my-web-app/thumbnail.png`
3. Add gallery: `public/projects/my-web-app/images/homepage.png`, `public/projects/my-web-app/images/dashboard.png`
4. Update `data/projects.ts`:
   ```typescript
   {
     id: 'my-web-app',
     title: 'My Web App',
     thumbnail: 'thumbnail.png',
     images: ['homepage.png', 'dashboard.png'],
     // ... other fields
   }
   ```

## Image Naming

- Use lowercase with hyphens: `my-screenshot.jpg`
- Avoid spaces in filenames
- Keep filenames descriptive but concise


