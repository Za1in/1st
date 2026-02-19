# Deployment Guide for Hostinger

This guide provides step-by-step instructions for deploying your application on Hostinger.

## Prerequisites
- A Hostinger account.
- Domain name (optional, but recommended).
- Basic knowledge of Git and command line.

## Steps to Deploy

### Step 1: Set Up Your Hostinger Account
1. Log in to your Hostinger account.
2. Navigate to the **Hosting** section.
3. Select the hosting plan you want to use (Shared, VPS, etc.).

### Step 2: Create a New Website
1. In your Hostinger dashboard, click on **Website**.
2. Click on the **Create a New Website** button.
3. Follow the prompts to set your domain and site details.

### Step 3: Access the File Manager
1. Go to the **File Manager** in your Hostinger panel.
2. Open the **public_html** directory - this is where your website files will be uploaded.

### Step 4: Upload Your Files
1. You can upload your files directly using the File Manager or via FTP.
2. If using FTP:
   - Use an FTP client like FileZilla.
   - Connect using your Hostinger FTP credentials (found in your Hostinger panel).
   - Upload your project files to the `public_html` directory.

### Step 5: Set Up Your Database (if applicable)
1. In the Hostinger panel, navigate to **Databases**.
2. Create a new MySQL database and user.
3. Update your application configuration files to connect to the new database.

### Step 6: Test Your Application
1. Open your browser and visit your domain or the temporary URL provided by Hostinger.
2. Check if everything is working correctly.

### Step 7: Finalize Configuration
- Make any necessary changes to settings, such as environment variables or permissions.
- Regularly back up your website using Hostinger's backup features.

## Conclusion
Your application should now be successfully deployed on Hostinger. For any issues, refer to the Hostinger support documentation or contact their customer support.