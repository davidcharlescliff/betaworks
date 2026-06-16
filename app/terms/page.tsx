import LegalPage, { Intro, Section, FooterNote, MailLink } from '../components/LegalPage'

export const metadata = { title: 'Terms of Use — Beta Works' }

export default function TermsOfUse() {
  return (
    <LegalPage title="Terms of Use">
      <Intro>
        These Terms of Use govern your use of the Beta Works website at betaworks.co.uk, operated by David Cliff trading as Beta Works, Innovation Centre, Innovation Way, Heslington, York YO10 5DG (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By using this website you agree to these terms.
      </Intro>

      <Section title="1. About Beta Works">
        Beta Works builds simple web tools for small businesses. This website is an informational site providing details about Beta Works and its products.
      </Section>

      <Section title="2. Use of This Website">
        You may use this website for lawful purposes only. You agree not to use the site in any way that breaches applicable laws or regulations; transmit any unsolicited or unauthorised advertising material; attempt to gain unauthorised access to any part of the site or its infrastructure; or use the site in any way that could damage, disable, or impair it.
      </Section>

      <Section title="3. Intellectual Property">
        All content on this website — including text, logos, graphics and design — is owned by Beta Works or its licensors and is protected by copyright. You may not reproduce or distribute any content without our prior written permission.
      </Section>

      <Section title="4. Contact Form">
        If you submit an enquiry via our contact form, you agree that the information you provide is accurate and that you are authorised to use the email address provided.
      </Section>

      <Section title="5. Links to Third Party Sites">
        Our website may contain links to third party websites. These links are provided for your convenience. We have no control over the content of those sites and accept no responsibility for them.
      </Section>

      <Section title="6. Disclaimer">
        The information on this website is provided in good faith and for general informational purposes only. We make no warranties about the accuracy or completeness of the information provided. To the fullest extent permitted by law, Beta Works and David Cliff shall not be liable for any loss or damage arising from your use of this website.
      </Section>

      <Section title="7. Changes to These Terms">
        We may update these terms from time to time. Continued use of the website after changes constitutes acceptance of the updated terms.
      </Section>

      <Section title="8. Governing Law">
        These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
      </Section>

      <FooterNote>
        For any questions about these terms, please contact us at <MailLink />
      </FooterNote>
    </LegalPage>
  )
}
