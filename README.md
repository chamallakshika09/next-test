# File Upload App

This project is a simple file upload application that allows users to upload files to Vercel's blob storage. It features a single-button file upload mechanism, third-party API integration, and client-side state management to persist the list of uploaded files across page refreshes.

## Features

- File uploads limited to 5MB to Vercel's blob storage.
- Third-party API calls when uploads begin, succeed, or fail.
- Modal alerts for oversized file uploads.
- List of uploaded files with options to download, rename, or delete.
- Skeleton UI displayed while file information is loading.
- Error handling with visual feedback.
- State persistence using the browser's local storage.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version 14 or later recommended)
- npm or yarn

### Installation

To set up the project for development, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/chamallakshika09/next-test
```

2. Navigate to the project directory:

```bash
cd next-test
```

3. Install the dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

The application will be available at http://localhost:3000.

### Deployment

The app is configured for deployment to Vercel. After pushing changes to your repository, follow Vercel's documentation to deploy the application.

### Usage

- Click the choose file button to select and upload a file.
- If the upload is successful, the file will appear in the list below the button.
- Click the pencil icon to rename a file, or the trash icon to delete it.
- The state of the app, including the list of files, will persist across page refreshes due to local storage usage.
