# Deployment Guide: Trappers Point

This guide covers deploying the Trappers Point property website to various environments, including DreamHost shared hosting.

---

## Prerequisites

- Node.js 18+ installed locally
- npm or yarn package manager
- Git for version control
- Access to your hosting provider's control panel

---

## Local Development

### Setup
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Server runs on `http://localhost:5000` with hot-reload enabled.

### Environment Variables
Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

**Required Variables:**
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Set to `development` or `production`
- `DATABASE_URL` - PostgreSQL connection string (optional for current in-memory setup)

---

## Production Build

### Build the Application
```bash
npm run build
```

This creates:
- `dist/public/` - React frontend (Vite-bundled)
- `dist/index.js` - Express server

### Test Production Build Locally
```bash
npm run build
npm run start
```

Visit `http://localhost:5000` to verify the production build works.

---

## Deployment to DreamHost

### Option 1: Node.js Shared Hosting (Recommended)

**Prerequisites:**
1. Upgrade DreamHost account to support Node.js
   - Log into DreamHost control panel → Account → Managed WordPress
   - Contact support if Node.js support isn't available

**Steps:**

1. **Push to Git**
   ```bash
   git push origin main
   ```

2. **SSH into DreamHost**
   ```bash
   ssh username@yourdomain.com
   ```

3. **Clone Repository**
   ```bash
   cd public_html
   git clone https://github.com/yourusername/trappers-point.git .
   ```

4. **Install Dependencies**
   ```bash
   npm install --production
   ```

5. **Build Production Bundle**
   ```bash
   npm run build
   ```

6. **Set Environment Variables**
   Create `.env` file in root directory:
   ```bash
   nano .env
   ```
   Add:
   ```
   NODE_ENV=production
   PORT=8080
   ```

7. **Configure Passenger (if available)**
   DreamHost's Passenger will auto-detect Node.js apps. Restart:
   ```bash
   touch tmp/restart.txt
   ```

8. **Verify Deployment**
   Visit `https://yourdomain.com` and test the site

---

### Option 2: VPS or Dedicated Server

If you have shell access and want more control:

1. **SSH into Server**
   ```bash
   ssh user@your-server-ip
   ```

2. **Install Node.js (if not installed)**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone and Setup**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/trappers-point.git
   cd trappers-point
   npm install --production
   npm run build
   ```

4. **Configure as Systemd Service**
   Create `/etc/systemd/system/trappers-point.service`:
   ```ini
   [Unit]
   Description=Trappers Point Website
   After=network.target

   [Service]
   Type=simple
   User=www-data
   WorkingDirectory=/var/www/trappers-point
   EnvironmentFile=/var/www/trappers-point/.env
   ExecStart=/usr/bin/node /var/www/trappers-point/dist/index.js
   Restart=always
   RestartSec=10

   [Install]
   WantedBy=multi-user.target
   ```

5. **Start Service**
   ```bash
   sudo systemctl enable trappers-point
   sudo systemctl start trappers-point
   ```

6. **Setup Nginx Reverse Proxy**
   Create `/etc/nginx/sites-available/trappers-point`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;
       return 301 https://$server_name$request_uri;
   }

   server {
       listen 443 ssl http2;
       server_name yourdomain.com www.yourdomain.com;

       ssl_certificate /path/to/your/cert.pem;
       ssl_certificate_key /path/to/your/key.pem;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable:
   ```bash
   sudo ln -s /etc/nginx/sites-available/trappers-point /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

---

## Troubleshooting

### Port Issues
- If port 5000 is busy: `lsof -i :5000` (macOS/Linux)
- Change PORT in `.env` and restart

### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Vite/React Issues
- Ensure Node.js version matches tsconfig: `node --version`
- Clear browser cache (Ctrl+Shift+Delete)

### Static Assets Not Loading
- Verify `/attached_assets` folder exists in production build
- Check `dist/public` has all files: `ls -la dist/public`

### DreamHost Specific
- Check Node.js version: `node --version`
- View logs: `tail -f error.log`
- Verify Passenger is running: `ps aux | grep passenger`
- Contact DreamHost support if Node.js runtime is unavailable

---

## Database Integration (Future)

Currently, the app uses **in-memory storage**. To enable PostgreSQL:

1. **Provision PostgreSQL** on DreamHost or use managed service (AWS RDS, Neon)

2. **Update `.env`**
   ```
   DATABASE_URL=postgresql://user:password@host:5432/trappers_point
   ```

3. **Run Migrations**
   ```bash
   npm run db:push
   ```

4. **Update `server/storage.ts`** to use database client instead of MemStorage

---

## Performance Tips

1. **Enable Gzip Compression**
   - Nginx/Apache handle automatically with proper configuration

2. **Set Cache Headers**
   - Static assets in `dist/public` should use long cache expiration
   - Add to production headers config

3. **Monitor Logs**
   - Keep error logs checked regularly
   - Set up alerting for 5xx errors

4. **Use CDN** (Optional)
   - CloudFlare offers free tier for static assets
   - Reduces server load

---

## Rollback Plan

If deployment has issues:

```bash
git log --oneline
git checkout <previous-commit-hash>
npm run build
npm run start
# Or restart service: sudo systemctl restart trappers-point
```

---

## Support

For issues specific to:
- **DreamHost**: Contact their support team
- **Node.js**: Check [Node.js documentation](https://nodejs.org/docs/)
- **Express**: See [Express.js docs](https://expressjs.com/)
- **React**: Visit [React docs](https://react.dev/)