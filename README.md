<div align="center">
  
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>

  <h3 align="center"><strong>Horizon Bank - A Fintech Bank Application</strong></h3>
  
A modern fintech banking application built with Next.js, TypeScript, and Tailwind CSS, featuring secure bank integration through Plaid and ACH transfers via Dwolla.
</div>

## 💡 Inspiration

This was an interesting challenge - building a secure banking application in a week. I chose Appwrite over traditional AWS services here because it provided a faster development cycle while still maintaining security standards. The integration of Dwolla and Plaid APIs was crucial - I wanted to demonstrate I could work with real-world financial APIs. Sentry.io was added for error monitoring because in a banking app, you need to catch and address issues immediately.

## 🌟 Features

- **Secure Authentication**: User registration and login powered by Appwrite
- **Bank Account Integration**: Connect and manage bank accounts using Plaid API
- **ACH Transfers**: Facilitate secure bank transfers through Dwolla's ACH API
- **Real-time Error Monitoring**: Integrated Sentry.io for immediate issue detection and resolution
- **Responsive Design**: Mobile-first interface built with Tailwind CSS
- **Type Safety**: Built with TypeScript for enhanced code reliability

## 🚀 Live Demo

Visit the application at: [https://banking-next-khaki.vercel.app](https://banking-next-khaki.vercel.app)

Test credentials for Plaid sandbox:
- Username: `user_good`
- Password: `pass_good`

## 🛠️ Technical Stack

- **Frontend Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend as a Service**: Appwrite
- **Financial APIs**: 
  - Plaid (Bank account integration)
  - Dwolla (ACH transfers)
- **Monitoring**: Sentry.io
- **Deployment**: Vercel

## 🏗️ Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/horizon-bank.git
cd horizon-bank
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Required environment variables:
```env
NEXT_PUBLIC_APPWRITE_PROJECT_ID=
NEXT_PUBLIC_APPWRITE_ENDPOINT=
PLAID_CLIENT_ID=
PLAID_SECRET=
DWOLLA_API_KEY=
DWOLLA_API_SECRET=
SENTRY_DSN=
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## 🔒 Security Features

- Secure bank account integration through Plaid's OAuth flow
- Encrypted data storage with Appwrite
- Real-time error tracking and monitoring with Sentry.io
- Secure ACH transfers through Dwolla's verified API
- Environment variable protection for sensitive credentials

## 📱 Key Components

- **Auth System**: Complete authentication flow with registration, login, and password reset
- **Bank Integration**: Seamless bank account connection through Plaid Link
- **Transfer System**: ACH transfer capabilities between connected accounts
- **Dashboard**: Real-time account balance and transaction monitoring
- **Profile Management**: User profile and settings management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Appwrite for the robust backend services
- Plaid and Dwolla for their comprehensive financial APIs
- Sentry.io for error tracking capabilities
- The open-source community for their invaluable resources

## 🔗 Contact

Matthew Bixby - [LinkedIn](https://www.linkedin.com/in/matthewbixby/) - matthew.bixby1@gmail.com

Project Link: [https://github.com/yourusername/horizon-bank](https://github.com/yourusername/horizon-bank)
