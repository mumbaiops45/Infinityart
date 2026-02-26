

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { WhatsAppButton, EnquiryTrigger } from "../components/Widgets";

export const metadata = {
  title: "Infinity Art PMC Engineering Services",
  description: "Professional Project Management Consultancy for India's Construction Industry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; background: #fff; color: #1a2e44; }
          a { color: inherit; }
          button { font-family: inherit; }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .fade-up { animation: fadeUp 0.6s ease forwards; }
          .fade-in { animation: fadeIn 0.5s ease forwards; }

          /* Page hero shared styles */
          .page-hero {
            padding: 140px 32px 80px;
            background: linear-gradient(150deg, #fff 0%, #e8f0fb 55%, #d6e6f8 100%);
            position: relative;
            overflow: hidden;
          }
          .page-hero::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 3px;
            background: linear-gradient(90deg, #1e4d8c, #4a7ab5, #6a9fd8);
          }
          .page-hero::after {
            content: '';
            position: absolute;
            inset: 0;
            opacity: 0.035;
            background-image: radial-gradient(circle, #1e4d8c 1px, transparent 1px);
            background-size: 32px 32px;
            pointer-events: none;
          }
          .container { max-width: 1240px; margin: 0 auto; padding: 0 32px; }
          .section { padding: 88px 32px; }
          .section-alt { padding: 88px 32px; background: #f0f5fb; }
          .section-label {
            display: inline-block;
            background: #e8f0fb; color: #1e4d8c;
            font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
            text-transform: uppercase; padding: 5px 14px; border-radius: 20px;
            margin-bottom: 12px;
          }
          .section-title {
            font-size: clamp(26px, 3.5vw, 40px);
            font-weight: 700; letter-spacing: -0.02em;
            line-height: 1.2; margin-bottom: 14px;
          }
          .section-title .blue { color: #1e4d8c; }
          .para { font-size: 15px; color: #5a7590; line-height: 1.75; }
          .btn-primary {
            background: #1e4d8c; border: none; color: #fff;
            font-size: 13px; font-weight: 600; padding: 12px 26px;
            border-radius: 8px; cursor: pointer; font-family: inherit;
            text-decoration: none; display: inline-block;
            transition: background 0.2s;
          }
          .btn-primary:hover { background: #163d70; }
          .btn-outline {
            background: transparent; border: 2px solid #1e4d8c; color: #1e4d8c;
            font-size: 13px; font-weight: 600; padding: 10px 22px;
            border-radius: 8px; cursor: pointer; font-family: inherit;
            text-decoration: none; display: inline-block;
          }
          .card {
            background: #fff; border: 1px solid #dce8f5;
            border-radius: 10px; padding: 28px;
            box-shadow: 0 2px 12px rgba(30,77,140,0.06);
          }

          @media (max-width: 900px) {
            .section, .section-alt { padding: 64px 24px; }
            .page-hero { padding: 120px 24px 60px; }
            .container { padding: 0 24px; }
          }
          @media (max-width: 600px) {
            .section, .section-alt { padding: 48px 20px; }
          }
        `}</style>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <EnquiryTrigger />
      </body>
    </html>
  );
}
