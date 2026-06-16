import LegalPage, { Intro, Section, FooterNote, MailLink } from '../components/LegalPage'

export const metadata = { title: 'Cookie Notice — Beta Works' }

export default function CookieNotice() {
  return (
    <LegalPage title="Cookie Notice">
      <Intro>
        This Cookie Notice explains how the Beta Works website uses cookies.
      </Intro>

      <Section title="What Are Cookies?">
        Cookies are small text files placed on your device when you visit a website.
      </Section>

      <Section title="Cookies We Use">
        The Beta Works website is a static informational site. We use only technically essential cookies required for the site to function correctly. We do not use advertising cookies, analytics cookies, tracking cookies, or third party marketing cookies.
      </Section>

      <Section title="No Consent Banner Required">
        Because we only use essential cookies, we are not required to display a cookie consent banner under UK GDPR guidance.
      </Section>

      <Section title="Third Party Cookies">
        Our website is hosted by Vercel, which may set technical cookies for performance and security purposes. These are governed by Vercel&apos;s privacy policy at vercel.com/legal/privacy-policy.
      </Section>

      <Section title="Your Choices">
        You can control cookies through your browser settings. Please note that disabling cookies may affect the functionality of some websites, though it is unlikely to affect your experience on this static site.
      </Section>

      <Section title="Changes to This Notice">
        We may update this Cookie Notice from time to time. The date at the top of this page indicates when it was last updated.
      </Section>

      <FooterNote>
        For any questions about our use of cookies, please contact us at <MailLink /><br />
        Innovation Centre, Innovation Way, Heslington, York YO10 5DG
      </FooterNote>
    </LegalPage>
  )
}
