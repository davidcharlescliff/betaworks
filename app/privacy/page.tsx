import LegalPage, { Intro, Section, FooterNote, Strong, MailLink } from '../components/LegalPage'

export const metadata = { title: 'Privacy Policy — Beta Works' }

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <Intro>
        Beta Works is the trading name of David Cliff, a sole trader based at Innovation Centre, Innovation Way, Heslington, York YO10 5DG (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). We are committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      </Intro>

      <Section title="1. Who We Are">
        Beta Works builds simple web tools for small businesses.<br />
        <Strong>Contact:</Strong> <MailLink /><br />
        <Strong>Address:</Strong> Innovation Centre, Innovation Way, Heslington, York YO10 5DG
      </Section>

      <Section title="2. What Data We Collect">
        The Beta Works website is largely static and does not collect personal data through general browsing. If you contact us via our contact form, we collect your name, your email address, and the content of your message.
      </Section>

      <Section title="3. How We Use Your Data">
        We use your contact details solely to respond to your enquiry. We do not add you to any mailing list, share your details with third parties, or use them for any other purpose without your explicit consent.
      </Section>

      <Section title="4. Legal Basis for Processing">
        We process contact form data on the basis of <Strong>legitimate interests</Strong> — specifically, to respond to enquiries directed to us.
      </Section>

      <Section title="5. Data Retention">
        Contact form submissions are retained only as long as necessary to respond to your enquiry and are then deleted. We do not store contact data indefinitely.
      </Section>

      <Section title="6. Third Parties">
        We do not sell, share, or transfer your personal data to any third party. Our website is hosted by Vercel. Please refer to Vercel&apos;s privacy policy at vercel.com/legal/privacy-policy for details of how hosting data is handled.
      </Section>

      <Section title="7. Cookies">
        The Beta Works website uses only essential technical cookies necessary for the site to function. We do not use advertising, tracking, or analytics cookies. No cookie consent banner is required.
      </Section>

      <Section title="8. Your Rights">
        Under UK GDPR you have the right to <Strong>access</Strong> a copy of any data we hold about you, <Strong>rectification</Strong> of inaccurate data, <Strong>erasure</Strong> of your data, and to <Strong>object</Strong> to our processing. To exercise any of these rights, contact us at <MailLink />.
      </Section>

      <Section title="9. Complaints">
        If you are unhappy with how we handle your data, you have the right to complain to the Information Commissioner&apos;s Office (ICO) at ico.org.uk or by calling 0303 123 1113.
      </Section>

      <Section title="10. Changes to This Policy">
        We may update this policy from time to time. The date at the top of this page indicates when it was last updated.
      </Section>

      <FooterNote>
        For any privacy-related questions, contact us at <MailLink />
      </FooterNote>
    </LegalPage>
  )
}
